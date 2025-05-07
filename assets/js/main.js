
document.addEventListener("DOMContentLoaded", () => {
    

    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const offcanvasMenu = document.getElementById("offcanvas-menu");
    const email = document.getElementById("email");
    const userName = document.getElementById("name");
    const userNameError = document.getElementById("nameError");
    const userEmailError = document.getElementById("emailError");


    // Abrir o menu
    menuToggle.addEventListener("click", () => {
        offcanvasMenu.classList.add("active");
        offcanvasMenu.style.display = "block";
    });

    // Fechar o menu
    menuClose.addEventListener("click", () => {
        offcanvasMenu.classList.remove("active");
    });


    $('#vertical').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        center: true,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplay: false,
        dots: true,
        dotsClass: 'carousel-dots container-xxl', // Adicionar classe personalizada aos dots
        nav: false,
        vertical: true,
        onInitialized: function () {
            // Adicionar string dentro do span dos dots
            const dots = document.querySelectorAll('.carousel-dots span');
            dots.forEach((dot, index) => {
                dot.textContent = `${index + 1}`;
            });
        }
    });

    // Inicializar o Owl Carousel
    $('#horizontal').owlCarousel({
        items: 1,
        loop: false,
        margin: 20,
        center: false,
        autoWidth: true,
        nav: false,
        dots: false,
        startPosition: 0,
    });

    // Inicializar o Owl Carousel

    $('#houses').owlCarousel({
        items: 1,
        center: true,
        autoWidth: false,
        nav: true, // Ativar o nav
        navContainerClass: 'houses-owl-nav col-12 col-md-8', // Adicionar classe personalizada ao contêiner do nav
        navText: [
            '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg></span>',
            '<span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></span>'
        ],
        dots: true,
        dotsClass: 'houses-owl-dots',
        startPosition: 0,
        slideTransition: 'ease-in',
        onInitialized: function () {
            // Inicializar o Fancybox apenas nos itens que não são clones
            Fancybox.bind(".houses__item a:not(.cloned)", {
                Thumbs: {
                    autoStart: true,
                    axis: "x",
                },
                Toolbar: {
                    display: [
                        { id: "counter", position: "left" },
                        { id: "close", position: "right" },
                    ],
                },
            });
        },
        loop: false
    });



    //Mascara do Formulário
    email.addEventListener("input", () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email.value)) {
            emailError.textContent = ""; // Limpa a mensagem de erro se o email for válido
            emailError.style.display = "none"; // Oculta o span
        } else {
            emailError.textContent = "Por favor, insira um email válido.";
            emailError.style.display = "block"; // Faz o span aparecer
        }
    });
    $('#idade').mask('00', { reverse: true });
    $('#altura').mask('0.00', { reverse: true });
    $('#peso').mask('00.0', { reverse: true }).on('blur', function () {
        if (!$(this).val().endsWith('Kg')) {
            $(this).val($(this).val() + ' Kg');
        }
    });


    $('#sangue').on('input', function () {
        const valor = $(this).val().toUpperCase().replace(/\s+/g, '');
        const regex = /^(A|B|AB|O)[+-]?$/;
    
        $(this).val(valor); // Força caixa alta
    
        const erroSangue = $('#erro-sangue');
        if (valor.trim() === "" || regex.test(valor)) {
            erroSangue.text("").hide(); // Limpa e oculta a mensagem de erro se estiver vazio ou válido
            $(this).css('margin-bottom', '');
        } else {
            erroSangue.text("Tipo sanguíneo inválido").show();
            $(this).css('margin-bottom', '10px');
        }
    });
    
    

    const form = document.getElementById("form"); // Obtém o formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio do formulário padrão

        // Verifica se o nome está vazio
        if (userName.value.trim() === "") {
            userNameError.textContent = "Por favor, insira seu nome.";
            userNameError.style.display = "block"; // Faz o span aparecer
            userName.focus();
        } else {
            userNameError.textContent = ""; // Limpa a mensagem de erro se o nome estiver preenchido
            userNameError.style.display = "none"; // Oculta o span
        }

        // Se tudo estiver correto, envie o formulário (ou faça outra ação)
        if (userName.value.trim() !== "" && email.value.trim() !== "" && userEmailError.textContent === "") {
            form.submit(); // Envia o formulário
            location.reload(); // Recarrega a página
        }
    });
    

     
    
});