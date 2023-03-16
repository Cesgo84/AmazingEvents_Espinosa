import data from './amazing.js';
import {cardsMakerII,upcomingEvents,pastEvents,amazingFilter,settingCategoryCheckBoxes,filterByCheckboxes} from './functions.js';

const placeOfCards = document.getElementById('lot-of-cards');
const events = data.events;
const input = document.querySelector('input');
const checksCategories = document.getElementById('category_checks');
const ruta="./pages/"

settingCategoryCheckBoxes(events);
cardsMakerII(events,placeOfCards,ruta);
input.addEventListener('input', ()=> {
		amazingFilter(events,placeOfCards,input.value,ruta);
});
checksCategories.addEventListener('change', ()=> {
		amazingFilter(events,placeOfCards,input.value,ruta);
});

// function amazingFilter(array,container,text,ruta="./"){
//     let fisrstRound = filterByInputSearch(array,text);
//     let secondRound = filterByCheckboxes (fisrstRound);
//     cardsMakerII(secondRound,container,ruta);
// }


// function amazingFilter(){
//     let fisrstRound = filterByInputSearch(events,input.value);
//     let secondRound = filterByCheckboxes (fisrstRound);
//     cardsMakerII(secondRound,placeOfCards);
// }


// function settingCategoryCheckBoxes(array) {
// 	let category = array.map(event => event.category);
// 	let setCategory = new Set(category);
// 	let arrayCategory = Array.from(setCategory);
// 	let checksCategories = document.getElementById('category_checks');
// 	let fragment = document.createDocumentFragment();
// 	arrayCategory.forEach((category)=>{
// 		let check = document.createElement("label");
// 		check.classList = 'col-12 col-md';
// 		check.htmlFor = `'${category.toLowerCase()}'`;
// 		check.innerHTML = `<input type="checkbox" name="${category.toLowerCase()}" id="${category.toLowerCase()}" value="${category.toLowerCase()}">${category}`;
// 		fragment.appendChild(check);
// 	})
// 	return checksCategories.insertBefore(fragment,search);
// }


// function filterByInputSearch (array, text){
// 	let filteredEvents = array.filter(event=>event.name.toLowerCase().includes(text.toLowerCase()));
// 	return filteredEvents;
// }

// function filterByCheckboxes (array){
// 	let checkBoxes = document.querySelectorAll("input[type='checkbox']");
// 	console.log(checkBoxes);
// 	let arrChBoxes=Array.from(checkBoxes);
// 	let arrChBoxesChecked=arrChBoxes.filter(check=>check.checked);
// 	console.log(arrChBoxesChecked);
// 	let arrChBoxesCheckedValues=arrChBoxesChecked.map(checkChecked=>checkChecked.value);
// 	console.log(arrChBoxesCheckedValues);
// 	let filteredEvents=array.filter(event => arrChBoxesCheckedValues.includes(event.category.toLowerCase()));
// 	console.log(filteredEvents);
// 	if(arrChBoxesChecked.length>0){
// 		return filteredEvents;
// 	}
// 	return array;
// } 





