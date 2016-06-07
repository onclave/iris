///************
// *@author: sajib
// ************/

$(function() {
    var control = "http://localhost/iris/php/control.php";
    var toggleSwitchOneOn = control + "?switch_one=ON";
    var toggleSwitchTwoOn = control + "?switch_two=ON";
    var toggleSwitchThreeOn = control + "?switch_three=ON";
    var toggleSwitchFourOn = control + "?switch_four=ON";
    var toggleSwitchOneOff = control + "?switch_one=OFF";
    var toggleSwitchTwoOff = control + "?switch_two=OFF";
    var toggleSwitchThreeOff = control + "?switch_three=OFF";
    var toggleSwitchFourOff = control + "?switch_four=OFF";
    var sync = "http://localhost/iris/php/synchronize.php";
    
    var lock = false;
    var manual = true;
    
    $('#switch_one').bootstrapToggle();
    $('#switch_two').bootstrapToggle();
    $('#switch_three').bootstrapToggle();
    $('#switch_four').bootstrapToggle();
    
    $('#switch_one').bootstrapToggle('off');
    $('#switch_two').bootstrapToggle('off');
    $('#switch_three').bootstrapToggle('off');
    $('#switch_four').bootstrapToggle('off');
    
    var switch_one = $('#switch_one').is(':checked');
    var switch_two = $('#switch_two').is(':checked');
    var switch_three = $('#switch_three').is(':checked');
    var switch_four = $('#switch_four').is(':checked');
    
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
                lock = true;
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
                            lock = false;
                        } else {
                            swal("Error", "There was a problem with switch one.", "error");
                            (local) ? ($('#switch_one').removeAttr('checked')) : ($('#switch_one').prop('checked', true));
                            switch_one = $('#switch_one').is(':checked');
                            manual = true;
                            lock = false;
                        }
                    },
                    error(status, errorThrown) {
                        endLoading();
                        swal("Error", "The request could not be completed.", "error");
                        (local) ? ($('#switch_one').removeAttr('checked')) : ($('#switch_one').prop('checked', true));
                        switch_one = $('#switch_one').is(':checked');
                        manual = true;
                        lock = false;
                    }
                });
            } else {
                console.log("a sync event was fired");
                manual = true;
                switch_one = $('#switch_one').is(':checked');
            }
        }
    });
    
    $('#switch_two').change(function() {
        console.log("enters into a change event");
        var local = $('#switch_two').is(':checked');
        var url = (local) ? (toggleSwitchTwoOn) : (toggleSwitchTwoOff);
        
        console.log("local : " + local);
        console.log("url : " + url);
        
        if(manual) {
            startLoading();
        }
        
        console.log("switch_two : " + switch_two);
        
        if(local != switch_two) {
            console.log("a change has occured");
            if(manual) {
                console.log("a manual event was fired");
                lock = true;
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
                            switch_two = local;
                            manual = true;
                            lock = false;
                        } else {
                            swal("Error", "There was a problem with switch two.", "error");
                            (local) ? ($('#switch_two').removeAttr('checked')) : ($('#switch_two').prop('checked', true));
                            switch_two = $('#switch_two').is(':checked');
                            manual = true;
                            lock = false;
                        }
                    },
                    error(status, errorThrown) {
                        endLoading();
                        swal("Error", "The request could not be completed.", "error");
                        (local) ? ($('#switch_two').removeAttr('checked')) : ($('#switch_two').prop('checked', true));
                        switch_two = $('#switch_two').is(':checked');
                        manual = true;
                        lock = false;
                    }
                });
            } else {
                console.log("a sync event was fired");
                manual = true;
                switch_two = $('#switch_two').is(':checked');
            }
        }
    });
    
    $('#switch_three').change(function() {
        console.log("enters into a change event");
        var local = $('#switch_three').is(':checked');
        var url = (local) ? (toggleSwitchThreeOn) : (toggleSwitchThreeOff);
        
        console.log("local : " + local);
        console.log("url : " + url);
        
        if(manual) {
            startLoading();
        }
        
        if(local != switch_three) {
            console.log("a change has occured");
            if(manual) {
                console.log("a manual event was fired");
                lock = true;
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
                            switch_three = local;
                            manual = true;
                            lock = false;
                        } else {
                            swal("Error", "There was a problem with switch one.", "error");
                            (local) ? ($('#switch_three').removeAttr('checked')) : ($('#switch_three').prop('checked', true));
                            switch_three = $('#switch_three').is(':checked');
                            manual = true;
                            lock = false;
                        }
                    },
                    error(status, errorThrown) {
                        endLoading();
                        swal("Error", "The request could not be completed.", "error");
                        (local) ? ($('#switch_three').removeAttr('checked')) : ($('#switch_three').prop('checked', true));
                        switch_three = $('#switch_three').is(':checked');
                        manual = true;
                        lock = false;
                    }
                });
            } else {
                console.log("a sync event was fired");
                manual = true;
                switch_three = $('#switch_three').is(':checked');
            }
        }
    });
    
    $('#switch_four').change(function() {
        console.log("enters into a change event");
        var local = $('#switch_one').is(':checked');
        var url = (local) ? (toggleSwitchFourOn) : (toggleSwitchFourOff);
        
        console.log("local : " + local);
        console.log("url : " + url);
        
        if(manual) {
            startLoading();
        }
        
        if(local != switch_four) {
            console.log("a change has occured");
            if(manual) {
                console.log("a manual event was fired");
                lock = true;
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
                            switch_four = local;
                            manual = true;
                            lock = false;
                        } else {
                            swal("Error", "There was a problem with switch one.", "error");
                            (local) ? ($('#switch_four').removeAttr('checked')) : ($('#switch_four').prop('checked', true));
                            switch_four = $('#switch_four').is(':checked');
                            manual = true;
                            lock = false;
                        }
                    },
                    error(status, errorThrown) {
                        endLoading();
                        swal("Error", "The request could not be completed.", "error");
                        (local) ? ($('#switch_four').removeAttr('checked')) : ($('#switch_four').prop('checked', true));
                        switch_four = $('#switch_four').is(':checked');
                        manual = true;
                        lock = false;
                    }
                });
            } else {
                console.log("a sync event was fired");
                manual = true;
                switch_four = $('#switch_four').is(':checked');
            }
        }
    });
    
    $("#live_feed").click(function() {
        $("#sampleModal").modal('show');
    });
    
    (function synchronize() {
        if(!lock) {
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
                            if(!switch_two) {
                                console.log("sync found a switch must be turned on");
                                manual = false;
                                $('#switch_two').bootstrapToggle('on');
                            }
                        }

                        if(response.message.two == 0) {
                            if(switch_two) {
                                console.log("sync found a switch must be turned off");
                                manual = false;
                                $('#switch_two').bootstrapToggle('off');
                            }
                        }

                        if(response.message.three == 1) {
                            if(!switch_three) {
                                console.log("sync found a switch must be turned on");
                                manual = false;
                                $('#switch_three').bootstrapToggle('on');
                            }
                        }

                        if(response.message.three == 0) {
                            if(switch_three) {
                                console.log("sync found a switch must be turned off");
                                manual = false;
                                $('#switch_three').bootstrapToggle('off');
                            }
                        }

                        if(response.message.four == 1) {
                            if(!switch_four) {
                                console.log("sync found a switch must be turned on");
                                manual = false;
                                $('#switch_four').bootstrapToggle('on');
                            }
                        }

                        if(response.message.four == 0) {
                            if(switch_four) {
                                console.log("sync found a switch must be turned off");
                                manual = false;
                                $('#switch_four').bootstrapToggle('off');
                            }
                        }
                    }
                    else {
                        manual = true;
                        swal("Error", response.message, "error");
                    }
                },

                complete:function() {
                    manual = true;
                    setTimeout(synchronize, 5000);
                },

                error: function(status, errorThrown) {
                    swal("Error", "The synchronization could not be completed.", "error");
                    manual = true;
                    lock = false;
                }
            });
        } else {
            setTimeout(synchronize, 1000);
        }
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