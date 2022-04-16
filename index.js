

const input = document.querySelectorAll('input');
const fInput = document.querySelector('.f-input');
const lInput = document.querySelector('.l-input');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const error1 = document.querySelector('.error-1');
const error2 = document.querySelector('.error-2');
const error3 = document.querySelector('.error-3');
const error4 = document.querySelector('.error-4');
const fNameSpan = document.createElement("span");
const lNameSpan = document.createElement('span');
const emailSpan = document.querySelector('span');
const passwordSpan = document.querySelector('span');
const trialButton = document.querySelector('.trial-button');
const registration = document.querySelector('.registration');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;









trialButton.addEventListener('click' , fun);



function fun(e){




    e.preventDefault()

 


if (fInput.value == "" ){


    fInput.appendChild(fNameSpan).textContent="First Name Cannot Be Empty";
    error1.innerHTML = fNameSpan.textContent;
    fInput.style.background = "url(images/icon-error.svg) no-repeat ";
    fInput.style.backgroundPosition =  "95% 50%";
    fInput.classList.add('border');

  
 
    

} if (lInput.value == ""){


    lInput.appendChild(lNameSpan).textContent="Last Name Cannot Be Empty";
    
    error2.innerHTML = lNameSpan.textContent;

    lInput.style.background = "url(images/icon-error.svg) no-repeat ";
    lInput.style.backgroundPosition =  "95% 50%";

    lInput.classList.add('border');

    

}if(!email.value.match(mailformat)){

    email.appendChild(emailSpan).textContent = "Looks Like this is not an email";

    error3.innerHTML = emailSpan.textContent;

    
    email.classList.add('border');

    email.style.background = "url(images/icon-error.svg) no-repeat ";
    email.style.backgroundPosition =  "95% 50%";



}if (password.value == ""){

    password.appendChild(passwordSpan).textContent= "Password Cannot Be Empty";
    error4.innerHTML = passwordSpan.textContent;
    password.classList.add('border');
    


    password.style.background = "url(images/icon-error.svg) no-repeat ";
    password.style.backgroundPosition =  "95% 50%";
    
    
    
    
}


}


