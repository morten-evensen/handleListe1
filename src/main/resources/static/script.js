const ut = document.getElementById("ut");
let array = [];
function lagre() {
    let vareInn = document.getElementById("vare").value;
    let antallInn = document.getElementById("antall").value;
    let idInn = document.getElementById("id").value;

    const vare = {
        id: idInn,
        vare: vareInn,
        antall: antallInn
    };
    array.push(vare);
    document.getElementById("id").stepUp();
    formaterTekst();
}

function formaterTekst() {
    let utprint =
        "<table class='table table-striped'>" +
        "<tr></tr>" +
        "<th>Varer</th>" +
        "<th>Antall</th>" +
        "</tr>";

    for(let varer of array) {
        if (varer != null) {
            utprint +=
            "<tr>" +
            "<td>" + varer.vare + "</td>" +
            "<td>" + varer.antall + "</td>" +
                "<td><button class='btn btn-primary' onclick='endreEnVare("+varer.id+")'>Endre vare</button></td>" +
            "<td><button class='btn btn-danger' onclick='slettEnVare("+varer.id+")'>Slett vare</button></td>" +
            "</tr>"
        }
    }
    utprint += "</table>"
    ut.innerHTML = utprint;
}

function endreEnVare (vare) {
    document.getElementById("endreVareUt").innerHTML =
        "<div class='container'>" +
            "<h2>Endre vare</h2>" +
            "<form id=\"form\" onsubmit=\"endreVaren(); return false;\" action=\"#\">" +
                    "<input type=\"number\" id=\"id\" value=" + vare +" style=\"display: none\">" +
                    "<div class=\"form-group row\">" +
                        "<div class='col-xs-6'>" +
                            "<label for='nyVare'>Ny vare</label>" +
                            "<input class=\"form-control input-group-lg\" value='Grøt' id='nyVare' type='text'>" +
                        "</div>" +
                        "<div class='col-xs-3'>" +
                            "<label for='nyttAntall'>Antall</label>" +
                            "<input class=\"form-control input-group-lg\" value='1' type='number' id='nyttAntall'>" +
                        "</div>" +
                    "</div>" +
                "<button class='btn btn-success' onclick='endreTilNyVare(" + vare + ")'>Endre varen</button> " +
            "</form>" +
        "</div>";
        document.getElementById("innhold").style.display = "none";
        document.getElementById("slettKnapp").style.display = "none";
        ut.style.display = "none";
}

function endreTilNyVare(nyVare) {
    const vare = {
        id : nyVare,
        vare : document.getElementById("nyVare").value,
        antall : document.getElementById("nyttAntall").value
    };
    array.splice(nyVare,1, vare);
    ut.style.display = "block";
    document.getElementById("innhold").style.display = "block";
    document.getElementById("endreVareUt").innerHTML = "";
    document.getElementById("slettKnapp").style.display = "block";
    formaterTekst();

}

function slettEnVare(vare) {
    array.splice(vare,1, null);
    formaterTekst();
}

function slettAlle() {
    array.splice(0, array.length);
    document.getElementById("id").value = 0;
    formaterTekst();
    ut.innerHTML = ""
}