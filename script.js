"use strict";

//-------------VERAYBILS--------------------

let cardWrapper = $(".introwrap__botton");
let btnModal = $(".btn");
let modalCars = $(".cards");
let modalCardWrap = $(".modal--menyu");
let btn = $(".btn");
let btn2 = $(".btn2");
let selectorAlfabit = $("#select2");


// console.log(cardWrapper);




//---------------------DINAMIC CARD-----------------

function renderPraduct(data) {
    cardWrapper.innerHTML="";
    if(data.length>0){
        data.forEach((el) => {
              let card = render("div", "card" ,`
                            <div class="card--top">
                                <img src="${el.img}" alt="${el.name}">
                            </div>
                            <div class="card--botton">
                                <h3>
                                    ${el.name}
                                    <button>
                                        <i class='bx bx-heart'></i>
                                    </button>
                                </h3>
                                <p>${el.nickname}</p>
                                <h4>
                                    <span>${el.kg}</span>
                                    <span>${el.age}</span>
                                </h4>
                            </div>
              `);
            cardWrapper.appendChild(card);
        })
    }
}

renderPraduct(praducts);



//----------------MODAL CARDS--------------------

function modalCard(data) {
    if(data.length>0){
        data.forEach((el) => {
              let card = render("div", "card" ,`
                            <div class="card--top">
                                <img src="${el.img}" alt="${el.name}">
                            </div>
                            <div class="card--botton">
                                <h3>
                                    ${el.name}
                                    <button>
                                       <i class='bx bx-trash-alt' ></i>
                                    </button>
                                </h3>
                                <p>${el.nickname}</p>
                                <h4>
                                    <span>${el.kg}</span>
                                    <span>${el.age}</span>
                                </h4>
                            </div>
              `);

            modalCars.appendChild(card);
        })
    }
}

modalCard(praducts2)

btn.addEventListener("click" , ()=>{
    modalCardWrap.style.display = 'flex';   
})

btn2.addEventListener("click" , ()=>{
    modalCardWrap.style.display = 'none';   
})

//----------------------------------SORT DATA ALFABIT-------------------

selectorAlfabit.addEventListener("change", (el)=>{
    let sortAlfabit = el.target.value
    console.log(sortAlfabit);
    if(sortAlfabit=="Aa-Zz"){
        let praductsSortAlfab = praducts.sort((a,b)=>{
            if(a.name.toLowerCase()<b.name.toLowerCase()){
                return -1;
            }
            return 0;
        })
        renderPraduct(praductsSortAlfab);
    }else if(sortAlfabit=="Zz-Aa"){
        let praductsSortAlfab = praducts.sort((a,b)=>{
            if(a.name.toLowerCase()>b.name.toLowerCase()){
                return -1;
            }
            return 0;
        })
        renderPraduct(praductsSortAlfab);
    }
})

// -------------------------SEARCH DATA---------------------

let searchDataWrap = $(".search-data");
let searcInput = $("#search-input");

searcInput.addEventListener("input",(e)=>{
    let searchData = e.target.value;
    // console.log(searchData);
    let searchName =praducts.filter((el) => {
        return el.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase());
    });

    if(searchData =="") searchName=[];

    renderData(searchName);
})

function renderData(data) {
    searchDataWrap.innerHTML="";
    data.forEach((el)=>{
        let tag = render("h2","titil",`${el.name}`);
        searchDataWrap.appendChild(tag);
    })
}

