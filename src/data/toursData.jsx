import one from "../images/gujrat.jfif";
import two from "../images/rajsthan.jfif";
import three from "../images/dwarka3.jfif";
import four from "../images/8.webp";
import five from "../images/9.webp";
import six from "../images/andaman.webp";
import seven from "../images/goa.jpg";
import eight from "../images/jaipur.jpg";
import nine from "../images/kerala.webp";
import ten from "../images/manali.jpg";
import eleven from "../images/leh.jpg"


export const toursData = [
  {
    state: "Gujarat",
    description: "Spiritual & cultural heart of western India.",
    image:one,
    tours: [
      {
        id: "dwarka",
        name: "Dwarka Temple Tour",
        duration: "3 Days / 2 Nights",
        price: 12000,
        image: three,
        details: {
          overview: "Visit the ancient Dwarkadhish Temple...",
          itinerary: [
            "Day 1: Arrival & Temple visit",
            "Day 2: Bet Dwarka + Nageshwar Jyotirlinga",
            "Day 3: Departure"
          ],
          inclusions: ["Hotel stay", "Breakfast", "Guide", "Transportation"],
        },
      },
      {
        id: "kutch",
        name: "White Rann of Kutch Tour",
        duration: "4 Days / 3 Nights",
        price: 16000,
        image: "/images/kutch.jpg",
        details: {
          overview: "Witness the mesmerizing White Desert...",
          itinerary: [
            "Day 1: Bhuj Arrival",
            "Day 2: Rann of Kutch",
            "Day 3: Mandvi Beach",
            "Day 4: Departure"
          ],
          inclusions: ["Accommodation", "Meals", "Cultural show", "Transport"],
        },
      },
    ],
  },
  {
    state: "Rajasthan",
    description: "The royal land of forts and deserts.",
    image: two,
    tours: [
      {
        id: "jaipur",
        name: "Jaipur Heritage Tour",
        duration: "3 Days / 2 Nights",
        price: 14000,
        image: "/images/jaipur.jpg",
      },
      {
        id: "udaipur",
        name: "Udaipur Lake Tour",
        duration: "4 Days / 3 Nights",
        price: 18000,
        image: "/images/udaipur.jpg",
      },
    ],
  },
   {
    state: "Gujarat",
    description: "Spiritual & cultural heart of western India.",
    image:one,
    tours: [
      {
        id: "dwarka",
        name: "Dwarka Temple Tour",
        duration: "3 Days / 2 Nights",
        price: 12000,
        image: three,
        details: {
          overview: "Visit the ancient Dwarkadhish Temple...",
          itinerary: [
            "Day 1: Arrival & Temple visit",
            "Day 2: Bet Dwarka + Nageshwar Jyotirlinga",
            "Day 3: Departure"
          ],
          inclusions: ["Hotel stay", "Breakfast", "Guide", "Transportation"],
        },
      },
      {
        id: "kutch",
        name: "White Rann of Kutch Tour",
        duration: "4 Days / 3 Nights",
        price: 16000,
        image: "/images/kutch.jpg",
        details: {
          overview: "Witness the mesmerizing White Desert...",
          itinerary: [
            "Day 1: Bhuj Arrival",
            "Day 2: Rann of Kutch",
            "Day 3: Mandvi Beach",
            "Day 4: Departure"
          ],
          inclusions: ["Accommodation", "Meals", "Cultural show", "Transport"],
        },
      },
    ],
  },
    {
    state: "Rajasthan",
    description: "The royal land of forts and deserts.",
    image: two,
    tours: [
      {
        id: "jaipur",
        name: "Jaipur Heritage Tour",
        duration: "3 Days / 2 Nights",
        price: 14000,
        image: "/images/jaipur.jpg",
      },
      {
        id: "udaipur",
        name: "Udaipur Lake Tour",
        duration: "4 Days / 3 Nights",
        price: 18000,
        image: "/images/udaipur.jpg",
      },
    ],
  },
    {
    state: "Rajasthan",
    description: "The royal land of forts and deserts.",
    image: "/images/rajasthan.jpg",
    tours: [
      {
        id: "jaipur",
        name: "Jaipur Heritage Tour",
        duration: "3 Days / 2 Nights",
        price: 14000,
        image: "/images/jaipur.jpg",
      },
      {
        id: "udaipur",
        name: "Udaipur Lake Tour",
        duration: "4 Days / 3 Nights",
        price: 18000,
        image: "/images/udaipur.jpg",
      },
    ],
  },
];
