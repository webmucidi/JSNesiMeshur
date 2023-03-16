// 1.adım:Sorular,seçenekler ve cevapları içeren bölge nesneleri tanımlama
/* 
Hatayı secenekleri ayrı bir dizi değilde tek bir maddeymiş gibi tanımlayarak yapmışız!!!
*/
const bolgeler={
    Marmara: {
      soru: "Nüfus yoğunluğu en fazla olan il?",
      secenekler: ["Bursa","Edirne","İstanbul","Kocaeli"],
      cevap: "İstanbul"
    },
    Karadeniz: {
      soru: "En meşhur yemeği?",
      secenekler: ["Hamsi","Kebap","Lahmacun","Künefe"],
      cevap: "Hamsi"
    },
    Ege: {
      soru: "Gelir kaynağı?",
      secenekler: ["Sanayi","Turizm","Tarım","Hayvancılık"],
      cevap: "Turizm"
    }
  };

// 2.adım:Değişkenleri tanımlama
let bilgiler,soru,dogruCevap,secenekler,kullaniciCevap,alanlar,secilenBolge;

//3.adım:imagemap içindeki alanların herbirini for döngüsüyle dolaşarak olay yakalama
alanlar=document.getElementsByTagName("area");
[...alanlar].forEach((alan,index) => {
  alan.addEventListener("click",()=>{
    secilenBolge=alan.getAttribute("title");
    soruyuGoster(secilenBolge);
  });
});

  
// 4.adım:soruyu ve seçenekleri gösteren fonksiyonu tanımlama 
  function soruyuGoster(secilenBolge){

      alert("Nereden düştüm ben buraya?"+secilenBolge+" den geldim gardaşşş!");

      bilgiler=bolgeler[secilenBolge];
      soru=bilgiler['soru'];
      secenekler=bilgiler['secenekler'];
      
      document.getElementById("seceneklerListesi").innerHTML = "";
      document.getElementById("soruBaslik").textContent = soru;


      secenekler.forEach((secenek)=>{
        
        const yeniSecenek=document.createElement("li");
        const yeniRadio=document.createElement("input");

        yeniSecenek.innerHTML=secenek;
        yeniRadio.type="radio";
        yeniRadio.name="yeniSecenek";
        yeniRadio.value=secenek;

        yeniSecenek.appendChild(yeniRadio);
        document.getElementById("seceneklerListesi").appendChild(yeniSecenek);
        
      });
      
  }








