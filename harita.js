/*
let alanlar=[];

alanlar=document.getElementsByTagName("area");
console.log(alanlar);

for(let i=0;i<alanlar.length;i++)
{
    alanlar[i].addEventListener("click",soruyuGoster);
} 
*/

//forEach kullanabilmek için elde edilen NodeList spread syntax yordamıyla bir diziye yayıldı.
const alanlar = document.getElementsByTagName("area");

[...alanlar].forEach(alan => {
  alan.addEventListener("click", soruyuGoster);
});

function soruyuGoster(){
    alert("Al sana soru???");
}

