import './css/styles.css';

import { fetchCountries } from './fetchCountries';

import debounce from 'lodash.debounce';

const inputForm = document.querySelector('#search-box');

const DEBOUNCE_DELAY = 300;

const handleFormInput = event => {
    event.preventDefault();

    const seekedCoutry = event.target.value.trim();
    
    
    
    console.log(fetchCountries(seekedCoutry));

}
inputForm.addEventListener('input', handleFormInput);