<?php
include_once './AB.php';
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $ab = new AB();

    $id = $_GET['ID'];
    $szuro = "ID = ".$id;

    $ab->torol("varos", $szuro);
    
}

