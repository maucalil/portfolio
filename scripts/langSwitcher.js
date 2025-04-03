const langSwitcher = document.querySelector(".lang-switcher");
const langButtons = langSwitcher.querySelectorAll("i");
const TRANSLATIONS_PATH = "assets/json/translations.json";

let translations = {};
let currentLang = localStorage.getItem("selectedLang") || "en";

async function fetchTranslations() {
    try {
        const response = await fetch(TRANSLATIONS_PATH);
        translations = await response.json();
        updateContent(currentLang);
    } catch (error) {
        console.error("Translation error:", error);
    }

    console.log(translations);
}

function updateContent(lang) {
    if (!translations[lang]) return;
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[lang][key];

            if (key === "hero-buttons-cv") {
                element.setAttribute("href", lang === "pt" ? "assets/pdfs/CV_Portugues.pdf" : "assets/pdfs/CV_English.pdf");
            }
        }
    });

    updateTyped(lang);

    localStorage.setItem("selectedLang", lang);
}

langButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const newLang = button.getAttribute("data-lang");
        if (newLang !== currentLang) {
            currentLang = newLang;
            updateContent(newLang);
        }
    });
});

// Fetch translations once on page load
fetchTranslations();
