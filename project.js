$( document ).ready(function() {

    $("#menuButton").click(function() {
        $("nav").addClass("toggle");
    });

    $("#closeButton").click(function() {
        $("nav").removeClass("toggle");
    });

    $("#usersButton").click(function() {
        $("aside").addClass("asideToggle");
    });

    $("#closeButtonAside").click(function() {
        $("aside").removeClass("asideToggle");
    });

    $("nav button").click(function() {
        if($(window).width() < 992) {
          $("nav").removeClass("toggle");
        }
    });

    $("#smiley").click(function() {
        $("#customButtons").addClass("bottomButtonsToggle");
    });

    $("#lowerCloseButton").click(function() {
        $("#customButtons").removeClass("bottomButtonsToggle");
    });

    $("#customButtons button").click(function() {
        $("#customButtons").removeClass("bottomButtonsToggle");
    });

    $("#textInput").keypress(function(event) {
        if(event.which == 13) {
            $("#textSend").click();
        }
    });

    $("#nameInput").keypress(function(event) {
        if(event.which == 13) {
            $("#nameInputBtn").click();
        }
    });

    $("#roomInput").keypress(function(event) {
        if(event.which == 13) {
            $("#roomInputBtn").click();
        }
    });

    $(function() {
        allowDrag();
    });

    $(window).resize(function () {
        allowDrag();
        $("aside").attr('style', '');
        $("nav").attr('style', '');
    });

    function allowDrag() {
        $("aside").draggable();
        $("nav").draggable();
        if ($(window).width() < 992) {
            $('aside').draggable("destroy");
            $('nav').draggable("destroy");
        }
    }
});
