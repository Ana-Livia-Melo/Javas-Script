function btn1(){
    document.getElementById("saida").innerHTML= "<p>Clique no botão 1</P>"
}


function btn2(){
    document.getElementById("saida").innerHTML= "<p>Clique no botão 2</P>"
}


function btn3(){
    document.getElementById("saida").innerHTML= "<p>Clique no botão 3</P>"
}


function btn4(){
    document.getElementById("saida").innerHTML= "<p>Clique no botão 4</P>"
}

function getDia(){
    var dataInput= document.getElementById("Dia");
    var DataAtual= new Date();
    var dia= DataAtual.getDate();

    dataInput.value= dia;
}

function exibirDataAtual(){
    var DataAtual = new Date;
    document.getElementById("Dia").value= DataAtual.toLocaleDateString("pt-BR");
}


function exibirDataFormatada(){
    var DataAtual = new Date();
    var dia, mes, ano;
    dia = DataAtual.getDate();
    mes = DataAtual.getMonth();
    ano = DataAtual.getFullYear();

    var data = dia + "/" + (mes + 1) + "/" + ano;
    document.getElementById("dataformatada").innerHTML = data;
}


function calcularDiferenca(){
    var data1 = new date (document.getElementById("data1").value);
    var data2 = new date (document.getElementById("data2").value);
    var diferenca = Math.abs("diferenca").textContent= "diferenca em dias";

}



function atualizarItemSelecionado(){
    var selectElement = document.getElementById("SelecaoItens")
    var selectItem = selectElement.options(selectElement.selectedIndex).text;
    document.getElementById("ItemSelecionado")
}

function adicionarOpcao(){
    var diaSemana = document.getElementById("text").value;
    var selectSemana = document.getElementById("selecao");

    if (diaSemana);
    var option = document.createElement("option");
    option.value = diaSemana;
    option.text = diaSemana;

    selectSemana.add(option);
    document.getElementById("text").value = "";
}