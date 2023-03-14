import data from "./amazing.js"
import {cardsMakerII,upcomingEvents,pastEvents,gettingCategories,categoryChecks} from './functions.js'

const placeOfCards = document.getElementById('lot-of-cards');
const eventsToCome = upcomingEvents(data.events,data.currentDate);
const arrayCategory = gettingCategories(eventsToCome);
const checksCategories = document.getElementById('category_checks')

categoryChecks(arrayCategory,checksCategories);
cardsMakerII(eventsToCome,placeOfCards);

