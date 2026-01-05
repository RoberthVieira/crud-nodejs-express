# CRUD nodejs/express

Este repositório foi criado como parte dos meus estudos iniciais sobre o ecossistema de Node.js. O principal objetivo é a compreensão do fluxo de uma API REST, desde o recebimento de uma requisição até a resposta ao cliente, utilizando o framework Express

---

## Funcionalidades

A aplicação permite o gerenciamento completo (CRUD) de uma lista de cursos. Atualmente, os dados são armazenados em uma estrutura de array em memória, permitindo:

- **Listagem:** Visualizar todos os cursos cadastrados ou um curso específico via index
- **Criação:** Adicionar novos títulos à lista através do corpo da requisição.
- **Edição:** Alterar o nome de um curso existente com base na sua posição.
- **Remoção:** Excluir registros da lista de forma dinâmica.


## Detalhes Técnicos

Para a construção da API, utilizei:

- **Express.json():** Essencial para que o Express consiga interpretar o corpo das requisições no formato JSON.

- **Route Params:** Utilizados nas rotas GET, PUT e DELETE para identificar o item do vetor de acordo com o index

- **Request Body:**  Empregado nas rotas POST e PUT para o recebimento de dados enviados pelo cliente


---

## Próximos Passos

Como este projeto foi criado com a finalidade de estudo, portanto estará em constante evolução, os proximos passos incluem:

- Implementação de middlewares para validar se o nome do curso foi enviado.
- Substituição do array em memória por um Banco de Dados

---

## Instalação e Execução

### 1. Clonar o repositório:
```
git clone https://github.com/RoberthVieira/crud-nodejs-express.git
```

### 2. Entrar na pasta do projeto:
```
cd crud-nodejs-express
```

### 3. Instalar as dependências:
```
npm install
```

### 4. Iniciar o servidor:
```
node server.js
```

O servidor ficará disponível em http://localhost:3000.