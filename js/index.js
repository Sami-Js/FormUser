let $ = element => document.getElementById(element);


let arrayElement = [$('EnvForm'),$('container-form-1'),$('HazardousMaterialsForm'),
                   $('container-form-2'),$('container-form-3'),$('container-form-4')
                   ,$('container-form-5'),$('container-form-6')];
let current = 0 ;
// main btns 
const next = $('Next');
const prev = $('prev');

// pagination 
const pagination = document.querySelectorAll('.pagination > *');

console.log(current)
next.addEventListener('click' , function (){
    if(current >= arrayElement.length - 1) return ;
    arrayElement.forEach((elm) => elm.classList.add('d-none'));

    pagination.forEach((elm) => elm.classList.remove('active'));

    let currentCount = ++current ;

    arrayElement[currentCount].classList.remove('d-none');
    pagination[currentCount].classList.add('active');

    window.scrollTo(0 , 0)
    
})

prev.addEventListener('click' , function (){
    if(current <= 0 ) return ;
    arrayElement.forEach((elm) => elm.classList.add('d-none'));
    pagination.forEach((elm) => elm.classList.remove('active'));

    let currentCount = --current ;
    
    arrayElement[currentCount].classList.remove('d-none');
    pagination[currentCount].classList.add('active');

    window.scrollTo(0 , 0)

})


