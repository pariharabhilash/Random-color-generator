const getcolor=()=>{
    const randomNumber=Math.floor(Math.random() * 8999999 + 1000000);
    const randomCode="#" +randomNumber.toString(16);
    
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode;
    // copy karne ke liye
    navigator.clipboard.writeText(randomCode);
}
document.getElementById("btn").addEventListener("click" ,getcolor);
getcolor();