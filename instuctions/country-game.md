# Country Capital Game

_In this game, the player needs to match a country to its capital by clicking on appropriate buttons._

1. Your component should receive a data property in the following format (an object with the correct answers, where the keys are the names of the countries and the value of each key is the capital of each country):

```js
<CountryCapitalGame data={{ Germany: "Berlin", Azerbaijan: "Baku" }} />
```

2. A button should be displayed for each country and each capital. So, the example above would return buttons: Germany, Berlin, Azerbaijan and Baku.
3. The buttons should be displayed in a random order.
4. Clicking a button should set its background color to blue `#08F`
5. Clicking another button should:

   - Remove both buttons if a correct country and capital pair has been selected.
   - Set the background color of both buttons to red `#F80` if a wrong pair has been selected.

6. Assuming the previously selected pair was wrong, clicking another button should restore the default background color of the wrong pair and set the background color of the clicked button to blue (as in point 4).

7. When there are no buttons left, display a message: Congratulations!

8. Export your component as the default export.
