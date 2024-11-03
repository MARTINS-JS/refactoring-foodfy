<div style="">
  <a href="#">
    <img alt="Foodfy" src=".github/logo.png"/>
  </a>
</div>

---

> ### **Refatorando Foodfy**

<div style="">
  <p>
    Neste desafio, reescrevi algumas partes do código do projeto Foodfy. Antes, as informações eram exibidas diretamente pelo arquivo HTML, agora, os dados são mostrados de forma mais dinâmica pelo back-end, usando um template engine, nesse caso o nunjucks.
  </p>
  <p>
    Lembro que, durante as aulas, o professor ensinou como capturar dados enviados pela rota usando query strings. No entanto, neste desafio, os dados foram passados como parâmetros da rota. 
  </p>
  <p>
    Percebi que os parâmetros da rota são ideais para identificar um recurso específico, enquanto as query strings são usadas para modificar a resposta do servidor, sendo especialmente úteis quando queremos ajustar ou refinar a resposta enviada ao usuário.
  </p>
  <p>
    O maior desafio na refatoração do projeto Foodfy foi a criação da página recipe.njk. Além de construir o layout da página do zero, precisei filtrar os dados da requisição usando o índice da receita e implementar a funcionalidade de esconder ou mostrar o texto dos títulos da página alterando a propriedade do display do elemento para none.
  </p>
</div>

<div style="">
  <p>
    <strong>Ferramentas:</strong> Node.js, NPM, Express, Nunjucks, JSON, Nodemon
  </p>
</div>

---

Feito com ❤ by Igor 🖖