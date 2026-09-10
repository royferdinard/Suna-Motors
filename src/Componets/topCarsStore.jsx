import React from "react";

import blackDemio from "../assets/Images/Vehicles/blackDemio.jpg";
import harrier from "../assets/Images/Vehicles/harrier.jpg";
import redDemio from "../assets/Images/Vehicles/redDemio.jpg";
import v84 from "../assets/Images/Vehicles/v84.jpg";

const TopCarsStore = [
  // =====================================================
  // 1. BLACK MAZDA DEMIO
  // =====================================================
  {
    id: 1,

    name: "Mazda Demio",
    brand: "Mazda",
    model: "Demio",
    year: 2018,

    category: "Hatchback",
    condition: "Foreign Used",
    status: "Available",

    price: 1450000,
    currency: "KES",
    priceDisplay: "KES 1,450,000",

    image: blackDemio,

    gallery: [
      blackDemio,
    ],

    description:
      "The Mazda Demio is a stylish, compact and fuel-efficient hatchback designed for comfortable everyday driving. Its compact body makes it easy to manoeuvre in urban environments while providing a comfortable and modern interior. This vehicle is an excellent choice for drivers looking for reliability, economy and practicality.",

    specifications: {
      mileage: "68,500 KM",
      engine: "1.5L",
      fuelType: "Petrol",
      transmission: "Automatic",
      drivetrain: "2WD",
      bodyType: "Hatchback",
      exteriorColor: "Black",
      interiorColor: "Black",
      seats: 5,
      doors: 5,
      steering: "Right Hand Drive",
      condition: "Foreign Used",
    },

    features: [
      "Push Start",
      "Keyless Entry",
      "Air Conditioning",
      "Power Windows",
      "Power Steering",
      "Central Locking",
      "ABS Brakes",
      "Airbags",
      "Alloy Wheels",
      "Reverse Camera",
      "Bluetooth",
      "USB Connectivity",
      "Multimedia Display",
      "Electric Mirrors",
    ],

    highlights: [
      "Fuel Efficient",
      "Easy to Drive",
      "Well Maintained",
      "Modern Interior",
      "Reliable Performance",
    ],

    conditionDetails: {
      exterior:
        "The vehicle has a clean and attractive exterior with a well-maintained black finish.",

      interior:
        "The interior is clean, comfortable and equipped with modern convenience features.",

      engine:
        "The engine delivers smooth and efficient performance suitable for everyday driving.",

      tyres:
        "The vehicle is fitted with well-maintained tyres suitable for normal road use.",
    },

    idealFor: [
      "City Driving",
      "Daily Commuting",
      "First-Time Car Owners",
      "Small Families",
    ],
  },

  // =====================================================
  // 2. TOYOTA HARRIER
  // =====================================================
  {
    id: 2,

    name: "Toyota Harrier",
    brand: "Toyota",
    model: "Harrier",
    year: 2019,

    category: "SUV",
    condition: "Foreign Used",
    status: "Available",

    price: 3850000,
    currency: "KES",
    priceDisplay: "KES 3,850,000",

    image: harrier,

    gallery: [
      harrier,
    ],

    description:
      "The Toyota Harrier is a premium SUV that combines elegant styling, refined performance and exceptional comfort. It offers a spacious cabin, sophisticated interior and smooth driving experience, making it suitable for both city driving and long-distance journeys. Its distinctive design gives it a strong and premium road presence.",

    specifications: {
      mileage: "52,800 KM",
      engine: "2.0L",
      fuelType: "Petrol",
      transmission: "Automatic",
      drivetrain: "2WD",
      bodyType: "SUV",
      exteriorColor: "Pearl White",
      interiorColor: "Black",
      seats: 5,
      doors: 5,
      steering: "Right Hand Drive",
      condition: "Foreign Used",
    },

    features: [
      "Leather Interior",
      "Push Start",
      "Keyless Entry",
      "Climate Control",
      "Air Conditioning",
      "Power Seats",
      "Power Windows",
      "Power Steering",
      "Central Locking",
      "ABS Brakes",
      "Multiple Airbags",
      "Alloy Wheels",
      "Reverse Camera",
      "Parking Sensors",
      "Bluetooth",
      "USB Connectivity",
      "Multimedia Display",
      "Cruise Control",
      "Electric Mirrors",
    ],

    highlights: [
      "Premium SUV",
      "Luxury Interior",
      "Spacious Cabin",
      "Smooth Automatic Transmission",
      "Modern Safety Features",
    ],

    conditionDetails: {
      exterior:
        "The Harrier features a premium exterior design with an elegant and well-maintained finish.",

      interior:
        "The cabin provides a refined and comfortable environment with premium materials and modern features.",

      engine:
        "The 2.0L petrol engine provides smooth performance while maintaining reasonable fuel efficiency.",

      tyres:
        "The vehicle comes with well-maintained wheels and tyres.",
    },

    idealFor: [
      "Family Driving",
      "Executive Driving",
      "Long-Distance Travel",
      "Luxury SUV Buyers",
    ],
  },

  // =====================================================
  // 3. RED MAZDA DEMIO
  // =====================================================
  {
    id: 3,

    name: "Mazda Demio",
    brand: "Mazda",
    model: "Demio",
    year: 2017,

    category: "Hatchback",
    condition: "Foreign Used",
    status: "Available",

    price: 1390000,
    currency: "KES",
    priceDisplay: "KES 1,390,000",

    image: redDemio,

    gallery: [
      redDemio,
    ],

    description:
      "This Mazda Demio combines attractive styling, excellent fuel economy and practical everyday usability. Its compact design makes it ideal for navigating busy city roads while the comfortable cabin provides everything needed for convenient daily transportation. The striking red exterior gives the vehicle a sporty and distinctive appearance.",

    specifications: {
      mileage: "71,200 KM",
      engine: "1.3L",
      fuelType: "Petrol",
      transmission: "Automatic",
      drivetrain: "2WD",
      bodyType: "Hatchback",
      exteriorColor: "Red",
      interiorColor: "Black",
      seats: 5,
      doors: 5,
      steering: "Right Hand Drive",
      condition: "Foreign Used",
    },

    features: [
      "Air Conditioning",
      "Power Windows",
      "Power Steering",
      "Central Locking",
      "ABS Brakes",
      "Airbags",
      "Alloy Wheels",
      "Reverse Camera",
      "Bluetooth",
      "USB Connectivity",
      "Multimedia System",
      "Electric Mirrors",
      "Keyless Entry",
      "Push Start",
    ],

    highlights: [
      "Fuel Efficient",
      "Sporty Exterior",
      "Compact Design",
      "Easy City Driving",
      "Low Running Costs",
    ],

    conditionDetails: {
      exterior:
        "The vehicle features a striking red exterior with a clean and sporty appearance.",

      interior:
        "The cabin is neat and comfortable with practical technology and convenience features.",

      engine:
        "The efficient 1.3L petrol engine is well suited for economical everyday driving.",

      tyres:
        "The vehicle is equipped with tyres suitable for everyday road use.",
    },

    idealFor: [
      "City Driving",
      "Daily Commuting",
      "Students and Young Professionals",
      "First-Time Car Owners",
    ],
  },

  // =====================================================
  // 4. TOYOTA LAND CRUISER V8
  // =====================================================
  {
    id: 4,

    name: "Toyota Land Cruiser V8",
    brand: "Toyota",
    model: "Land Cruiser V8",
    year: 2018,

    category: "Luxury SUV",
    condition: "Foreign Used",
    status: "Available",

    price: 9800000,
    currency: "KES",
    priceDisplay: "KES 9,800,000",

    image: v84,

    gallery: [
      v84,
    ],

    description:
      "The Toyota Land Cruiser V8 represents a combination of luxury, power and exceptional capability. Designed for drivers who demand comfort without compromising performance, this SUV offers a spacious interior, commanding road presence and advanced features. Its four-wheel-drive capability makes it suitable for both urban environments and demanding journeys.",

    specifications: {
      mileage: "84,600 KM",
      engine: "4.5L V8",
      fuelType: "Diesel",
      transmission: "Automatic",
      drivetrain: "4WD",
      bodyType: "Luxury SUV",
      exteriorColor: "Black",
      interiorColor: "Black",
      seats: 7,
      doors: 5,
      steering: "Right Hand Drive",
      condition: "Foreign Used",
    },

    features: [
      "V8 Engine",
      "4WD",
      "Leather Interior",
      "Sunroof",
      "Push Start",
      "Keyless Entry",
      "Climate Control",
      "Power Seats",
      "Power Windows",
      "Power Steering",
      "Cruise Control",
      "Hill Start Assist",
      "ABS Brakes",
      "Multiple Airbags",
      "Alloy Wheels",
      "Reverse Camera",
      "Parking Sensors",
      "Bluetooth",
      "USB Connectivity",
      "Premium Sound System",
      "Electric Mirrors",
    ],

    highlights: [
      "Powerful V8 Engine",
      "Luxury Interior",
      "Four-Wheel Drive",
      "Seven Seats",
      "Premium SUV",
      "Excellent Road Presence",
    ],

    conditionDetails: {
      exterior:
        "The Land Cruiser V8 has a commanding exterior presence with a premium and well-maintained finish.",

      interior:
        "The spacious cabin combines premium leather seating, comfort features and modern technology.",

      engine:
        "The powerful V8 diesel engine delivers strong performance and excellent capability.",

      tyres:
        "The vehicle is equipped with robust wheels and tyres suitable for both urban and challenging road conditions.",
    },

    idealFor: [
      "Family Travel",
      "Executive Driving",
      "Long-Distance Travel",
      "Off-Road Driving",
      "Luxury SUV Buyers",
    ],
  },
];

export default TopCarsStore;