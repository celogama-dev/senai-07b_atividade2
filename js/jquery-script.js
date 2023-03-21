//efeito de esconder formulário de cadastro
//chamada da função do jQuery
$(document).ready(function(){
// em JS seria = document.getElementById("botao-cadastrar").click()

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow"); //desliza o formulário de cadastro para cima
        $("#section-login").slideToggle("slow"); //desliza o formulário de login para cima e oculta
        $("#botao-cadastrar").hide("slow"); //esconde o botão de cadstro

    });

});
