<?php
    session_start();

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

        $response['message'] = $switches;
        
        return json_encode($response);
    } catch(PDOException $e) {
        $response['message'] = "The database faced an exception!";
        
        return json_encode($response);
    }
?>
