$(document).ready(function () {
    $('#rend').delegate('th', 'click', rendez);
    $('#rend').delegate('.torol', 'click', torol);
    $('#rend').delegate('.modosit', 'click', modosit);
    $('#kermezo').keyup(beolvas);
    $('#btnMegse').on('click', adMegse);
    $('#btnKesz').on('click', adKesz);
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
    var i = 0;
    for (var varos in varosok) {
        tblTart += "<tr><td>" + varosok[varos].nev + "</td>";
        tblTart += "<td>" + varosok[varos].jaras + "</td>";
        tblTart += "<td>" + varosok[varos].megye + "</td>";
        tblTart += "<td><button class='modosit' id='" + i + "'>Módosít</button></td>";
        tblTart += "<td><button class='torol' id='" + varosok[varos].ID + "'>Töröl</button></td></tr>";
        i++;
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

function modosit() {
    console.log("modosit");
    $(".formmod").removeClass("elrejt");
    var index = $(this).attr("id");
    console.log(index);

    $("#fid").val(varosok[index].ID);
    $("#fnev").val(varosok[index].nev);
    $("#fjaras").val(varosok[index].jaras);
    $("#fmegye").val(varosok[index].megye);
}

function adKesz() {
    console.log("modosit");
    var editvaros = {
        ID: $("#fid").val(),
        nev: $("#fnev").val(),
        jaras: $("#fjaras").val(),
        megye: $("#fmegye").val()
    };
    
    $.ajax({
        type: "PUT",
        url: "modosit.php",
        data: editvaros,
        success: function () {
            beolvas();            
        },
        error: function () {
            alert("Hiba az adatok módosításakor!");
        }
    });
    $(".formmod").addClass("elrejt");
}

function adMegse() {
    $(".formmod").addClass("elrejt");
}