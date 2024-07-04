function showAlert() {
  // Prompt the user for the city and temperature
  let city = prompt("Please enter the city:");
  console.log(`City entered: ${city}`); // Debug log

  if (city !== null && city.trim() !== "") {
    let temp = prompt("Please enter the temperature in °C:");
    console.log(`Temperature entered: ${temp}`); // Debug log

    // Check if temp is a number
    if (temp !== null && !isNaN(temp) && temp.trim() !== "") {
      temp = parseFloat(temp);

      // Determine the emoji based on the temperature
      let emoji = temp >= 20 ? "😊" : "😢";
      console.log(`Emoji determined: ${emoji}`); // Debug log

      // Update the HTML content
      let h1Element = document.querySelector("h1");
      console.log(`H1 Element: ${h1Element}`); // Debug log

      if (h1Element) {
        h1Element.innerHTML = `${emoji}<br />Currently ${temp}° in ${city}`;
      } else {
        console.error("H1 element not found!");
      }
    } else {
      alert("Please enter a valid number for the temperature.");
    }
  } else {
    alert("Please enter a valid city name.");
  }
}
