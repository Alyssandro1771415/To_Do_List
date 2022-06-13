var btn = document.querySelector("#send")

btn.addEventListener("click", function(e) {
 
    e.preventDefault();

        // Buscar elemento pai
        var elemento_pai = document.getElementById("tarefas");

        // Criar elemento
        var txt = document.createElement('a');

        // Criar o nó de texto
        var conteudo = document.createTextNode("Um título qualquer");

        // Anexar o nó de texto ao elemento h1
        txt.appendChild(conteudo);

        // Agora sim, inserir (anexar) o elemento filho (titulo) ao elemento pai (body)
        elemento_pai.appendChild(txt);

});

