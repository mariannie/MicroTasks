var cookieBar = function(config) {
    var self = this;

    this.config = {
        animation: true, // Możliwe wartości: true, false
        storage: 'local', // Możliwe wartości: local, session
        style: 'light' // Możliwe wartości: light, dark
    };
    // Wczytanie konfiguracji od użytkownika
    Object.assign(this.config, config);
    // Utworzenie uchwytu do paska cookie bar
    var cookiebar = document.createElement("div");
    cookiebar.innerHTML = "<p>Ta strona używa cookies. Możesz wyłączyć ich obsługę w swojej przeglądarce. Niektóre funkcje witryny mogą wtedy nie działać. <a href=\"#\">Poznaj naszą politykę cookie.</a><small class=\"cookieBarClose\">X</small></p>";
    cookiebar.classList.add('cookieBar');
    document.body.appendChild(cookiebar);
    // Dodanie klasy stylu do paska cookie bar na bazie ustawień
    cookiebar.classList.add(this.config.style);
    // Dodanie klasy włączającej animacje CSS gdy animacje są włączone
    if (this.config.animation) {
        cookiebar.classList.add("animate");
    }
    // Dodanie zdarzenia onclick przy kliknięciu przycisku zamykania bannera
    document.querySelector(".cookieBarClose").addEventListener("click", function(){
        // Zamknięcie banneru
        cookiebar.classList.add("closed");
        window[self.config.storage === 'local' ? 'localStorage' : 'sessionStorage'].setItem('cookiebar', true);
    });
    // Sprawdzenie w danym storage czy banner jest otwarty
    var opened = window[this.config.storage === 'local' ? 'localStorage' : 'sessionStorage'].getItem('cookiebar');
    // Jeżeli tak - pokazanie go
    if (!opened) {
        cookiebar.classList.remove("closed");
    }
};

cookieBar();
