// Zet "Afghan Hound" om naar "AfghanHound"
function formatBreedName(breedName) {
  return breedName.replace(/\s+/g, "");
}

// Uitzonderingen per ras (makkelijk uitbreidbaar)
const OBJECT_POSITION_OVERRIDES = {
  "American Staffordshire Terrier": "50% 25%",
  "Staffordshire Bull Terrier": "50% 45%",
  "Kangal Shepherd Dog": "50% 20%",
  Aidi: "50% 35%",
  "Alano Español": "50% 35%",
  "Andalusian Terrier": "50% 20%",
  Armant: "50% 20%",
  "Armenian Gampr": "50% 50%",
  "Bakharwal Dog": "50% 20%",
  "Barak Hound": "50% 20%",
  Bassettoodle: "50% 40%",
  "Bergamasco Sheepdog": "50% 30%",
  Bugg: "50% 40%",
  "Bulgarian Hound": "50% 48%",
  "Bull Arab": "50% 48%",
  Bulloxer: "50% 30%",
};

export function getBreedImageData(breedName) {
  if (!breedName) return null;

  const formattedName = formatBreedName(breedName);

  try {
    return {
      src: new URL(`../assets/breeds/${formattedName}.jpg`, import.meta.url)
        .href,

      objectPosition: OBJECT_POSITION_OVERRIDES[breedName] || "50% 5%",
    };
  } catch {
    return null;
  }
}
