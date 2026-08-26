import { getBreedImageData } from "../utils/breedImages";

function BreedCard({ breed, onClick }) {
  const imageData = getBreedImageData(breed.name);

  return (
    <div
      className="breed-card"
      onClick={() => onClick && onClick(breed)}
      style={{ cursor: "pointer" }}
    >
    <div className="breed-card__h3-flex">
      <h3 className="breed-name">{breed.name}</h3>

          {breed.suggestionScore != null && (
            <p
              className={`match-score-card ${
                breed.suggestionScore <= 4
                  ? "match-score-card--low"
                  : breed.suggestionScore < 7
                  ? "match-score-card--medium"
                  : "match-score-card--high"
              }`}
            >
              <span>{breed.suggestionScore.toFixed(1)}</span>
            </p>
          )}
      </div>

      <div className="breed-card__image">
        {imageData ? (
          <img
            src={imageData.src}
            alt={breed.name}
            loading="lazy"
            style={{ objectPosition: imageData.objectPosition }}
          />
        ) : (
          <div className="image-placeholder">No image</div>
        )}
      </div>

      <ul>
        <li>
          <strong>Weight:</strong>{" "}
          {breed.weight?.metric ? `${breed.weight.metric} kg` : "Unknown"}
        </li>
        <li>
          <strong>Height:</strong>{" "}
          {breed.height?.metric ? `${breed.height.metric} cm` : "Unknown"}
        </li>
        <li>
          <strong>Temperament:</strong>{" "}
          {breed.temperament || "Unknown"}
        </li>
      </ul>
    </div>
  );
}

export default BreedCard;