const buttons = document.querySelectorAll('.button')
    // console.log(button);
const body = document.querySelector("body")

    buttons.forEach(function (button){
        console.log(button);
        button.addEventListener('click', function(e){
            // console.log(e);
            // console.log(e.target);
            if(e.target.id === 'grey'){
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === 'red'){
                body.style.backgroundColor = e.target.id
                // body.style.color = "white"
            }
            if(e.target.id === 'aqua'){
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === 'orange'){
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === 'blue'){
                body.style.backgroundColor = e.target.id
            }
            if(e.target.id === 'pink'){
                body.style.backgroundColor = e.target.id
            }
           if (e.target.id === 'brown') {
                body.style.background = e.target.id
           }
        })
    })