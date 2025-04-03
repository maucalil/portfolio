const ptStrings = ["Desenvolvedor Fullstack", "Desenvolvedor Back-end"];
const enStrings = ["Fullstack Developer", "Back-end Developer"];

let typed;

function initTyped(strings) {
    if (typed) {
        typed.destroy();
    }

    typed = new Typed(".input", {
        strings: strings,
        typeSpeed: 60,
        backSpeed: 50,
        loop: true
    });
}

function updateTyped(lang) {
    initTyped(lang === "pt" ? ptStrings : enStrings);
}

initTyped(enStrings);