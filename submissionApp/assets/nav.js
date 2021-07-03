const NAV_KEY = "DISPLAY_NAV_STORAGE";

const addNavButton = document.getElementById("addNavButton");
const rakNavButton = document.getElementById("rakNavButton");
const addPanel = document.getElementById("addPanel");
const rakPanel = document.getElementById("rakPanel");
const rakList = document.getElementById("rakListNav")
const rakNav = document.getElementById("rakNav");
const sedangPanel = document.getElementById("sedangPanel");
const selesaiPanel = document.getElementById("selesaiPanel");
const akanPanel = document.getElementById("akanPanel");

let navObject = {
    currentDisplay,
    isUncompletedChecked,
    isCompletedChecked,
    isPlannedChecked
}

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
        let target = rakList.children[i].children[0];
        if(target.checked){
            rakPanel.children[1].children[i].removeAttribute("hidden");
            if(i==0) navObject.isUncompletedChecked=true;
            else if(i==1) navObject.isCompletedChecked=true;
            else navObject.isPlannedChecked=true;
        }
        else{
            rakPanel.children[1].children[i].setAttribute("hidden",true);
            if(i==0) navObject.isUncompletedChecked=false;
            else if(i==1) navObject.isCompletedChecked=false;
            else navObject.isPlannedChecked=false;
        }
        i++;
    }
});

function loadDisplay(){

}

function saveDisplay(){
    
}

function updateDisplayToStorage(){
    if(isStorageExist()) saveDisplay();
}