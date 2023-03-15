import data from './amazing.js';
import {cardsMakerII,upcomingEvents,pastEvents,settingCategoryCheckBoxes} from './functions.js'

const placeOfCards = document.getElementById('lot-of-cards');
const events = data.events;
const searchInput = document.getElementById('searchbar');

// searchInput.addEventListener('searchbar', ()=>{
	// let filtered
// }) BUSCANDO!!

// checksCategories.addEventListener('change',()=>{
// 	let filtered
// }) CAMBIANDO!!

function filterByInputSearch (array, text){
	let filteredEvents = array.filter(event=>event.name.toLowerCase().includes(text.tpLowerCase()));
	return filteredEvents
}
// console.log(checksCategories)
function filterByCheckboxes (array){
	let checkBoxes = document.querySelectorAll("input[type='checkbox']");
	console.log(checkBoxes);
} 



settingCategoryCheckBoxes(events);
cardsMakerII(events,placeOfCards);

// console.log(events);
 // console.log(arrayCategory);