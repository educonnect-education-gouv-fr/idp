document.addEventListener('DOMContentLoaded', function () {
    fetch("idp-static/logos.json")
        .then((response) => response.json())
        .then((logos) => {
            let copyright = document.getElementById("copyright");
            if (copyright) {
                copyright.innerText = logos.copyright;
            }

            let marianne = document.getElementById("logo-marianne");
            if (marianne) {
                marianne.src = logos.logo_marianne;
            }

            let marianneChoix = document.getElementById("logo-marianne-choix");
            if (marianneChoix) {
                marianneChoix.src = logos.logo_marianne;
            }

            let ministere = document.getElementById("logo-ministere");
            if (ministere) {
                ministere.src = logos.logo_ministere;
            }

            let ministereTop = document.getElementById("logo-ministere-top");
            if (ministereTop) {
                ministereTop.src = logos.logo_ministere;
            }
        });
});
