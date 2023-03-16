import data from './amazing.js';
import {createDetails} from './functions.js'

const events=data.events;
const queryString = location.search;
const params = new URLSearchParams(queryString);
const Id = params.get('id');
const event = events.find((event) => event._id == Id);
const detailContainer = document.querySelector('#eventDetail');
createDetails(event,detailContainer);





