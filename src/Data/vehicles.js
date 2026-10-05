import blackHarrier1 from "../assets/Images/Vehicles/blackHarrier.jpg";
import blackHarrier2 from "../assets/Images/Vehicles/blackHarrier2.jpg";
import blackHarrier3 from "../assets/Images/Vehicles/harrierblack3.jpeg";
import blackHarrier4 from "../assets/Images/Vehicles/blackharrier4.jpeg";
import blackHarrier5 from "../assets/Images/Vehicles/blackharrier5.jpeg";
import blackHarrier6 from "../assets/Images/Vehicles/blackharrier6.jpeg";

import landcruser1 from "../assets/Images/Vehicles/landcruser.jpeg";
import landcruser2 from "../assets/Images/Vehicles/landcruser1.jpeg";
import landcruser3 from "../assets/Images/Vehicles/landcruser2.jpeg";
import landcruser4 from "../assets/Images/Vehicles/landcruser3.jpeg";
import landcruser5 from "../assets/Images/Vehicles/landccruser4.jpeg";

import bmw1 from "../assets/Images/Vehicles/bmwx5.jpg";
import bmw2 from "../assets/Images/Vehicles/bmw1.jpg";
import bmw3 from "../assets/Images/Vehicles/bmw2.jpg";
import bmw4 from "../assets/Images/Vehicles/bmw3.jpg";
import bmw5 from "../assets/Images/Vehicles/bmw4.jpg";
import bmw6 from "../assets/Images/Vehicles/bmw5.jpg";

import gle from "../assets/Images/Vehicles/gle.jpg";
import gle2 from "../assets/Images/Vehicles/gle2.jpeg";
import gle3 from "../assets/Images/Vehicles/gle3.jpeg";
import gle4 from "../assets/Images/Vehicles/gle4.jpeg";
import gle5 from "../assets/Images/Vehicles/gle5.jpeg";
import gle6 from "../assets/Images/Vehicles/gle6.jpeg";

import civic from "../assets/Images/Vehicles/hondacivic.jpg";
import civic2 from "../assets/Images/Vehicles/civic1.jpg";
import civic3 from "../assets/Images/Vehicles/civic2.jpg";
import civic4 from "../assets/Images/Vehicles/civic3.jpg";
import civic5 from "../assets/Images/Vehicles/civic4.jpg";
import civic6 from "../assets/Images/Vehicles/civic5.jpg";

import hilux from "../assets/Images/Vehicles/hilux.jpg";
import hilux2 from "../assets/Images/Vehicles/hilux2.jpg";
import hilux3 from "../assets/Images/Vehicles/hilux3.jpg";
import hilux4 from "../assets/Images/Vehicles/hilux4.jpg";

const vehicles = [
  {
    id: 1,
    name: "Toyota Harrier",
    brand: "Toyota",
    category: "SUVs",
    year: 2024,
    price: 7850000,
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "25,000 km",
    seats: 5,

    images: [
      blackHarrier1,
      blackHarrier2,
      blackHarrier3,
      blackHarrier4,
      blackHarrier5,
      blackHarrier6,
    ],

    description:
      "A refined and reliable SUV offering a comfortable interior, smooth performance, and a premium driving experience. Well maintained and ready for viewing at Suna Motors.",

    status: "Featured",

    features: [
      "2024 Model",
      "Automatic Transmission",
      "Petrol Engine",
      "5 Seats",
      "Leather Interior",
      "Reverse Camera",
      "Push Start",
      "Cruise Control",
    ],
  },

  {
    id: 2,
    name: "Toyota Land Cruiser",
    brand: "Toyota",
    category: "SUVs",
    year: 2023,
    price: 12500000,
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "32,000 km",
    seats: 7,

    images: [landcruser1, landcruser2, landcruser3, landcruser4, landcruser5],

    description:
      "A refined and reliable SUV offering a comfortable interior, smooth performance, and a premium driving experience. Well maintained and ready for viewing at Suna Motors.",

    status: "Available",

    features: [
      "2023 Model",
      "Automatic Transmission",
      "Diesel Engine",
      "7 Seats",
      "Leather Interior",
      "Reverse Camera",
      "Push Start",
      "Cruise Control",
    ],
  },

  {
    id: 3,
    name: "BMW X5",
    brand: "BMW",
    category: "Luxury",
    year: 2024,
    price: 14500000,
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "18,000 km",
    seats: 5,

    images: [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6],

    description:
      "A refined and reliable SUV offering a comfortable interior, smooth performance, and a premium driving experience. Well maintained and ready for viewing at Suna Motors.",

    status: "New",

    features: [
      "2024 Model",
      "Automatic Transmission",
      "Petrol Engine",
      "5 Seats",
      "Leather Interior",
      "Reverse Camera",
      "Push Start",
      "Cruise Control",
    ],
  },

  {
    id: 4,
    name: "Mercedes-Benz GLE",
    brand: "Mercedes",
    category: "Luxury",
    year: 2023,
    price: 13800000,
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "21,000 km",
    seats: 5,

    images: [gle, gle2, gle3, gle4, gle5, gle6],

    description:
      "A refined and reliable SUV offering a comfortable interior, smooth performance, and a premium driving experience. Well maintained and ready for viewing at Suna Motors.",

    status: "Available",

    features: [
      "2023 Model",
      "Automatic Transmission",
      "Diesel Engine",
      "5 Seats",
      "Leather Interior",
      "Reverse Camera",
      "Push Start",
      "Cruise Control",
    ],
  },

  {
    id: 5,
    name: "Honda Civic",
    brand: "Honda",
    category: "Sedans",
    year: 2022,
    price: 4200000,
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "40,000 km",
    seats: 5,

    images: [civic, civic2, civic3, civic4, civic5, civic6],

    description:
      "A refined and reliable sedan offering a comfortable interior, smooth performance, and an enjoyable driving experience. Well maintained and ready for viewing at Suna Motors.",

    status: "Available",

    features: [
      "2022 Model",
      "Automatic Transmission",
      "Petrol Engine",
      "5 Seats",
      "Leather Interior",
      "Reverse Camera",
      "Push Start",
      "Cruise Control",
    ],
  },

  {
    id: 6,
    name: "Toyota Hilux",
    brand: "Toyota",
    category: "Pickups",
    year: 2024,
    price: 6800000,
    fuel: "Diesel",
    transmission: "Manual",
    mileage: "15,000 km",
    seats: 5,

    images: [hilux, hilux2, hilux3, hilux4],

    description:
      "A strong and reliable pickup designed for both everyday driving and demanding work. Well maintained and ready for viewing at Suna Motors.",

    status: "Featured",

    features: [
      "2024 Model",
      "Manual Transmission",
      "Diesel Engine",
      "5 Seats",
      "Leather Interior",
      "Reverse Camera",
      "Push Start",
      "Cruise Control",
    ],
  },
];

export default vehicles;
