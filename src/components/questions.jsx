import { useState } from "react";

function Questions({ onSubmitAnswers }) {
  const [answers, setAnswers] = useState({
    activity: "",
    livingSpace: "",
    experience: "",
    hasKids: "",
otherPets: {
  none: false,
  dogs: false,
  cats: false,
  other: false,
},
    timeAvailable: "",
    preferredSize: "",
  });

  const [error, setError] = useState("");

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    let updatedPets = {
      ...answers.otherPets,
    };

    if (name === "none") {
      updatedPets = {
        none: checked,
        dogs: false,
        cats: false,
        other: false,
      };
    } else {
      updatedPets = {
        ...updatedPets,
        none: false,
        [name]: checked,
      };
    }

    setAnswers({
      ...answers,
      otherPets: updatedPets,
    });

    return;
  }

  setAnswers({
    ...answers,
    [name]: value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

const hasSelectedPet =
  answers.otherPets.none ||
  answers.otherPets.dogs ||
  answers.otherPets.cats ||
  answers.otherPets.other;

  // validatie (zoals eerder)
  if (
    !answers.activity ||
    !answers.livingSpace ||
    !answers.experience ||
    !answers.hasKids ||
    !hasSelectedPet ||
    !answers.timeAvailable
  ) {
    setError("Please answer all lifestyle questions.");
    return;
  }

  setError("");
  onSubmitAnswers(answers);
};

  return (
    <div className="questions-container">
      <h2>Tell us about your lifestyle</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Activity level:
          <select name="activity" value={answers.activity} onChange={handleChange}>
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Living space:
          <select
            name="livingSpace"
            value={answers.livingSpace}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="garden">House + Garden</option>
          </select>
        </label>

        <label>
          Experience with dogs:
          <select
            name="experience"
            value={answers.experience}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>

        <label>
          Young children at home?
          <select
            name="hasKids"
            value={answers.hasKids}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <div className="checkbox-question">
          <p className="questions_p">Other pets at home?</p>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="none"
                checked={answers.otherPets.none}
                onChange={handleChange}
              />
              No other pets
            </label>

            <label>
              <input
                type="checkbox"
                name="dogs"
                checked={answers.otherPets.dogs}
                onChange={handleChange}
              />
              Dogs
            </label>

            <label>
              <input
                type="checkbox"
                name="cats"
                checked={answers.otherPets.cats}
                onChange={handleChange}
              />
              Cats
            </label>

            <label>
              <input
                type="checkbox"
                name="other"
                checked={answers.otherPets.other}
                onChange={handleChange}
              />
              Other small pets
            </label>
          </div>
        </div>

        <label>
          Daily time available for a dog:
          <select
            name="timeAvailable"
            value={answers.timeAvailable}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="low">Less than 1 hour</option>
            <option value="medium">1–2 hours</option>
            <option value="high">More than 2 hours</option>
          </select>
        </label>

        <h3 className="preferences_h3">Preferences</h3> 

        <label>
          Preferred dog size:
          <select
            name="preferredSize"
            value={answers.preferredSize}
            onChange={handleChange}
          >
            <option value="">No preference</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label> 

        {error && <p className="error">{error}</p>}

        <div className="submit-wrapper">
          <button className="button submit_button"type="submit">
            Find my dog match
          </button>
        </div>
      </form>

      {/* Debug output (handig tijdens bouwen) */}
      {/*<pre>{JSON.stringify(answers, null, 2)}</pre>*/}

    </div>
  );
}

export default Questions;