function checkLoginMdp() {
    let identifiantValide = false;
    let passwordValide = false;
    let captchaValide = false;

    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let captcha = document.getElementById('captchaFormulaireExtInput');

    if (username && username.value === "") {
        document.getElementById('erreurIdentifiantVide').setAttribute("hidden", false);
        document.getElementById('erreurIdentifiantVide').classList.add("fr-error-text");
        document.getElementById('erreurIdentifiant').setAttribute("hidden", true);
        document.getElementById('erreurIdentifiant').classList.remove("fr-error-text");
        username.setAttribute("aria-describedby", "erreurIdentifiantVide");
    } else {
        identifiantValide = true;
        document.getElementById('erreurIdentifiantVide').setAttribute("hidden", true);
        document.getElementById('erreurIdentifiantVide').classList.remove("fr-error-text");
        username.removeAttribute("aria-describedby");
    }

    if (password && password.value === "") {
        document.getElementById('erreurMdpVide').setAttribute("hidden", false);
        document.getElementById('erreurMdpVide').classList.add("fr-error-text");
        document.getElementById('erreurMdp').setAttribute("hidden", true);
        document.getElementById('erreurMdp').classList.remove("fr-error-text");
        password.setAttribute("aria-describedby", "erreurMdpVide");
    } else {
        passwordValide = true;
        document.getElementById('erreurMdpVide').setAttribute("hidden", true);
        document.getElementById('erreurMdpVide').classList.remove("fr-error-text");
        password.removeAttribute("aria-describedby");
    }

    if (captcha) {
        if (captcha.value === "") {
            document.getElementById('erreurCaptchaVide').setAttribute("hidden", false);
            document.getElementById('erreurCaptchaVide').classList.add("fr-error-text");
            document.getElementById('erreurCaptcha').setAttribute("hidden", true);
            document.getElementById('erreurCaptcha').classList.remove("fr-error-text");
            captcha.setAttribute("aria-describedby", "erreurCaptchaVide");
        } else {
            captchaValide = true;
            document.getElementById('erreurCaptchaVide').setAttribute("hidden", true);
            document.getElementById('erreurCaptchaVide').classList.remove("fr-error-text");
            captcha.removeAttribute("aria-describedby");
        }
    } else {
        captchaValide = true;
    }

    return identifiantValide && passwordValide && captchaValide;
}
