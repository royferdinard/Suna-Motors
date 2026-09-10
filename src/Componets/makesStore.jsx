import React from "react";
import toyota from '../assets/Images/Vehicles/v82.jpg'
import noah from '../assets/Images/Vehicles/noah.jpg'
import demio from '../assets/Images/Vehicles/blackDemio.jpg'
import teana from '../assets/Images/Vehicles/teana.jpg'
import nissan from '../assets/Images/Vehicles/nissan.jpg'
import ford from '../assets/Images/Vehicles/ford3.jpg'


const FeaturedMakeStore= [
    {
        name:"Toyota",
        image:toyota,
        desc:"This combines all toyota model e.g. harrier, corolla, land-cruiser, succeed, proboxm and filder",
        models: ["Harrier", "Corolla", "Land Cruiser", "Fielder", "Probox"],
        vehicles: "24 Vehicles",
    },
     {
        name:"Noah",
        image:noah,
        desc:"Noah is a car model that can be used for business, family use, personal use and also camping",
        models: ["Noah", "Voxy", "Esquire"],
        vehicles: "12 Vehicles",
    },
    {
        name:"Demio",
        image:demio,
        desc:"This is a luxury car make for personal, and bussiness use. It can also be use for driving practises.",
        models: ["Demio", "Mazda 2", "Mazda 3"],
        vehicles: "8 Vehicles",
    },
    {
        name:"Teana",
        image:teana,
        desc:"Teana is a first class car model use for personal use and business affairs. ",
        models: ["Teana", "Altima", "Maxima"],
        vehicles: "13 Vehicles",
    },
    {
        name:"Nissan",
        image: nissan,
        desc:"Nissan can be use for business, family affairs, public transport, personal journeys.",
        models: ["X-Trail", "Note", "Serena", "Navara"],
        vehicles: "57 Vehicles",
    },
     {
        name:"Ford",
        image: ford,
        desc:"It is know for its strong structure, durable spare parts, suv & amored design thats why it is preffered for security personel.",
        models: ["Ranger", "Everest", "Explorer", "Escape"],
        vehicles: "104 Vehicles",
    },
    

]

export default FeaturedMakeStore