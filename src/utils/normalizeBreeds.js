import { breedOverrides } from "./breedOverrides";
import { breedInstincts } from "./breedInstincts";
import { breedTraits } from "./breedTraits";

function extractMaxMetricValue(metricString) {
  if (!metricString || typeof metricString !== "string") return null;

  // Alle nummers (incl. decimalen) uit de string halen
  const numbers = metricString.match(/\d+(\.\d+)?/g);

  if (!numbers) return null;

  return Math.max(...numbers.map(Number));
}

export function normalizeBreeds(breeds) {
  return breeds.map((breed) => {
    const override = breedOverrides[breed.name];

    // 1️⃣ Merge overrides (indien aanwezig)
    const mergedBreed = override
      ? {
          ...breed,
          ...override,
          weight: {
            ...breed.weight,
            ...override.weight,
          },
          height: {
            ...breed.height,
            ...override.height,
          },
        }
      : breed;

    // 2️⃣ Instincts ophalen (default: lege array)
    const instincts = breedInstincts[mergedBreed.name] || [];
    const traits = breedTraits[mergedBreed.name] || {};

    return {
      ...mergedBreed,

      ...traits,

      // 3️⃣ Genormaliseerde metrics (ALLEEN voor filtering)
      maxWeightKg: extractMaxMetricValue(mergedBreed.weight?.metric),
      maxHeightCm: extractMaxMetricValue(mergedBreed.height?.metric),

      // 4️⃣ Genetische / instinct-info
      instincts,
    };
  });
}
