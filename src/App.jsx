import { useEffect, useRef, useState } from "react";
import Questions from "./components/questions.jsx";
import BreedCard from "./components/BreedCard";
import BreedSearch from "./components/BreedSearch";
import BreedModal from "./components/BreedModal.jsx";
import PawAnimations from "./components/PawAnimations.jsx";
import PawAnimations2 from "./components/PawAnimations2.jsx";
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
  const [slideDirection, setSlideDirection] = useState(null);
  const [previousBreeds, setPreviousBreeds] = useState(null);

  const resultsRef = useRef(null);
  const searchRef = useRef(null);
  const gridRef = useRef(null);
  const [columns, setColumns] = useState(1);

  const rowsPerPage = 5;
  const cardsPerPage = columns * rowsPerPage;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentBreeds = breedsToShow.slice(startIndex, endIndex);

  const totalPages = Math.ceil(breedsToShow.length / cardsPerPage);

    const scrollToTargetAndThen = (callback) => {
    const targetRef = window.innerWidth >= 768
      ? resultsRef
      : searchRef;

    if (!targetRef.current) {
      callback();
      return;
    }

    const target = targetRef.current;

    // Als de target al bovenaan staat, hoeven we niet te wachten.
    if (Math.abs(target.getBoundingClientRect().top) < 2) {
      callback();
      return;
    }

    let finished = false;
    let fallbackTimer;

    const finishScroll = () => {
      if (finished) return;

      finished = true;

      document.removeEventListener("scrollend", finishScroll);
      window.removeEventListener("scrollend", finishScroll);
      clearTimeout(fallbackTimer);

      callback();
    };

    document.addEventListener("scrollend", finishScroll);
    window.addEventListener("scrollend", finishScroll);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Noodoplossing voor browsers die scrollend niet afvuren.
    fallbackTimer = window.setTimeout(finishScroll, 2000);
  };
  

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

        const uniqueBreeds = Array.from(
          new Map(normalized.map((breed) => [breed.name, breed])).values()
        );
              
          const instinctsSkeleton = uniqueBreeds
    .map((b) => b.name)
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc, name) => {
      acc[name] = [];
      return acc;
    }, {});

  //console.log("=== breedInstincts skeleton ===");
  console.log(instinctsSkeleton);

        setBreeds(uniqueBreeds);
      });
  }, []);

  useEffect(() => {
    const targetRef = window.innerWidth >= 768
      ? resultsRef
      : searchRef;

    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [answers]);

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

const shuffleEqualScores = (breeds) => {
  const result = [];

  let i = 0;

  while (i < breeds.length) {
    const score = breeds[i].suggestionScore;

    let j = i + 1;

    while (
      j < breeds.length &&
      breeds[j].suggestionScore === score
    ) {
      j++;
    }

    const group = breeds.slice(i, j);

    for (let k = group.length - 1; k > 0; k--) {
      const randomIndex = Math.floor(Math.random() * (k + 1));
      [group[k], group[randomIndex]] = [group[randomIndex], group[k]];
    }

    result.push(...group);

    i = j;
  }

  return result;
};


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

const randomized = shuffleEqualScores(sorted);

setBreedsToShow(randomized);
};

const filteredBreeds =
  answers && scoredBreeds.length > 0
    ? matchBreeds(scoredBreeds, answers)
    : [];

  return (
    <main>

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

      <PawAnimations />
      <PawAnimations2 />

      <div className="app-content">

        <div className="questions-column">
          <Questions onSubmitAnswers={handleSubmitAnswers} />
        </div>

              {answers && (
                <BreedSearch
                  breeds={breedsWithScores}
                  onSelectBreed={setSelectedBreed}
                  ref={searchRef}
                />
              )}

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

                <div className="breed-grid-viewport">
                  <div
                    className={`breed-grid-track ${
                      slideDirection ? `slide-${slideDirection}` : ""
                    }`}
                    onAnimationEnd={(event) => {
                      if (event.target !== event.currentTarget) return;

                      setPreviousBreeds(null);
                      setSlideDirection(null);
                    }}
                  >
                    {slideDirection === "previous" ? (
                      <>
                        <div className="breed-grid-page grid-page-enter">
                          <div className="breed-grid" ref={gridRef}>
                            {currentBreeds.map((breed) => (
                              <BreedCard
                                key={breed.id}
                                breed={breed}
                                onClick={setSelectedBreed}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="breed-grid-page grid-page-exit">
                          <div className="breed-grid">
                            {previousBreeds?.map((breed) => (
                              <BreedCard
                                key={breed.id}
                                breed={breed}
                                onClick={setSelectedBreed}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {previousBreeds && (
                          <div className="breed-grid-page grid-page-exit">
                            <div className="breed-grid">
                              {previousBreeds.map((breed) => (
                                <BreedCard
                                  key={breed.id}
                                  breed={breed}
                                  onClick={setSelectedBreed}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="breed-grid-page grid-page-enter">
                          <div className="breed-grid" ref={gridRef}>
                            {currentBreeds.map((breed) => (
                              <BreedCard
                                key={breed.id}
                                breed={breed}
                                onClick={setSelectedBreed}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                  <div className="breed-pagination">
                    <button className="button pagination_button"
                      onClick={() => {
                        scrollToTargetAndThen(() => {
                          setPreviousBreeds(currentBreeds);
                          setSlideDirection("previous");
                          setCurrentPage(currentPage - 1);
                        });
                      }}
                      disabled={currentPage === 1}
                    >
                      ← Previous
                    </button>

                    <span>
                      {currentPage} / {totalPages}
                    </span>

                    <button className="button pagination_button"
                      onClick={() => {
                        scrollToTargetAndThen(() => {
                          setPreviousBreeds(currentBreeds);
                          setSlideDirection("next");
                          setCurrentPage(currentPage + 1);
                        });
                      }}
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