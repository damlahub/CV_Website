// .show.contents
let menu=document.querySelector("#menu");
ShowMenuItems();
EventListeners();
function EventListeners(){
    menu.addEventListener("click",getOptionsID)
}
function getOptionsID(event){
    event.preventDefault();
    MenuController(event.target.id);
}
function ShowMenuItems() {
    // Sol Menüdeki başlıklar
    let items = [
        "Hakkımda",
        "Eğitim Bilgilerim",
        "İş Deneyimlerim",
        "Sertifakalarım / Kurslarım",
        "Yeteneklerim",
        "Bana Ulaşın",
    ];
    items.forEach(ShowItems);
    function ShowItems(item,index){
        let menuLi=document.createElement("li");
        menuLi.id=`menuItem-${index}`;
        menuLi.innerText=item;
        menu.appendChild(menuLi);
    }
}
function MenuController(optionsID){
    let optionID=optionsID;
    console.log(optionID);
}