const butonlar = document.querySelectorAll("button");
const sonuc1 = document.getElementById("sonuc");
const kullaniciSkor1 = document.getElementById("KullaniciSkoru");
const pcSkor1 = document.getElementById("PcSkoru");

var kullaniciskor = 0;
var pcskor = 0;

butonlar.forEach((button) => {
    button.addEventListener("click", () => {
        const sonuc = oyunSecimi(button.id, bilgisayarSecimi());
        sonuc1.textContent = sonuc;
    });
});

function bilgisayarSecimi() {
    const secimler = ["TAŞ", "KAĞIT", "MAKAS"];
    const randomSecim = Math.floor(Math.random() * secimler.length);
    return secimler[randomSecim];
}

function oyunSecimi(oyuncuSecimi, pcSecimi) {

    if (oyuncuSecimi === pcSecimi) {
        return "Berabere";
    }
    else if (
        (oyuncuSecimi === "TAŞ" && pcSecimi === "MAKAS") ||
        (oyuncuSecimi === "MAKAS" && pcSecimi === "KAĞIT") ||
        (oyuncuSecimi === "KAĞIT" && pcSecimi === "TAŞ")
    ) {
        kullaniciskor++;
        kullaniciSkor1.textContent = kullaniciskor;             
        return "Tebrikler Kazandınız. " + "Seçiminiz: " + (oyuncuSecimi) + " Pc'nin seçimi:  " + (pcSecimi);
        
    }
    else {
        pcskor++;
        pcSkor1.textContent = pcskor;
        return "Kaybettiniz  Pc Kazandı. " + " Pc'nin seçimi: " + (pcSecimi) + " Seçiminiz:  " + (oyuncuSecimi);
    }


}