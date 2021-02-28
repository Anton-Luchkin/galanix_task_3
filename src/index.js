import './styles.css';
import debounce from 'lodash.debounce';
import countryTpl from './tamplates/countryTpl.hbs';

const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
const countryList = document.querySelector('.country-list');

function fetchCountries(searchQuery) {
   fetch(searchQuery)
      .then(response => response.json())
      .then(data => {
         const tableData = countryTpl(data);
         countryList.insertAdjacentHTML('beforeend', tableData);
         console.log(data);
      });
}

submitBtn.addEventListener('click',
   debounce((event => {
      const searchQuery = `http://universities.hipolabs.com/search?country=${input.value}`;
      fetchCountries(searchQuery)
   }))
);

resetBtn.addEventListener('click',
   function cleaner() {
   input.value = '';
   countryList.innerHTML = '';
}
);
