$(document).ready(function(){
   $('#kermezo').keyup(beolvas); 
});

var varosok = [];

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
        success: function(result) {
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
        "<th>Városnév</th>" + 
        "<th>Járás</th>" +
        "<th>Megye</th></tr>";
       
    for (var varos in varosok) {
        tblTart += "<tr><td>" + varosok[varos].nev + "</td>";
        tblTart += "<td>"+ varosok[varos].jaras +"</td>";
        tblTart += "<td>"+ varosok[varos].megye +"</td></tr>";
    }
    tblTart += "</table>";
    $('#tart').append(tblTart);
}