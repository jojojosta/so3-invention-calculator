
export interface Category {
  id: number;
  name: string;
  specialItem: string;
}

export interface Inventor {
  id: number;
  name: string;
  timeMod: number;
  costMod: number;
  skills: number[]; // Skills index matches category ID
}

export interface Item {
  id: number;
  name: string;
  categoryId: number;
  baseCost: number;
  difficulty: number;
  allowedInventors: number[];
}

export interface CalculationResult {
  totalSkill: number;
  totalTimeMod: number;
  totalCostMod: number;
  probability: number;
  baseCost: number;
}
