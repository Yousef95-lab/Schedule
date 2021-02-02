let hour=$(this).attr("data-hour");
$(".saveBtn").on("click", SaveIt);
function SaveIt() {
    let hour=$(this).attr("data-hour");
    let textInput=$("#text" + hour).val();
    localStorage.setItem('content' + hour, textInput);
}
$("#text"+hour).textContent=localStorage.getItem('content');
