function pastEvents (arrayEntrada, date){
	const eventsOfThePast=[];
	for (let event of arrayEntrada) {
		if (event.date<date){
			eventsOfThePast.push(event)
		}
	}
	return eventsOfThePast;
}

function upcomingEvents (arrayEntrada, date){
	const eventsToCome=[];
	for (let event of arrayEntrada) {
		if (event.date>date){
			eventsToCome.push(event)
		}
	}
	return eventsToCome;
}

function cardsMakerII(array,container){
	let fragment = document.createDocumentFragment();
	for(let i=0;i<array.length;i++){
		let card = document.createElement("div");
		card.innerHTML=`<div class="card d-flex">
					<img src=${array[i].image} class="card-img-top" alt="event">
					<div class="card-body d-flex flex-column">
						<h5 class="card-title">${array[i].name}</h5>
						<p class="card-text flex-grow-1">${array[i].description}</p>
						<p class="price card-text">Price:${array[i].price}</p>
						<a href="./pages/details.html" class="btn btn-primary me-auto">view details</a>
					</div>
				</div>`;
		fragment.appendChild(card);
		console.log(fragment);
	}
	return container.appendChild(fragment);
}

function gettingCategories(array) {
	let category = array.map(event => event.category);
	let setCategory = new Set(category);
	let arrayCategory = Array.from(setCategory);
	return arrayCategory;
}

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


// function cardsMaker(array,targetClass){
// 	const placeOfCards = document.getElementById(targetClass);
// 	let cards = '';
// 	for(event of array){
// 		cards = cards + `<div class="card d-flex">
// 					<img src=${event.image} class="card-img-top" alt="event">
// 					<div class="card-body d-flex flex-column">
// 						<h5 class="card-title">${event.name}</h5>
// 						<p class="card-text flex-grow-1">${event.description}</p>
// 						<p class="price card-text">Price:${event.price}</p>
// 						<a href="./pages/details.html" class="btn btn-primary me-auto">view details</a>
// 					</div>
// 				</div>`
// 	}
// 	return placeOfCards.innerHTML = cards;
// }

export {
	cardsMakerII,
	//cardsMaker,
	upcomingEvents,
	pastEvents,
	gettingCategories,
	categoryChecks
}