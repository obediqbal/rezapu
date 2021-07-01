const addNavButton = document.getElementById("addNavButton");
const rakNavButton = document.getElementById("rakNavButton");
const addPanel = document.getElementById("addPanel");
const rakPanel = document.getElementById("rakPanel");
const rakList = document.getElementById("rakListNav")
const rakNav = document.getElementById("rakNav");
const sedangPanel = document.getElementById("sedangPanel");
const selesaiPanel = document.getElementById("selesaiPanel");
const akanPanel = document.getElementById("akanPanel");

addNavButton.addEventListener("click", () => {
    changeFocusTo(addNavButton);
    addPanel.removeAttribute("hidden");
});

rakNavButton.addEventListener("click", () => {
    changeFocusTo(rakNav);
    rakPanel.removeAttribute("hidden");
    rakList.classList.toggle("show");
});

function panelReset() {
    addPanel.setAttribute("hidden", true);
    rakPanel.setAttribute("hidden", true);
    resetAddMessage();
    if(heading.innerText == EDIT_BOOK_HEADING) modeToAdd();
}

function onFocusReset(){
    rakNav.classList.remove("onFocusBg");
    addNavButton.classList.remove("onFocusBg");
}

function changeFocusTo(element) {
    panelReset();
    updateAllPreview();
    onFocusReset();

    element.classList.add("onFocusBg");

    if(element!=rakNav){
        rakList.classList.remove("show");
    }
}

rakList.addEventListener("input", ()=>{
    let i=0
    while(i<3){
        if(rakList.children[i].children[0].checked){
            rakPanel.children[1].children[i].removeAttribute("hidden");
        }
        else{
            rakPanel.children[1].children[i].setAttribute("hidden",true);
        }
        i++;
    }
});