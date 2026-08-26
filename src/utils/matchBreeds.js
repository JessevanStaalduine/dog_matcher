export function matchBreeds(breeds, answers) {
  const { otherPets, experience, activity, livingSpace } = answers;

  const safeBreeds = breeds.filter((breed) => {
    if (breed.averageScore === null || breed.averageScore === undefined) {
      return false;
    }

    if (!breed.temperament) return false;

    const temperamentTags = breed.temperament
      .toLowerCase()
      .split(",")
      .map((tag) => tag.trim());

    // ---------------------------
    // HARD RULE: Apartment vs space & overall needs
    // ---------------------------
    if (livingSpace === "apartment" && breed.space === 3) {
      const energyAndTime = breed.energy + breed.timeNeed;

      if (energyAndTime >= 4) {
        return false;
      }
    }

    // ---------------------------
    // HARD RULE: Other pets vs hunting breeds
    // ---------------------------
    if ((otherPets.cats || otherPets.other) && breed.instincts) {
      const huntingKeywords = ["hunting", "ratting"];

      const isHuntingBreed = breed.instincts.some((instinct) =>
        huntingKeywords.includes(instinct),
      );

      if (isHuntingBreed) {
        return false;
      }
    }

    // ---------------------------
    // HARD RULE: Experience with dogs (beginner)
    // ---------------------------
    if (experience === "beginner") {
      const difficultForBeginners = [
        "strong-willed",
        "tenacious",
        "independent",
        "dominant",
        "stubborn",
        "territorial",
      ];

      const isDifficultBreed = difficultForBeginners.some((tag) =>
        temperamentTags.some((t) => t.includes(tag)),
      );

      if (isDifficultBreed) return false;
    }

    // ---------------------------
    // HARD RULE: Beginner vs guard breeds
    // ---------------------------
    if (experience === "beginner" && breed.instincts) {
      const guardKeywords = ["guarding", "intense"];

      const isGuardBreed = guardKeywords.some((keyword) =>
        breed.instincts.includes(keyword),
      );

      if (isGuardBreed) {
        return false;
      }
    }

    // ---------------------------
    // HARD RULE: Time available vs high-energy breeds
    // ---------------------------
    if (activity === "low") {
      const highEnergyTags = ["energetic"];

      const isHighEnergy = highEnergyTags.some((tag) =>
        temperamentTags.some((t) => t.includes(tag)),
      );

      if (isHighEnergy) return false;
    }

    return true;
  });

  return safeBreeds;
}
