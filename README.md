O projeto pode ser executado localmente com um único comando, para isso é necessário ter o Docker instalado na máquina.

Na raiz do projeto, execute:
```bash
   docker-compose up -d --build
   ```
O front-end estará rodando no endereço http://localhost:3000.
O back-end estará rodando no endereço http://localhost:4000.

Para realizar teste utilize o arquivo **sales.txt** que se encontra na raiz do projeto.
## Descrição do Projeto:
A aplicação desenvolvida tem a seguinte estrutura:

   - Página inicial: traz um resumo de entradas, saídas e saldo total. Uma tabela listando todas as transações e um botão para cadastrar novas transações.
   - Página de novas transações: formulário para upload de um arquivo com novas transações.   
## Tecnologias usadas
1. Front
   - Vite
   - React.js 
   - React router
   - Styled-components
   - React icons
   - Typescript
2. back
   - Node.js
   - Express
   - Typescript
   - Postgres