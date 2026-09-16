import {
  CarFront,
  Car,
  Gauge,
  Truck,
  Crown,
  Bus,
} from "lucide-react";

import toyota from "../../assets/Images/Logo/toyota.png";
import nissan from "../../assets/Images/Logo/nissan.png";
import mazda from "../../assets/Images/Logo/mazda.png";
import subaru from "../../assets/Images/Logo/subaru.png";
import honda from "../../assets/Images/Logo/honda.png";
import mitsubishi from "../../assets/Images/Logo/mitsubishi.png";
import mercedes from "../../assets/Images/Logo/mercedes.png";
import bmw from "../../assets/Images/Logo/bmw.png";
import audi from "../../assets/Images/Logo/audi.png";
import volkswagen from "../../assets/Images/Logo/volksWagen.png";
import ford from "../../assets/Images/Logo/ford.png";
import hyundai from "../../assets/Images/Logo/hyundai.png";
import kia from "../../assets/Images/Logo/kia.png";
import lexus from "../../assets/Images/Logo/lexus.png";
import isuzu from "../../assets/Images/Logo/isuzu.png";
import landrover from "../../assets/Images/Logo/landrover.png";

const Makes = [
  {
    name: "Toyota",
    vehicles: 18,
    categories: ["SUV", "Sedan", "Hatchback", "Van", "Pickup"],
    icon: CarFront,
    image: toyota,
  },

  {
    name: "Nissan",
    vehicles: 12,
    categories: ["SUV", "Sedan", "Hatchback", "Pickup"],
    icon: Car,
    image: nissan,
  },

  {
    name: "Mazda",
    vehicles: 10,
    categories: ["SUV", "Sedan", "Hatchback"],
    icon: Gauge,
    image: mazda,
  },

  {
    name: "Subaru",
    vehicles: 8,
    categories: ["SUV", "Sedan", "Wagon"],
    icon: CarFront,
    image: subaru,
  },

  {
    name: "Honda",
    vehicles: 7,
    categories: ["SUV", "Sedan", "Hatchback"],
    icon: Car,
    image: honda,
  },

  {
    name: "Mitsubishi",
    vehicles: 6,
    categories: ["SUV", "Pickup"],
    icon: Truck,
    image: mitsubishi,
  },

  {
    name: "Mercedes-Benz",
    vehicles: 5,
    categories: ["SUV", "Sedan", "Luxury"],
    icon: Crown,
    image: mercedes,
  },

  {
    name: "BMW",
    vehicles: 5,
    categories: ["SUV", "Sedan", "Luxury"],
    icon: Gauge,
    image: bmw,
  },

  {
    name: "Audi",
    vehicles: 4,
    categories: ["SUV", "Sedan", "Luxury"],
    icon: Crown,
    image: audi,
  },

  {
    name: "Volkswagen",
    vehicles: 4,
    categories: ["SUV", "Sedan", "Hatchback", "Van"],
    icon: Bus,
    image: volkswagen,
  },

  {
    name: "Ford",
    vehicles: 4,
    categories: ["SUV", "Pickup", "Van"],
    icon: Truck,
    image: ford,
  },

  {
    name: "Hyundai",
    vehicles: 3,
    categories: ["SUV", "Sedan", "Hatchback"],
    icon: CarFront,
    image: hyundai,
  },

  {
    name: "Kia",
    vehicles: 3,
    categories: ["SUV", "Sedan", "Hatchback"],
    icon: Car,
    image: kia,
  },

  {
    name: "Lexus",
    vehicles: 3,
    categories: ["SUV", "Sedan", "Luxury"],
    icon: Crown,
    image: lexus,
  },

  {
    name: "Land Rover",
    vehicles: 2,
    categories: ["SUV", "Luxury"],
    icon: CarFront,
    image: landrover,
  },

  {
    name: "Isuzu",
    vehicles: 2,
    categories: ["Pickup", "SUV"],
    icon: Truck,
    image: isuzu,
  },
];

export default Makes;