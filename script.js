// 

// var btEnviar


function criadorNomeDinossauro() {

    // Capturando os campos do form
    var formCND = document.forms["formCND"];

    var prmSilabaNome = formCND.prmSilabaNome.value;
    var ultSilabaNome = formCND.ultSilabaNome.value;
    var prmSilabaSobrenome = formCND.prmSilabaSobrenome.value;
    var ultSilabaSobrenome = formCND.ultSilabaSobrenome.value;


    // Verificando se os campos estão preenchidos

    if(prmSilabaNome == "") {
        alert('Preencha o campo "Primeira sílaba do nome".');
        return;
    }

    if(ultSilabaNome == "") {
        alert('Preencha o campo "Última sílaba do nome".');
        return;
    }

    if(prmSilabaSobrenome == "") {
        alert('Preencha o campo "Primeira sílaba do sobrenome".');
        return;
    }

    if(ultSilabaSobrenome == "") {
        alert('Preencha o campo "Última sílaba do sobrenome".');
        return;
    }


    // Se estiverem todos os campos devidamente preenchidos:

    var confirmacao = confirm("Confirmar envio de dados"); // Confirmação de envio...

    if(confirmacao == true) {
        // Não interessa enviar o form, recarregar a page ou limpar os campos automaticamente.
        alert(gerarNome());
    } else {
        // No caso de não se confirmar a criação do nome...
        alert("Dinossauro extinto!");
    }
    
    // Método para gerar o nome
    function gerarNome() {

        ultSilabaNome.toLowerCase();
        prmSilabaSobrenome.toLowerCase();
        ultSilabaSobrenome.toLowerCase();

        return nomeDinossauro = (
                    prmSilabaNome + 
                    ultSilabaSobrenome + 
                    prmSilabaSobrenome + 
                    ultSilabaNome + "ssauro"
                );
                
    }

}







