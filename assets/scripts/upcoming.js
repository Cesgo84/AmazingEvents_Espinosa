import data from "./amazing.js"
import {cardsMakerII,upcomingEvents,pastEvents,settingCategoryCheckBoxes} from './functions.js'

const placeOfCards = document.getElementById('lot-of-cards');
const eventsToCome = upcomingEvents(data.events,data.currentDate);

settingCategoryCheckBoxes(eventsToCome);
cardsMakerII(eventsToCome,placeOfCards);

