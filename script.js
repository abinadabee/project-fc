window.onload = function() {
    // seletor > scroll
    const logo = document.querySelector('.logo')
    const footerLogo = document.querySelector('.footer-section')
    
    const about = document.querySelector('.about')
    const footerAbout = document.getElementById('about')

    const desenvolvedor = document.getElementById('desenvolvedor')
    const footerDesenvolvedor = document.getElementById('footer-desenvolvedor')

    // seletores das frases geras
    const gerarFrases = document.getElementById('btn-gerar-frase');
    const result = document.getElementById('result')

    // seletores do quis :
    const btn = document.getElementById('btn');
    const main = document.getElementById("main");
    const introQuiz = document.querySelector(".intro-quiz");
    const question = document.querySelector(".question");
    const answers = document.querySelector(".answers");
    const spnQtd = document.querySelector(".spnQtd");
    const textFinish = document.querySelector(".finish span");
    const content = document.querySelector(".content");
    const contentFinish = document.querySelector(".finish");
    const btnRestart = document.querySelector(".finish button");

    // Perguntas do quis
    const questions = [
        {
            question: "Qual é a comida favorita da Mih?",
            answers: [
                { option: "Pizza", correct: false },
                { option: "Torta de abóbora", correct: true },
                { option: "Sushi", correct: false },
                { option: "Hambúrguer", correct: false }
            ]
        },
        {
            question: "Quais os animais de estimação que a Mih tem?",
            answers: [
                { option: "Macaco e cavalo", correct: false },
                { option: "Papagaio e camaleão", correct: false },
                { option: "Chinchila e cachorro", correct: true },
                { option: "Tartaruga e peixe", correct: false },
                { option: "Insetos e cobra", correct: false }
            ]
        },
        {
            question: "Como o namorado da Mih é conhecido?",
            answers: [
                { option: "Namorado americano", correct: true },
                { option: "Japa", correct: false },
                { option: "Namorado da Michelly", correct: false },
                { option: "Stitch", correct: false },
                { option: "Pipoquinha", correct: false }
            ]
        },
        {
            question: "A Mih já fez algum desses cosplays?",
            answers: [
                { option: "Fofão (Balão Mágico)", correct: false },
                { option: "Homem-Aranha (Marvel)", correct: false },
                { option: "Fiona (Shrek)", correct: false },
                { option: "Malévola (A Bela Adormecida)", correct: false },
                { option: "Vanellope (Detona Ralph)", correct: true }
            ]
        },
        {
            question: "Qual a matéria que a Mih menos gosta (odeia)?",
            answers: [
                { option: "Matemática", correct: false },
                { option: "Português", correct: false },
                { option: "Física", correct: true },
                { option: "Ciências", correct: false },
                { option: "Espanhol", correct: false }
            ]
        },
        {
            question: "Qual a cor favorita da Mih?",
            answers: [
                { option: "Preto", correct: false },
                { option: "Azul", correct: false },
                { option: "Branco", correct: false },
                { option: "Amarelo", correct: false },
                { option: "Rosa", correct: true }
            ]
        },
        {
            question: "Qual a data de nascimento da Mih?",
            answers: [
                { option: "6 de abril (2001)", correct: false },
                { option: "30 de março (2006)", correct: false },
                { option: "11 de julho (2009)", correct: false },
                { option: "5 de maio (2005)", correct: true },
                { option: "3 de janeiro (2006)", correct: false }
            ]
        },
        {
            question: "Em qual rede social a Mih foi conhecida?",
            answers: [
                { option: "Like", correct: true },
                { option: "Resso", correct: false },
                { option: "YouTube", correct: false },
                { option: "Kwai", correct: false },
                { option: "Telegram", correct: false }
            ]
        },
        {
            question: "A Mih tem alguma tatuagem?",
            answers: [
                { option: "5 tatus", correct: false },
                { option: "Nenhuma tatu", correct: false },
                { option: "Ela tem 1, em homenagem ao seu chinchila Pompom", correct: true },
                { option: "Ela tem 2!", correct: false },
                { option: "Ela tem 4", correct: false }
            ]
        }
    ];

    // Frases Geradas Aleatoriamente
    const phrases = [
        "Merece tudo de melhor e muito mais, porque é incrível!", 
        "Linda por dentro e por fora, um verdadeiro encanto!", 
        "Não fala palavrões, detalhes que falam por si!", 
        "É extremamente doce, pura e cativa a todos ao seu redor!", 
        "A melhor e maior influencer de todos os tempos, simplesmente icônica!", 
        "Espalha positividade por onde passa, uma verdadeira luz!", 
        "Dona de um carisma único, impossível não se encantar!", 
        "Sempre transmite boas energias e um sorriso contagiante!", 
        "Tem um coração enorme e está sempre disposta a ajudar!", 
        "Seu talento e dedicação são inspiradores, um verdadeiro exemplo!", 
        "Transforma qualquer dia cinza em um dia cheio de cores!", 
        "Uma combinação perfeita de beleza, inteligência e carisma!", 
        "Inspira milhares de pessoas todos os dias com sua autenticidade!", 
        "Tem um jeitinho especial que faz qualquer um se sentir bem!", 
        "Carrega um brilho único que ilumina tudo ao seu redor!" 
    ]

    gerarFrases.addEventListener("click", numRandom)
    result.addEventListener("click", numRandom)
    
    function numRandom(){
        let num = Math.floor(Math.random()*phrases.length)
        result.innerHTML = phrases[num]
    }

// SEÇÃO DE SCROLL
    logo.addEventListener('click', function(){
        footerLogo.scrollIntoView({
            behavior: 'smooth'
        })
    })
    
    about.addEventListener('click', function(){
        footerAbout.scrollIntoView({
            behavior: 'smooth'
        })
        footerAbout.style.backgroundColor = '#dc314c'
            setTimeout(function(){
                footerAbout.style.backgroundColor = ''
            },1500)
    })


    desenvolvedor.addEventListener('click', function(){
        footerDesenvolvedor.scrollIntoView({
            behavior: 'smooth'
        })
        footerDesenvolvedor.style.backgroundColor = '#dc314c'
            setTimeout(function(){
                footerDesenvolvedor.style.backgroundColor = ''
            },1500)
    })



// QUIS
    let currentIndex = 0;
    let questionsCorrect = 0;

    main.style.display = "none";

    btn.addEventListener('click', function(){
        btn.style.display = "none"
        main.style.display = "block"
        introQuiz.style.display = "none"
    })

    btnRestart.onclick = () => {
        content.style.display = "block";
        btnRestart.style.display = "block";

        currentIndex = 0;
        questionsCorrect = 0;
        loadQuestion();
    };

    function nextQuestion(e) {
        if (e.target.getAttribute("data-correct") === "true") {
            questionsCorrect++;
        }

        if (currentIndex < questions.length - 1) {
            currentIndex++;
            loadQuestion();
        } else {
            finish();
        }
    }

    function finish() {
        textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
        content.style.display = "none";
        contentFinish.style.display = "block";

        textFinish.style.display = "block"
    }

    function loadQuestion() {
        spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
        const item = questions[currentIndex];
        answers.innerHTML = "";
        question.innerHTML = item.question;

        item.answers.forEach((answer) => {
            const div = document.createElement("div");

            div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">
            ${answer.option}
            </button>
            `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
    }

    loadQuestion();
}
