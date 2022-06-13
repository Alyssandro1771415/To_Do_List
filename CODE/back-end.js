var btn = document.querySelector("#send")

btn.addEventListener("click", function(e) {
 
    e.preventDefault();

        // Quebra de linha
        brakrow = document.createElement('br');

        // Linha horizontal
        h_row = document.createElement('hr')

        // Caixa de marcação.
        mark = document.createElement('input');
        mark.type = 'checkbox';
        
        // Buscar elemento pai
        var elemento_pai = document.getElementById("tarefas");

        // Adicionando linha de separação
        elemento_pai.appendChild(h_row)

        // Quebrando a linha
        elemento_pai.appendChild(brakrow);

        // caixa de marcação
        elemento_pai.appendChild(mark);

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

