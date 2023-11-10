function btn1() {
    document.getElementById("saida").innerHTML = "<p>Clique no botão 1</P>"
}


function btn2() {
    document.getElementById("saida").innerHTML = "<p>Clique no botão 2</P>"
}


function btn3() {
    document.getElementById("saida").innerHTML = "<p>Clique no botão 3</P>"
}


function btn4() {
    document.getElementById("saida").innerHTML = "<p>Clique no botão 4</P>"
}

function getDia() {
    var dataInput = document.getElementById("Dia");
    var DataAtual = new Date();
    var dia = DataAtual.getDate();

    dataInput.value = dia;
}

function exibirDataAtual() {
    var DataAtual = new Date;
    document.getElementById("Dia").value = DataAtual.toLocaleDateString("pt-BR");
}


function exibirDataFormatada() {
    var DataAtual = new Date();
    var dia, mes, ano;
    dia = DataAtual.getDate();
    mes = DataAtual.getMonth();
    ano = DataAtual.getFullYear();

    var data = dia + "/" + (mes + 1) + "/" + ano;
    document.getElementById("dataformatada").innerHTML = data;
}

function atualizarItemSelecionado(){
    var selectElement = document.getElementById("SelecaoItens")
    var selectItem = selectElement.options(selectElement.selectedIndex).text;
    document.getElementById("ItemSelecionado")
}



function adicionarOpcao() {
    var diaSemana = document.getElementById("texto").value;
    var selectSemana = document.getElementById("selecao");

    if (diaSemana) {
        var option = document.createElement("option");
        option.value = diaSemana;
        option.text = diaSemana;

        selectSemana.add(option);
        document.getElementById("text").value = "";
    }
}


function removerOption(){
    var selectElement = document.getElementById("selecao");
    var selectItem = selectElement.options(selectElement.selectIndex);

    if(selectElement){
        selectElement.remove(selectItem.index);
    }
}


function mudarFormatacao{
    var elemento = document.getElementById("elemento");
    elemento.style.backgroundColor = #f1f1f1;
    elemento.style.color = "#000";
    elemento.style.fontWeight = "bold";

}