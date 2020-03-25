//Pagination
// let $ = (element) => document.getElementById(element);

// const forms = [$('EnvForm'), $('rawMForm')];
// let current = 0;


// const next = $('Next');
// const prev = $('prev');

// next.addEventListener('click', switchForm);


// function switchForm() {
//     if (current >= forms.length - 1) return;
//     forms.forEach((elm) => elm.classList.add('d-none'));
//     forms[++current].classList.remove('d-none');
// }


// prev.addEventListener('click', returnForm)

// function returnForm() {
//     if (current === 0) return;
//     forms.forEach((elm) => elm.classList.add('d-none'));
//     forms[--current].classList.remove('d-none');
// }


//Radio btn / text area behaviour (Hide/Unhide)
inputs = document.getElementsByTagName("input")
for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "radio") {
        inputs[i].addEventListener('change', function () {
            textArea = document.getElementById(this.name + "Area")
            label = document.getElementById(this.name + "Label")
            if (this.value == 'True') {
                textArea.hidden = false;
                textArea.disabled = false;
                label.hidden = false;
            }
            else {
                textArea.hidden = true;
                textArea.disabled = true;
                label.hidden = true;
            }
            console.log("hi")
        })
    }
}

//Add Noise
// noiseCount = 1
// noise = document.getElementById("addNoise")
// noise.addEventListener('click', function () {
//     noiseCount += 1
//     $('#noiseBlock').append(`
//     <div class="form-row" id="noise${noiseCount}">
//     <h3>Noise ${noiseCount}</h3>
//     <div class="col-md-12">
//         <div class="col-md-10 mb-1">
//             <label for="source" class="address-inp">Source</label>
//             <input type="text" name="Source" class="form-control" value="Hello">
//         </div>
//         <div class="col-md-10 mb-1">
//             <label for="noiseLevelInsidePremises" class="address-inp">Noise Level Inside Premises
//                 (dBA)</label>
//             <input type="number" name="noiseLevelInsidePremises" class="form-control" value=15>
//         </div>
//         <div class="col-md-10 mb-1">
//             <label for="noiseLevelatBoundaryFence" class="address-inp">Noise Level at Boundary Fence
//                 (dBA)</label>
//             <input type="number" name="noiseLevelatBoundaryFence" class="form-control"value=15>
//         </div>
//         <div class="col-md-10 mb-1">
//             <label for="controlMethods" class="address-inp">Control Methods</label>
//             <input type="text" name="controlMethods" class="form-control" value="Hi">
//         </div>
//         <input hidden type="" name="empty" id="">
//         <button type="button" class="btn btn-md btn-danger form-btn btn-delete" id="noiseBtn${noiseCount}">Delete Noise</button>
//         <hr>
//         </div>
// </div>
//     `)
// })

//Add Material
materialCount = 1
material = document.getElementById("addMaterial")
material.addEventListener('click', function () {
    materialCount += 1
    console.log($('#rawMForm'))

    $('#rawMForm').append(`
    <div class="form-row">
    <div class="header-address">
        <h4>Raw Material ${materialCount} :</h4>
    </div>
    <div class="col-md-12 mb-3">
        <label class="address-inp">Raw Material/Feedstock </label>
        <input type="text" name="RawMaterial" class="form-control">
    </div>
    <div class=" md-2 col-md-12 mb-3">
        <label class="address-inp">Process</label>
        <input type="text" name="Process" class="form-control">
    </div>
</div>
<div class="form-row">
    <div class="col-md-12 mb-3">
        <label class="address-inp">Delivery Method</label>
        <input type="text" name="DeliveryMethod" class="form-control">
    </div>
</div>
<div class="form-row">
    <div class="col-md-12 mb-3">
        <label class="address-inp">Storage Method</label>
        <input type="text" name="StorageMethod" class="form-control">
    </div>
    <div class=" md-2 col-md-12 mb-3">
        <label class="address-inp">On-Site Storage Quantity</label>
        <input type="text" name="StorageMethod" class="form-control">
    </div>
</div>
<div class="form-row">
    <div class="col-md-12 mb-3">
        <label class="address-inp">Max.Hourly Consumption <span class="text-muted">(unit)</span></label>
        <input type="number" name="MaxHourly" class="form-control">
    </div>
    <div class=" md-2 col-md-12 mb-3">
        <label class="address-inp">Annual Consumption<span class="text-muted">(unit)</span></label>
        <input type="number" name="AnnualConsumption" class="form-control">
    </div>
</div>
    `)
})