const h1 = document.querySelector("h1");
const title = document.querySelector("title");
const words = ["Amazing", "Epic", "Fantastic", "Incredibal", "Unbelivable", "Marvelous", "Phenomenal", "Legendary", "Sensational", "Miraculous", "Tremendous", "Supercalifragilisticexpialidocious"]
var repititions = 30;
var curr = 0;

setInterval(SetWord, 1000)


function SetWord(){
    var randomNumber = Math.ceil(Math.random() * words.length); 
    h1.innerHTML = words[randomNumber-1];
    title.innerHTML = "You are " + words[randomNumber-1];
    if(curr < repititions){
        curr+=1;
        setInterval(SetWord,1000);
    }

}
