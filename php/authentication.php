<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    require 'db.connect.php';
    require 'STATEMENTS.php';

    $response = array('success' => false, 'message' => 'The request could not be completed.');

    if(isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        
        try {
            $stmt = $db->prepare($AUTHENTICATION);
            $stmt->bindValue(1, $username, PDO::PARAM_STR);
            $stmt->bindValue(2, $password, PDO::PARAM_STR);
            $stmt->execute();
            
            if($stmt->rowCount() > 0) {
                $response['success'] = true;
                $response['message'] = "Successfully logged in!";
                echo json_encode($response);
            } else {
                $response['message'] = "Authentication failure.";
                echo json_encode($response);
            }
        } catch(PDOException $e) {
            $response['message'] = "The database threw an exception!";
            echo json_encode($response);
        }
    } else {
        echo json_encode($response);
    }
?>
