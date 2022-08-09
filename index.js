//add an eventListener to the from
const form = document.querySelector('#dateForm'); // select form
const dayInput = document.querySelector('#dayInput'); // select input box from form
const monthInput = document.querySelector('#monthInput'); // select input box from form
const yearInput = document.querySelector('#yearInput'); // select input box from form



//is date valid
Date.prototype.isValid = function () {
    // If the date object is invalid it
    // will return 'NaN' on getTime() 
    // and NaN is never equal to itself.
    return this.getTime() === this.getTime();
};

const ageValidation = function (dob) {
    let date= new Date();
    console.log((date.getTime()-dob)/31556952000);
    return ((date.getTime()-dob)/31556952000)>=15? true: false; 
}
//form event listener 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;


    const date = new Date(year + "/" + month + "/" + day);
    console.log(date.isValid());
    if (date.isValid()) {
        if(ageValidation(date.getTime())){
            window.location.href="https://www.google.com/";
        }else{
            alert('Your age is under 15');
        }
        
    } else {
        alert('Invalid Date');
    }





});



