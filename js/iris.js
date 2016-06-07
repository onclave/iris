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
    var sync = "http://localhost/iris/php/synchronize.php";
    
    var switch_one = $('#switch_one').is(':checked');
    var switch_two = $('#switch_two').is(':checked');
    var switch_three = $('#switch_three').is(':checked');
    var switch_four = $('#switch_four').is(':checked');
    
    var lock = false;
    var manual = true;
    
    $('#switch_one').bootstrapToggle();
    $('#switch_two').bootstrapToggle();
    $('#switch_three').bootstrapToggle();
    $('#switch_four').bootstrapToggle();
    
    $("#block").hide();
    
    $('#switch_one').change(function() {
        console.log("enters into a change event");
        var local = $('#switch_one').is(':checked');
        var url = (local) ? (toggleSwitchOneOn) : (toggleSwitchOneOff);
        
        console.log("local : " + local);
        console.log("url : " + url);
        
        if(manual) {
            startLoading();
        }
        
        if(local != switch_one) {
            console.log("a change has occured");
            if(manual) {
                console.log("a manual event was fired");
                //--fire AJAX--
                $.ajax({
                    type: 'GET',
                    url: url,
                    data: null,
                    success: function(response) {
                        endLoading();
                        response = $.parseJSON(response);
                        
                        if(response.success) {
                            swal("Success", response.message, "success");
                            switch_one = local;
                            manual = true;
                        } else {
                            swal("Error", "There was a problem with switch one.", "error");
                            (local) ? ($('#switch_one').removeAttr('checked')) : ($('#switch_one').prop('checked', true));
                            switch_one = $('#switch_one').is(':checked');
                            manual = true;
                        }
                    },
                    error(status, errorThrown) {
                        endLoading();
                        swal("Error", "The request could not be completed.", "error");
                        (local) ? ($('#switch_one').removeAttr('checked')) : ($('#switch_one').prop('checked', true));
                        switch_one = $('#switch_one').is(':checked');
                        manual = true;
                    }
                });
            } else {
                console.log("a sync event was fired");
                manual = true;
                switch_one = $('#switch_one').is(':checked');
            }
        }
    });
    
//    $("#switch_one").click(function() {
//        startLoading();
//        
//        if($(this).prop('checked')) {
//            $.ajax({
//               type: 'GET',
//                url: toggleSwitchOneOn,
//                data: null,
//                success: function(response) {
//                    endLoading();
//                    response = $.parseJSON(response);
//                    
//                    if(response.success) {
//                        swal("Success", response.message, "success");
//                    }
//                    else {
//                        //response was a failure
//                        swal("Error", "There was a problem with switch one.", "error");
//                        $("#switch_one").removeAttr('checked');
//                    }
//                },
//                error: function(status, errorThrown) {
//                    endLoading();
//                    swal("Error", "The request could not be completed.", "error");
//                    $("#switch_one").removeAttr('checked');
//                }
//            });
//        }
//        else {
//            $.ajax({
//               type: 'GET',
//                url: toggleSwitchOneOff,
//                data: null,
//                success: function(response) {
//                    endLoading();
//                    response = $.parseJSON(response);
//                    
//                    if(response.success) {
//                        
//                        if(response.success) {
//                            swal("Success", response.message, "success");
//                        }
//                        else {
//                            //response was a failure
//                            swal("Error", "There was a problem with switch one.", "error");
//                            $("#switch_one").prop('checked', true);
//                        }
//                    }
//                    else {
//                        //response was a failure
//                        swal("Error", "The request could not be completed.", "error");
//                        $("#switch_one").prop('checked', true);
//                    }
//                },
//                error: function(status, errorThrown) {
//                    endLoading();
//                    swal("Error", "There was a problem connecting to the server.", "error");
//                    $("#switch_one").prop('checked', true);
//                }
//            });
//        }
//    });
    
    $("#switch_two").click(function() {
        startLoading();
        
        if($(this).prop('checked')) {
            $.ajax({
               type: 'GET',
                url: toggleSwitchTwoOn,
                data: null,
                success: function(response) {
                    endLoading();
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        swal("Success", response.message, "success");
                    }
                    else {
                        //response was a failure
                        swal("Error", "There was a problem with switch two.", "error");
                        $("#switch_two").removeAttr('checked');
                    }
                },
                error: function(status, errorThrown) {
                    endLoading();
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
                    endLoading();
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        if(response.success) {
                            swal("Success", response.message, "success");
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
                    endLoading();
                    swal("Error", "There was a problem connecting to the server.", "error");
                    $("#switch_two").prop('checked', true);
                }
            });
        }
    });
    
    $("#switch_three").change(function() {
        if($(this).is(':checked')) {
            alert("checked");
            switch_three = $('#switch_three').is(':checked');
            alert("global : " + switch_three);
        } else {
            alert('unchecked');
            switch_three = $('#switch_three').is(':checked');
            alert("global : " + switch_three);
        }
//        startLoading();
//        
//        alert($(this).prop('checked'));
//        
//        if($(this).prop('checked')) {
//            $.ajax({
//               type: 'GET',
//                url: toggleSwitchThreeOn,
//                data: null,
//                success: function(response) {
//                    endLoading();
//                    response = $.parseJSON(response);
//                    
//                    if(response.success) {
//                        swal("Success", response.message, "success");
//                    }
//                    else {
//                        swal("Error", "There was a problem with switch three.", "error");
//                        $("#switch_three").removeAttr('checked');
//                    }
//                },
//                error: function(status, errorThrown) {
//                    endLoading();
//                    swal("Error", "The request could not be completed.", "error");
//                    $("#switch_three").removeAttr('checked');
//                }
//            });
//        }
//        else {
//            $.ajax({
//               type: 'GET',
//                url: toggleSwitchThreeOff,
//                data: null,
//                success: function(response) {
//                    endLoading();
//                    response = $.parseJSON(response);
//                    
//                    if(response.success) {
//                        if(response.success) {
//                            swal("Success", response.message, "success");
//                        }
//                        else {
//                            //response was a failure
//                            swal("Error", "There was a problem with switch three.", "error");
//                            $("#switch_three").prop('checked', true);
//                        }
//                    }
//                    else {
//                        //response was a failure
//                        swal("Error", "The request could not be completed.", "error");
//                        $("#switch_three").prop('checked', true);
//                    }
//                },
//                error: function(status, errorThrown) {
//                    endLoading();
//                    swal("Error", "There was a problem connecting to the server.", "error");
//                    $("#switch_three").prop('checked', true);
//                }
//            });
//        }
    });
    
    $("#switch_four").change(function() {
        startLoading();
        
        if($(this).prop('checked')) {
            $.ajax({
               type: 'GET',
                url: toggleSwitchFourOn,
                data: null,
                success: function(response) {
                    endLoading();
                    response = $.parseJSON(response);
                    
                    if(response.success) {
                        swal("Success", response.message, "success");
                    }
                    else {
                        //response was a failure
                        swal("Error", "There was a problem with switch four.", "error");
                        $("#switch_four").removeAttr('checked');
                    }
                },
                error: function(status, errorThrown) {
                    endLoading();
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
                    endLoading();
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
                    endLoading();
                    swal("Error", "There was a problem connecting to the server.", "error");
                    $("#switch_four").prop('checked', true);
                }
            });
        }
    });
    
    $("#live_feed").click(function() {
        $("#sampleModal").modal('show');
    });
    
    (function synchronize() {
        while(lock) {
            console.log("within while lock");
            setTimeout(synchronize, 1000);
        }
        
        $.ajax({
            type: 'GET',
            url: sync,
            data: null,
            success: function(response) {
                console.log(response);
                response = $.parseJSON(response);
                console.log(response);
                
                if(response.success) {
                    if(response.message.one == 1) {
                        if(!switch_one) {
                            console.log("sync found a switch must be turned on");
                            manual = false;
                            $('#switch_one').bootstrapToggle('on');
                        }
                    }
                    
                    if(response.message.one == 0) {
                        if(switch_one) {
                            console.log("sync found a switch must be turned off");
                            manual = false;
                            $('#switch_one').bootstrapToggle('off');
                        }
                    }
                    
                    if(response.message.two == 1) {
                        $('#switch_two').bootstrapToggle('on');
                    }
                    
                    if(response.message.two == 0) {
                        $('#switch_two').bootstrapToggle('off');
                    }
                    
                    if(response.message.three) {
                        $("#switch_three").prop('checked', true);
                    }
                    
                    if(!response.message.three) {
                        $("#switch_three").removeAttr('checked');
                    }
                    
                    if(response.message.four) {
                        $("#switch_four").prop('checked', true);
                    }
                    
                    if(!response.message.four) {
                        $("#switch_four").removeAttr('checked');
                    }
                }
                else {
                    manual = true;
                    swal("Error", response.message, "error");
                }
            },
            complete:function() {
                manual = true;
                setTimeout(synchronize, 10000);
            }
        });
    })();
})

function startLoading() {
    $("#app-body").fadeOut();
    $("#block").fadeIn();
}

function endLoading() {
    $("#block").fadeOut();
    $("#app-body").fadeIn();
}