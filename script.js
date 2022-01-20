"use strict"

var inputVardas = document.getElementsByTagName("input")[0];
var inputPavarde = document.getElementsByTagName("input")[1];
var inputAmzius = document.getElementsByTagName("input")[2];

var buttonPrideti = document.getElementsByTagName("button")[0];
var buttonIstrintiPirma = document.getElementsByTagName("button")[1];
var buttonIstrintiPaskutini = document.getElementsByTagName("button")[2];

var table = document.getElementsByTagName("table")[0];




// inputVardas.addEventListener("keydown", function(e){
//     if(e.keyCode == 13){
//         var tr = document.createElement("tr");
//         tr.innerHTML = `<td>${inputVardas.value}</td><td>${inputPavarde.value}</   td><td>${inputAmzius.value}</td>`
//         table.append(tr);
//         inputVardas.value = "";
//         inputPavarde.value = "";
//         inputAmzius.value = "";
//     }
// })



buttonPrideti.addEventListener("click", function(){
    if(inputAmzius.value < 0){
        inputAmzius.value = "";
    }
    else if(inputVardas.value && inputPavarde.value && inputAmzius.value){
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${inputVardas.value}</td><td>${inputPavarde.value}</td><td>${inputAmzius.value}</td>`
    table.append(tr);
    inputVardas.value = "";
    inputPavarde.value = "";
    inputAmzius.value = "";
    }  else {
        alert("Visi laukeliai turi būti užpildyti")
    }
    

});

buttonIstrintiPirma.addEventListener("click", function(){
    var tr = document.getElementsByTagName("tr");
        if(tr.length > 1){
            tr[1].remove();
        } else{
            alert("Nebėra ką trinti")
        }
    
    
});

buttonIstrintiPaskutini.addEventListener("click", function(){
    var tr = document.getElementsByTagName("tr");
        if(tr.length > 1){
            tr[tr.length - 1].remove();
        } else {
            alert("Nebėra ką trinti")
        }
        
});

