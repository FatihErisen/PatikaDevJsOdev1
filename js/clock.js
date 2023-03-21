let userName = prompt("Lütfen adınızı giriniz");
let myName = document.getElementById('myName');
myName.innerHTML = userName

function tarihSaat() {
    var tarih= new Date()
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    if (dakika<10) {
        dakika="0"+dakika.toString()
    }
    var saniye = tarih.getSeconds();
    if (saniye<10) {
        saniye="0"+saniye.toString()
    }
    let gun;
    haftaninGunu=tarih.getDay();
    switch (haftaninGunu){
        case 1: gun="Pazartesi";
        break;
        case 2: gun="Salı";
        break;
        case 3: gun="Çarşamba";
        break;
        case 4: gun="Perşembe";
        break;
        case 5: gun="Cuma";
        break;
        case 6: gun="Cumartesi";
        break;
        case 7: gun="Pazar";
        break;
    }
    let clock = document.getElementById("myClock")
    clock.innerHTML = `${saat}:${dakika}:${saniye} ${gun}`;
}

setInterval(tarihSaat, 1000); 