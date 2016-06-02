///************
// *@author: sajib
// ************/

$(function() {
    var toggleSwitchOneOn = "http://localhost/iris/php/switchOneOn.php";
    var toggleSwitchTwoOn = "http://localhost/iris/php/switchTwoOn.php";
    var toggleSwitchThreeOn = "http://localhost/iris/php/switchThreeOn.php";
    var toggleSwitchFourOn = "http://localhost/iris/php/switchFourOn.php";
    var toggleSwitchOneOff = "http://localhost/iris/php/switchOneOff.php";
    var toggleSwitchTwoOff = "http://localhost/iris/php/switchTwoOff.php";
    var toggleSwitchThreeOff = "http://localhost/iris/php/switchThreeOff.php";
    var toggleSwitchFourOff = "http://localhost/iris/php/switchFourOff.php";
    
    $('#switch_one').bootstrapToggle();
    $('#switch_two').bootstrapToggle();
    $('#switch_three').bootstrapToggle();
    $('#switch_four').bootstrapToggle();
    
    $("#switch_one").change(function() {
        if($(this).prop('checked')) {
            $.ajax({
               type: 'GET',
                url: toggleSwitchOneOn,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        swal("Success", response.message, "success");
                    }
                    else {
                        //response was a failure
                        swal("Error", "There was a problem with switch one.", "error");
                        $("#switch_one").removeAttr('checked');
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "The request could not be completed.", "error");
                    $("#switch_one").removeAttr('checked');
                }
            });
        }
        else {
            $.ajax({
               type: 'GET',
                url: toggleSwitchOneOff,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        
                        if(response.success) {
                            swal("Success", "Switch One was successfully switched off!", "success");
                        }
                        else {
                            //response was a failure
                            swal("Error", "There was a problem with switch one.", "error");
                            $("#switch_one").prop('checked', true);
                        }
                    }
                    else {
                        //response was a failure
                        swal("Error", "The request could not be completed.", "error");
                        $("#switch_one").prop('checked', true);
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "There was a problem connecting to the server.", "error");
                    $("#switch_one").prop('checked', true);
                }
            });
        }
    })
    
    $("#switch_two").change(function() {
        if($(this).prop('checked')) {
            $.ajax({
               type: 'GET',
                url: toggleSwitchTwoOn,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        swal("Success", "Switch Two was successfully switched on!", "success");
                    }
                    else {
                        //response was a failure
                        swal("Error", "There was a problem with switch two.", "error");
                        $("#switch_two").removeAttr('checked');
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "The request could not be completed.", "error");
                    $("#switch_two").removeAttr('checked');
                }
            });
        }
        else {
            $.ajax({
               type: 'GET',
                url: toggleSwitchTwoOff,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        if(response.success) {
                            swal("Success", "Switch Two was successfully switched off!", "success");
                        }
                        else {
                            //response was a failure
                            swal("Error", "There was a problem with switch two.", "error");
                            $("#switch_two").prop('checked', true);
                        }
                    }
                    else {
                        //response was a failure
                        swal("Error", "The request could not be completed.", "error");
                        $("#switch_two").prop('checked', true);
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "There was a problem connecting to the server.", "error");
                    $("#switch_two").prop('checked', true);
                }
            });
        }
    })
    
    $("#switch_three").change(function() {
        if($(this).prop('checked')) {
            $.ajax({
               type: 'GET',
                url: toggleSwitchThreeOn,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        swal("Success", "Switch Three was successfully switched on!", "success");
                    }
                    else {
                        swal("Error", "There was a problem with switch three.", "error");
                        $("#switch_three").removeAttr('checked');
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "The request could not be completed.", "error");
                    $("#switch_three").removeAttr('checked');
                }
            });
        }
        else {
            $.ajax({
               type: 'GET',
                url: toggleSwitchThreeOff,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        if(response.success) {
                            swal("Success", "Switch Three was successfully switched off!", "success");
                        }
                        else {
                            //response was a failure
                            swal("Error", "There was a problem with switch three.", "error");
                            $("#switch_three").prop('checked', true);
                        }
                    }
                    else {
                        //response was a failure
                        swal("Error", "The request could not be completed.", "error");
                        $("#switch_three").prop('checked', true);
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "There was a problem connecting to the server.", "error");
                    $("#switch_three").prop('checked', true);
                }
            });
        }
    })
    
    $("#switch_four").change(function() {
        if($(this).prop('checked')) {
            $.ajax({
               type: 'GET',
                url: toggleSwitchFourOn,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        swal("Success", "Switch Four was successfully switched on!", "success");
                    }
                    else {
                        //response was a failure
                        swal("Error", "There was a problem with switch four.", "error");
                        $("#switch_four").removeAttr('checked');
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "The request could not be completed.", "error");
                    $("#switch_four").removeAttr('checked');
                }
            });
        }
        else {
            $.ajax({
               type: 'GET',
                url: toggleSwitchFourOff,
                data: null,
                success: function(response) {
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        if(response.success) {
                            swal("Success", "Switch Four was successfully switched off!", "success");
                        }
                        else {
                            //response was a failure
                            swal("Error", "There was a problem with switch one.", "error");
                            $("#switch_four").prop('checked', true);
                        }
                    }
                    else {
                        //response was a failure
                        swal("Error", "The request could not be completed.", "error");
                        $("#switch_four").prop('checked', true);
                    }
                },
                error: function(status, errorThrown) {
                    swal("Error", "There was a problem connecting to the server.", "error");
                    $("#switch_four").prop('checked', true);
                }
            });
        }
    })
    
    $("#live_feed").click(function() {
        $("#sampleModal").modal('show');
    })
})