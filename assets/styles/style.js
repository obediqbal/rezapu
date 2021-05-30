let colors = document.querySelectorAll(".color");

for(color of colors){
    color.addEventListener('click',function(event){
        let listBase = document.querySelectorAll(".base-color")
        for(usesBase of listBase){
            usesBase.style.setProperty('--base-color',getComputedStyle(event.target).getPropertyValue('background-color'));
        }
    });
}