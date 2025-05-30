
 
  const bankaOdemeSayfasi = "odeme-banka.html";
  const kapidaOdemeSayfasi = "odeme-kapida.html";

  
  document.getElementById("bankaBtn").addEventListener("click", function() {
    window.location.href = bankaOdemeSayfasi;
  });

  document.getElementById("kapidaBtn").addEventListener("click", function() {
    window.location.href = kapidaOdemeSayfasi;
  });
  document.addEventListener("DOMContentLoaded", () => {
    const secimButonlari = document.querySelectorAll(".secim");

    secimButonlari.forEach(button => {
        button.addEventListener("click", () => {
            // Aktif sınıfını kaldır, tıklanan butona ekle
            secimButonlari.forEach(btn => btn.classList.remove("aktif"));
            button.classList.add("aktif");
        });
    });

    const adetKontrol = document.querySelector(".adet-kontrol span");
    const artiButon = document.querySelector(".adet-kontrol button:nth-child(3)");
    const eksiButon = document.querySelector(".adet-kontrol button:nth-child(1)");

    artiButon.addEventListener("click", () => {
        adetKontrol.textContent = parseInt(adetKontrol.textContent) + 1;
    });

    eksiButon.addEventListener("click", () => {
        if (parseInt(adetKontrol.textContent) > 1) {
            adetKontrol.textContent = parseInt(adetKontrol.textContent) - 1;
        }
    });
});
