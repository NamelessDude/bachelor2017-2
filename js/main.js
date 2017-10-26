var i = 1;

(function makeVoyelle() {
    $("#voyelle").click(function(){
        var char = "";
        var possible = "AEIOUY";
        char += possible.charAt(Math.floor(Math.random() * possible.length));
        $(".lettre"+i).html(char);
        i++;
    })
})();


(function makeConsonne() {
    $("#consonne").click(function(){
        var char = "";
        var possible = "BCDFGHJKLMNPQRSTVWXZ";
        char += possible.charAt(Math.floor(Math.random() * possible.length));
        $(".lettre"+i).html(char);
        i++;
    })
})();

(function () {
    $("#voyelle").click(function(){
        $.get('/lettre.php?type=voyelle', function(e){
            $('#mondiv').html(e);
        })
    })
})();

(function(){
    $("#consonne").click(function(){
        $.get('/lettre.php?type=consonne', function(e){
            $('#mondiv').html(e);
        })
    })
})