export function applySizePreference(breeds, preferredSize) {
  return breeds.map((breed) => {
    let sizePenalty = 0;

    // ---------------------------
    // SIZE PREFERENCE PENALTY
    // ---------------------------
    if (preferredSize === "small") {
      if (breed.size === 2) sizePenalty = 0.5;
      if (breed.size === 3) sizePenalty = 1;
    }

    if (preferredSize === "medium") {
      if (breed.size === 1 || breed.size === 3) {
        sizePenalty = 0.5;
      }
    }

    if (preferredSize === "large") {
      if (breed.size === 1) sizePenalty = 1;
      if (breed.size === 2) sizePenalty = 0.5;
    }

    return {
      ...breed,
      suggestionScore:
        breed.averageScore !== null && breed.averageScore !== undefined
          ? Number((breed.averageScore - sizePenalty).toFixed(1))
          : null,
    };
  });
}
