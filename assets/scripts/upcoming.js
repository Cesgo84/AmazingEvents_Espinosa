import data from "./amazing.js"
import {cardsMakerII,upcomingEvents,pastEvents} from './functions.js'

const placeOfCards = document.getElementById('lot-of-cards');
const eventsToCome = upcomingEvents(data.events,data.currentDate);

cardsMakerII(eventsToCome,placeOfCards);

