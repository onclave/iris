<?php
    session_start();

    require 'db.credentials.php';

    $DSN = "mysql:host=" + MYSQL_HOST + ";dbname=" + MYSQL_DB + ";charset=utf8mb4";
    
    $db = new PDO($DSN, MYSQL_USER, MYSQL_PASSWORD);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
?>
