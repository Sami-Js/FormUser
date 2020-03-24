// names object have array in value 
const arrayFilter = [
    'rawMaterials', 'auxiliariesMaterials',
    'products', 'waterConsumptions',
    'effluentWastewaterDischarges', 'hazardousMaterials', 'airEmissionsPointSources',
    'fugitiveAirEmissions', 'solidLiquidWastes', 'noises',
    'loadingUnloadingOperations', 'dredgingOperations', 'otherInformation'
]

// fun to proccess data in api has key and value only 
function proccessData(obj) {
    let element = Object.entries(obj[0]);

    // clone obj for main array 
    var finalyData = [...element];
    for (let i of arrayFilter) {
        finalyData = finalyData.filter((data) => data[0] !== i);
    }

    return tableContent(finalyData)

}

// func to proccess object api has inside array 
function proccessObject(obj) {
    let element = Object.entries(obj[0]);
    var filterObject = [];
    for (let i of arrayFilter) {
        filterObject.push(element.filter((data) => data[0] == i));
    }

    return filterObject;
}


// fetch('api.json').then((data) => data.json()).then((json) => proccessObject(json));

// func to send data and return </table> 
function tableContent(data) {
    let row = $create('div', 'row');
    let table = $create('table', 'col');

    for (let i = 0; i < data.length; i++) {
        var tr = $create('tr');
        tr.innerHTML = `
        <td><b> ${data[i][0]} </b></td>
        <td>  ${data[i][1]} </td>
        `
        table.appendChild(tr);
    }

    // affter create Data in tr , set the table inside row and send to main tag
    return row.appendChild(table);

}


let current = 0 ;


// function dataCells(data){

// }


// console.log(fetch('api.json').then((data) => data.json()).then(json => console.log(json.flat())))



// function tags(element) {
//     for (let i = 0 ; i < lengthObject ; i++) {
//         var tr = $create('tr');
//         tr.innerHTML = `
//         <td><b> ${element[i][0]} </b></td>
//         <td>  ${element[i][1]} </td>
//         `
//     }
//   return tr ;
// }

// function create box card 
function boxData(title, element) {
    // content box data 
    let card = $create('div', 'card');
    // name address 
    let address = $create('h5', 'card-header');
    // card container 
    let cardBody = $create('div', `card-body `);
    // id to body because set another element inside 
    cardBody.id = `card${++current}`;

    // name address card ( id )
    address.innerHTML = title;
    card.append(address, cardBody);

    cardBody.appendChild(element);

    

    return card ;
}


// createTags with class name 
function $create(name, nameClass = null) {
    //  if name class is null meaning create tag only 
    if (nameClass == null) {
        return document.createElement(name);
    }
    else {
        var elm = document.createElement(name);
        elm.className = nameClass;
    }

    return elm;
}


// fetch element 

async function fetchData(url) {
    const fetching = await fetch(url).then((data) => data.json());
    const data = await fetching;

    const mainContent = document.getElementById('content-data');

          mainContent.appendChild(boxData('information' , proccessData(data)));
    
    const cardBody = document.getElementById('card1');
    const dataObject = proccessObject(data);
         for(let i of dataObject){
             console.log(i[0][0])
         }

}




document.getElementById('getData').addEventListener('click', function () {
    const link = document.getElementById('dataLink').value;

    fetchData(link);
});








