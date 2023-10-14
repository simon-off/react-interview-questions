import FoldingSection from "../FoldingSection";
import CountryCapitalGame from "./CountryCapitalGame";

export default function CountryCapitalGamePage() {
  return (
    <article>
      <h1>Country Capital Game</h1>
      <FoldingSection heading={<h2>Inspiration</h2>}>
        <div className="country-game-inspiration">
          <p>
            This interview question comes from the YouTube video:{" "}
            <a href="https://youtu.be/XTgB4esy1is" target="_blank">
              A subscriber sent me a junior react interview challenge, let's solve it
            </a>{" "}
            made by <b>Web Dev Cody</b>. The instructions can look quite daunting at first but when
            you break it down it's not too bad!
          </p>
          <p>
            The end result is a fun little game where you can test your geography skills (or lack
            thereof).
          </p>
        </div>
      </FoldingSection>
      <FoldingSection heading={<h2>Instructions</h2>}>
        <div className="country-game-instructions">
          <blockquote>
            In this game, the player needs to match a country to its capital by clicking on
            appropriate buttons.
          </blockquote>
          <ol>
            <li>
              Your component should receive a data property in the following format (an object with
              the correct answers, where the keys are the names of the countries and the value of
              each key is the capital of each country):
              <br />
              <code>
                {`<CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />`}
              </code>
            </li>
            <li>
              A button should be displayed for each country and each capital. So, the example above
              would return buttons: Germany, Berlin, Azerbaijan and Baku.
            </li>
            <li>The buttons should be displayed in a random order.</li>
            <li>
              Clicking a button should set its background color to blue <code>#08F</code>
            </li>
            <li>
              Clicking another button should:
              <ul>
                <li>
                  Remove both buttons if a correct country and capital pair has been selected.
                </li>
                <li>
                  Set the background color of both buttons, if a wrong pair has been selected, to
                  red <code>#F80</code>.
                </li>
              </ul>
            </li>
            <li>
              Assuming the previously selected pair was wrong, clicking another button should
              restore the default background color of the wrong pair and set the background color of
              the clicked button to blue (as in point 4).
            </li>
            <li>
              When there are no buttons left, display a message: <q>Congratulations!</q>
            </li>
            <li>Export your component as the default export.</li>
          </ol>
        </div>
      </FoldingSection>
      <FoldingSection heading={<h2>Implementation</h2>}>
        <p>
          A tricky thing with this challenge is the fact that the countries are the keys of the data
          object and the capitals are the values. To be able to click on the buttons in any order,
          you have to do some finagling.
        </p>
        <p>
          One way you can go about it is to add some conditional logic to check whether you clicked
          on a key or a value first and then go from there. This requires no <i>massaging</i> of the
          input data itself but can become quite complex with all the different conditions going on.
        </p>
        <p>
          The way I solved it was to create a new array of objects with all the countries (keys) and
          capitals (values) saved to a property (I chose to call mine <code>name</code>) on each new
          object. Then you can add another property containing the corresponding <code>answer</code>{" "}
          (either a capital or country). I also added a <code>state</code> property to keep track
          each options current ui state.
        </p>
        <p>
          Here's a demo of my solution. You can also check out the{" "}
          <a
            href="https://github.com/simon-off/react-interview-questions/tree/main/src/components/CountryCapitalGame"
            target="_blank"
          >
            code on GitHub
          </a>{" "}
          if you're curious!
        </p>
        <CountryCapitalGame
          data={{ Germany: "Berlin", Azerbaijan: "Baku", France: "Paris", Sweden: "Stockholm" }}
        />
      </FoldingSection>
    </article>
  );
}
