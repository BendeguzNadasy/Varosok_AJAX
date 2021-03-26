<?php

require './AB.php';
parse_str(file_get_contents('php://input'),$adatom);
print_r($adatom);
$mysql = new AB();
$id = $adatom["ID"];
$nev = $adatom["nev"];
$jaras = $adatom["jaras"];
$megye = $adatom["megye"];

$updateString = "id='".$id."', nev='".$nev."', jaras='".$jaras."', megye='".$megye."'";
$mysql->frissit("varos", $updateString, "ID=".$id);