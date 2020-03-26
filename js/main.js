// names object have array in value 
const arrayFilter = [
    'rawMaterials', 'auxiliariesMaterials',
    'products', 'waterConsumptions',
    'effluentWastewaterDischarges', 'hazardousMaterials', 'airEmissionsPointSources',
    'fugitiveAirEmissions', 'solidLiquidWastes', 'noises',
    'loadingUnloadingOperations', 'dredgingOperations', 'otherInformation'
]

let valueObject = false;

function checkForAllValue(data) {
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i][1])){
            return valueObject = false;
        }
    }

    return valueObject = true;
}


// fun to proccess data in api has key and value only 
function proccessData(obj) {
    let element = Object.entries(obj);

    // if materials not has array of object meaning names in arrayFilter have value null create table direct 
    checkForAllValue(element) ;

    if (valueObject) {
        return tableContent(element);
    }

    // clone obj for main array 
    var finalyData = [...element];
    for (let i of arrayFilter) {
        finalyData = finalyData.filter((data) => data[0] !== i );
    }

    return tableContent(finalyData)

}

// func to proccess object api has inside array 
function proccessObject(obj) {
    let element = Object.entries(obj);
    var filterObject = [];
    for (let i of arrayFilter) {
        filterObject.push(element.filter((data) => data[0] == i));
    }

    return filterObject;
}



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


let current = 0;

// function create box card 
function boxData(title, element, value) {
    let mainBox = $create('div', 'container-card');
    // content box data 
    let card = $create('div', 'card');
    // name address 
    let address = $create('h5', 'card-header');
    // card container 
    let cardBody = $create('div', `card-body `);

    // if true meaning calling by main tag , and if flase don't create id because this child 
    if (value) {
        // id to body because set another element inside 
        cardBody.id = `card${++current}`;
        card.className += ' style-card';
        
    }

    mainBox.appendChild(card);
    // name address card ( id )
    address.innerHTML = title;
    card.append(address, cardBody);

    cardBody.appendChild(element);



    return card;
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


// finaly func to get form 
function getData(elm) {
    const mainContent = document.getElementById('content-data');

    mainContent.appendChild(boxData(`
    <span>esqId#<b>${elm.esqId}</b></span>
     <button class="btn btn-danger">delete</button>`
     , proccessData(elm), true));

    const cardBody = document.getElementById(`card${current}`);
    if (!valueObject) {
        const dataObject = proccessObject(elm);
        // save entries Object ;
        var objectData;
        for (let i of dataObject) {
            if (i[0][0] === 'dredgingOperations') {
                objectData = Object.entries(i[0][1]);
            } else {
                //  convert object in array in table 
                objectData = Object.entries(i[0][1][0]);
            }
            // create card for object and append inside card
            cardBody.appendChild(boxData(i[0][0], tableContent(objectData), false))
        }
    }

}

// timer to sppiner message 
function timer(message, nameClass, timer) {
    // create spinner 
    const contentSpinner = document.getElementById('content-spinner');

    contentSpinner.innerHTML = `
    <div class="spinner-border text-primary" role="status">
    </div>
    `
    setTimeout(() => contentSpinner.innerHTML = ` <span class="${nameClass}">${message}</span>`, timer);
    return setTimeout(() => {
        contentSpinner.children[0].remove()
        clicker = true;
    }, 3000);
}

// fetch element 
async function fetchData(url) {

    const fetching = await fetch(url).then((data) => {
        clicker = false;
        if (data.status === 200 && document.getElementById('dataLink').value) {
            timer('Success', 'green', 1000);
        } else {
            timer('falied', 'red', 1000);
        }
        return data.json();
    });

    const data = await fetching;
    for (let i = 0; i < data.length; i++) {
        getData(data[i]);
    }

}

//  checker click
let clicker = true;

document.getElementById('getData').addEventListener('click', function () {
    document.getElementById('content-data').innerHTML = '';
    if (!clicker) return;
    const link = document.getElementById('dataLink').value;
    fetchData(link);
});


// remove data
const containerCard = document.getElementById('content-data');

function alert(nameClass , title ){
 // create element has massege to delete
 let alert = $create('div' , `alert alert-${nameClass} text-center`);
 alert.innerHTML = title ;

 containerCard.insertAdjacentElement('beforebegin' , alert );

 return  setTimeout(() => document.querySelector('.alert').remove() , 2500 );
}

containerCard.addEventListener('click', function (e){
    if(e.target.classList.contains('btn-danger')){
        // access to id this item
       var esqID = e.target.previousElementSibling.children[0].innerHTML ;
       // parent element 
       var parent =  e.target.parentElement.parentElement ;
       fetch(`http://e6a39d45.ngrok.io/api/EnvForm/${esqID}`, { method: 'DELETE'}).then(data =>{
           if(data.status === 200){
              parent.remove();
              alert('success' , 'success ');
           }
       }).catch((err) => {
             alert('danger' , 'failed ');
       });

    }
})

