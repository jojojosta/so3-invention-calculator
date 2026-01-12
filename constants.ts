
import { Category, Inventor, Item } from './types';

export const CATEGORIES: Category[] = [
  { id: 0, name: 'Alchemy', specialItem: "Alchemist's Stone" },
  { id: 1, name: 'Engineering', specialItem: 'NC Program Disk' },
  { id: 2, name: 'Compounding', specialItem: 'Multi-Flask' },
  { id: 3, name: 'Cooking', specialItem: 'Keen Kitchen Knife' },
  { id: 4, name: 'Crafting', specialItem: 'Cherubic Bust' },
  { id: 5, name: 'Smithery', specialItem: 'Smithy Hammer' },
  { id: 6, name: 'Writing', specialItem: 'Enchanted Pen' }
];

export const INVENTORS: Inventor[] = [
  { id: 0, name: 'Adray', timeMod: -25, costMod: 30, skills: [4, 7, 5, 20, 3, 27, 11] },
  { id: 1, name: 'Albel', timeMod: 0, costMod: 5, skills: [15, 16, 16, 16, 12, 30, 4] },
  { id: 2, name: 'Ansala', timeMod: -20, costMod: 0, skills: [99, 0, 0, 0, 0, 0, 0] },
  { id: 3, name: 'Aqua & Evia', timeMod: 0, costMod: 10, skills: [0, 0, 0, 0, 49, 0, 0] },
  { id: 4, name: 'Balbados', timeMod: -40, costMod: 50, skills: [0, 0, 0, 0, 37, 0, 0] },
  { id: 5, name: 'Boyd', timeMod: 50, costMod: 0, skills: [0, 0, 0, 0, 0, 95, 0] },
  { id: 6, name: 'Chilico', timeMod: 60, costMod: -10, skills: [0, 0, 0, 0, 60, 0, 0] },
  { id: 7, name: 'Cliff', timeMod: 5, costMod: 0, skills: [5, 36, 10, 9, 2, 31, 7] },
  { id: 8, name: 'Cornelius', timeMod: -40, costMod: 0, skills: [0, 0, 0, 0, 0, 0, 15] },
  { id: 9, name: 'Count Noppen', timeMod: 0, costMod: 40, skills: [0, 0, 0, 0, 0, 0, 44] },
  { id: 10, name: 'Damda Mooda', timeMod: 0, costMod: 10, skills: [0, 0, 0, 9, 0, 0, 0] },
  { id: 11, name: 'Dejison', timeMod: -20, costMod: 40, skills: [0, 6, 0, 0, 0, 0, 0] },
  { id: 12, name: 'Eliza', timeMod: -30, costMod: 0, skills: [4, 0, 0, 0, 0, 0, 0] },
  { id: 13, name: 'Fayt', timeMod: 0, costMod: 0, skills: [14, 25, 30, 16, 20, 29, 34] },
  { id: 14, name: 'Gossam', timeMod: 0, costMod: 20, skills: [0, 0, 9, 0, 0, 0, 0] },
  { id: 15, name: 'Grats', timeMod: 0, costMod: 0, skills: [0, 0, 0, 0, 0, 25, 0] },
  { id: 16, name: 'Gusto', timeMod: -20, costMod: 0, skills: [0, 0, 0, 0, 0, 60, 0] },
  { id: 17, name: 'Izak', timeMod: -50, costMod: 0, skills: [0, 65, 0, 0, 0, 0, 0] },
  { id: 18, name: 'Lias', timeMod: 0, costMod: 20, skills: [0, 0, 0, 0, 0, 36, 0] },
  { id: 19, name: 'Louise the Diviner', timeMod: 30, costMod: 0, skills: [0, 0, 98, 0, 0, 0, 0] },
  { id: 20, name: 'Mackwell', timeMod: 40, costMod: 0, skills: [31, 0, 0, 0, 0, 0, 0] },
  { id: 21, name: 'Maria', timeMod: 0, costMod: -10, skills: [22, 20, 25, 19, 10, 4, 22] },
  { id: 22, name: 'Mayu', timeMod: 0, costMod: -30, skills: [0, 0, 0, 20, 0, 0, 0] },
  { id: 23, name: 'Meryl', timeMod: 30, costMod: 0, skills: [0, 46, 0, 0, 0, 0, 0] },
  { id: 24, name: 'Milenya', timeMod: 0, costMod: -20, skills: [0, 0, 19, 0, 0, 0, 0] },
  { id: 25, name: 'Mirage', timeMod: -5, costMod: -5, skills: [18, 31, 27, 26, 30, 17, 16] },
  { id: 26, name: 'Mishell', timeMod: 0, costMod: 10, skills: [0, 0, 0, 0, 0, 0, 35] },
  { id: 27, name: 'Misty Lear', timeMod: 0, costMod: 0, skills: [50, 0, 0, 0, 0, 0, 0] },
  { id: 28, name: 'Nel', timeMod: -5, costMod: 0, skills: [20, 5, 10, 30, 15, 25, 14] },
  { id: 29, name: 'Osman the Sage', timeMod: 40, costMod: 0, skills: [0, 0, 0, 0, 0, 0, 73] },
  { id: 30, name: 'Peppita', timeMod: -10, costMod: 10, skills: [12, 15, 11, 6, 40, 5, 6] },
  { id: 31, name: 'Puffy', timeMod: -40, costMod: 0, skills: [0, 0, 57, 0, 0, 0, 0] },
  { id: 32, name: 'Rigel', timeMod: 40, costMod: 0, skills: [0, 0, 0, 57, 0, 0, 0] },
  { id: 33, name: 'Roger', timeMod: 5, costMod: 0, skills: [6, 20, 6, 2, 35, 23, 4] },
  { id: 34, name: 'Sophia', timeMod: 0, costMod: -5, skills: [36, 3, 15, 43, 33, 6, 15] },
  { id: 35, name: 'Stanice', timeMod: -30, costMod: -20, skills: [0, 0, 0, 0, 20, 0, 0] },
  { id: 36, name: 'The Killer Chef', timeMod: -30, costMod: 0, skills: [0, 0, 0, 98, 0, 0, 0] },
  { id: 37, name: 'Vanilla', timeMod: 0, costMod: 30, skills: [0, 32, 0, 0, 0, 0, 0] }
];

// Mapping raw IDs from the source dx array
const DX_MAP = [
  // Alchemy Groups
  [13,34,7,21,28,1,30,33,25,0,12,20,27,2], [30,12], [13,7,28,1,30,0,12,20,27], [12,2], [13,7,28,1,30,33,0,12,20,27], 
  [13,34,21,28,25,0,20,27,2], [13,34,21,28,25,0,12,20,27], [13,30,25,27,2], [13,34,21,28,30,25,0,12,20,27], 
  [13,34,21,28,25,20,27,2], [13,34,21,28,1,30,25,0,12,20,27], [13,30,27,2], [13,34,21,28,20,27,2], [2], 
  [13,7,28,1,30,33,12,20,27],
  // Engineering Groups
  [13,34,7,21,28,1,30,33,25,0,11,37,23,17], [13,7,21,33,25,11,37,23,17], [13,7,21,28,1,30,33,25,0,11,37,23,17], 
  [13,7,21,28,1,33,25,0,11,37,23,17], [37,23], [13,7,21,33,11,37,23,17], [13,7,33,25,37,23], [13,7,21,33,37,17], 
  [13,7,21,33,25,37,23,17], [13,7,21,33,25,0,37,23,17], [34,7,21,37,23], [21,23,17], [13,7,28,1,33,0,11,37], 
  [13,7,33,11,37,23,17], [30,23], [13,34,7,21,28,1,30,33,25,11,37,17], [23,17], [13,34,7,21,30,33,25,37,23,17], 
  [13,7,21,30,33,25,37,23,17],
  // Compounding Groups
  [7,1,30,33,31], [34,28,33,25,24,19], [31], [13,30,14], [34,7,28,1,33,25,24,19], [13,34,28,30,33,25,14,24,31,19], 
  [13,30,14,31], [34,28,33,25,0,24,19], [13,30,14,24], [13,7,21,1,30,14,31,19], [13,34,7,21,28,1,30,33,25,0,14,24,31,19], 
  [34,7,28,1,33,25,0,24,19], [13,34,7,21,28,1,30,33,25,0,14,24,31], [31,19], [34,7,21,28,1,25,19], [7,21,28,1,33,24,31,19], 
  [13,34,7,21,28,1,30,33,14,24,31,19],
  // Cooking Groups
  [13,34,7,21,28,1,30,33,25,0,10,22,32,36], [21,1,32], [13,21,28,25,22], [25,32], [28,25,10,22], 
  [13,7,21,28,30,33,25,0,10,22], [32], [13,28,22], [7,33,10], [34,36], [13,34,7,21,28,1,25,0], [13,28,0,22], 
  [13,21,28,25,0,22], [34], [13,28,25,22], [7,30,33,0,10], [0], [21,32], [13,34,28,30,33,10,22,36], 
  [13,34,7,21,28,1,30,33,25,0,10,22,32], [7,33,0,10], [7,21,1,30,33,0,10,32], [10], [32,36], [7,30,33,10], 
  [7,30,33,0,10,36], [36], [7,28,33,32,36], [10,22], [10,22,36], [30,32], [7,25,10], [30,25,32], [7,33,25,10],
  // Crafting Groups
  [1,30,33,25,0], [13,34,7,21,28,1,30,33,25,0,35,4,3], [13,34,7,21,28,1,30,33,25,0,35,4,3,6], 
  [13,34,7,21,28,35,4,3,6], [13,34,7,21,28,35,4,3], [13,7,28,33,0,35], [13,28,1,25,35], [6], [3], 
  [13,7,28,33,35], [34,21,4,3], [13,34,21,28,1,30,25,35,4,3,6], [13,28,1,25,35,6], [34,21,4], [34,21,30,4,3], 
  [13,7,28,1,33,25,0,35], [13,34,7,21,28,1,33,25,0,35,4,3], [3,6], [13,7,28,30,35,4,3,6], [34,30,3], 
  [13,34,21,28,1,30,25,35,4,3],
  // Smithery Groups
  [13,34,7,21,28,1,30,33,25,0,15,18,16], [13,34,7,21,28,1,30,33,25,0,15,18,16,5], [34,30,15], [21,28,1,25,0,15], 
  [34,16], [13,7,33,15], [28,15], [13,15,18], [33,15,18], [13,7,33,5], [34,30,18], [1,0,16,5], [21,28,1,25,0,18], 
  [16,5], [13,7,33,18], [1,18], [34,30,5], [21,28,1,25,0,5], [30,16], [1,16,5], [0,16,5], [28,15,18], [28,16,5], 
  [30,5], [7,25,16,5], [13,7,33,25,16], [5], [0], [34,5], [21,28,1,25,0,16], [34,30,16], [7,25,15,18], [33,16,5], 
  [33,16], [13,21,28,1,25,0,16],
  // Writing Groups
  [13,34,7,21,28,1,30,33,25,0,8,26,9], [13,34,7,21,28,1,30,33,25,0,8,26,9,29], [13,34,7,21,28,1,30,33,0,8,26,9,29], 
  [13,34,7,21,28,1,33,0,8,26,9,29], [34,21,25,29], [13,34,7,28,1,30,33,8,26,9], [13,34,7,21,28,1,33,25,0,8,26,9,29], 
  [13,7,28,1,33,8,26], [13,28,0,26,9], [13,34,7,21,28,1,33,25,8,26,9,29], [7,1,33,8,9], [29], [34,21,25,0,29], [8,9]
];

// Raw source data re-mapped for items
const RAW_ITEMS = [
  // Alchemy
  ["Repulsive Lump",0,1,9,0],["Philosopher's Stone",0,100,12,1],["Overweight Product",0,1,17,0],["Strange Lump",0,1,18,0],["Misconceived Product",0,1,30,0],["Iron",0,15,50,2],["Ruby",0,25,160,2],["Sapphire",0,25,160,2],["Stone of Evil",0,2,200,3],["Emerald",0,25,200,4],["Air Gem",0,40,350,5],["Earth Gem",0,40,350,5],["Fire Gem",0,40,350,5],["Water Gem",0,40,350,5],["Crystal",0,60,830,6],["Brownie Stone",0,70,1050,7],["Diamond",0,60,1290,8],["Earth Homunculus",0,80,1300,9],["Damask",0,60,1440,10],["Nereid Stone",0,70,1550,7],["Sylph Stone",0,70,1550,11],["Water Homunculus",0,80,1800,9],["Wind Homunculus",0,80,1800,12],["Shell Sapphire",0,90,2300,13],["Salamander Stone",0,70,2550,7],["Star Ruby",0,80,2700,13],["Fire Homunculus",0,80,2800,12],["Mythril",0,90,3070,13],["Rainbow Diamond",0,95,3080,13],["Dark Crystal",0,95,3700,13],["Angel Stone",0,70,5050,7],["Orichalcum",0,98,5700,14],["Celestial Homunculus",0,80,10300,11],
  // Engineering
  ["Repulsive Lump",1,1,9,15],["Overwrought Product",1,1,17,15],["Strange Lump",1,1,18,15],["Misconceived Product",1,1,30,15],["Reducer",1,30,31,16],["Duck-Duck Bomb",1,15,35,17],["Em Bomb",1,30,61,18],["Em Bomb Mp",1,30,61,18],["Shielding Device",1,70,61,19],["Flare Bomb",1,10,65,17],["Mind Bomb",1,15,65,18],["Em Stun Bomb",1,50,91,18],["Em Stun Bomb Mp",1,50,91,20],["Berserker Device",1,60,101,21],["Soul Strengthening Device",1,60,101,21],["Mass Reducer",1,60,161,16],["Ultimate Bomb",1,80,180,22],["Em Explosive 2",1,40,181,23],["Em Explosive Mp",1,40,181,23],["Mega-Flare Bomb",1,70,185,24],["Deadly Mind Bomb",1,90,185,23],["Healing Device Mk1",1,50,201,25],["Em Stun Explosive",1,60,211,26],["Em Stun Explosive Mp",1,60,211,26],["ES Hybrid Bomb",1,70,231,23],["Tricky Bomb",1,1,260,27],["Battle Sphere",1,50,301,28],["Tricky Duck Bomb",1,1,380,27],["Healing Device Mk2",1,70,401,29],["Es Hybrid Explosive",1,80,431,24],["Power Blaster",1,30,580,30],["Healing Device Mk3",1,100,801,31],["Beguiling Device",1,80,1001,19],["Pulse Needle",1,50,1280,32],["Hawk Wind",1,20,1740,30],["Photonic Blaster",1,70,5950,33],["Paralyzer",1,90,6000,26],["Particle Laser",1,100,7440,26],
  // Compounding
  ["Potion of Youth (Fake)",2,65,5,34],["Bitter Potion",2,1,12,35],["Bubbling Potion",2,1,12,36],["Malodorous Potion",2,1,12,37],["Thick Potion",2,1,12,36],["Fruity Potion",2,20,13,35],["Endorphin Boost",2,1,18,37],["Syrupy Potion",2,40,20,38],["Antidote",2,20,21,39],["Berry Potion",2,20,21,39],["Aqua Potion",2,20,22,39],["Tears of Aphrodite",2,1,26,37],["Pheramone Enhancer",2,1,36,37],["Sleeping Gas",2,10,40,36],["Vial of Poison",2,10,40,40],["Sweet Potion",2,20,40,41],["Tears of Venus",2,1,56,42],["Medicine Bottle",2,5,60,41],["Neural Augmenter",2,1,61,37],["Shielding Device",2,70,61,36],["Tears of Ishtar",2,1,86,37],["Might Tablets",2,4,90,43],["Berserker Device",2,60,101,36],["Soul Strengthening Device",2,60,101,36],["Miracle Power",2,1,102,44],["Faerie Elixir",2,80,110,45],["Heroic Elixir",2,80,110,45],["Molotov Stun Bomb-R1",2,40,121,36],["Umai-bo Stun Bomb-R3",2,40,121,36],["Resurrection Elixir",2,2,140,45],["Fizzing Potion",2,1,152,46],["Deadly Poison",2,50,160,47],["Bubbly Potion",2,1,202,44],["Resurrection Mist",2,10,210,48],["Witch Tablets",2,70,210,49],["Super Potion",2,1,302,44],["Verdurous Potion",2,90,310,41],["Liquid Flare Bomb",2,30,601,36],["Liquid Mind Bomb",2,30,601,36],["Durian Stun Bomb-R4",2,40,731,36],["Grabbag Stun Bomb-R2",2,40,731,36],["Liquid Hybrid Bomb",2,90,801,36],["Beguiling Device",2,80,1001,36],["Cinderella Tablets",2,99,1001,50],["Roe Tablets",2,99,3060,37],
  // Cooking
  ["Discordant Dessert",3,1,6,51],["Vanilla Ice Cream",3,20,15,52],["Tuna Salad",3,25,15,53],["Sachertorte",3,50,15,54],["Umeboshi",3,20,15,55],["Curry Rice",3,20,18,56],["Umai-Bo 1",3,30,20,57],["Umai-Bo 2",3,30,20,57],["Umai-Bo 3",3,30,20,57],["Umai-Bo 4",3,30,20,58],["Umai-Bo 5",3,30,20,58],["Umai-Bo 6",3,30,20,58],["Umai-Bo 7",3,30,20,59],["Umai-Bo 8",3,30,20,59],["Umai-Bo 10",3,60,20,60],["Umai-Bo 11",3,60,20,60],["Umai-Bo 12",3,60,20,57],["Umai-Bo 14",3,60,20,60],["Umai-Bo 9",3,60,20,60],["Tasteless Stew",3,1,21,51],["Decorated Cake",3,50,22,58],["Gelatinous Potion",3,60,25,59],["Petite Sirloin",3,5,30,59],["Itty-Bitty Steak",3,60,30,59],["Kid's Meal",3,60,30,54],["Super-Sweet Curry",3,1,31,51],["Cheap Cider",3,1,32,61],["Deluxe Fruit Bowl",3,10,40,52],["Natto",3,20,40,62],["Corn on the Cob",3,25,40,57],["Chopped Steak",3,30,40,53],["Cold Soba",3,30,40,63],["Fresh Spring Rolls",3,30,40,58],["Roast Duck",3,30,40,64],["Pasta Salad",3,40,40,52],["Kimchi",3,50,40,53],["Almond Jelly",3,60,40,65],["Chocolate Banana",3,60,40,52],["Friend Turnips",3,60,40,53],["Grilled Tuna Head",3,60,40,66],["Kirschtorte",3,60,40,54],["Fruit Parfait",3,70,40,52],["Pear Tart",3,70,40,58],["Soft-Shelled Turtle",3,70,40,66],["Watermelon Bar",3,70,40,59],["Awful Cider",3,1,42,67],["Gratin",3,30,50,53],["Mont Blanc",3,50,50,57],["Sirloin 140",3,80,50,68],["Golden Curry",3,65,63,69],["Spicy Cake",3,1,86,70],["Cheap Sashami",3,1,96,51],["Boiled King Crab",3,40,100,57],["Bleu Cheese",3,60,100,52],["Haute Chinese Soup",3,60,100,60],["Otoro",3,60,100,59],["BBQ Pork Ramen",3,40,102,53],["Marbled Beef Sirloin",3,70,110,60],["Peach Dessert Soup",3,60,130,60],["Tough Steak",3,1,135,51],["Prehistoric Meat",3,20,210,71],["Mammoth Meat",3,70,210,72],["Jumbo Pot Stickers",3,40,280,71],["Blue Moon Cider",3,40,305,66],["Joyful Bandit Cider",3,75,305,73],["Granadilla Juice",3,40,330,74],["Rambutan Juice",3,70,330,57],["Silver Scepter Cider",3,70,330,75],["Tamarind Juice",3,70,330,57],["Fiery Cyclops Cider",3,75,330,76],["Hogplum Juice",3,80,330,77],["Leaping Titan Cider",3,80,330,77],["Winking Sage Cider",3,80,330,78],["Broken Prophet Cider",3,50,340,79],["Brass Demon Cider",3,80,340,79],["Howling Fox Cider",3,75,390,79],["Sapodilla Juice",3,90,390,77],["Lord's Ozoni",3,80,410,71],["Hungry Harpy Cider",3,90,420,80],["Fachuchon",3,99,429,60],["Legendary Otoro",3,99,434,59],["Ozoni of Madness",3,99,434,60],["Jackfruit Juice",3,80,500,57],["Growling Fist Cider",3,95,500,80],["Pomegranate Juice",3,95,570,74],["Lansium Juice",3,99,570,74],["Mangosteen Juice",3,100,570,74],["Ultimate Ramen",3,99,649,59],["Amazing Tenderloin",3,99,694,60],["Beautiful Ice Cream",3,99,694,81],["Demonic Durian",3,99,694,60],["Devilish Sea Squirt",3,99,694,60],["Dragon Pot Stickers",3,99,694,60],["Golden Natto",3,99,694,59],["Handmade Soba",3,99,694,82],["Lilien's Ultimate",3,99,694,83],["Luscious Gratin",3,99,694,60],["Luscious Oysters",3,99,694,59],["Perfect Duck",3,99,694,81],["Shining Pasta",3,99,694,60],["Slimy Gelatin",3,99,694,60],["Super-Spicy Stew",3,99,694,60],["Supreme Dorayaki Pie",3,99,694,84],["Tearful Risotto",3,99,694,60],["Marbled Sirloin 1000",3,60,870,60],["Giant King Crab",3,99,1234,81],["Magical Salad",3,99,1234,60],["Well-Aged Cheese",3,99,1234,60],["Spicy Stew",3,40,2512,60],["Umai-Bo 13",3,99,5010,58],
  // Crafting
  ["Vulgar Hair Ornament",4,1,1,85],["Disgusting Doll",4,1,2,86],["Over-Carved Figure",4,1,8,86],["Crude Ring",4,1,10,87],["Strange Figure",4,1,12,86],["Heavy Ring",4,1,15,87],["Tacky Earring",4,1,15,87],["Unbelievable Hair Ornament",4,1,15,85],["Embarrassing Earring",4,1,20,85],["Loose Ring",4,1,20,87],["Humiliating Earring",4,1,30,87],["Pitiful Earring",4,1,50,88],["Third-Rate Bracelet",4,1,60,88],["Laughable Bracelet",4,1,80,89],["Purple Orb",4,30,150,90],["Brooch of Footwork",4,20,170,91],["Mystic Orb",4,60,200,92],["Ring of Lunacy",4,70,200,93],["Earring of Accuracy",4,40,220,92],["Ring of Mental Power",4,80,220,92],["Feline Guardian",4,2,221,94],["Bangle of Accuracy",4,20,222,95],["Adorable Kitty Doll",4,2,241,90],["Blue Talisman",4,20,260,95],["Red Talisman",4,20,260,95],["Yellow Talisman",4,20,260,96],["Ankh of Dismissal",4,50,280,97],["Badge of Reflection",4,20,290,92],["Badge of Resistance",4,20,290,98],["Badge of Shielding",4,20,290,98],["Bangle of Intellect",4,20,300,95],["Ring of Healing",4,80,300,98],["Ring of Might",4,99,305,93],["Lunar Talisman",4,70,320,99],["Star Talisman",4,70,320,99],["Blazing Pendant",4,30,380,92],["Green Talisman",4,20,460,100],["Berserker's Pendant",4,70,490,92],["Anti-Poison Amulet",4,50,500,101],["Battle Bonus Ring",4,80,500,98],["Bladebane Cross",4,50,550,102],["Demonbane Cross",4,50,550,92],["Magebane Ankh",4,50,550,102],["Silver Cross",4,50,550,102],["Wingbane Cross",4,50,550,102],["Amulet of Freedom",4,50,600,95],["Faerie Ring",4,80,600,98],["Emerald Ring",4,90,600,91],["Anti-Incapacitation Amulet",4,60,601,103],["Ring of Erudition",4,70,640,98],["Anti-Silence Amulet",4,50,650,104],["Anti-Stone Amulet",4,50,700,99],["Ring of Quietude",4,50,700,93],["Ring of Animosity",4,70,700,92],["Anti-Freezing Amulet",4,50,800,104],["Aqua Ring",4,40,900,98],["Earth Ring",4,40,900,98],["Flare Ring",4,40,900,98],["Wind Ring",4,40,900,98],["Elven Slippers",4,60,1020,92],["Ring of Haste",4,60,1100,98],["Mallet Charm",4,99,1280,92],["Aegis Pendant",4,98,1370,92],["Hammer Charm",4,70,1390,105],["Faerie Earring",4,80,1600,92],["Emerald Earring",4,90,1700,92],["Boots of Prowess",4,99,2480,92],["Star Necklace",4,80,4100,92],["Theives' Boots",4,99,6700,102],["Eldritch Brooch",4,99,8500,91],
  // Smithery
  ["Crude Rod",5,1,1,106],["Rickety Gauntlet",5,1,3,106],["Notched Sword",5,1,20,106],["Bent Sword",5,1,30,107],["Botched Sword",5,1,50,106],["Crude Armor",5,1,50,107],["Cloak",5,10,70,108],["Rusty Axe",5,1,80,106],["Thin Armor",5,1,80,107],["Tattered Armor",5,1,100,107],["Leather Armor",5,10,115,109],["Cordon Scepter",5,20,115,110],["Cuirass",5,10,120,111],["Raunzel Daggers",5,20,123,112],["Sword of the Blessed",5,10,125,113],["Ranger's Helm",5,20,125,114],["Mythril Plate",5,60,140,115],["Silk Robe",5,20,170,116],["The Samurai",5,10,190,117],["Replica Gun",5,1,200,106],["Chainmail",5,20,210,118],["Atomic Gauntlets",5,90,220,119],["Assassin's Sickles",5,30,248,112],["Plate Armor",5,20,320,120],["Cuir Bouilli",5,40,330,118],["Prajna Claw",5,30,360,121],["Crystal Robe",5,70,370,122],["Paladin's Helm",5,100,400,119],["Veinslay",5,100,400,119],["Mythril Gauntlets",5,100,450,119],["Devious Armor",5,30,460,117],["Steel Armor",5,40,520,120],["Shark Helm",5,50,575,114],["Cloak of the Stars",5,50,620,122],["Mythril Mesh",5,80,670,123],["Hakuen",5,40,1000,117],["Iron Cape",5,20,1130,124],["Death's Talons",5,70,1220,125],["Demon Slayer",5,70,3000,126],["Flare Baselards",5,50,3055,127],["Arc Wind Rippers",5,90,3300,128],["Elven Cloak",5,30,3320,116],["Cape of the Kraken",5,70,3320,129],["Silvance",5,80,3400,119],["Demonic Claw",5,90,3450,119],["Dragon Blades",5,20,3500,119],["Searing Sword",5,40,4000,113],["Gatling Gauntlets",5,70,4200,130],["Astral Armor",5,99,4530,131],["Visored Helm",5,90,5002,119],["False Gods' Claw",5,20,5135,121],["Rune Blade",5,20,5250,113],["Cattail Staff",5,30,5340,110],["Golden Cape",5,90,5450,132],["Cupid's Staff",5,50,5550,110],["Claw of Judgement",5,100,6200,119],["Rod of the Evil Eye",5,100,6230,132],["The Immortal",5,90,6300,133],["Glass Eye Scepter",5,70,6400,134],["Damask Cape",5,100,6580,132],["Elemental Leather",5,90,6720,135],["Ice Blades",5,95,6800,119],["Bunny's Scepter",5,90,12280,132],["Mythril Dress",5,95,1320,136],["Cape of Acrimony",5,30,1360,124],["Damask Gauntlets",5,50,1450,137],["Superior Leather",5,95,1470,123],["Silver Curiass",5,90,1640,115],["Pulverizers",5,20,1734,137],["Flash Gauntlets",5,30,1970,137],["Drill Helm",5,30,2000,114],["Soul Stealer Claw",5,50,2085,121],["Barbarian's Helm",5,70,2150,138],["Cape of the Banshee",5,50,2180,124],["Superior Plate Armor",5,95,2540,139],["Radiant Sword",5,70,2600,119],["Superior Mesh",5,80,2620,140],["Featherfolk Garb",5,95,2620,136],
  // Writing
  ["Glued Rod",6,1,1,141],["Crude Book",6,1,12,142],["Ragged Book",6,1,18,142],["Esoteric Scroll",6,1,50,142],["Secret Teachings",6,1,150,142],["Illegible Book",6,1,175,141],["Earth Discharge",6,30,350,143],["Fire Discharge",6,30,350,144],["Water Discharge",6,30,350,144],["Wind Discharge",6,30,350,144],["Tome of Insight",6,50,601,145],["Earth Resistance",6,30,710,146],["Decayed Tome",6,40,1500,147],["Deteriorating Tome",6,40,1500,148],["Tattered Tome",6,40,1500,148],["Crumbling Tome",6,60,1500,149],["Dated Tome",6,60,1500,150],["Musty Tome",6,60,1500,151],["Mildewed Tome",6,90,1500,152],["Damaged Tome",6,99,1500,152],["Fading Tome",6,99,1500,152],["Moldy Tome",6,99,1500,153],["Brittle Tome",6,100,1500,145],["Tome of Prowess",6,70,1670,145],["Strange Book",6,65,5400,154],["Fire Resistance",6,30,710,146],["Water Resistance",6,30,710,146],["Wind Resistance",6,30,710,146]
];

export const ITEMS: Item[] = RAW_ITEMS.map((item, idx) => ({
  id: idx,
  name: item[0] as string,
  categoryId: item[1] as number,
  baseCost: item[3] as number,
  difficulty: item[2] as number,
  allowedInventors: DX_MAP[item[4] as number]
}));
