$(function () {
    const id = window.location.search.substring(1);
    $("#id").val(id);

})

function endreVare() {
    const vare = {
        id : $("#id").val(),
        vare : $("#vare").val(),
        antall : $("#antall").val(),
    }
    localStorage.setItem("endreVare", JSON.stringify(vare));


    window.location.href="index.html";
    var hentData = localStorage.getItem("endreVare");
    console.log(hentData);
}