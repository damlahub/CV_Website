// .show.contents
let menu=document.querySelector("#menu");

let content=document.querySelectorAll(".right-section > section");
let contentsIDs=[];
console.log(content);

content.forEach(function(content) {
    contentsIDs.push(content.id); //right-section içindeki tüm sectionların idsini "contentsIDs" arrayine taşıdık.
});

console.log(contentsIDs);

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
    let optionLength=optionID.length; //ID'nin uzunluğunu aldık.
    let optionLastChar=optionID.charAt(optionLength-1);// son karakteri aldık. ör: menuItem-0 ise "0" alacak.
    let optionIndex=parseInt(optionLastChar);

    let optionItem=document.getElementById(contentsIDs[optionIndex]);

    optionItem.style.display="flex";

    console.log(optionItem);
}