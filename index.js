"use strict";

const CLASSIC = document.querySelector("#classic");
const FRAME = document.querySelector("#classic-wrapper");
const BODY = document.querySelector("body");

var gifs = window.data.data;

for(let i=0; i < 25; i++){
    console.log(gifs[i].url);
}

let myCat = Math.floor(Math.random() * 25);



 console.log([1,2,3,4].join());


class Classic { 
    constructor(art_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg")
    {
        // this.frame = "10px solid black";
        this.art_url = art_url;
        console.log("constructed!")
    }
    render(){
        console.log("rendered!")
		CLASSIC.setAttribute("src", this.art_url);
    }
}


var aCat = new Classic("https://media.giphy.com/media/" + gifs[myCat].id + "/giphy.gif");
aCat.render();

CLASSIC.addEventListener("click", event => {
    myCat = Math.floor(Math.random() * 25);
    aCat = new Classic("https://media.giphy.com/media/" + gifs[myCat].id + "/giphy.gif");
    aCat.render();
}) 

myCat = Math.floor(Math.random() * 25);
aCat = new Classic("https://media.giphy.com/media/" + gifs[myCat].id + "/giphy.gif");
aCat.render();




function Shuffle(array){
    let copyArray = array;
    let originalLength = copyArray.length;
    let r = Math.floor(Math.random() * copyArray.length);
    console.log("ArrayLength: " + copyArray.length);
    console.log("RandomNumber: " +r);
    let sArr = [];
    console.log(sArr);
    for(let i = 0; i < originalLength; i++){
        sArr.push(copyArray[r]);
        copyArray.splice(r,1);
        r = Math.floor(Math.random() * copyArray.length);
    }
    return sArr;
}




let myCats = [];
for(let i=0 ; i<25; i++){
    myCats.push(i);
}
let i = 0
setInterval(function(){ 
    if(i<25){
        document.getElementById("demo2").innerHTML = myCats[i];
        aCat = new Classic("https://media.giphy.com/media/" + gifs[myCats[i]].id + "/giphy.gif");
        aCat.render();
        i++;
        console.log(i);
    } else {
        i = 0;
        myCats = Shuffle(myCats);
        console.log(i);
        console.warn("Shuffled!");
    }
}, 1000)