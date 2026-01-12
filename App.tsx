
import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES, INVENTORS, ITEMS } from './constants';
import { Inventor, CalculationResult } from './types';

const STORAGE_KEY = 'so3_calc_v3';
// Logic for getting the 11 possible price ticks (Base Cost * (Modifier + 95% to 105%))
const getTicks = (base: number, costMod: number) => 
  Array.from({ length: 11 }, (_, i) => Math.round(base * ((costMod + 100 + (i - 5)) / 100)));

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(() => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').cat || 0);
  const [selectedInventorIds, setSelectedInventorIds] = useState<number[]>(() => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').invs || []);
  const [hasSpecialItem, setHasSpecialItem] = useState<boolean>(() => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').spec || false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(() => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').item || null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ cat: selectedCategoryId, invs: selectedInventorIds, spec: hasSpecialItem, item: selectedItemId }));
  }, [selectedCategoryId, selectedInventorIds, hasSpecialItem, selectedItemId]);

  const selectedCategory = CATEGORIES[selectedCategoryId];
  const availableInventors = useMemo(() => INVENTORS.filter(inv => inv.skills[selectedCategoryId] > 0), [selectedCategoryId]);
  const team = useMemo(() => selectedInventorIds.map(id => INVENTORS.find(i => i.id === id)).filter((v): v is Inventor => !!v), [selectedInventorIds]);

  const stats = useMemo<CalculationResult>(() => {
    let skill = team.reduce((acc, inv) => acc + inv.skills[selectedCategoryId], hasSpecialItem ? 20 : 0);
    const costMod = team.reduce((acc, inv) => acc + inv.costMod, 0);
    const item = selectedItemId !== null ? ITEMS[selectedItemId] : null;
    return { 
      totalSkill: skill, totalTimeMod: 0, totalCostMod: costMod, 
      probability: item ? (skill - item.difficulty) : 0, 
      baseCost: item ? Math.round(item.baseCost * ((costMod + 100) / 100)) : 0 
    };
  }, [team, selectedCategoryId, hasSpecialItem, selectedItemId]);

  const suggestions = useMemo(() => {
    if (selectedItemId === null) return [];
    
    return availableInventors
      .filter(inv => !selectedInventorIds.includes(inv.id))
      .map(inv => {
        const invSkill = inv.skills[selectedCategoryId];
        let skillBoost = 0;
        let costImpact = inv.costMod;

        if (selectedInventorIds.length < 3) {
          skillBoost = invSkill;
        } else {
          const lowestSkill = Math.min(...team.map(t => t.skills[selectedCategoryId]));
          skillBoost = invSkill - lowestSkill;
        }

        // Scoring: Skill is primary, but heavy cost reduction is a significant secondary weight
        // A -30% cost reduction is valued similarly to a +15 skill boost
        const score = skillBoost + (Math.abs(Math.min(0, costImpact)) / 2);

        return { inv, boost: skillBoost, cost: inv.costMod, score };
      })
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [selectedItemId, selectedCategoryId, selectedInventorIds, availableInventors, team]);

  const optimize = (newId: number) => {
    setSelectedInventorIds(prev => {
      if (prev.length < 3) return [...prev, newId];
      const lowest = team.reduce((l, c) => c.skills[selectedCategoryId] < l.skills[selectedCategoryId] ? c : l, team[0]);
      return prev.map(id => id === lowest.id ? newId : id);
    });
  };

  const targetTicks = useMemo(() => {
    if (selectedItemId === null) return [];
    return getTicks(ITEMS[selectedItemId].baseCost, stats.totalCostMod);
  }, [selectedItemId, stats.totalCostMod]);

  const overlaps = useMemo(() => {
    if (selectedItemId === null || targetTicks.length === 0) return [];
    
    return ITEMS.filter(item => 
      item.categoryId === selectedCategoryId && 
      item.id !== selectedItemId && 
      item.allowedInventors.some(ai => selectedInventorIds.includes(ai))
    )
    .map(item => {
      const itemTicks = getTicks(item.baseCost, stats.totalCostMod);
      const collidingValues = itemTicks.filter(tick => targetTicks.includes(tick));
      
      if (collidingValues.length > 0) {
        return {
          item,
          isIdentical: item.baseCost === ITEMS[selectedItemId!].baseCost,
          collidingValues
        };
      }
      return null;
    })
    .filter((o): o is NonNullable<typeof o> => !!o);
  }, [selectedItemId, stats.totalCostMod, selectedCategoryId, selectedInventorIds, targetTicks]);

  return (
    <div className="max-w-5xl mx-auto p-2 sm:p-4 text-slate-300 text-xs selection:bg-blue-500/30 no-scrollbar">
      <header className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <h1 className="font-black text-white text-base tracking-tighter flex items-center gap-2">
          <div className="w-2.5 h-6 bg-blue-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.6)]" /> SO3 <span className="text-slate-500">LAB</span>
        </h1>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar max-w-full">
          {CATEGORIES.map(c => (
            <button key={c.id} onClick={() => { setSelectedCategoryId(c.id); setSelectedInventorIds([]); setSelectedItemId(null); }} 
              className={`px-5 py-2.5 rounded-md text-[11px] font-black uppercase tracking-wider transition-all min-w-[80px] ${selectedCategoryId === c.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
              {c.name.slice(0, 4)}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* LEFT: INVENTORS */}
        <div className="md:col-span-4 space-y-3">
          <div className="bg-slate-900/50 rounded-lg border border-slate-800 p-2">
            <div className="flex justify-between items-center mb-2 px-1 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
              <span>Registry</span>
              <span className="text-blue-500 font-mono">{selectedInventorIds.length}/3</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 max-h-[450px] overflow-y-auto pr-1 no-scrollbar">
              {availableInventors.map(inv => {
                const active = selectedInventorIds.includes(inv.id);
                return (
                  <button key={inv.id} onClick={() => setSelectedInventorIds(prev => active ? prev.filter(i => i !== inv.id) : (prev.length < 3 ? [...prev, inv.id] : prev))}
                    className={`text-left p-2 rounded-md border transition-all ${active ? 'bg-blue-600/20 border-blue-500/40' : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800'}`}>
                    <div className={`truncate font-bold ${active ? 'text-blue-300' : 'text-slate-300'}`}>{inv.name}</div>
                    <div className="flex justify-between text-[9px] opacity-60 font-mono">
                      <span>S:{inv.skills[selectedCategoryId]}</span>
                      <span className={inv.costMod < 0 ? 'text-emerald-400 font-bold' : ''}>{inv.costMod}%</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <label className="mt-3 flex items-center gap-3 p-3 hover:bg-slate-800/50 rounded-md cursor-pointer transition-colors border border-transparent hover:border-slate-700">
              <input type="checkbox" checked={hasSpecialItem} onChange={e => setHasSpecialItem(e.target.checked)} className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0" />
              <span className="text-[10px] font-bold text-slate-400 truncate uppercase tracking-tighter">{selectedCategory.specialItem} (+20)</span>
            </label>
          </div>
        </div>

        {/* CENTER: STATS & ITEMS */}
        <div className="md:col-span-4 space-y-3">
          <div className="bg-slate-900/50 rounded-lg border border-slate-800 p-3">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-slate-800/40 rounded-md border border-slate-700/30 text-center">
                <div className="text-[10px] uppercase text-slate-500 font-black mb-1">Total Skill</div>
                <div className="text-base font-black text-blue-400">{stats.totalSkill}</div>
              </div>
              <div className="p-3 bg-slate-800/40 rounded-md border border-slate-700/30 text-center">
                <div className="text-[10px] uppercase text-slate-500 font-black mb-1">Cost Mod</div>
                <div className={`text-base font-black ${stats.totalCostMod <= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{stats.totalCostMod}%</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {team.map(inv => (
                <div key={inv.id} className="flex items-center gap-3">
                  <div className="w-20 truncate text-[10px] text-slate-400 font-bold">{inv.name}</div>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)] transition-all duration-500" style={{ width: `${(inv.skills[selectedCategoryId] / Math.max(stats.totalSkill, 1)) * 100}%` }} />
                  </div>
                  <div className="text-[10px] font-mono text-blue-400 w-5 text-right font-bold">{inv.skills[selectedCategoryId]}</div>
                </div>
              ))}
            </div>
            <select className="w-full bg-slate-950 border border-slate-700 rounded-md p-3 outline-none font-black text-slate-200 disabled:opacity-30 text-[11px] uppercase tracking-tighter cursor-pointer" 
              value={selectedItemId || ''} disabled={!selectedInventorIds.length} onChange={e => setSelectedItemId(e.target.value ? +e.target.value : null)}>
              <option value="">Select Target Item...</option>
              {ITEMS.filter(i => i.categoryId === selectedCategoryId && i.allowedInventors.some(ai => selectedInventorIds.includes(ai))).map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
            </select>
          </div>

          {suggestions.length > 0 && (
            <div className="bg-blue-600/5 rounded-lg border border-blue-500/20 p-3 animate-in slide-in-from-bottom-2">
              <div className="text-[10px] font-black uppercase text-blue-400/80 mb-2.5 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Optimal Swaps
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map(s => (
                  <button key={s.inv.id} onClick={() => optimize(s.inv.id)} className="flex items-center gap-2 px-3 py-2 bg-slate-900/80 border border-slate-700 rounded-md hover:border-blue-500 transition-all group">
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-slate-200 group-hover:text-blue-300 transition-colors">{s.inv.name}</span>
                      <div className="flex gap-1.5 mt-0.5">
                         <span className={`text-[9px] font-black ${s.boost >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{s.boost >= 0 ? '+' : ''}{s.boost}S</span>
                         <span className={`text-[9px] font-black ${s.cost <= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{s.cost > 0 ? '+' : ''}{s.cost}%C</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: CALIBRATION */}
        <div className="md:col-span-4 space-y-3">
          {selectedItemId !== null ? (
            <div className="bg-slate-900/50 rounded-lg border border-slate-800 p-3 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex justify-between items-center mb-3 px-1">
                <span className="font-black uppercase text-slate-500 tracking-tighter">Target Calibration</span>
                <div className={`px-3 py-1 rounded-full font-black text-[10px] ${stats.probability >= 50 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {Math.max(0, stats.probability)}% SUCCESS
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4 no-scrollbar">
                {targetTicks.map((val, i) => {
                  const itemsCollidingWithThisPrice = overlaps.filter(o => o.collidingValues.includes(val));
                  const hasCollision = itemsCollidingWithThisPrice.length > 0;
                  return (
                    <div key={i} className={`p-2.5 rounded-md border font-mono flex justify-between items-center group relative ${hasCollision ? 'bg-rose-950/20 border-rose-500/40 text-rose-300 shadow-[inset_0_0_5px_rgba(244,63,94,0.1)]' : 'bg-slate-950 border-slate-800/50 text-blue-300'}`}>
                      <span className="text-[11px] font-bold">{val}</span>
                      {hasCollision && (
                        <div className="flex items-center gap-1">
                          <span className="text-[8px] font-black bg-rose-500 text-white px-1 rounded-sm uppercase tracking-tighter">{itemsCollidingWithThisPrice.length}</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_6px_rgba(244,63,94,1)]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {overlaps.length > 0 && (
                <div className="border-t border-slate-800 pt-4 space-y-3">
                  <div className="text-[10px] font-black uppercase text-rose-400/80 flex items-center gap-2">
                    <div className="w-2 h-4 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)]" /> Confirmed Collisions
                  </div>
                  <div className="grid gap-2">
                    {overlaps.map(o => (
                      <div key={o.item.id} className="text-[10px] bg-slate-950/50 p-3 rounded-md border border-slate-800/50 flex flex-col gap-1 group/coll">
                        <div className="flex justify-between items-start">
                          <span className="font-black text-slate-200 group-hover/coll:text-white transition-colors uppercase tracking-tight truncate pr-2">{o.item.name}</span>
                          <span className="text-slate-600 font-mono italic text-[9px] shrink-0 font-bold">BASE:{o.item.baseCost}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <span className="text-slate-500 text-[9px] font-bold uppercase tracking-tighter mr-1">Colliding Costs:</span>
                          {o.collidingValues.map(v => (
                            <span key={v} className="px-1.5 py-0.5 bg-rose-500/10 text-rose-400 rounded-sm font-mono font-bold border border-rose-500/20">{v}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-48 bg-slate-900/20 rounded-lg border border-dashed border-slate-800 flex items-center justify-center text-slate-600 font-black uppercase tracking-widest text-center px-6">
              Select an item to view price calibration
            </div>
          )}
        </div>
      </div>
      
      <footer className="mt-8 pt-4 border-t border-slate-800/50 flex justify-between text-[9px] text-slate-700 font-black uppercase tracking-widest">
        <span>Star Ocean 3</span>
        <span>IC-LAB DASHBOARD V3.3</span>
      </footer>
    </div>
  );
};

export default App;
