var today = $("#currentDay");

setInterval(function () {
    today.text(moment().format("MMM Do YYYY - hh:mm:ss"));
}, 1000);


let hour=$(this).attr("data-hour");
$(".saveBtn").on("click", SaveIt);
function SaveIt() {
    let hour=$(this).attr("data-hour");
    let textInput=$("#text" + hour).val();
    localStorage.setItem('content' + hour, textInput);
}
$("#text9").textContent=localStorage.getItem('content9');
