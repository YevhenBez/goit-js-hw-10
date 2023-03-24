import './css/styles.css';

import { fetchCountries } from './fetchCountries';

import debounce from 'lodash.debounce';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('#search-box');

const DEBOUNCE_DELAY = 300;

const handleFormInput = event => {
    event.preventDefault();

    const seekedCoutry = event.target.value.trim();
    
    
    
    fetchCountries(seekedCoutry).then(response => {
        console.log(response);
    }).catch(error => { console.log(error); })
}
inputForm.addEventListener('input', debounce(handleFormInput, DEBOUNCE_DELAY));