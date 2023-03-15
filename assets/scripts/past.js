import data from "./amazing.js"
import {cardsMakerII,upcomingEvents,pastEvents,settingCategoryCheckBoxes} from './functions.js'

const placeOfCards = document.getElementById('lot-of-cards');
const eventsOfThePast = pastEvents(data.events,data.currentDate);


settingCategoryCheckBoxes(eventsOfThePast);
cardsMakerII(eventsOfThePast,placeOfCards);


