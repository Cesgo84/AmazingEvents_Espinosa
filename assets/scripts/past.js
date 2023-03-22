let data = await fetch('../../back/amazing.json')
  .then(response => response.json())
  .then(data => {
  	return data;
})
  console.log(data);
  
import {cardsMakerII,pastEvents,amazingFilter,settingCategoryCheckBoxes,filterByCheckboxes} from './functions.js';

const placeOfCards = document.getElementById('lot-of-cards');
const eventsOfThePast = pastEvents(data.events,data.currentDate);
const input = document.querySelector('input');
const checksCategories = document.getElementById('category_checks');

settingCategoryCheckBoxes(eventsOfThePast);
cardsMakerII(eventsOfThePast,placeOfCards);
input.addEventListener('input', ()=> {
		amazingFilter(eventsOfThePast,placeOfCards,input.value);
});
checksCategories.addEventListener('change', ()=> {
		amazingFilter(eventsOfThePast,placeOfCards,input.value);
});