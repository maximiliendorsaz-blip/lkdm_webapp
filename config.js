// config.js - Centralisation de toutes les références de l'écosystème Le Koup de Main (LKDM)

window.LKDM_CONFIG = {
    // Rôles utilisateurs
    roles: [
        "client",
        "student",
        "admin"
    ],

    // Langues gérées par la plateforme
    languages: [
        "Français",
        "Allemand",
        "Anglais",
        "Italien"
    ],

    // Nationalités
    nationalities: [
        "Suisse",
        "Française",
        "Italienne",
        "Allemande",
        "Portugaise",
        "Espagnole",
        "Autre"
    ],

    // Types de paiement
    paymentTypes: [
        "TWINT",
        "Cash",
        "Facture"
    ],

    // Statuts du cycle de vie d'une mission (Matching status)
    missionStatuses: [
        "Nouveau",
        "À publier",
        "Publié",
        "Accepté",
        "Confirmé",
        "À facturer",
        "En attente de paiement",
        "Mission effectuée"
    ],

    // Statuts de facturation et de suivi des paiements clients
    paymentStatuses: [
        "Facture non envoyée",
        "Facture envoyée",
        "Payé",
        "Retard"
    ],

    // Statuts des profils (utilisateurs)
    profileStatuses: [
        "Actif",
        "Inactif",
        "En attente de validation"
    ],

    // Types et origines des prospects (pour les clients)
    prospectSourceTypes: [
        "Réseaux sociaux",
        "Bouche-à-oreille",
        "Partenaire",
        "Flyer / Publicité",
        "Internet / Google",
        "Autre"
    ],
    prospectSources: [
        "Autre"
    ],

    // Correspondance bidirectionnelle NPA <=> Localité (Valais complet : Bas, Moyen, Haut, etc.)
    valaisZipMap: {
        // --- SION & ENVIRONS ---
        "1950": "Sion", "Sion": "1950",
        "1971": "Grimisuat", "Grimisuat": "1971",
        "1964": "Conthey", "Conthey": "1964",
        "1960": "Savièse", "Savièse": "1960",
        "1963": "Vétroz", "Vétroz": "1963",
        "1972": "Anzère", "Anzère": "1972",
        "1967": "Ardon", "Ardon": "1967",
        
        // --- SIERRE & ENVIRONS ---
        "3960": "Sierre", "Sierre": "3960",
        "3963": "Crans-Montana", "Crans-Montana": "3963",
        "3961": "Zinal", "Zinal": "3961",
        "3977": "Veyras", "Veyras": "3977",
        "3973": "Venthône", "Venthône": "3973",
        "3968": "Vey Sierre", "Vey Sierre": "3968",
        
        // --- MARTIGNY & ENTREMONT ---
        "1920": "Martigny", "Martigny": "1920",
        "1934": "Le Châble", "Le Châble": "1934",
        "1936": "Verbier", "Verbier": "1936",
        "1927": "Salvan", "Salvan": "1927",
        "1903": "Collonges", "Collonges": "1903",
        "1906": "Charrat", "Charrat": "1906",
        "1926": "Fully", "Fully": "1926",

        // --- MONTHEY & CHABLAIS ---
        "1870": "Monthey", "Monthey": "1870",
        "1871": "Choëx", "Choëx": "1871",
        "1872": "Troistorrents", "Troistorrents": "1872",
        "1874": "Champéry", "Champéry": "1874",
        "1868": "Collombey", "Collombey": "1868",
        "1890": "St-Maurice", "St-Maurice": "1890",

        // --- HAUT-VALAIS (BRIG, VIÈGE, ZERMATT...) ---
        "3900": "Brig", "Brig": "3900",
        "3930": "Visp", "Visp": "3930", "Viège": "3930",
        "3920": "Zermatt", "Zermatt": "3920",
        "3906": "Saas-Fee", "Saas-Fee": "3906",
        "3910": "Sass Grund", "Sass Grund": "3910",
        "3940": "Steg", "Steg": "3940",
        "3935": "Bürchen", "Bürchen": "3935",
        "3924": "Raron", "Raron": "3924",
        "3984": "Fiesch", "Fiesch": "3984",
        "3980": "Mörel", "Mörel": "3980"
    },

    // Méthode de l'objet pour les sources de prospects
    initProspectSourceInput: function(inputId = 'cli-src', datalistId = 'sources-suggestions') {
        const input = document.getElementById(inputId);
        if (input && !document.getElementById(datalistId)) {
            const datalist = document.createElement('datalist');
            datalist.id = datalistId;
            this.prospectSources.forEach(src => {
                const opt = document.createElement('option');
                opt.value = src;
                datalist.appendChild(opt);
            });
            input.setAttribute('list', datalistId);
            input.parentNode.appendChild(datalist);
        }
    }
};
