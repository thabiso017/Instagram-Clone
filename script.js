let btn1 = document.querySelector(".post-1");
let btn2 = document.querySelector(".post-2");
let btn3 = document.querySelector(".post-3");

btn1.onclick = () => {
    btn1.classList.toggle("open-1");  
    
};
btn2.onclick = () => {
    btn2.classList.toggle("open-2");  
};
btn3.addEventListener(("click"), () =>{
    btn3.classList.toggle("open-3");
})

let view_pfp = document.querySelector(".profile-img");

view_pfp.onclick  = () => {
     view_pfp.classList.toggle("view-profile")
};

window.onmouseover  = () => {
    btn1.classList.remove("open-1");
    btn2.classList.remove("open-2");  
    btn3.classList.remove("open-3");


    view1.classList.remove("view-1");
    view2.classList.remove("view-2");
    view3.classList.remove("view-3");
    view4.classList.remove("view-4");
    view5.classList.remove("view-5");
    view6.classList.remove("view-6");
    view7.classList.remove("view-7");
    view8.classList.remove("view-8");
    view9.classList.remove("view-9");

};



let view1 = document.querySelector(".story-1");
let view2 = document.querySelector(".story-2");
let view3 = document.querySelector(".story-3");
let view4 = document.querySelector(".story-4");
let view5 = document.querySelector(".story-5");
let view6 = document.querySelector(".story-6");
let view7 = document.querySelector(".story-7");
let view8 = document.querySelector(".story-8");
let view9 = document.querySelector(".story-9");

view1.onclick = () => {
    view1.classList.toggle("view-1");
};
view2.onclick = () => {
    view2.classList.toggle("view-2");
};
view3.onclick = () => {
    view3.classList.toggle("view-3");
};
view4.onclick = () => {
    view4.classList.toggle("view-4");
};
view5.onclick = () => {
    view5.classList.toggle("view-5");
};
view6.onclick = () => {
    view6.classList.toggle("view-6");
};
view7.onclick = () => {
    view7.classList.toggle("view-7");
};
view8.onclick = () => {
    view8.classList.toggle("view-8");
};
view9.onclick = () => {
    view9.classList.toggle("view-9");
};
