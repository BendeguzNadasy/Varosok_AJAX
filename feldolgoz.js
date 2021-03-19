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

