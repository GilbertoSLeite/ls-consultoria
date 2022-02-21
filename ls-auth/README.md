# Ambiente Desenvolvimento LS Consultoria & Sistemas LTDA

## Sobre o Projeto
O projeto será dividido em micros serviços, do ecossistema da LS Consultoria & Sistemas LTDA. E com objetivo nos estudos voltado para certificação em <a href="https://nodejs.org/en/">NodeJS</a> pela <a href="https://openjsf.org/">OpenJS</a>. Usando o livro <a href="https://www.amazon.com.br/Node-Cookbook-techniques-server-side-development/dp/1838558756/ref=pd_sbs_1/132-0370762-0926454?pd_rd_w=PvIS3&pf_rd_p=1eb83ecb-3d38-4c15-9700-c733345d3c82&pf_rd_r=QVTVCDNX59SAAVQ42NH0&pd_rd_r=62586d9e-c82f-4315-a076-ecf77179440a&pd_rd_wg=VrfZh&pd_rd_i=1838558756&psc=1">Node Cookbook Fourth Edition</a> como base do projeto. 
Para criação das API, estou utilizando o <a href="https://expressjs.com/pt-br/">ExpressJS</a>.

# Indíce dos Micros Serviços
* [1. Versões](#das-vers%C3%B5es)
* [2. Autenticação](#ls-autentica%C3%A7%C3%A3o)
* [2.1 Estrutura das Pastas](#estrutura-das-pastas)

<br><br><br>

## Das Versões

- NodeJS v16.13.2
- ExpressJS v4.17.2
- Sequelize v6.16.2
- pg v8.7.3

## LS Autenticação
**Descrição:** Microserviço designado para criação do usuário e autenticação do usuário no sistema. Onde posterior autenticação, será encaminhado para o API Gateway e os demais microsserviços.

### Estrutura das Pastas

**Método:** Arquitetura Hexagonal e Modelagem do Projeto em Hexagonal em DDD(Domain-Driven Design).

**Descrição:** Como modelagem utilizei o DDD(Domain-Driven Design), haja vista, o ambiente norteou-se sobre a visão de Microserviços.

<details>
<sumary>Modelagem DDD(Domain-Driven Design)</sumary>

Domain-Driven Design é um conjunto de princípios para projeto de Software, a intenção é desenvolver um software, cuja o seu desenho, esteja diretamente centrado na regra de negócio.
O Microserviço ls-auth tem como objeto central, a gestão do usuário, tendo como princípios: 
- Cadastro do Usuário e Senha
- Criptografia da Senha
- Criação do Hashid
<sumary>Sobre o Hexagonal</sumary>
Com o intuito de dividir a aplicação em camadas de acordos com suas responsbilidades e focando sempre na camada de regra de negócios, onde estará toda nossa regra de negócio. Partindo do princípio da "Clean Architecture" divimos o projeto em grupos principais: 
- Domínio(Regra de Negócio);
- Infraestrutura(Ambiente de Dados);
- Interface(Ambiente de Rotas e Entradas de "Request");
- Controllers(Ambiente de Análise de Contrato de Responsabilidades);
</details>