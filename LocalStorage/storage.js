window.addEventListener('load', function(){
    function renderItems(arr){
        document.querySelector('#formList').innerHTML='';
        //Get a function from renderItems.js
        forEachItems(arr);        
    }
    let arr=[];
    let jsonarr = localStorage.getItem('names');
    if(jsonarr !== null){
        arr = JSON.parse(jsonarr);
        //Get a function from renderItems.js
        forEachItems(arr);
    }
    let form = document.querySelector('#form');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        arr.push({
        name:e.target.elements.firstName.value
        });
        localStorage.setItem('names', JSON.stringify(arr));
        renderItems(arr);
        e.target.elements.firstName.value='';
    })

    })