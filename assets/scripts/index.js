async function getEventsData() {
let data = await fetch('../../back/amazing.json')
  .then(response => response.json())
  .then(data => {

  	settingCategoryCheckBoxes(data.events)
  	cardsMakerII(data.events,placeOfCards,ruta);
  	amazingFilter()
  	return data;
  	console.log(data);
	})
  	 console.log(data);
  	//console.log(data.events);
}  

getEventsData()

//import data from './amazing.js';
//import {cardsMakerII,amazingFilter,settingCategoryCheckBoxes,filterByCheckboxes} from './functions.js';

const placeOfCards = document.getElementById('lot-of-cards');
const input = document.querySelector('input');
const checksCategories = document.getElementById('category_checks');
const ruta="./pages/"


//settingCategoryCheckBoxes(events);
// cardsMakerII(events,placeOfCards,ruta);
// input.addEventListener('input', ()=> {
// 		amazingFilter(events,placeOfCards,input.value,ruta);
// });
// checksCategories.addEventListener('change', ()=> {
// 		amazingFilter(events,placeOfCards,input.value,ruta);
// });

function amazingFilter(array,container,text,ruta="./"){
    let fisrstRound = filterByInputSearch(array,text);
    let secondRound = filterByCheckboxes (fisrstRound);
    cardsMakerII(secondRound,container,ruta);
}


// function amazingFilter(){
//     let fisrstRound = filterByInputSearch(events,input.value);
//     let secondRound = filterByCheckboxes (fisrstRound);
//     cardsMakerII(secondRound,placeOfCards);
// }


 function settingCategoryCheckBoxes(array) {
	let category = array.map(event => event.category);
	let setCategory = new Set(category);
	let arrayCategory = Array.from(setCategory);
	let checksCategories = document.getElementById('category_checks');
	let fragment = document.createDocumentFragment();
	arrayCategory.forEach((category)=>{
		let check = document.createElement("label");
		check.classList = 'col-12 col-md';
		check.htmlFor = `'${category.toLowerCase()}'`;
		check.innerHTML = `<input type="checkbox" name="${category.toLowerCase()}" id="${category.toLowerCase()}" value="${category.toLowerCase()}">${category}`;
		fragment.appendChild(check);
	})
	return checksCategories.insertBefore(fragment,search);
}

function cardsMakerII(array,container,ruta="./"){
	if(array.length == 0){
        container.innerHTML = `<h2 class=" fw-bold">No item match your Search</h2>`
        return
    }
	container.innerHTML=``
	let fragment = document.createDocumentFragment();
	array.forEach(event => {
		let card = document.createElement("div");
		card.innerHTML=`<div class="card d-flex">
					<img src=${event.image} class="card-img-top object-fit-cover" alt="event">
					<div class="card-body d-flex flex-column">
						<h5 class="card-title">${event.name}</h5>
						<p class="card-text flex-grow-1">${event.description}</p>
						<p class="price card-text">Price:${event.price}</p>
						<a href="${ruta}details.html?id=${event._id}" class="btn btn-primary me-auto">view details</a>
					</div>
				</div>`;
		fragment.appendChild(card);
	})
	return container.appendChild(fragment);
}



function filterByInputSearch (array, text){
	let filteredEvents = array.filter(event=>event.name.toLowerCase().includes(text.toLowerCase()));
	return filteredEvents;
}

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





