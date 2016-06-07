<?php
    //session_start();
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    require 'db.connect.php';
    require 'STATEMENTS.php';

    $switch_one = "switch_one";
    $switch_two = "switch_two";
    $switch_three = "switch_three";
    $switch_four = "switch_four";

    $on = "ON";
    $off = "OFF";

    $switch_one_on = "sleep 3";
    $switch_one_off = "sleep 3";
    $switch_two_on = "sleep 3";
    $switch_two_off = "leep 3";
    $switch_three_on = "sleep 3";
    $switch_three_off = "leep 3";
    $switch_four_on = "sleep 3";
    $switch_four_off = "leep 3";

    $message_bit_01 = "Switch ";
    $message_bit_02 = " was successfully switched ";

    $one = "one";
    $two = "two";
    $three = "three";
    $four = "four";

    $error_message = "There was a problem executing the request.";
    $error = "There was an error with the request.";
    $error_db = "There was an error from the database!";
    $error_sync = "A synchronization was not possible.";

    $response = array('success' => false, 'message' => $error);

    if(isset($_GET[$switch_one])) {
        //--a request for switch one was set--
        if($_GET[$switch_one] == $on) {
            //--request for switch one to switch on--
            exec($switch_one_on, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_ONE_ON);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $one . $message_bit_02 . $on) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $one . $message_bit_02 . $on);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
        elseif($_GET[$switch_one] == $off) {
            //--request for switch one to switch off--
            exec($switch_one_off, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_ONE_OFF);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $one . $message_bit_02 . $off) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $one . $message_bit_02 . $off);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
    }

    if(isset($_GET[$switch_two])) {
        //--a request for switch two was set--
        if($_GET[$switch_two] == $on) {
            //--request for switch two to switch on--
            exec($switch_two_on, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_TWO_ON);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $two . $message_bit_02 . $on) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $two . $message_bit_02 . $on);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
        elseif($_GET[$switch_two] == $off) {
            //--request for switch two to switch off--
            exec($switch_two_off, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_TWO_OFF);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $two . $message_bit_02 . $off) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $two . $message_bit_02 . $off);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
    }

    if(isset($_GET[$switch_three])) {
        //--a request for switch three was set--
        if($_GET[$switch_three] == $on) {
            //--request for switch three to switch on--
            exec($switch_three_on, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_THREE_ON);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $three . $message_bit_02 . $on) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $three . $message_bit_02 . $on);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
        elseif($_GET[$switch_three] == $off) {
            //--request for switch three to switch off--
            exec($switch_three_off, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_THREE_OFF);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $three . $message_bit_02 . $off) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $three . $message_bit_02 . $off);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
    }

    if(isset($_GET[$switch_four])) {
        //--a request for switch four was set--
        if($_GET[$switch_four] == $on) {
            //--request for switch four to switch on--
            exec($switch_four_on, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_FOUR_ON);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $four . $message_bit_02 . $on) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $four . $message_bit_02 . $on);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
        elseif($_GET[$switch_four] == $off) {
            //--request for switch four to switch off--
            exec($switch_four_off, $output, $return);
            
            if(!$return) {
                //--successful execution--
                $response['success'] = true;
                
                //--synchronize to database--
                try {
                    $stmt = $db->prepare($SWITCH_FOUR_OFF);
                    $stmt->execute();
                    
                    if($stmt->rowCount() > 0) {
                        (strcmp($response['message'], $error) == 0) ?
                            ($response['message'] = $message_bit_01 . $four . $message_bit_02 . $off) :
                                ($response['message'] = $response['message'] . " " . $message_bit_01 . $four . $message_bit_02 . $off);
                    } else {
                        $response['message'] = $error_sync;
                        
                        echo json_encode($response);
                    }
                } catch(PDOException $e) {
                    $response['message'] = $error_db;
                    
                    echo json_encode($response);
                }
            } else {
                //--execution failure--
                $response['success'] = false;
                $response['message'] = $error_message;
            }
        }
    }

    echo json_encode($response);
?>
