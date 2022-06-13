var btn = document.querySelector("#send")

btn.addEventListener("click", function(e) {
 
    e.preventDefault();
        
        // Buscar elemento pai
        var elemento_pai = document.getElementById("tarefas");

        // Criar elemento
        var txt = document.createElement('a');

        // Criar o nó de texto abstraido do input(OBS: Aqui não está funcionando, essa linha não consegue puxar os dados do entry do HTML.)
        var input = document.querySelector("#new-item");

        // Colocando o valor absorvido
        var texto = document.createTextNode(input.value);

        console.log(texto);

        // Anexar o nó de texto ao elemento <a>
        txt.appendChild(texto);

        // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
        elemento_pai.appendChild(txt);
});

