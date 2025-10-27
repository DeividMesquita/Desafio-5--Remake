# Projeto Landing Page - Saint Seiya

Este é um projeto de landing page *fan-made* focado no universo de Saint Seiya (Cavaleiros do Zodíaco). A página é totalmente responsiva e foi desenvolvida com HTML, CSS e JavaScript, utilizando diversas bibliotecas para criar uma experiência de usuário rica e interativa.


<img width="835" height="470" alt="cavaleiros" src="https://github.com/user-attachments/assets/2e347f25-c2fd-47d0-8eae-4c69b01e0c03" />

## 🚀 Principais Funcionalidades

O projeto é uma página única (SPA - Single Page Application) que inclui:

* **Design Responsivo:** A interface se adapta perfeitamente a desktops, tablets e dispositivos móveis, com um menu "off-canvas" para telas menores.
* **Carrosséis Interativos:**
    * Um carrossel principal (banner) com navegação vertical e paginação customizada.
    * Dois carrosséis horizontais para exibir "Os 12 Cavaleiros de Ouro" e "As 12 Casas".
* **Galeria de Imagens (Lightbox):** A seção "As 12 Casas" é integrada com a biblioteca **Fancybox**, permitindo que os usuários cliquem nas imagens para visualizá-las em uma galeria interativa.
* **Componentes de UI Modernos:** Utilização de um componente Accordion (Bootstrap) para organizar de forma limpa as listas dos 88 cavaleiros.
* **Formulário com Validação Avançada:**
    * **Validação em Tempo Real:** O campo de e-mail é validado instantaneamente usando JavaScript puro e Regex.
    * **Validação no Envio:** O campo de nome é verificado no momento do envio do formulário.
    * **Máscaras de Input:** Campos como Idade, Altura, Peso e Tipo Sanguíneo usam a biblioteca **jQuery Mask** para garantir que o usuário insira os dados no formato correto (ex: `80.5 Kg`, `A+`).

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e bibliotecas:

### Base
* **HTML5:** Estrutura semântica do site.
* **CSS3:** Estilização customizada, com uso de Variáveis CSS para fácil manutenção do tema e Media Queries para responsividade.
* **JavaScript (ES6+):** Utilizado para a manipulação do DOM, validação de formulários e inicialização das bibliotecas.

### Frameworks & Bibliotecas
* **Bootstrap 5.3:** Utilizado para o sistema de grid e componentes (como o Accordion).
* **jQuery 3.7:** Dependência principal para o funcionamento do Owl Carousel e jQuery Mask.
* **Owl Carousel 2:** Biblioteca usada para criar todos os carrosséis interativos da página.
* **Fancybox 5:** Usado para criar a galeria de imagens (lightbox) na seção "As 12 Casas".
* **jQuery Mask:** Aplicado aos campos do formulário para formatar a entrada de dados.
* **Font Awesome 6.7:** Utilizada para os ícones (ex: menu mobile, setas do carrossel).
* **Google Fonts:** Para a tipografia do projeto (famílias Montserrat e Raleway).
