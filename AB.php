<?php

class AB {
    private $ab_szerver;
    private $ab_fnev;
    private $ab_jsz;
    private $ab_nev;
    private $kapcsolat;
    
    public function __construct() {
        $this->ab_szerver = "localhost";
        $this->ab_fnev = "root";
        $this->ab_jsz = "";
        $this->ab_nev = "varosok";
//        $this->ab_szerver = "tanulo25.szf1a.oktatas.szamalk-szalezi.hu";
//        $this->ab_fnev = "c1_tanulo25szf1a";
//        $this->ab_jsz = "_tanulo25szf1a";
//        $this->ab_nev = "c1ABtanulo25szf1a";
        
        $this->kapcsolat();
    }
    
    public function kapcsolat() {
        $this->kapcsolat = new mysqli($this->ab_szerver, $this->ab_fnev, $this->ab_jsz, $this->ab_nev);
        $this->kapcsolat->set_charset('utf8');
        if ($this->kapcsolat->connect_error) {
            die("Kapcsolódás nem sikerült: " . $this->kapcsolat->connect_error);
        }
    }
    
    function lekerdez($tablaNeve, $where=1) {
        $sql = "SELECT * FROM " . $tablaNeve . " WHERE " . $where;
        $sql = $this->kapcsolat->query($sql);
        return $sql;
    }


    function frissit($tablaNeve, $ujErtekek, $where) {
        $sql = "UPDATE " . $tablaNeve . " SET " . $ujErtekek . " WHERE " . $where;
        $sql = $this->kapcsolat->query($sql);
        if ($sql == true) {
            return true;
        } else {
            return false;
        }
    }

    function ujRekord($tablaNeve, $oszlopok, $ertekek) {
        $sql = "INSERT INTO " . $tablaNeve . " " . $oszlopok . " VALUES " . $ertekek;
      
        $sql = $this->kapcsolat->query($sql);
        
        if ($sql == true) {
            return $sql;
        } else {
            return false;
        }
    }

    function torol($tablaNeve, $szuro) {
        $this->kapcsolat();
        $sql = "DELETE FROM " . $tablaNeve . " WHERE " . $szuro;
        $sql = $this->kapcsolat->query($sql);
        if ($sql == true) {
            return true;
        } else {
            return false;
        }
    }
}
