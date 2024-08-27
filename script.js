function fuja(){
    var botaoNao = document.getElementById('nao')

    var larJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";


}

function yes(){
    alert('Excelente escolha que fizestes por livre e expontanea vontade! 😁')
}