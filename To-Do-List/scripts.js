/*
Lista de Tarefas ;
Digitar algo ;
ele vai clicar no botão ;
pegar o texto que está dentro do input ;
Colocar esse texto na tela ;

*/

function adicionarTarefa(){

    let ValorDoInput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = ValorDoInput + '<span onclick="deletarTarefa(this)">❌</span>' 

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ''
}

function deletarTarefa(li){
    li.parentElement.remove()

}
