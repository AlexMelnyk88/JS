function Slider($slider){
    this.slider = $slider;
    this.LeftArrow  = $slider.find(".left");
    this.RightArrow = $slider.find(".right");
    this.wrap = $slider.find(".wraper");
    
     
    this.RightArrow.on("click",function(){
        this.MoveToRight(); 
    }.bind(this))
    
    this.LeftArrow.on("click",function(){
        this.MoveToLeft(); 
    }.bind(this))
    
}

Slider.prototype.MoveToRight = function(){
      this.wrap.animate({
              marginLeft:"-100%"
      },1000,function(){
          this.wrap.append(this.wrap.children().eq(0));
          this.wrap.css("margin-left","");     
      }.bind(this))
}



Slider.prototype.MoveToLeft = function(){
     this.wrap.prepend(this.wrap.children().last());
     this.wrap.css("margin-left","-100%"); 
   this.wrap.animate({
              marginLeft:""
      },1000)
    
    
}




$("document").ready(function(){
    new Slider($(".container"));
})