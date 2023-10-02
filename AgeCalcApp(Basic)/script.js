let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result")
const resultsBox = document.getElementById("resultbox");
const alertIcon = document.getElementById("alert-icon");


function calculatorAge() {
    let birthDate = new Date(userInput.value);


    if (isNaN(birthDate)) {
        resultsBox.style.display = "flex";
        result.innerHTML = "Lütfen bir dogum tarihi seçiniz.";

        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
    }

    result.innerHTML = `Yaşadığın süre : <span>${y3}</span> yıl, <span>${m3}</span> ay, <span>${d3}</span> gün.`;
    resultsBox.style.display = "block";
    alertIcon.style.display = "none";
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


//  About




const mainButton = document.getElementById("main-button");
const infoButtons = document.getElementById("info-buttons");


let infoVisible = false;

mainButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Ana butona tıklandığında belgeye tıklamayı engelle
    infoVisible = !infoVisible; // Ana butona her tıklamada görünürlüğü değiştir
    if (infoVisible) {
        infoButtons.style.display = "block"; // Bilgi linklerini göster
        infoButtons.style.right = "-130px";
    } else {
        infoButtons.style.display = "none"; // Bilgi linklerini gizle
    }
});

// Ana buton dışında bir yere tıklanırsa linkleri gizle
document.addEventListener("click", () => {
    if (infoVisible) {
        infoButtons.style.display = "none";
        infoVisible = false;
    }
});