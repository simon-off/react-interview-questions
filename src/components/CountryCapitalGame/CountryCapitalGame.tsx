import { useState } from "react";

type OptionState = "normal" | "selected" | "correct" | "incorrect";
type Option = {
  name: string;
  answer: string;
  state: OptionState;
};

type CountryCapitalGameProps = {
  data: Record<string, string>;
};

const shuffleArray = (array: Option[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function createGameOptions(data: Record<string, string>) {
  // Map over countries (keys) and make each into an <Option>
  const countries = Object.entries(data).map(
    ([key, value]) =>
      ({
        name: key,
        answer: value,
        state: "normal",
      } as Option)
  );
  // Map over capitals (values) and make each into an <Option>
  const capitals = Object.entries(data).map(
    ([key, value]) =>
      ({
        name: value,
        answer: key,
        state: "normal",
      } as Option)
  );
  // Return all the options by spreading countries and capitals together and shuffling them
  return shuffleArray([...countries, ...capitals]);
}

export default function CountryCapitalGame({ data }: CountryCapitalGameProps) {
  const defaultOptions = createGameOptions(data);
  const [options, setOptions] = useState(defaultOptions);
  const [score, setScore] = useState(0);

  const handleOptionButtonPress = (buttonOption: Option) => {
    const selectedOption = options.find((option) => option.state === "selected");

    if (!selectedOption) {
      // Selecting first option
      options.forEach(
        (option) => (option.state = option.state === "incorrect" ? "normal" : option.state)
      );
      buttonOption.state = "selected";
    } else if (buttonOption.answer === selectedOption.name) {
      // Correct second option
      buttonOption.state = "correct";
      selectedOption.state = "correct";
      setScore(score + 1);
    } else {
      // Incorrect second option
      buttonOption.state = "incorrect";
      selectedOption.state = "incorrect";
      setScore(score - 1);
    }

    setOptions([...options]);
  };

  const handlePlayAgainButtonPress = () => {
    setOptions(defaultOptions);
    setScore(0);
  };

  return (
    <div className="country-game-implementation">
      <div className="stats">
        <span>Score: {score}</span>
      </div>
      <div className="buttons">
        {options.map(
          (option) =>
            option.state !== "correct" && (
              <button
                key={option.name}
                onClick={() => handleOptionButtonPress(option)}
                className={option.state}
              >
                {option.name}
              </button>
            )
        )}
        {options.every((option) => option.state === "correct") && (
          <button onClick={handlePlayAgainButtonPress}>Play again?</button>
        )}
      </div>
    </div>
  );
}
