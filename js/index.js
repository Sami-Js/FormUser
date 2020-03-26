let $ = element => document.getElementById(element);


let arrayElement = [$('EnvForm'),$('container-form-1'),$('HazardousMaterialsForm'),
                   $('container-form-2'),$('container-form-3'),$('container-form-4')
                   ,$('container-form-5'),$('container-form-6')];
let current = 0 ;
// main btns 
const next = $('Next');
const prev = $('prev');



function switchSlide(counter , cond){
    if(current === cond) return ;
    arrayElement.forEach((elm) => elm.classList.add('d-none'));
    arrayElement[current].classList.remove('d-none');
}

next.addEventListener('click' , function (){
    switchSlide(++current , arrayElement.length - 2  ) ;
})
prev.addEventListener('click' , function () {
    switchSlide(--current , 1 );
})


