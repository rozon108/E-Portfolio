let contrastToggle = false;
let isModalOpen = false;
let scaleFactorMoveSmallIcons =1/20;


//To send message to us
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible" ;

    

    emailjs.sendForm(
        'service_638l3p6',
        'template_2t5063a',
        event.target,
        'KSmalh_y7_ETD6Aqn'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += "  modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("Email Sevice is temporarily unavailable. Please contact me directly: rojan108p@gmail.com");
    })
}

//for opening and closing Modal(Contact PopUp)

function toggleMenu(){
    //chnage envelope icon
    const envelopeIcon = document.querySelector('.envelope');
    envelopeIcon.classList.toggle('fa-envelope-open-text');

    //actually opening and closing
    if(isModalOpen){
            isModalOpen =false;
           return document.body.classList.remove("modal--open");
           
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open";
 
    

   
}


// Dark/Light Mode Toggle

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
}

//to move icons as we move mouse
function moveSmallIcons(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactorMoveSmallIcons;
    const y= event.clientY * scaleFactorMoveSmallIcons;
    for(let i = 0; i<shapes.length; ++i){
        const numODD=i%2 !==0;
        const boolINT = numODD? -1:1;
        shapes[i].style.transform = `translate(${x*boolINT}px, ${y*boolINT}px) rotate(${x}deg) `;
    }

}

//change ICons
function changeIcon(icon){
    icon.classList.toggle('fa-envelope-open-text');
} 


const mailButton = document.querySelector('.envelope');
const testBtn = document.querySelector('.envv');
function test(){
    const testBtn = document.querySelector('.envv');
    testBtn.style.color='green';
}
function test3(){
    const testBtn = document.querySelector('.envv');
  
    testBtn.innerHTML= 'helooo';
}

function test2(){
    const testBtn = document.querySelector('.envv');
    testBtn.classList.toggle('envy');

}


function test5(){
    const testBtn5 = document.querySelector('.envelope2');
    testBtn5.classList.toggle('fa-envelope-open-text');
    //testBtn5.classList.remove('fa-envelope-open-text');

}


