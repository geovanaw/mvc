
# Arquitetura MVC, Bibliotecas, Frameworks e APIs.
## Arquitetura MVC
O MVC é um padrão de arquitetura de software que visa a separação do desenvolvimento em 3 partes: Model, View e Controller (*origem da sigla*), onde  cada uma delas executa o que lhe é definido e nada mais do que isso.  O padrão MVC pode ser utilizado em vários tipos de projetos como, por exemplo, desktop, web e mobile.

**Explicando, de um modo geral, as camadas MVC:** 
1. A camada Model (*modelo*) é responsável pela leitura, escrita e validação dos dados.

2. A camada View (*visão*) é responsável pela interação com o usuário. Nesta camada são apresentados os dados ao usuário, de forma visual.

3. A camada Controller (*controlador*) é responsável por lidar com as requisições do usuário. Ela gerencia as ações realizadas, fala qual Model e qual View utilizar para que a ação seja completada.


![Fluxo de aplicação MVC](https://www.usandopy.com/media/uploads/2023/03/22/pt-cover-website-22.png)

De um modo geral, o conceito/objetivo principal do modelo MVC é utilizar uma solução já definida para separar partes distintas do projeto (**inclusive o código**), reduzindo suas dependências ao máximo.

### Vantagens no desenvolvimento
1. Reusabilidade de código: uma funcionalidade já implementada em uma parte do sistema, pode ser novamente utilizada em outra parte, sem ser necessário o seu re-desenvolvimento. *Exemplo: em um sistema toda vez que um usuário alterar sua senha, ele recebe um e-mail informando a alteração. Neste mesmo sistema, quando ocorre uma venda, também é enviado um e-mail informando este usuário. Os e-mails enviados possuem assunto e conteúdo diferentes, mas ambos utilizam a funcionalidade de envio de e-mail. Sendo assim, não é necessário realizar o desenvolvimento de um novo código de envio de e-mails, basta somente utilizar a funcionalidade existente, modificando os dados a serem enviados.*
2. Rápido Desenvolvimento: neste modelo é possível que desenvolvedores e designers trabalhem simultaneamente na aplicação. Cada um trabalharia em uma camada diferente da aplicação, tornando o desenvolvimento produtivo
3. Fácil manutenção: como o código é dividido em partes distintas, torna- se fácil adicionar novas funcionalidades e alterar características antigas. O código também fica mais fácil de ser compreendido por outros desenvolvedores. *Exemplo: um sistema de uma transportadora foi feito por um desenvolvedor que não presta mais serviços para a mesma. No futuro esta transportadora precisa realizar uma modificação em uma parte específica do sistema, é contratado outro desenvolvedor para a tarefa. Quando o responsável pela rotina na transportadora informar o mesmo ao desenvolvedor, ele conseguirá facilmente identificar o reportado no código do sistema.*

### *Dica de site para criação de uma aplicação utilizando a arquitetura MVC: [Construindo um simples projeto MVC do zero com JavaScript.](https://www.isarubim.com/posts/construindo-um-simples-projeto-mvc-do-zero-com-javascript)*

## O que são bibliotecas?
Biblioteca (*do inglês, library*), são conjuntos de recursos e funções  que realiza ações pré–definidas que auxiliam no desenvolvimento de uma aplicação. Em outras palavras, uma biblioteca JavaScript é um trecho de um código que pode ser reaproveitado servindo de base para a implementação de outros códigos.

## O que são frameworks?
Framework é uma combinação de códigos prontos que podem ser utilizados no desenvolvimento de software, aplicativos e websites. Seu principal objetivo é evitar problemas recorrentes garantindo a funcionalidade de uma aplicação.

Um Framework possui duas partes fundamentais:

**Hot-Spots** – são as partes específicas de sistemas individuais, projetados para serem genéricos, os quais podem ser adaptados às necessidades da aplicação.

**Frozen-Spots** - definem a arquitetura geral de um sistema de software, seus componentes básicos e os relacionamentos entre eles, imutáveis em todas as instanciações do Framework.

### Tipos de Frameworks.

**Framework de Suporte** ⇒ Disponibiliza serviços para sistemas operacionais, e como nosso objetivo principal é a informação de dados técnicos para desenvolvimento de softwares.

**Framework de aplicação** ⇒ Também chamado de Framework Horizontal, encapsula conhecimentos aplicáveis a vários tipos de aplicações, ou seja, eles podem ser usados em diferentes domínios, sem qualquer dependência dos mesmos. Ele resolve apenas uma parte da solução do problema, como por exemplo framework para construção de interface GUI ou interface gráfica.

**Framework de domínio** ⇒ Também chamado de Framework Vertical, ou Framework Especialista, encapsula conhecimentos aplicáveis a aplicações com um domínio particular em comum, obtidos através de um determinado contexto específico. Ele resolve boa parte da aplicação, e temos como exemplo um Framework para aplicações de controle financeiro.

## E qual a diferença entre bibliotecas e frameworks?
A diferença técnica entre um framework e uma biblioteca está em um termo chamado inversão do controle.

Ao usar uma biblioteca, você está no controle do fluxo da aplicação. Você seleciona quando e onde chamar a biblioteca. Quando você usa um framework, é ele quem está ao encargo do fluxo. Ele fornece alguns lugares onde você pode encaixar o seu código, mas é ele quem chama o código que você encaixou quando for necessário. O fluxo de utilização de biblioteca e framework pode ser visualizado na imagem a seguir:

![Fluxo que mostra a diferença entre framework e biblioteca](https://marquesfernandes.com/wp-content/uploads/2020/03/frameworkvsbibliotecavstoolkit.jpg)

Grande parte dos frameworks e bibliotecas JavaScript são compartilhados de forma gratuita na web, inclusive como open source. Alguns deles devido ao seu poder se destacam por serem utilizados por grandes empresas, como: Facebook, Uber e Google.

### *Dica de artigo para saber mais sobre as principais bibliotecas e frameworks utilizadas no Javacsript: [10 frameworks e bibliotecas JavaScript mais importantes do mercado](https://blog.geekhunter.com.br/frameworks-javascript-e-bibliotecas-java/)*

## APIs
APIs são um conjunto de rotinas e métodos que permitem que o desenvolvedor “importe” ou “empreste” informações ou funcionalidades de outras aplicações para o seu projeto ou aplicação. 

Portanto, uma API funciona como um conector entre sistemas e permite o envio e recebimento de dados, criando uma integração e interoperação sem a necessidade do sistema consumidor ter detalhes de implementação do software.

Isso gera mais facilidade e valor para os usuários, otimiza o processo de desenvolvimento, flexibiliza e simplifica a implementação de novas funcionalidades em um software, além de potencializar a escalabilidade, a inovação e a colaboração entre organizações no mundo dos negócios.

Um excelente exemplo é a API do Google Maps, que se espalhou por quase todos os sites de empresas dos mais diversos segmentos, potencializando a usabilidade e os serviços em si. Já viu algum mapa em anúncios de imobiliárias ou hospedagem, ou em qualquer aba de contato/localização em sites institucionais? É a API do Google Maps em ação!

### **Links dos sites consultados:**
[O MVC e o Javascript – O começo.](https://javiani.wordpress.com/2010/07/06/o-mvc-e-o-javascript-o-comeco/)
[MVC conceito e exemplo em Node.js](https://irias.com.br/blog/mvc-conceito-e-exemplo-em-node-js/)
[A diferença entre um framework e uma biblioteca](https://www.freecodecamp.org/portuguese/news/a-diferenca-entre-um-framework-e-uma-biblioteca/)
[Qual é a diferença entre biblioteca e framework na prática?](https://www.dio.me/articles/qual-e-a-diferenca-entre-biblioteca-e-framework-na-pratica)
[O que é um framework](https://balta.io/blog/o-que-e-um-framework)
[Framework, Biblioteca e API: entenda de uma vez por todas a diferença entre essas tecnologias](https://blog.tecnospeed.com.br/framework-biblioteca-api/)

