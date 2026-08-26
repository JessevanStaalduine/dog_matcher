import { useEffect, useRef, useState } from "react";
import Questions from "./components/questions.jsx";
import BreedCard from "./components/BreedCard";
import BreedSearch from "./components/BreedSearch";
import BreedModal from "./components/BreedModal.jsx";
import { matchBreeds } from "./utils/matchBreeds";
import { scoreBreeds } from "./utils/scoreBreeds";
import { applySizePreference } from "./utils/applySizePreference";
import { normalizeBreeds } from "./utils/normalizeBreeds";
import "./styles.css";

function App() {

  const SHOW_DEBUG_INFO = false;

  const [breeds, setBreeds] = useState([]);
  const [answers, setAnswers] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const [breedsToShow, setBreedsToShow] = useState([]);
  const [scoredBreeds, setScoredBreeds] = useState([]);

  const [breedsWithScores, setBreedsWithScores] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const resultsRef = useRef(null);
  const gridRef = useRef(null);
  const [columns, setColumns] = useState(1);

  const rowsPerPage = 5;
  const cardsPerPage = columns * rowsPerPage;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentBreeds = breedsToShow.slice(startIndex, endIndex);

  const totalPages = Math.ceil(breedsToShow.length / cardsPerPage);

  

  

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": import.meta.env.VITE_DOG_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("TOTAL BREEDS:", data.length);

       /* data.forEach((breed) => {
          console.log({
            name: breed.name,
            weight: breed.weight?.metric,
            height: breed.height?.metric,
            temperament: breed.temperament,
            description: breed.description,
          });
        });*/

        const normalized = normalizeBreeds(data);
       
          const instinctsSkeleton = normalized
    .map((b) => b.name)
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc, name) => {
      acc[name] = [];
      return acc;
    }, {});

  //console.log("=== breedInstincts skeleton ===");
  console.log(instinctsSkeleton);

        setBreeds(normalized);
      });
  }, []);

    useEffect(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [currentPage, answers]);

    const updateColumns = () => {
      if (!gridRef.current) return;

      const gridStyle = getComputedStyle(gridRef.current);

      const columnCount = gridStyle.gridTemplateColumns.split(" ").length;

      setColumns(columnCount);
    };

  useEffect(() => {
    updateColumns();

    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, [answers]);


const handleSubmitAnswers = (submittedAnswers) => {
  setCurrentPage(1);
  setAnswers(submittedAnswers);

  const newScoredBreeds = scoreBreeds(breeds, submittedAnswers);
  setScoredBreeds(newScoredBreeds);

  const allBreedsWithSize = applySizePreference(
    newScoredBreeds,
    submittedAnswers.preferredSize
  );

  setBreedsWithScores(allBreedsWithSize);

const filtered = matchBreeds(newScoredBreeds, submittedAnswers);

const sizeAdjusted = applySizePreference(
  filtered,
  submittedAnswers.preferredSize,
);

const sorted = [...sizeAdjusted].sort(
  (a, b) => b.suggestionScore - a.suggestionScore
);

setBreedsToShow(sorted);
};

const filteredBreeds =
  answers && scoredBreeds.length > 0
    ? matchBreeds(scoredBreeds, answers)
    : [];

  return (
    <main>
      {answers && (
        <BreedSearch
          breeds={breedsWithScores}
          onSelectBreed={setSelectedBreed}
        />
      )}

      {/* BreedModal openen */}
      {selectedBreed && (
        <BreedModal
          breed={
            breedsToShow.find((breed) => breed.id === selectedBreed.id) ||
            selectedBreed
          }
          onClose={() => setSelectedBreed(null)}
        />
      )}

      <div className="app-content">

        <div className="questions-column">
          <Questions onSubmitAnswers={handleSubmitAnswers} />
        </div>

        {answers && (
          <div className="results-column">
            <section className="results" ref={resultsRef}>

              {SHOW_DEBUG_INFO && (
                  <>
                    <h2>Filtered breeds (debug)</h2>
                    <p>
                      Before: {breeds.length} – After: {filteredBreeds.length}
                    </p>
                  </>
                )}

              <div className="breed-grid" ref={gridRef}>
                {currentBreeds.map((breed) => (
                  <BreedCard
                    key={breed.id}
                    breed={breed}
                    onClick={setSelectedBreed}
                  />
                ))}
              </div>

                  <div className="breed-pagination">
                    <button className="button pagination_button"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      ← Previous
                    </button>

                    <span>
                      {currentPage} / {totalPages}
                    </span>

                    <button className="button pagination_button"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next →
                    </button>
                  </div>
            </section>
          </div>
        )}

      </div>
    </main>
  );
}

export default App;