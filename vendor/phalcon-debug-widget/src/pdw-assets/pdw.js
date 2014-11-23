$(function(){
    if (localStorage.getItem('pdwIsOpen') == true) {
        $("#pdw-toolbar-hide").hide();
        $("#pdw-toolbar").show();
    }

    $("#pdw-toolbar-hide").click(function(){
        $("#pdw-toolbar-hide").hide();
        $("#pdw-toolbar").show();

        localStorage.setItem('pdwIsOpen', 1);
    });

    $("#pdw-toolbar #pdw-icon").click(function(){
        $("#pdw-toolbar-hide").show();
        $("#pdw-toolbar").hide();

        localStorage.setItem('pdwIsOpen', 0);
    });

    $(".pwd-link").click(function(){
        var href = $(this).attr("data-id");

        $(".pdw-panels").hide();
        $("#pdw-panel-" + href).show();

        $("body").css("overflow", "hidden");
    });

    $("body").on("click", ".pdw-panel-close", function(){
        $(".pdw-panels").hide();

        $("body").css("overflow", "auto");
    });
});