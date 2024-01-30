
document.getElementById('countryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const countryName = document.getElementById('countryInput').value;

    
    fetchCountryInformation(countryName);
});


function fetchCountryInformation(countryName) {
    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => updateCountryInformation(data[0]))
        .catch(error => console.error('error fetching data:', error));
}


function updateCountryInformation(countryData) {
    
    const countryFlag = document.getElementById('countryFlag');
    const countryInfoBox = document.getElementById('infoBox');
    
    countryFlag.src = countryData.flags.png;
    countryInfoBox.innerHTML = `
        <h5 class="card-title">${countryData.name.common}</h5>
        <p class="card-text">Capital: ${countryData.capital[0]}</p>
        <p class="card-text">Languages: ${countryData.languages}</p>`;
        
}

