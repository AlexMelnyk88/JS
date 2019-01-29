$(document).ready(function(){
    let $page = $(".page");
    let $Bnt_Next =$(".next");    
    let $Bnt_Prev =$(".prev");  
       $Bnt_Next.on("click",function(){
                   let $index = $page.filter(".active").index();
                   if($index == $page.length-1){
                       $index = -1;
                   }
           $page.eq($index+1).addClass("active").siblings().removeClass("active"); 
})                 
       $Bnt_Prev.on("click",function(){
                   let $index = $page.filter(".active").index();
                   if($index == $page.length-1){
                       $index = -1;
                   }
           $page.eq($index-1).addClass("active").siblings().removeClass("active");
      })               
}) 