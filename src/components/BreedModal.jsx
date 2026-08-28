import { useEffect } from "react";
import { getBreedImageData } from "../utils/breedImages";
import "./BreedModal.css";

function BreedModal({ breed, onClose }) { 
    useEffect(() => {

      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }, []);

  if (!breed) return null;

  const imageData = getBreedImageData(breed.name);

  function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

  return (
    <div className="breed-modal__overlay" onClick={onClose}>
      <div className="breed-modal" onClick={(e) => e.stopPropagation()}>
        <div className="h2_button_container">

          <h2 className="modal-h2">{breed.name}</h2>

          <button className="breed-modal__close" onClick={onClose}>
            ×
          </button>
        </div>

{/* Flex container voor image + weight/height */}
<div className="breed-modal__content">
  {/* Image */}
  {imageData ? (
    <div className="breed-modal__image">
      <img
        src={imageData.src}
        alt={breed.name}
        style={{ objectPosition: imageData.objectPosition }}
      />
    </div>
  ) : (
    <div className="image-placeholder">No image</div>
  )}

    {/* Weight & Height info naast de image */}
<div className="breed-modal__info"> 

  <ul>
    <li>
      <strong>Weight:</strong>{" "}
      {breed.weight?.metric || "Unknown"} kg
    </li>

    <li>
      <strong>Height:</strong>{" "}
      {breed.height?.metric || "Unknown"} cm
    </li>

    {breed.instincts && (
      <li>
        <strong>Instincts:</strong>{" "}
        {breed.instincts.map(capitalize).join(", ")}
      </li>
    )}
  </ul>

<div className="match-score-container">
    {breed.suggestionScore != null && (
      
      <p
        className={`match-score ${
          breed.suggestionScore <= 4
            ? "match-score--low"
            : breed.suggestionScore < 7
            ? "match-score--medium"
            : "match-score--high"
        }`}
      >
        <span>{breed.suggestionScore.toFixed(1)}</span>
      </p>
    )}</div>

</div>
  </div>

  {/* Temperament onder de flex-container */}
  {breed.temperament && (
    <ul className="breed-modal__info--below">
      <li>
        <strong>Temperament:</strong> {breed.temperament}
      </li>
    </ul>
  )}

  {/* Description onder de flex-container */}
  {breed.description && (
    <ul className="breed-modal__info--below">
      <li>
        <strong>Description:</strong> {breed.description}
      </li>
    </ul>
  )}
      </div>
    </div>
  );
}

export default BreedModal;