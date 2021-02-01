let text=document.getElementById("text");
// let text1=document.querySelectorAll("text1");




let save=document.getElementById("save");
// let save1=document.querySelectorAll("saveBtn");


save.addEventListener("click", SaveIt);
// save1.addEventListener("click", SaveIt);



text.textContent=localStorage.getItem('content');
// text1.textContent=localStorage.getItem('content');



function SaveIt() {
    localStorage.setItem('content', text.value);
}
