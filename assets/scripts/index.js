import data from './amazing.js';

const placeOfCards = document.getElementById('lot-of-cards');
const {events} = data;
const {currentDate} = data;

let cards = '';

function cardsMaker(array, date){
	for(event of array){
		cards = cards + `<div class="card">
					<img src=${event.image} class="card-img-top" alt="event">
					<div class="card-body">
						<h5 class="card-title">${event.name}</h5>
						<p class="card-text">${event.description}</p>
						<p class="price card-text">Price:${event.price}</p>
						<a href="./pages/details.html" class="btn btn-primary">view details</a>
					</div>
				</div>`
	}
	return cards;
}

cardsMaker(events, currentDate)
console.log(cards);

placeOfCards.innerHTML = cards
