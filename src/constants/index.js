import { AlertTriangle, Camera, Eye, SearchIcon } from "lucide-react";

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  ai1,
  ai2,
  ai3,
  ai4,
  ai5,
  ai6,
  ai7,
  ai8,
  ai9,
  notAi1,
  notAi2,
  notAi3,
  notAi4,
  notAi5,
  notAi6,
  notAi7,
  notAi8,
  googleicon,
  insta
} from "../assets";


export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Extension",
    url: "#extension",
  },
  {
    id: "4",
    title: "Detection",
    url: "/detection",
    onlyMobile: true,
  },
];

export const heroIcons = [Eye, SearchIcon, AlertTriangle, Camera];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Upload Asset",
  "Detection",
  "Detection Results",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "The extension quickly analyzes images using an ML model and provides real-time feedback on whether the content is manipulated or authentic.";

export const collabContent = [
  {
    id: "0",
    title: "Inline Deepfake Warnings",
    text: collabText,
  },
  {
    id: "1",
    title: "Privacy-Focused Detection Mode",
  },
  {
    id: "2",
    title: "Contextual Deepfake Metadata Checker",
  },
];

export const images = [
  {
    img: ai1,
    isAI: true,
  },
  {
    img: ai2,
    isAI: true,
  },
  {
    img: notAi1,
    isAI: false
  },
  {
    img: ai3,
    isAI: true
  },

  {
    img: notAi2,
    isAI: false
  },{
    img: notAi3,
    isAI: false
  },
  {
    img: ai4,
    isAI: true
  },
  {
    img: notAi8,
    isAI: false
  },
  {
    img: ai5,
    isAI: true
  },
  {
    img: notAi4,
    isAI: false
  },
  {
    img: ai6,
    isAI: true
  },
  {
    img: ai7,
    isAI: true
  },
  {
    img: notAi5,
    isAI: false
  },
  {
    img: ai8,
    isAI: true
  },
  {
    img: notAi6,
    isAI: false
  },
  {
    img: ai9,
    isAI: true
  },
  {
    img: notAi7,
    isAI: false
  },

];

export const collabApps = [
  {
    id: "0",
    title: "figma",
    icon: icon1,
    width: 32,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: googleicon,
    width: 32,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: icon3,
    width: 36,
    height: 36,
  },
  {
    id: "3",
    title: "Slack",
    icon: icon4,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: icon5,
    width: 56,
    height: 56,
  },
  {
    id: "5",
    title: "Protopie",
    icon: icon6,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: icon2,
    width: 32,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: insta,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Deepfake Detection",
    text: "Accurately detects AI-generated images and Protects Users from fake content & misinformation.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Real-Time Analysis",
    text: "Scans media instantly for authenticity verification.Provides quick results to prevent the spread of deepfakes",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: " Privacy Focused",
    text: "Does not store or share user data for maximum security.Operates locally or on secure servers with encryption.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "AI-Powered Insights",
    text: "Uses advanced AI to differentiate real vs. fake content,Provides confidence scores and in-depth analysis.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: " User-Friendly Interface",
    text: "Simple and intuitive design for seamless user experience.Requires no technical knowledge to operate. ",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Educational Resources",
    text: "Offers guides on deepfakes and their impact on society.Teaches users how to identify and avoid fake content.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
