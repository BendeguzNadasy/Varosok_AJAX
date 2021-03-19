<?php

require_once './AB.php';

$ab = new AB();
$adat = $_GET['kermezo'];
$where = "nev like '%$adat%'";
$varosok = array();
$eredmeny = $ab->lekerdez("varos", $where);

if ($eredmeny->num_rows > 0) {
    while ($row = $eredmeny->fetch_assoc()) {
        $varosok[] = $row;
    }
    echo json_encode($varosok);
} else {
    echo "0 results";
}
