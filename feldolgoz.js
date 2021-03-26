$(document).ready(function () {
    $('#rend').delegate('th', 'click', rendez);
    $('#rend').delegate('button', 'click', torol);
    $('#kermezo').keyup(beolvas);
});

var varosok = [];
var sorrend = false;

function kiir() {
    var txt = "<select>";
    for (var i = 0; i < varosok.length; i++) {
        var nev = varosok[i].nev;
        txt += "<option>" + nev + "</option>";
    }
    txt += "</select>";
    $('#tart').html(txt);
    tablazatKiir();
}

function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php?kermezo=" + $('#kermezo').val(),
        success: function (result) {
            varosok = JSON.parse(result);
            console.log(varosok);
            kiir();
        },
        error: function () {
            alert("Hiba a beolvasáskor!");
        }
    });
}

function tablazatKiir() {
    var tblTart = "<table><tr>" +
            "<th id='nev'>Városnév</th>" +
            "<th id='jaras'>Járás</th>" +
            "<th id='megye'>Megye</th>" +
            "<th></th>" +
            "<th></th></tr>";

    for (var varos in varosok) {
        tblTart += "<tr><td>" + varosok[varos].nev + "</td>";
        tblTart += "<td>" + varosok[varos].jaras + "</td>";
        tblTart += "<td>" + varosok[varos].megye + "</td>";
        tblTart += "<td><button data_id='"+varosok[varos].ID+"'>Módosít</button></td>";
        tblTart += "<td><button id='"+varosok[varos].ID+"'>Töröl</button></td></tr>";
    }
    tblTart += "</table>";
    $('#rend').html(tblTart);
}

function rendez() {
    var id = $(this).attr('id');
    if (sorrend) {
        varosok.sort(
            function (a, b) {
                return Number(a[id] > b[id]) - 0.5;
            });
    } else {
        varosok.sort(
            function (a, b) {
                return Number(a[id] < b[id]) - 0.5;
            });
    }
    sorrend = !sorrend;
    tablazatKiir();
}

function torol() {
    $.ajax({
        type: "DELETE",
        url: "torol.php?ID=" + $(this).attr('id'),
        success: function (result) {
            beolvas();
            console.log("törölve");
            
        },
        error: function () {
            alert("Hiba a törlésekor!");
        }
    });
}