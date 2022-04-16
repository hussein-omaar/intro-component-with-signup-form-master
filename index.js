
const input = document.querySelectorAll('input');
const fInput = document.querySelector('.f-input');
const lInput = document.querySelector('.l-input');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const error1 = document.querySelector('.error-1');
const error2 = document.querySelector('.error-2');
const error3 = document.querySelector('.error-3');
const error4 = document.querySelector('.error-4');
const trialButton = document.querySelector('.trial-button');
const registration = document.querySelector('.registration');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



trialButton.addEventListener('click' , fun);



function fun(e){

    e.preventDefault();

    if (fInput.value == "" ){

        error1.textContent = "First Name Cannot Be Empty";        
        fInput.style.background = "url(images/icon-error.svg) no-repeat ";
        fInput.style.backgroundPosition =  "95% 50%";
        fInput.classList.add('border');
    } 

    if (lInput.value == ""){


        error2.textContent = "Last Name Cannot Be Empty";   
        lInput.style.background = "url(images/icon-error.svg) no-repeat ";
        lInput.style.backgroundPosition =  "95% 50%";
        lInput.classList.add('border'); 

    }


    if(!email.value.match(mailformat)){

        error3.textContent = "Looks Like this is not an email";           
        email.classList.add('border');

        email.style.background = "url(images/icon-error.svg) no-repeat ";
        email.style.backgroundPosition =  "95% 50%";

    }


    if (password.value == ""){

        error4.textContent = "Password Cannot Be Empty";  
        password.classList.add('border');
        password.style.background = "url(images/icon-error.svg) no-repeat ";
        password.style.backgroundPosition =  "95% 50%";
        
        
    }


}