import {cardsMakerII, amazingFilter, settingCategoryCheckBoxes, filterByCheckboxes, filterByInputSearch} from './functions.js';

async function getEventsData() {
	let data = await fetch('../../back/amazing.json')
  	.then(response => response.json())
  	.then(data => {
  		const events=data.events
  		settingCategoryCheckBoxes(events)
  		cardsMakerII(events,placeOfCards,ruta);
		input.addEventListener('input', ()=> {
			amazingFilter(events,placeOfCards,input.value,ruta);
		})
		checksCategories.addEventListener('change', ()=> {
			amazingFilter(events,placeOfCards,input.value,ruta);
		})
  	return data;
	}).catch ((error) => console.error(error)) 
  	 console.log(data);
}  

getEventsData()

const placeOfCards = document.getElementById('lot-of-cards');
const input = document.querySelector('input');
const checksCategories = document.getElementById('category_checks');
const ruta="./pages/"

