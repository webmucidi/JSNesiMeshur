
let alanlar=[];

alanlar=document.getElementsByTagName("area");
console.log(alanlar);

for(let i=0;i<alanlar.length;i++)
{
    alanlar[i].addEventListener("click",soruyuGoster);
} 

function soruyuGoster(){
    alert("Al sana soru???");
}

