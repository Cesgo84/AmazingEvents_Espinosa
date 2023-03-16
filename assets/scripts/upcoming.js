import data from "./amazing.js";
import {cardsMakerII,upcomingEvents,amazingFilter,settingCategoryCheckBoxes,filterByCheckboxes} from './functions.js'; 

const placeOfCards = document.getElementById('lot-of-cards');
const eventsToCome = upcomingEvents(data.events,data.currentDate);
const input = document.querySelector('input');
const checksCategories = document.getElementById('category_checks');

settingCategoryCheckBoxes(eventsToCome);
cardsMakerII(eventsToCome,placeOfCards);
input.addEventListener('input', ()=> {
		amazingFilter(eventsToCome,placeOfCards,input.value);
});
checksCategories.addEventListener('change', ()=> {
		amazingFilter(eventsToCome,placeOfCards,input.value);
});
