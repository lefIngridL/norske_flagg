// Model
const app = document.getElementById('app');

// View
updateView();
function updateView(){
   
    html = /*html*/ `
<div id="flagg"></div>
    `;
    app.innerHTML = html;
}

// Controler
flagg();
function flagg(){
    let j= 0;
    
    while(j<6){
let i = 0;
    for(i;i<6;i++){
        document.getElementById("flagg").innerHTML += `<div class="red">${j}</div>`;
    }
    for(i;i<7; i++){
        document.getElementById("flagg").innerHTML += `<div>${j}</div>`;

    }
    for(i; i<9; i++){
        document.getElementById("flagg").innerHTML += `<div class="blue">${j}</div>`;

    }
    for(i; i<10; i++){
        document.getElementById("flagg").innerHTML += `<div>${j}</div>`;

    }
    for(i; i<22; i++){
        document.getElementById("flagg").innerHTML += `<div class="red">${j}</div>`;

    }  j++; 
    }
    //j= 11;
    while(j<16 && j>10){
    let i = 0;
    for(i;i<6;i++){
        document.getElementById("flagg").innerHTML += `<div class="red">${j}</div>`;
    }
    for(i;i<7; i++){
        document.getElementById("flagg").innerHTML += `<div>${j}</div>`;

    }
    for(i; i<9; i++){
        document.getElementById("flagg").innerHTML += `<div class="blue">${j}</div>`;

    }
    for(i; i<10; i++){
        document.getElementById("flagg").innerHTML += `<div>${j}</div>`;

    }
    for(i; i<22; i++){
        document.getElementById("flagg").innerHTML += `<div class="red">${j}</div>`;

    }  j++; 
    }
}

//rød-hvit-blå-hvit-rød
//hvit-blå-hvit
//blå