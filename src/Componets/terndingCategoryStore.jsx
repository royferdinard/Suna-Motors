import suv from '../assets/Images/categories/suv.png'
import sedan from '../assets/Images/categories/sedan.jpg'
import Pickups from '../assets/Images/categories/pickup.webp'
import hatchBacks from '../assets/Images/categories/hatchback.jpg'
import vans from '../assets/Images/categories/van.jpeg'
const categories = [
  {
    id: 1,
    name: "SUVs",
    description: "Power & versatility",
    count: 24,
    image: suv,
  },
  {
    id: 2,
    name: "Sedans",
    description: "Comfort & elegance",
    count: 18,
    image: sedan,
  },
  {
    id: 3,
    name: "Pickups",
    description: "Built for work",
    count: 12,
    image: Pickups,
  },
  {
    id: 4,
    name: "Hatchbacks",
    description: "Compact & practical",
    count: 15,
    image: hatchBacks,
  },
  {
    id: 5,
    name: "Vans",
    description: "Space for everyone",
    count: 9,
    image: vans,
  },
//   {
//     id: 6,
//     name: "Hybrid & Electric",
//     description: "Drive the future",
//     count: 7,
//     image: "/src/assets/Categories/hybrid.jpg",
//   },
];

export default categories