const NAV_KEY = "DISPLAY_NAV_STORAGE";

const addNavButton = document.getElementById("addNavButton");
const rakNavButton = document.getElementById("rakNavButton");
const addPanel = document.getElementById("addPanel");
const rakPanel = document.getElementById("rakPanel");
const rakList = document.getElementById("rakListNav")
const rakNav = document.getElementById("rakNav");

const sedangCheck = rakList.children[0].children[0];
const selesaiCheck = rakList.children[1].children[0];
const akanCheck = rakList.children[2].children[0];

const sedangPanel = document.getElementById("sedangPanel");
const selesaiPanel = document.getElementById("selesaiPanel");
const akanPanel = document.getElementById("akanPanel");

const findNav = document.getElementById("findNav").children[0];

let navObject = {
    currentDisplay : "rak",
    isUncompletedChecked : false,
    isCompletedChecked : false,
    isPlannedChecked : false
}

addNavButton.addEventListener("click", () => {
    navObject.currentDisplay = "tambah";

    updateDisplayToStorage();
    refreshDisplay();
});

rakNavButton.addEventListener("click", () => {
    navObject.currentDisplay = "rak";
    
    updateDisplayToStorage();
    refreshDisplay();

    rakList.classList.toggle("hide");
});

function panelReset() {
    addPanel.setAttribute("hidden", true);
    rakPanel.setAttribute("hidden", true);
    resetAddMessage();
    if (heading.innerText == EDIT_BOOK_HEADING) modeToAdd();
}

function onFocusReset() {
    rakNav.classList.remove("onFocusBg");
    addNavButton.classList.remove("onFocusBg");
}

function changeFocusTo(element) {
    panelReset();
    updateAllPreview();
    onFocusReset();

    element.classList.add("onFocusBg");

    if (element != rakNav) {
        rakList.classList.add("hide");
    }
}

sedangCheck.addEventListener("input", function(){
    if(sedangCheck.checked) navObject.isUncompletedChecked=true;
    else navObject.isUncompletedChecked=false;

    updateDisplayToStorage();
    refreshDisplay();
});

selesaiCheck.addEventListener("input", function(){
    if(selesaiCheck.checked) navObject.isCompletedChecked=true;
    else navObject.isCompletedChecked=false;

    updateDisplayToStorage();
    refreshDisplay();
});

akanCheck.addEventListener("input", function(){
    if(akanCheck.checked) navObject.isPlannedChecked=true;
    else navObject.isPlannedChecked=false;

    updateDisplayToStorage();
    refreshDisplay();
});

function refreshDisplay() {
    if(navObject.currentDisplay=="rak") {
        changeFocusTo(rakNav);
        rakPanel.removeAttribute("hidden");
    }
    else if(navObject.currentDisplay=="tambah") {
        changeFocusTo(addNavButton);
        addPanel.removeAttribute("hidden");
    }
    if(navObject.isUncompletedChecked) {
        sedangCheck.checked=true;
        sedangPanel.removeAttribute("hidden");
    }
    else {
        sedangCheck.checked=false;
        sedangPanel.setAttribute("hidden", true);
    }
    if(navObject.isCompletedChecked) {
        selesaiCheck.checked=true;
        selesaiPanel.removeAttribute("hidden");
    }
    else {
        selesaiCheck.checked=false;
        selesaiPanel.setAttribute("hidden", true);
    }
    if(navObject.isPlannedChecked) {
        akanCheck.checked=true;
        akanPanel.removeAttribute("hidden");
    }
    else {
        akanCheck.checked=false;
        akanPanel.setAttribute("hidden", true);
    }
}

function loadDisplay() {
    let item = JSON.parse(localStorage.getItem(NAV_KEY));
    if (item != null) navObject = item;
    refreshDisplay();
}

function saveDisplay() {
    let item = JSON.stringify(navObject)
    localStorage.setItem(NAV_KEY, item);
}

function updateDisplayToStorage() {
    if (isStorageExist()) saveDisplay();
}

findNav.addEventListener("input",function(){
    let keyword = findNav.value;
    findFilter(keyword);
});

function findFilter(keyword){
    const bukubukuElement = document.querySelectorAll(".book-list");
    hideBuku();
    for(bukuElement of bukubukuElement){
        if(bukuElement.children[0].children[0].innerText.toLowerCase().includes(keyword.toLowerCase())){
            showBuku(bukuElement);
        }
    }
}