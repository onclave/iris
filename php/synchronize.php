<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    //session_start();

    require 'db.connect.php';
    require 'STATEMENTS.php';

    $response = array('success' => false, 'message' => 'There was an error with the request!');
    $switches = array('one' => false, 'two' => false, 'three' => false, 'four' => false);

    try {
        $stmt = $db->query($SYNCHRONIZE);

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $switches['one'] = $row['switchone'];
            $switches['two'] = $row['switchtwo'];
            $switches['three'] = $row['switchthree'];
            $switches['four'] = $row['switchfour'];
        }

        $response['success'] = true;
        $response['message'] = $switches;
        
        echo json_encode($response);
    } catch(PDOException $e) {
        $response['success'] = false;
        $response['message'] = "The database faced an exception!";
        
        echo json_encode($response);
    }
?>
