var i = 1;

/*(function makeVoyelle() {
    $("#voyelle").click(function(){
        var char = "";
        var possible = "AEIOUY";
        char += possible.charAt(Math.floor(Math.random() * possible.length));
        $(".lettre"+i).html(char).toggle();
        i++;
    })
})();


(function makeConsonne() {
    $("#consonne").click(function(){
        var char = "";
        var possible = "BCDFGHJKLMNPQRSTVWXZ";
        char += possible.charAt(Math.floor(Math.random() * possible.length));
        $(".lettre"+i).html(char).toggle();
        i++;
    })
})();*/

(function () {
    $("#voyelle").click(function(){
        $.get('/lettre.php?type=voyelle', function(e){
            $(".lettre"+i).html(e).toggle();
        })
    })
})();

(function(){
    $("#consonne").click(function(){
        $.get('/lettre.php?type=consonne', function(e){
            $(".lettre"+i).html(e).toggle();
        })
    })
})();