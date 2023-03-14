import data from './amazing.js';
import {cardsMakerII,upcomingEvents,pastEvents,gettingCategories} from './functions.js'

const placeOfCards = document.getElementById('lot-of-cards');
const events = data.events;
const arrayCategory = gettingCategories(events);
const checksCategories = document.getElementById('category_checks')

function categoryChecks(array,container){
	let fragment = document.createDocumentFragment();
	for(let i=0;i<array.length;i++){
		let check = document.createElement("label");
		console.log([check]);
		check.classList = 'col-12 col-md';
		check.htmlFor = `'${array[i].toLowerCase()}'`;
		check.innerHTML = `<input type="checkbox" name="${array[i].toLowerCase()}" id="${array[i].toLowerCase()}" value="${array[i].toLowerCase()}">${array[i]}`;
		fragment.appendChild(check);
		console.log(fragment);
	}
	return container.insertBefore(fragment,search);
}

categoryChecks(arrayCategory,checksCategories);

cardsMakerII(events,placeOfCards);
console.log(events);

console.log(arrayCategory);