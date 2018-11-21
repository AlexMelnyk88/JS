window.onload = function () {
      action.init();
      action.paintOverCells();
     
    
  };
    var action={
        
        init: function() {
         this.table = document.querySelector("table");
         this.y=0;
         this.x=0;
              
        },
        
        paintOverCells: function() {
            var tds = this.table.querySelectorAll("td");
            for(var i=0; i<tds.length; i++){
              tds[i].style.background="gray";
           }
            var coordinates= this.table.querySelectorAll("tr")[this.y].children[this.x];
            coordinates.style.background="red";
        
        },
        
        up: function()   {
              if(this.y > 0) { 
               this.y--;     
               this.paintOverCells();
           }   
        },
        
         down: function()   {
               if(this.y < 4) { 
               this.y++;     
               this.paintOverCells();
           }
             
        },
    
        left: function()   {
           if(this.x > 0) { 
               this.x--;     
               this.paintOverCells();
           }
        },
        
        right:  function()   {
                 if(this.x < 5){
                 this.x++;     
                 this.paintOverCells();
            }
        }    
    };
    
       