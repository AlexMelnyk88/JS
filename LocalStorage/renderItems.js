//RenderItems
function forEachItems(arr){
    arr.forEach(element => {
        let elem = document.createElement('p');
        elem.textContent = element.name;
        document.querySelector('#formList').appendChild(elem);
    });        
};

// to count how many items are in array
function amount(formsValues){
      let res = document.querySelector('#amount')
    return res.textContent = formsValues.length-1;
  }