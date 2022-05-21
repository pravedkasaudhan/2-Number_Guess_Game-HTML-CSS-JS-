let num=Math.floor(Math.random()*100);
console.log("num is",num);
let entry=document.getElementById("entry");
let clicked=document.getElementById("btn");
let reset=document.getElementById("resetbtn");
let res=document.getElementById("result");
clicked.addEventListener('click',()=>{
    let val=entry.value;
    console.log(typeof(val));
    if(val>0&&val<=100){
    if(val<num){
        res.innerHTML+=`Number ${val} is less than the one. <br>`;
    }
    else if(val>num){
        res.innerHTML+=`Number ${val} is bigger than the one.<br>`;
    }
    else{
        alert("you won");
        res.innerHTML="Congo U are Winner!!";
        res.style.fontSize='2rem';
    }
    entry.value="";
}
else{
    alert(" Please enter a number in range 0 to 100 ");
}
})
reset.addEventListener("click",()=>{
    num=Math.floor(Math.random()*100);
    location.reload();
})