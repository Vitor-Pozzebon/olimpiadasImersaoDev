//console.log(dados[0]);

// Função responsável por realizar a pesquisa e exibir os resultados na página.
function pesquisar() {
  
  // Obtém a seção HTML onde os resultados serão exibidos, utilizando seu ID.
  let section = document.getElementById("resultados-pesquisa");

  //variável que armazena o valor do campo de input do HTML
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //se o campo de pesquisa estiver vazio, não mostra nada
  if(campoPesquisa == ""){
    section.innerHTML = "<p>Nenhum atleta foi encontrado!</p>";
    return;
  }

  //deixar o conteudo do campo de pesquisa em minúsculo
  campoPesquisa = campoPesquisa.toLowerCase();
  
  // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
  let resultados = "";

  let titulo = "";
  let descricao = "";
  let tags = "";

  // Estrutura de repetição para iterar sobre os dados da pesquisa.
  for (let dado of dados) {
    // Para cada item de dado na coleção 'dados', monta o HTML de um resultado.

    //colocando todos os dados em minúsculo
    titulo = dado.titulo.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    tags = dado.tags.toLocaleLowerCase();

    //se no titulo há um texto igual ao campo de pesquisa, ele exibe o resultado
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa || tags.includes(campoPesquisa))){
      //cria um novo elemento HTML
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
      `;
    }
  }

  if(!resultados){
    section.innerHTML = "<p>Nenhum atleta foi encontrado! Digite o nome do atleta ou do esporte</p>";
    return;
  }

  // Atribui o conteúdo HTML gerado à seção de resultados.
  section.innerHTML = resultados;
}