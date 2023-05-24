function getData() {
  const productNameInput = document.getElementById('countryInput').value;
  const resultBox = document.getElementById('resultBox');
  resultBox.innerHTML = '';

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.data.filter(item => item.productName.toLowerCase().includes(productNameInput.toLowerCase()));
      if (filteredData.length > 0) {
        filteredData.sort((a, b) => b.carbonEmissionRate - a.carbonEmissionRate);

        let resultText = '';

        filteredData.forEach((result, index) => {
          if (index === 0) {
            resultText += `
              <h1>Searched product</h1>
              <div class="card">
                <div class="card-content">
                  <p><strong>Product ID:</strong> ${result.productId}</p>
                  <p><strong>Product Name:</strong> ${result.productName}</p>
                  <p><strong>Product Material:</strong> ${result.productMaterial}</p>
                  <p><strong>Product Location:</strong> ${result.productLocation}</p>
                  <p><strong>Carbon Emission Rate:</strong> ${result.carbonEmissionRate}</p>
                </div>
              </div>
            `;
          } else {
            resultText += `
              <h1>Suggested Product ${index  }</h1>
              <div class="card">
                <div class="card-content">
                  <p><strong>Product ID:</strong> ${result.productId}</p>
                  <p><strong>Product Name:</strong> ${result.productName}</p>
                  <p><strong>Product Material:</strong> ${result.productMaterial}</p>
                  <p><strong>Product Location:</strong> ${result.productLocation}</p>
                  <p><strong>Carbon Emission Rate:</strong> ${result.carbonEmissionRate}</p>
                </div>
              </div>
            `;
          }
        });

        resultBox.innerHTML = resultText;
      } else {
        resultBox.textContent = 'No data available for the entered product name.';
      }
    })
    .catch(error => {
      console.log(error);
      resultBox.textContent = 'An error occurred while fetching the data.';
    });
}
