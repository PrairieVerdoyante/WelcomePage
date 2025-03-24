import { ref } from 'vue';

var languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
    thai: 'ยินดีต้อนรับ',
    japonais: 'いらっしゃいませ'
  };

export var currentLanguage = ref('français');


export function chooseWelcome()
{
    const keys = Object.keys(languages); // Récupère les langues disponibles
    const randomIndex = Math.floor(Math.random() * keys.length); // Choisit un index aléatoire
    currentLanguage.value = keys[randomIndex]; // Récupère la langue correspondante
    return languages[keys[randomIndex]] || languages.french;
}


const colors = [
    //'rgba(107, 86, 77, 0.5)',  // darkbrown
    'rgba(174, 125, 99, 0.5)', // lightbrown
    'rgba(225, 198, 191, 0.5)', // lightbeige
    //'rgba(234, 219, 226, 0.5)', // lightpink
    'rgba(237, 185, 143, 0.5)', // beige
    'rgba(187, 122, 87, 0.5)'  // brightcolor
  ];

// Fonction pour obtenir une couleur aléatoire
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];


// Liste des boutons avec une couleur aléatoire
export const buttons = ref([
  { label: "Menus", link: "https://intranet.he-arc.ch/dg/Pages/Vie-de-l-ecole-Menus.aspx", color: getRandomColor() },
  { label: "isa", link: "https://age.hes-so.ch/imoniteur_AGEP/!logins.htm?ww_x_urlAppelant=gestac.htm", color: getRandomColor() },
  { label: "BFS", link: "https://brandsforstudents.ch/fr", color: getRandomColor() },
  { label: "Math", link: "https://cyberlearn.hes-so.ch/mod/folder/view.php?id=1965144", color: getRandomColor() },
  { label: "Physique", link: "https://cyberlearn.hes-so.ch/course/view.php?id=12462", color: getRandomColor() },
  { label: "Lin. emb.", link: "https://cyberlearn.hes-so.ch/course/view.php?id=7678", color: getRandomColor() },
  { label: "IOT", link: "https://cyberlearn.hes-so.ch/course/view.php?id=19504", color: getRandomColor() },
  { label: "Design patterns", link: "https://cyberlearn.hes-so.ch/course/view.php?id=11022", color: getRandomColor() },
  { label: ".NET", link: "https://gitlab-etu.ing.he-arc.ch/isc/2024-25/niveau-2/2255.3-dot-net/cours-net", color: getRandomColor() },
  { label: "Algo II", link: "https://cyberlearn.hes-so.ch/course/view.php?id=11226", color: getRandomColor() }
]);

  export const addButton = (label, link, color) => {
    buttons.value.push({ label, link, color: color || getRandomColor() });
  };