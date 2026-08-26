export const scoreTables = {
  energy: {
    1: { 1: 100, 2: 80, 3: 60 },
    2: { 1: 30, 2: 100, 3: 80 },
    3: { 1: 0, 2: 30, 3: 100 },
  },

  space: {
    1: { 1: 100, 2: 85, 3: 75 },
    2: { 1: 30, 2: 100, 3: 90 },
    3: { 1: 0, 2: 30, 3: 100 },
  },

  experience: {
    1: { 1: 100, 2: 90, 3: 75 },
    2: { 1: 30, 2: 100, 3: 85 },
    3: { 1: 0, 2: 40, 3: 100 },
  },

  timeNeed: {
    1: { 1: 100, 2: 85, 3: 75 },
    2: { 1: 30, 2: 100, 3: 85 },
    3: { 1: 0, 2: 30, 3: 100 },
  },
};

export function getScore(category, dogValue, userValue) {
  return scoreTables[category]?.[dogValue]?.[userValue] ?? null;
}
