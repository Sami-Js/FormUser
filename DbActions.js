var esqID
var url = 'http://36868619.ngrok.io/api';
//PATHS
var paths = {
    "EnvForm" : "/EnvForm",
    "rawM" : "/rawM",
    "aux" : "/aux",
    "Products" : "/Products",
    "HazardousMaterials" : "/HazardousMaterials",
    "Fuels" : "/Fuels",
    "AirEmissionsPointSources" : "/AirEmissionsPointSources",
    "FugitiveAirEmissions" : "/FugitiveAirEmissions",
    "WaterConsumption" : "/WaterConsumption",
    "EffluentWastewater" : "/EffluentWastewater",
    "SolidLiquidWaste" : "/SolidLiquidWaste",
    "Noise" : "/Noise",
    "Flare" : "/Flare",
    "Incinerator" : "/Incinerator",
    "LoadUnload" : "/LoadUnload",
    "DredgingOperations" : "/DredgingOperations",
    "OtherInformation" : "/OtherInformation", 
}

//Get next btn
btn = document.getElementById("submit")
    btn.addEventListener('click', function () {
        onClickSubmit()
    })

//On next click
function onClickSubmit() {
    for(var key in paths){
        path = url + paths[key]
        try{
            data = new FormData(document.getElementById(key + "Form"))
            postData(path, data)   
        }catch{}
        // catch{
        //     console.log(`failed submit ${path} where`)
        //     console.log(`key = ${key}`)
        //     console.log(`value = ${paths[key]}`)
        // }
    }
}

//REQUEST SETUP
var xhr = new XMLHttpRequest();
//SEND REQUEST BLOCK
function postData(path, body) {
    xhr.open("post", path, true)
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 200)
            console.log("success")
        else
            console.log("fail")
        var response = JSON.parse(xhr.responseText)

        console.log(response)
    }
    var tempArr = []
    var temp = new Object()
    var count=0
    for (var [key, value] of data.entries()){
        count++
        temp[key] = value
        if (key == "empty")
        {
            count = 0
            tempArr.push(temp)
            temp = new Object()
        }
        console.log(key, value)
    }
    jsonData = {"noise": tempArr}
    console.log(jsonData)
    xhr.send(JSON.stringify(body))
}

//SUBMIT ARRAY OF OBJECTS TEST
document.getElementById("submit").addEventListener('click', function(){
    
})

// "noises": [
//     {
//       "noiseID": 1,
//       "source": "string",
//       "noiseLevelInsidePremises": 0,
//       "noiseLevelatBoundaryFence": 0,
//       "controlMethods": "string",
//       "esqId": 5
//     }
//   ]

// var paths = {
//     env : "/EnvForm",
//     rawMaterials : "/rawM",
//     aux : "/aux",
//     products : "/Products",
//     hazards : "/HazardousMaterials",
//     fuels : "/Fuels",
//     air : "/AirEmissionsPointSources",
//     fugAir : "/FugitiveAirEmissions",
//     water : "/WaterConsumption",
//     effluent : "/EffluentWastewater",
//     solid : "/SolidLiquidWaste",
//     noise : "/Noise",
//     flare : "/Flare",
//     incinerator : "/Incinerator",
//     load : "/LoadUnload",
//     dredge : "/DredgingOperations",
//     other : "/OtherInformation", 
// }