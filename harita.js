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
const areas = document.getElementsByTagName("area");

[...areas].forEach((area, index) => {
  area.addEventListener("click", () => {
    const title = area.getAttribute("title");
    soruyuGoster(title);
  });
});

function soruyuGoster(title){
  alert("Al sana soru " + title + "!!!");
}




