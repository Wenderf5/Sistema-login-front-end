# Sistema de Login - Front-end e Back-end

Este projeto consiste em um sistema de login completo, com funcionalidades de autenticação, desenvolvido em **React** para o front-end e **Node.js** com **NestJS** no back-end. Ele é uma demonstração de um sistema de login simples, com suporte para autenticação via cookies.

## Front-end

- **Tecnologias**: React, TypeScript
- **Gerenciamento de rotas**: Utilizei a biblioteca **react-router-dom** para definir as rotas.
  - As rotas estão no arquivo `Router.tsx`, localizado na pasta `routes` na raiz do projeto.
- **Páginas principais**:
  - **sign-in**
  - **sign-up**
  - **dashboard**
- Todas as páginas estão na pasta `pages`, também na raiz do projeto.

## Back-end

- **Tecnologias**: Node.js, NestJS, TypeScript
- **Padrão de arquitetura**: Segui o padrão **MVC**.
  - Os controladores estão na pasta `Controllers`, dentro de seus respectivos módulos, localizados na pasta `Modules`.
  - Os modelos (**Models**) estão na pasta `Services` de cada módulo.
- **Banco de dados**: A interação com o banco **MySQL** é feita utilizando o **TypeORM**.
  - As entidades estão localizadas na pasta `Entities`, dentro da pasta `dataBase` na raiz do projeto.

## Autenticação

- O sistema utiliza **cookies** para gerenciar a sessão do usuário.
  - Após o login, a sessão do usuário é salva no cookie `auth_token`.

## Como Executar o Projeto
1. Clone o repositório do [back-end](https://github.com/Wenderf5/sistema-login-back-end) e instale as dependências com:

```bash
$ npm install
```

2. Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente de acordo com suas credenciais e configurações.

3. Entre no diretorio 'src/modules/user-module/services/sign-in' e modude a linha 33 para 'secure: false' e remova a linha 36.
   
4. Entre no diretorio 'src/modules/user-module/services/logout' e modude a linha 10 para 'secure: false' e remova a linha 13.

5. Clone o repositório do [front-end](https://github.com/Wenderf5/Sistema-login-front-end) e instale as dependências com:

```bash
$ npm install
```

6. Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente.

7. Baixe e importe o dump do banco de dados MySQL [neste link](https://drive.google.com/file/d/1x2zOlvJ22HoKpwhiYAM4gbdLN9CsL4FD/view?usp=sharing) e configure seu ambiente de desenvolvimento para conectá-lo corretamente.
