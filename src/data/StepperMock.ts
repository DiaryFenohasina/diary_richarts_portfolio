import rdpPetriImage from "../assets/image/rdp/rdp-petri.png";
import rdpPhoneDashboardImage from "../assets/image/rdp/rdp-phone-dashboard.png";
import phoneDashboardImage from "../assets/image/phone/phone-dashboard.png";
import cpmImage1 from "../assets/image/cpm/cpm-1.png";
import cpmImage2 from "../assets/image/cpm/cpm-2.png";
import cpmImage3 from "../assets/image/cpm/cpm-3.png";
import reservationImage1 from "../assets/image/reservation/reservation-1.png";
import reservationImage2 from "../assets/image/reservation/reservation-2.png";
import img1 from "../assets/image/poker/Capture d’écran du 2026-03-05 10-43-27.png"
import img2 from "../assets/image/poker/Capture d’écran du 2026-03-05 10-45-38.png"
import img3 from "../assets/image/poker/Capture d’écran du 2026-03-05 10-45-45.png"
import one from "../assets/image/IOT/1.jpeg"
import two from "../assets/image/IOT/2.jpeg"
import three from "../assets/image/IOT/3.jpeg"


const steps = [
    {
        label: 'Poker Assist',
        description: `Simulation d'une main de poker utilisant l’algorithme de Monte Carlo
        pour évaluer les probabilités de victoire selon les joueurs, le board
        et la main détenue.`,
        descriptionEn: `Poker hand simulation using the Monte Carlo algorithm
        to evaluate win probabilities according to players, board state,
        and the current hand.`,
        link: "git@github.com:DiaryFenohasina/Poker-Assist.git",
        images: [img1, img2, img3],
        stacks: ["Python", "FastAPI"]
    },
    {
        label: 'Météo IOT',
        description: `Application mobile permettant de consulter la météo en temps réel à Madagascar, avec des prévisions et une connectivité de 7 jours.`,
        descriptionEn: `Mobile application for viewing real-time weather data in Madagascar, including 7-day forecasts and IoT connectivity.`,
        link: "git@github.com:DiaryFenohasina/IOT-M-t-o.git",
        images: [
            one,
            two,
            three
        ],
        stacks: ["React Native", "Expo", "SQLite"]
    },
    // {
    //     label: 'E-Poker',
    //     description: `Application mobile permettant de gérer une partie de poker entre amis
    //     avec gestion des tours, des mises et du suivi des joueurs.`,
    //     descriptionEn: `Mobile app to manage poker games between friends,
    //     including turn flow, bet management, and player tracking.`,
    //     link: "git@github.com:DiaryFenohasina/E-Poker.git",
    //     images: ["/img/background/ia3.jpg", "/img/background/ia.jpg", "/img/background/woman3.jpeg"],
    //     stacks: ["React Native", "Expo", "SQlite"]
    // },
    {
        label: 'Critical Path Method (CPM)',
        description: `Technique de gestion de projet permettant d’identifier les tâches
        critiques et non critiques afin d’optimiser la planification
        et éviter les retards.`,
        descriptionEn: `Project management method used to identify critical
        and non-critical tasks to optimize planning
        and prevent delays.`,
        link: "git@github.com:DiaryFenohasina/CPM-Front.git",
        images: [cpmImage1, cpmImage2, cpmImage3],
        stacks: ["PHP", "Laravel", "Vue JS", "Redis"]
    },
    {
        label: 'Réseau de Petri (RDP)',
        description: `Modélisation et analyse des systèmes concurrents et distribués
        à l’aide des réseaux de Petri.`,
        descriptionEn: `Modeling and analysis of concurrent and distributed systems
        using Petri nets.`,
        link: "git@github.com:DiaryFenohasina/RDP-phone-call.git",
        images: [rdpPetriImage, rdpPhoneDashboardImage, phoneDashboardImage],
        stacks: ["Javascript", "Node js", "Express js", "React js", "PostgreSQL"]
    },
    {
        label: 'ENI Mailer',
        description: `Application de messagerie sécurisée conçue pour les étudiants
        et le personnel de l’ENI.`,
        descriptionEn: `Secure messaging application designed for ENI students
        and staff.`,
        link: "git@github.com:DiaryFenohasina/ENI-Mailer.git",
        images: ["/img/background/woman3.jpeg", "/img/background/ia.jpg", "/img/background/ia3.jpg"],
        stacks: ["Python", "Fast API", "React js", "PostgreSQL"]
    },
    {
        label: 'Kidoo Kids',
        description: `Application mobile éducative destinée aux enfants de 3 à 8 ans
        avec des jeux interactifs et des activités d’apprentissage adaptées.`,
        descriptionEn: `Educational mobile app for children aged 3 to 8,
        with interactive games and age-appropriate learning activities.`,
        link: "git@github.com:DiaryFenohasina/Kidoo-Kids.git",
        images: ["/img/background/ia.jpg", "/img/background/ia3.jpg", "/img/background/woman3.jpeg"],
        stacks: ["Javascript", "Node js", "Express js", "Vue js", "PostgreSQL"]
    },
    {
        label: 'Menu Radar',
        description: `Plateforme de comparaison et de recherche de restaurants.`,
        descriptionEn: `Platform for comparing and searching restaurants.`,
        link: "git@github.com:DiaryFenohasina/Menu-Radar.git",
        images: [reservationImage1, reservationImage2],
        stacks: ["Javascript", "Node js", "Express js", "React js", "PostgreSQL"]
    }
];

export default steps;
