// alert("hello");
const submit = document.getElementById("submit");
const qrImg = document.querySelector("#qr-img");


function qrCode() {
    // alert("hello");    
    const data = document.querySelector("#f_name").value;
    const API = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    // console.log(API);
    qrImg.src = API;
    qrImg.style.display="block";
    
}

function dwn(){
    // alert("Dwn complete");
    window.print("");
}





