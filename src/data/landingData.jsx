import one from "../images/1.webp";
import two from "../images/2.webp";
import three from "../images/3.webp";
import four from "../images/8.webp";
import five from "../images/9.webp";
import six from "../images/andaman.webp";
import seven from "../images/goa.jpg";
import eight from "../images/jaipur.jpg";
import nine from "../images/kerala.webp";
import ten from "../images/manali.jpg";
import eleven from "../images/leh.jpg"


/* ------------------------- */

// src/data/landingData.js

/* ✈️ Top Destinations
   ------------------------------------------ */
export const topDestinations = [
  {
    id: 1,
    name: "Goa, India",
    image: seven,
    description:
      "Golden beaches, palm trees, music festivals, and Portuguese charm — Goa is India’s ultimate coastal paradise. Enjoy the serene sunsets, water sports, and vibrant nightlife.",
    location: "Western India",
    bestTimeToVisit: "November to February",
  },
  {
    id: 2,
    name: "Leh–Ladakh, India",
    image: eleven,
    description:
      "Ride through the world’s highest motorable passes, explore Buddhist monasteries, and soak in the mystical Himalayan serenity. Perfect for adventure seekers and soul travelers alike.",
    location: "Jammu & Kashmir, Northern India",
    bestTimeToVisit: "June to September",
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image: nine,
    description:
      "Cruise through calm backwaters, lush paddy fields, and coconut groves — God’s Own Country awaits with serene houseboat stays and Ayurvedic retreats.",
    location: "Southern India",
    bestTimeToVisit: "September to March",
  },
  {
    id: 4,
    name: "Jaipur, Rajasthan",
    image: eight,
    description:
      "Step into royal heritage — pink palaces, majestic forts, and colorful bazaars define the ‘Pink City’. Discover Hawa Mahal, Amber Fort, and timeless Rajasthani hospitality.",
    location: "Northwestern India",
    bestTimeToVisit: "October to March",
  },
  {
    id: 5,
    name: "Andaman Islands",
    image: six,
    description:
      "Crystal-clear waters, coral reefs, and beachside luxury — the Andaman Islands are a tropical escape like no other. Ideal for snorkeling, scuba diving, and beach relaxation.",
    location: "Bay of Bengal, India",
    bestTimeToVisit: "October to May",
  },
  {
    id: 6,
    name: "Manali, Himachal Pradesh",
    image: ten,
    description:
      "Snow-capped peaks, apple orchards, and cozy cafes make Manali a dream mountain getaway. Perfect for skiing, trekking, and peaceful retreats by the Beas River.",
    location: "Himachal Pradesh, Northern India",
    bestTimeToVisit: "October to February",
  },
];

/* ------------------------- */
/* 🔥 Trending Trips */
/* ------------------------- */
export const trendingTrips = [
  {
    id: 1,
    title: "Goa Beach Escape",
    description:
      "Unwind with beach parties, seafood delights, and scenic sunsets at Baga and Palolem.",
    price: "₹14,999",
    oldPrice: "₹18,999",
    offer: "20% OFF",
    rating: 5,
    days: 4,
    image: one,
  },
  {
    id: 2,
    title: "Kashmir Paradise Tour",
    description:
      "Enjoy houseboat stays, tulip gardens, and snow adventures in Gulmarg and Pahalgam.",
    price: "₹24,999",
    oldPrice: "₹29,999",
    offer: "Save ₹5,000",
    rating: 5,
    days: 6,
    image: two,
  },
  {
    id: 3,
    title: "Rajasthan Royal Circuit",
    description:
      "Explore Jaipur, Jodhpur, and Udaipur — heritage palaces, deserts, and royal culture in one trip.",
    price: "₹21,499",
    oldPrice: "₹25,999",
    offer: "15% OFF",
    rating: 4,
    days: 5,
    image: four,
  },
  {
    id: 4,
    title: "Himalayan Adventure Trek",
    description:
      "Reconnect with nature on guided treks through Himachal’s pine forests and snow valleys.",
    price: "₹17,999",
    oldPrice: "₹20,999",
    offer: "Early Bird Offer",
    rating: 4,
    days: 7,
    image: five,
  },
  {
    id: 5,
    title: "Kerala Backwater Bliss",
    description:
      "Sail through Alleppey’s backwaters, experience Ayurvedic wellness, and savor authentic coastal cuisine.",
    price: "₹19,499",
    oldPrice: "₹23,999",
    offer: "Limited Time Deal",
    rating: 5,
    days: 5,
    image: three,
  },
];

/* ------------------------- */
/* 🌸 Seasonal Travel Plans */
/* ------------------------- */
export const seasonalPlans = [
  {
    id: 1,
    season: "Summer Escapes",
    image: one,
    description:
      "Beat the heat with our summer getaways — explore Himachal, Sikkim, or cool off in the Andaman Islands.",
    offer: "Hot Deals 🔥",
  },
  {
    id: 2,
    season: "Monsoon Getaways",
    image: two,
    description:
      "Witness lush green landscapes and misty hills — from Munnar to Meghalaya’s waterfalls.",
    offer: "Rainy Season Specials ☔",
  },
  {
    id: 3,
    season: "Winter Adventures",
    image: three,
    description:
      "Experience snowfalls, skiing, and cozy stays in Gulmarg, Manali, and Auli this winter.",
    offer: "Winter Wonderland ❄️",
  },
  {
    id: 4,
    season: "Festive Specials",
    image: four,
    description:
      "Celebrate Diwali, Dussehra, or Holi in India’s most vibrant destinations — from Varanasi to Mathura.",
    offer: "Festive Deals 🎉",
  },
  {
    id: 5,
    season: "Spring Escapes",
    image: five,
    description:
      "Witness the blooming valleys of Kashmir and North-East India — a photographer’s paradise in spring.",
    offer: "Season of Flowers 🌸",
  },
];
