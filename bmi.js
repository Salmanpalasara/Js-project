const form = document.querySelector('form')

// this use case will give you empty  
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()  // this function are used to not save data in server ok 

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.results')
    const message = document.querySelector('.message')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`
    }
    // result.innerHTML = `${height}`;
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        result.innerHTML = `<span>${bmi}</span>`
    }

    if (result <= 18.6) {
        message.innerHTML = 'under weight';
    }
    else if(18.6 < result > 24.6){
        message.innerHTML = 'normal weight';
    }
    else{
        message.innerHTML = 'over weight';
    }
})