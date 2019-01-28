$(document).ready(function(){ 
    let $Input = $(".Input");
    let $Bnt  =$(".list") 
 $Bnt.on('click',function(){
      let $InputValue = $Input.val();
      if(!$InputValue){
        AddMessage();
        Clear();      
 }else{      
     AddNewList();
 }
 })    
 
function AddNewList(){
    $Bnt.on("click",function(){
           let $ul= $("#ul-list");
           $ul.append("<li>" + $Input.val() + "</li>");
           $Input.val("");
           DeleteLi();  
    })         
} 
    
function AddMessage(){
   let $list = $(".list");
   let $text = $("<p>type the text...</p>")
   $text.css({
       "color":"red",
       "font-size":"15px",
       "margin-top":"-5px",
       "margin-bottom":"1px",
       "margin-left":"7px"
            });    
   $list.after($text);
   $Bnt.hide(); 
}
    
function Clear(){
    $Input.on("focus",function(){
     let $list = $(".list+p");
     $list.remove();
     $Bnt.show();
    })
    
}
    
function DeleteLi (){
     $('li').on("click",function(){
          $(this).remove();     
     });   
    
  }                  
})