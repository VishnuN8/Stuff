const dcr = document.getElementById("dcr");
const rst = document.getElementById("rst");
const inc = document.getElementById("inc");
//const dup = document.getElementById("dup");
const countlabel = document.getElementById("countlabel");

let count = 0; 

dcr.onclick = function(){
    count--;
    countlabel.textContent = count;
} 

rst.onclick = function(){
    count = 0;
    countlabel.textContent = count;
} 

inc.onclick = function(){
    count++;
    countlabel.textContent = count;
} 


dup.onclick = function(){
    count = count * 2;
    countlabel.textContent = count;
}