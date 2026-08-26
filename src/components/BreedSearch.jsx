import { useState, useMemo } from "react";
import { getBreedImageData } from "../utils/breedImages";

function BreedSearch({ breeds, onSelectBreed }) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.toLowerCase().trim();

  const suggestions = useMemo(() => {
    return normalizedQuery.length > 0
      ? breeds
          .filter((breed) =>
            breed.name.toLowerCase().startsWith(normalizedQuery)
          )
          .slice(0, 120)
      : [];
  }, [normalizedQuery, breeds]);

  const handleSelect = (breed) => {
    setQuery("");
    onSelectBreed(breed);
  };

  return (
    <div className="breed-search">
      <input
        type="text"
        placeholder="Search dog breeds..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {suggestions.length > 0 && (
        <ul className="breed-search__suggestions">
          {suggestions.map((breed) => {
            const imageData = getBreedImageData(breed.name);

            return (
              <li
                key={breed.id}
                className="breed-search__suggestion"
                onClick={() => handleSelect(breed)}
              >
                {imageData ? (
                  <img
                    src={imageData.src}
                    alt={breed.name}
                  />
                ) : (
                  <div className="breed-search__image-placeholder" />
                )}

                <span>{breed.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BreedSearch;