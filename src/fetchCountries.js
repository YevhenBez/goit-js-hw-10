export const fetchCountries = name => fetch(`https://restcountries.com/v3.1/all?fields=${name}.official,capital,population,flags.svg,languages`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });