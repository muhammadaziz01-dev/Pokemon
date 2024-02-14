//--------------------------TAKRORLANUVCCHI AMALLAR-----------------

//--------------querySelector function-------------
function $(selector) {
    return document.querySelector(selector);
}

//--------------querySelectorAll function-------------
function $$(selector) {
    return document.querySelectorAll(selector);
}

//-------------createElement functions------------------


function render(element, className , htmlContent) {
    let tag = document.createElement(element);
    if(className){
        tag.classList.add(className);
    }
    tag.innerHTML = htmlContent;
    return tag;
}