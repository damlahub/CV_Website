let menu = document.querySelector("#menu");

let content = document.querySelectorAll(".right-section > section");
let contentsIDs = [];
console.log(content);

let currentOptionIndex = 0;

EventListeners();
ShowMenuItems();
ContentID();
Animations();

function ContentID() {
    content.forEach(function (content) {
        contentsIDs.push(content.id); //right-section içindeki tüm sectionların idsini "contentsIDs" arrayine taşıdık.
    });

}
function EventListeners() {
    menu.addEventListener("click", getOptionsID)
}
function getOptionsID(event) {
    event.preventDefault();
    MenuController(event.target.id);
}
function ShowMenuItems() {
    // Sol Menüdeki başlıklar
    let items = [
        "Hakkımda",
        "Eğitim Bilgilerim",
        "Deneyimlerim",
        "Sertifakalarım / Kurslarım",
        "Yeteneklerim",
        "Bana Ulaşın",
    ];
    items.forEach(ShowItems);
    function ShowItems(item, index) {
        let menuLi = document.createElement("li");
        menuLi.id = `menuItem-${index}`;
        menuLi.innerText = item;
        menu.appendChild(menuLi);
    }
}
function MenuController(optionsID) {
    let optionID = optionsID;
    let optionLength = optionID.length; //ID'nin uzunluğunu aldık.
    let optionLastChar = optionID.charAt(optionLength - 1);// son karakteri aldık. ör: menuItem-0 ise "0" alacak.
    let optionIndex = parseInt(optionLastChar);
    let optionItem = document.getElementById(contentsIDs[optionIndex]);
    if (currentOptionIndex !== null) {
        let currentOptionItem = document.getElementById(contentsIDs[currentOptionIndex]);
        currentOptionItem.style.display = "none";
    }
    optionItem.style.display = "flex";
    console.log(currentOptionIndex);

    currentOptionIndex = optionIndex;
}
function Animations() {
    window.addEventListener("load", function () {
        let socialMediaAnim = document.querySelector(".social-media");
        socialMediaAnim.classList.add("slide-in");
    });

}
