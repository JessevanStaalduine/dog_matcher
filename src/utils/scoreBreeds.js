import { getScore } from "./scoreTables";
import { answerMappings } from "./answerMappings";

const compatibilityScores = {
  1: 100,
  2: 30,
  3: 0,
};

export function scoreBreeds(breeds, answers) {
  const { otherPets, experience, timeAvailable, activity, livingSpace } =
    answers;

  const userScores = {
    energy: answerMappings.activity[activity],
    space: answerMappings.livingSpace[livingSpace],
    experience: answerMappings.experience[experience],
    timeNeed: answerMappings.timeAvailable[timeAvailable],
  };

  return breeds.map((breed) => {
    // ---------------------------
    // Check required traits
    // ---------------------------
    if (
      breed.space === undefined ||
      breed.energy === undefined ||
      breed.experience === undefined ||
      breed.timeNeed === undefined
    ) {
      return {
        ...breed,
        averageScore: null,
        scores: {},
      };
    }

    // ---------------------------
    // Basic compatibility scores
    // ---------------------------
    const scores = {
      energy: getScore("energy", breed.energy, userScores.energy),

      space: getScore("space", breed.space, userScores.space),

      experience: getScore(
        "experience",
        breed.experience,
        userScores.experience,
      ),

      timeNeed: getScore("timeNeed", breed.timeNeed, userScores.timeNeed),
    };

    // ---------------------------
    // Friendliness weighting
    // ---------------------------
    const friendlinessWeight =
      userScores.experience === 1
        ? 1.5
        : userScores.experience === 2
          ? 1.25
          : 1;

    const weights = {
      energy: 1,
      space: 1,
      experience: 1,
      timeNeed: 1,
      kidFriendly: friendlinessWeight,
      petFriendlyDogs: friendlinessWeight,
      petFriendlyOther: friendlinessWeight,
    };

    // ---------------------------
    // Kid friendliness
    // ---------------------------
    if (answers.hasKids === "yes" && breed.kidFriendly !== undefined) {
      scores.kidFriendly = compatibilityScores[breed.kidFriendly];
    }

    // ---------------------------
    // Dog friendliness
    // ---------------------------
    if (otherPets.dogs && breed.petFriendly?.dogs !== undefined) {
      scores.petFriendlyDogs = compatibilityScores[breed.petFriendly.dogs];
    }

    // ---------------------------
    // Other pets friendliness
    // ---------------------------
    if (
      (otherPets.cats || otherPets.other) &&
      breed.petFriendly?.other !== undefined
    ) {
      scores.petFriendlyOther = compatibilityScores[breed.petFriendly.other];
    }

    // ---------------------------
    // Weighted average
    // ---------------------------
    let weightedTotal = 0;
    let totalWeight = 0;

    for (const [key, score] of Object.entries(scores)) {
      const weight = weights[key] ?? 1;

      weightedTotal += score * weight;
      totalWeight += weight;
    }

    const averageScore = totalWeight > 0 ? weightedTotal / totalWeight : null;

    return {
      ...breed,
      scores,
      weightedTotal,
      averageScore:
        averageScore !== null ? Number((averageScore / 10).toFixed(1)) : null,
    };
  });
}
