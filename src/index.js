import './css/styles.css';

import { fetchCountries } from './fetchCountries';

import debounce from 'lodash.debounce';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('#search-box');

const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

const DEBOUNCE_DELAY = 300;

const handleFormInput = event => {
    event.preventDefault();

    const seekedCoutry = event.target.value.trim();
    
    if (seekedCoutry === '') {
    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
    }
    
    fetchCountries(seekedCoutry).then(countries => {
        countryList.innerHTML = ''
        countryInfo.innerHTML = ''
        if (countries.length === 1) {
        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
        countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
        } else if (countries.length >= 10) {
        alertTooManyMatches()
        } else {
        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
        }
    }).catch(alertWrongName)
}
function renderCountryList(countries) {
    const markup = countries
    .map(({ name, flags }) => {
        return `
            <li class="country-list__item">
                
                <h2 class="country-list__name"><img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>   ${name.official}</h2>
            </li>
            `
    })
    .join('')
    return markup
}
function renderCountryInfo(countries) {
    const markup = countries
    .map(({ capital, population, languages }) => {
        return `
        <ul class="country-info__list">
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
        </ul>
        `
    })
    .join('')
    return markup
}
function alertWrongName() {
    Notify.failure('Oops, there is no country with that name')
}
function alertTooManyMatches() {
    Notify.info('Too many matches found. Please enter a more specific name.')
}

inputForm.addEventListener('input', debounce(handleFormInput, DEBOUNCE_DELAY));