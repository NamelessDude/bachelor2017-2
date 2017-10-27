//Variables permettant l'incrémentation dans les fonctions : var i -> makeVoyelle / makeConsonne | var ii -> choisirRep
var i = 1;
var ii = 1;

//fonction permettant de tirer aléatoirement une voyelle et d'afficher la lettre étant choisie
(function makeVoyelle() {
    $("#voyelle").click(function(){
        var char = "";
        var possible = "AEIOUY";
        char += possible.charAt(Math.floor(Math.random() * possible.length));
        $(".lettre"+i).html(char).toggle();
        i++;

        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": char}
        })
            .done(function(e) {
            console.log("data " + e );
        });
    })
})();

//fonction permettant de tirer aléatoirement une consonne et d'afficher la lettre étant choisie
(function makeConsonne() {
    $("#consonne").click(function(){
        var char = "";
        var possible = "BCDFGHJKLMNPQRSTVWXZ";
        char += possible.charAt(Math.floor(Math.random() * possible.length));
        $(".lettre"+i).html(char).toggle();
        i++;

        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": char}
        })
            .done(function(e) {
            console.log("data " + e );
        });
    })
})();

//fonction permettant de choisir une réponse et de désactiver la lettre sur laquelle on à cliqué et d'afficher la lettre sur laquelle on à cliqué
(function choisirReponse(){
    $(".lettre").click(function () {
        $(".rep"+ii).prop("disabled","disabled").show().html(this.textContent);
        ii++;
        this.disabled = true;
    });
})();

//fonction permettant de reset le jeu
(function resetJeu(){
    $(".reset").click(function(){
        window.location.reload();
    })

})();







/*(function () {
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
})();*/