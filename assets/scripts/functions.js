
//FUNCIONES:
function pastEvents (arrayEntrada, date){
	const eventsOfThePast=[];
	arrayEntrada.forEach(event =>{
		if (event.date<date){
			eventsOfThePast.push(event)
		}
	})
	return eventsOfThePast;
}

function upcomingEvents (arrayEntrada, date){
	const eventsToCome=[];
	arrayEntrada.forEach(event =>{
		if (event.date>date){
			eventsToCome.push(event)
		}
	})
	return eventsToCome;
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

function amazingFilter(array,container,text,ruta="./"){
	window.event.preventDefault();
    let fisrstRound = filterByInputSearch(array,text);
    let secondRound = filterByCheckboxes (fisrstRound);
    cardsMakerII(secondRound,container,ruta);
}

function createDetails(object,target){
	let event = document.createElement("div");
	event.className= "cardDetails d-flex flex-row flex-grow-1 w-100"
	event.innerHTML= `<img src=${object.image} class="d-flex flex-column card-img-top details-img object-fit-cover" alt="cardDetail">
					<div class="card-body">
						<h5 class="card-title">${object.name}</h5>
						<p class="card-text">${object.description}</p>
						<dl class="card-text d-flex flex-wrap justify-content-baseline gap-3 m-0">
							<dt>Date:</dt>
							<dd>${object.date}</dd>									
						</dl>
						<dl class="card-text d-flex flex-wrap justify-content-baseline gap-3 m-0">
							<dt>Category:</dt>
							<dd>${object.category}</dd>
						</dl>
						<dl class="card-text d-flex flex-wrap justify-content-baseline gap-3 m-0">
							<dt>Place:</dt>
							<dd>${object.place}</dd>
						</dl>
						<dl class="card-text d-flex flex-wrap justify-content-baseline gap-3 m-0">
							<dt>Capacity:</dt>
							<dd>${object.capacity}</dd>
						</dl>
						<dl class="card-text d-flex flex-wrap justify-content-baseline gap-3 m-0">
							<dt>Assistance:</dt>
							<dd>${object.assistance}</dd>
						</dl>
						<dl class="card-text d-flex flex-wrap justify-content-baseline gap-3">
							<dt>Price:</dt>
							<dd>${object.price}</dd>
						</dl>
						<div class="d-flex flex-Wrap justify-content-end">
							<a href="javascript:history.back()" class="d-flex btn btn-details align-self-end w-50 go bg-primary text-light">Go Back</a>
						</div>
					</div>`;
	return target.appendChild(event);
}


function settingCategoryCheckBoxes(array) {
	let category = array.map(event => event.category);
	let setCategory = new Set(category);
	let arrayCategory = Array.from(setCategory);
	let checksCategories = document.getElementById('category_checks');
	let fragment = document.createDocumentFragment();
	arrayCategory.forEach((category)=>{
		let check = document.createElement("label");
		check.classList = 'col-12 col-md';
		check.htmlFor = `${category.toLowerCase()}`;
		check.innerHTML = `<input type="checkbox" name="${category.toLowerCase()}" id="${category.toLowerCase()}" value="${category.toLowerCase()}">${category}`;
		fragment.appendChild(check);
	})
	return checksCategories.insertBefore(fragment,search);
}


function filterByCheckboxes (array){
	let checkBoxes = document.querySelectorAll("input[type='checkbox']");
	let arrChBoxes=Array.from(checkBoxes);
	let arrChBoxesChecked=arrChBoxes.filter(check=>check.checked);
	let arrChBoxesCheckedValues=arrChBoxesChecked.map(checkChecked=>checkChecked.value);
	let filteredEvents=array.filter(event => arrChBoxesCheckedValues.includes(event.category.toLowerCase()));
	if(arrChBoxesChecked.length>0){
		return filteredEvents;
	}
	return array;
} 


//CODIGO GUARDADO:

// input.addEventListener('input', amazingFilter);
//  input.addEventListener('input',()=>{
// 	let filteredEvents=filterByInputSearch(events, input.value);
// 	cardsMakerII(filteredEvents,placeOfCards);
// })

// checksCategories.addEventListener('change', amazingFilter);
// checksCategories.addEventListener('change',()=>{
// 	let filteredEvents = filterByCheckboxes(events);
// 	cardsMakerII(filteredEvents,placeOfCards);
// })


export {
	cardsMakerII,
	upcomingEvents,
	pastEvents,
	settingCategoryCheckBoxes,
	filterByCheckboxes,
	filterByInputSearch,
	amazingFilter,
	createDetails
}