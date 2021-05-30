let colors = document.querySelectorAll(".color");

for(color of colors){
    color.addEventListener('mouseover',function(event){
        let listBase = document.querySelectorAll(".base-color")
        for(usesBase of listBase){
            usesBase.style.setProperty('--themeColor',getComputedStyle(event.target).getPropertyValue('background-color'));
        }
    });
}