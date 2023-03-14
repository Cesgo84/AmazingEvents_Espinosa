import data from "./amazing.js"
import {cardsMakerII,upcomingEvents,pastEvents,gettingCategories,categoryChecks} from './functions.js'

const placeOfCards = document.getElementById('lot-of-cards');
const eventsOfThePast = pastEvents(data.events,data.currentDate);
const arrayCategory = gettingCategories(eventsOfThePast);
const checksCategories = document.getElementById('category_checks')

categoryChecks(arrayCategory,checksCategories);
cardsMakerII(eventsOfThePast,placeOfCards)


