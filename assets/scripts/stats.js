async function getEventsData() {
    let data = await fetch('../../back/amazing.json')
    .then(response => response.json())
    .then(data => {
  	    return data;
    })

  console.log(data);

//import data from './amazing.js'
    const events = data.events; 

const targetTableI = document.getElementById('events-stats-body'); //   EVENTS STATISTICS
const targetTableII = document.getElementById('upcoming-stats-body'); //UPCOMING EVENTS STATISTICS
const targetTableIII = document.getElementById('past-stats-body'); //   PAST EVENTS STATISTICS


function dataForEventsTable (objectsArray){ 
    let percentOfAssistance = objectsArray.map(event =>{
        return Object.keys(event).includes("assistance") ? Math.round(event.assistance*100/event.capacity) : Math.round(event.estimate*100/event.capacity);
    });
    let largestCapEvent = []; 
    let capacity = 0;
    objectsArray.forEach(event =>{
        event.capacity > capacity ? (capacity = event.capacity , largestCapEvent = event.name) : capacity; 
    })
    //console.log(percentOfAssistance);
    //console.log(capacity);
    let mostAttendedEvent = (objectsArray[percentOfAssistance.indexOf(Math.max(...percentOfAssistance))].name);
    let lessAttendedEvent = (objectsArray[percentOfAssistance.indexOf(Math.min(...percentOfAssistance))].name);
    // console.log(mostAttendedEvent);
    // console.log(lessAttendedEvent);
    // console.log(largestCapEvent);
    // console.log(capacity);
    let dataRowTableOne = {
        highestAttendance: mostAttendedEvent,
        lowestAttendance: lessAttendedEvent,
        largerCapacity: largestCapEvent
    };
    // console.log(dataTableOne);
    return dataRowTableOne
}

//dataForEventsTable(events);


function fillerTableDataTR (container,object){
    // console.log(object);
    let tRow = document.createElement('tr');
    Object.values(object).forEach(value=> {
    let tData = document.createElement("td");
    tData.innerText= value
    tRow.appendChild(tData);
})
    return container.appendChild(tRow)
}

fillerTableDataTR(targetTableI,dataForEventsTable(events));

function pastEvents (arrayEntrada, date){
    const eventsOfThePast=[];
    arrayEntrada.forEach(event =>{
        if (event.date<date){
            eventsOfThePast.push(event)
        }
    })
    return eventsOfThePast;
}

function upcomingEvents (arrayEntry, date){
    const eventsToCome=[];
    arrayEntry.forEach(event =>{
        if (event.date>date){
            eventsToCome.push(event)
        }
    })
    return eventsToCome;
}

function dataForTables (objectsArray,date,eventsFunction) { //  eventsFunction DEPENDS ON WHETHER THEY ARE PAST OR UPCOMING EVENTS.
    const eventsByDate = eventsFunction(objectsArray,date);
    let categories = eventsByDate.map(event => event.category);
    let setCategories = new Set(categories);
    let categoriesKey = Array.from(setCategories)
    let revenue = eventsByDate.map(event => {
         return Object.keys(event).includes("assistance") ? event.assistance*event.price : event.estimate*event.price;
    });
    // let revenueKey = ARRAY DE VALORES AGRUPADOS POR CATEGORIA--- LOS VALORES DEBEN ESTAR EN EL MISMO ORDEN QUE categoriesKey PARA EMPALMAR EN LA TABLA.
    let percentOfAttendance = eventsByDate.map(event => {
        return Object.keys(event).includes("assistance") ? Math.round(event.assistance*100/event.capacity) : Math.round(event.estimate*100/event.capacity);
    })
    //let percentOfAttendanceKey = aRRAY DE VAOLRES AGRUPADOS POR CATEGORIA--- 
    console.log(categories);
    console.log(setCategories);
    console.log(categoriesKey);
    console.log(revenue);
    console.log(percentOfAttendance);
    let dataRowUpcomingTable = [];
    for (let i=0;i<categoriesKey.length;i++){
        let obj = new Object();
        obj.category = categoriesKey[i];
        obj.revenue = revenue[i];
        obj.percentOfAttendance =percentOfAttendance[i];
        dataRowUpcomingTable.push(obj);
    }
    console.log(dataRowUpcomingTable);
    return dataRowUpcomingTable;
}

dataForTables(events,data.currentDate,upcomingEvents);


function fillerTableDataTrII(container,objectsArray){
    objectsArray.forEach(object => {
        fillerTableDataTR(container, object)
    })
}

fillerTableDataTrII(targetTableII,dataForTables(events,data.currentDate,upcomingEvents));

fillerTableDataTrII(targetTableIII,dataForTables(events,data.currentDate,pastEvents));

