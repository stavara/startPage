// Function (Structure)
function createUL(arr, label){
    var list = document.createElement('ul');
    list.setAttribute('title', label);
    list.setAttribute('id', label.substring(2)); // id dynamic
    for (let i = 0; i < arr.length; i++) {
       var item = document.createElement('li');
       var site = document.createElement('a');
       site.appendChild(document.createTextNode(arr[i].name)); // name
       site.setAttribute('href',arr[i].url); // url
       item.appendChild(site);
       list.appendChild(item);
    }
    return list;
}
document.getElementById('list').appendChild(createUL(data[1].stu, data[0].stu.label));
document.getElementById('list').appendChild(createUL(data[1].dev, data[0].dev.label));
document.getElementById('list').appendChild(createUL(data[1].fun, data[0].fun.label));
// Clock
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var t = setTimeout(function(){ currentTime() }, 1000);
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    document.getElementById("clock").innerText =  day + " / " + month + " - " + hour + " : " + min + " : " + sec;
}
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
currentTime();
// Picutres
var randomNum = Math.floor(Math.random() * pic.length);
document.getElementById("backgroundImg").style.background = 'url('+pic[randomNum]+')';
document.getElementById("backgroundImg").style.backgroundPosition = 'center';
document.getElementById("backgroundImg").style.backgroundRepeat = 'no-repeat';
document.getElementById("backgroundImg").style.backgroundSize = 'cover';
// Search {Samperclara}
function chgAction(){
    var orignalText = document.getElementById("inputID").value;
    var textSplit = document.getElementById("inputID").value.substring(0,2);
    var text = document.getElementById("inputID").value.substring(2).trim();
    var fullText = "";
    var thereAre = false;
    find: for (const property in data[1]) {
        data[1][property].map(item => {
            if(textSplit.toLowerCase() == (item.name.substring(0,1).toLowerCase() + " ")){
                thereAre = true;
                if(text == ""){
                    fullText = item.url; // fast
                }else if(item.search != null){
                    fullText = item.search + text; // search inside
                }else{
                    fullText = "https://www.google.com/search?q=" + orignalText; // search on google
                }
            }
        });
        if(thereAre){
            break find; // priority to first element finded
        }
    }
    if(!thereAre){
        if(orignalText.trim() == ""){ // Obs trim => " j" or "  j" -> "j" 
            fullText = "https://www.google.com";
        }else{
            fullText = "https://www.google.com/search?q=" + orignalText; // search on google
        }
    }
    window.location.href = fullText;
}
// Quotes
function createQuote(){
    var ranQuote = Math.floor(Math.random() * quote[0].quo.length);
    var quo = document.createElement('p');
    var aur = document.createElement('p');
    quo.appendChild(document.createTextNode('"' + quote[0].quo[ranQuote].text + '"'));
    aur.appendChild(document.createTextNode("- " + quote[0].quo[ranQuote].author));
    document.getElementById('quote').appendChild(quo);
    document.getElementById('quote').appendChild(aur);
}
createQuote();
console.log("? => 1c117e4604fd5f04e92420b47cd385f4db1dda50814e05758801fe72a3eb179f3c5274948f27fd1182dd744bd4974aa34b47eb32ebffce5f73be61f5447ecde7");