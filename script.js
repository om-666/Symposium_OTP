function getData() {
  const countryInput = document.getElementById('countryInput').value;
  const resultBox = document.getElementById('resultBox');
  resultBox.textContent = '';

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      if (data && Array.isArray(data) && data.length > 0) {
        const jokeData = data.find(obj => obj.country === countryInput);
        if (jokeData) {
          const jokeText = jokeData["Emissions.Sector.Other sectors"];
          resultBox.textContent = jokeText;
        } else {
          resultBox.textContent = 'Data not found for the entered country.';
        }
      } else {
        console.error('Error: Invalid API response');
        resultBox.textContent = 'An error occurred while fetching the data.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultBox.textContent = 'An error occurred while fetching the data.';
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const getDataButton = document.getElementById('getDataButton');
  getDataButton.addEventListener('click', getData);
});
