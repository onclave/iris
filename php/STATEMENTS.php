<?php
    //session_start();

    $SYNCHRONIZE = "SELECT * FROM synchronize";
    $SWITCH_ONE_ON = "UPDATE synchronize SET switchone=true WHERE idsynchronize=1";
    $SWITCH_ONE_OFF = "UPDATE synchronize SET switchone=false WHERE idsynchronize=1";
    $SWITCH_TWO_ON = "UPDATE synchronize SET switchtwo=true WHERE idsynchronize=1";
    $SWITCH_TWO_OFF = "UPDATE synchronize SET switchtwo=false WHERE idsynchronize=1";
    $SWITCH_THREE_ON = "UPDATE synchronize SET switchthree=true WHERE idsynchronize=1";
    $SWITCH_THREE_OFF = "UPDATE synchronize SET switchthree=false WHERE idsynchronize=1";
    $SWITCH_FOUR_ON = "UPDATE synchronize SET switchfour=true WHERE idsynchronize=1";
    $SWITCH_FOUR_OFF = "UPDATE synchronize SET switchfour=false WHERE idsynchronize=1";
    $AUTHENTICATION = "SELECT * FROM users WHERE username=? AND password=PASSWORD(?)";
?>
