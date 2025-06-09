
// <------ CLIENT VALUES ------->

export const clientConfig = {

  // Themes / Colors
  daisy_theme: "business",
  logo_color: "#F2343A",
  // Set primary / secondary colors in index.css

  // Other styling
  borders: "rounded-none",


  // General
  short_name: "J&S Auto Services",
  long_name: "J&S Auto Services",
  phone: "(801) 555-1234",
  phoneLink: "8015551234",
  email: "AMR_Auto@gmail.com",
  address: "1145 Richards St,",
  addressSecondary: "Salt Lake City, UT 84101",
  addressFull: "1145 Richards St, Salt Lake City, UT 84101",

  // Header
  logo: "/brand_imgs/logo.png",

};

// <------ COMPONENT SELECTION ------->

export const componentSelection = {
  // default, contact
  header: "contact",
  
  // centeredPhoto,
  // leftPhoto
  landing: "leftPhoto",

  // default, 
  // primary
  services: "default",

  // singleImage,
  // ownerTeam,
  // ownerTeamFlex,
  // ownerTeamFlexAngle
  about: "ownerTeamFlexAngle",

  // default
  reviews: "default",

  // default
  contact: "default"
}

// <------ LANDING VALUES ------->

export const landingConfig = {
  landing_img: "/brand_imgs/hero.png",
  landing_title: "Quality Service at Record Speeds",
  landing_subtext: "Honest, skilled mechanics serving Salt Lake City and beyond. We keep you running smoothly.",
  landing_cta: "GIVE US A CALL",
  landing_type: 0,
}


// <------- SERVICE VALUES ------->

export const serviceConfig = {
  // bg-base-300 for solid, url for photo
  bg: "url(/services_imgs/tire_background.jpg)"
}

export const serviceCardConfig = [
  {
    title: "Tire Services",
    description: "We handle all your tire needs with expert care.",
    image: "/services_imgs/tireBalance.jpg",
    items: [
      "Tire repair",
      "Tire balancing",
      "Tire swapping"
    ]
  },
  {
    title: "Engine Repair",
    description: "Keep your engine running like new.",
    image: "/services_imgs/engineRepair.jpg",
    items: [
      "Diagnostics",
      "Timing belt replacement",
      "Engine rebuild"
    ]
  },
  {
    title: "Scheduled Maintenance",
    description: "Regular service to keep your vehicle in top shape.",
    image: "/services_imgs/oilChange.jpeg",
    items: [
      "Oil change",
      "Battery testing",
      "Fluid change"
    ]
  },
  {
    title: "Brakes",
    description: "Stay safe with professional brake service.",
    image: "/services_imgs/brakeJob.jpg",
    items: [
      "Brake pad replacement",
      "Rotor resurfacing",
      "Fluid bleed"
    ]
  }
];

// <--------- ABOUT US -------->

export const aboutUsConfig = {
  description: "Founded with a mission to redefine trust in auto repair, we’ve built our reputation on honesty, hard work, and community values. Whether it’s a quick tune-up or a major rebuild, you can count on us to get the job done right.",
  team_image: "/about_imgs/team.jpg",
  team_description: "Exceptional team members ready to get you back on the road with precision and care. Each technician brings years of experience, honesty, and a commitment to getting the job done right the first time.",
  owner_image: "/about_imgs/owner.png",
  owner_name: "John Doe",
  owner_description: "Founded with a mission to redefine trust in auto repair, we’ve built our reputation on honesty, hard work, and community values. Whether it’s a quick tune-up or a major rebuild, you can count on us to get the job done right."
}

export const aboutUsCardConfig = [
  {
    fullName: "John Martinez",
    yearsOfExperience: 18,
    image: "/about_imgs/owner.png",
    description: "ASE-certified master technician with nearly two decades of experience in engine diagnostics and repair."
  },
  {
    fullName: "Alex Brooks",
    yearsOfExperience: 12,
    image: "/about_imgs/owner.png",
    description: "Brake system specialist with a strong focus on clear communication. "
  },
  {
    fullName: "Leo Nguyen",
    yearsOfExperience: 9,
    image: "/about_imgs/owner.png",
    description: "Expert in electrical diagnostics and hybrid systems. "
  },
  {
    fullName: "Emily Chavez",
    yearsOfExperience: 6,
    image: "/about_imgs/owner.png",
    description: "Skilled in oil systems, tire work, and general maintenance."
  }
];


// <------- REVIEWS ------->

export const reviewsConfig = [
  {
    fullName: "Claire Astle",
    reviewValue: 5,
    timePosted: "01/7/2025",
    reviewText:
      "Going from Canada to Arizona and needed a fix quick, guys were wonderful, helpful, and reasonably priced, in a situation where they could’ve squeezed a lot of money out of us!",
  },
  {
    fullName: "Jose Casares",
    reviewValue: 5,
    timePosted: "06/01/2023",
    reviewText:
      "Always a pleasure. Guys here are honest and reasonably priced. They did a diagnostic for me and told me that I did not need a valve job like the other shop insisted, that I only needed a full tuneup. We went ahead, and voila. They were right. Thanks J&S",
  },
  {
    fullName: "Victoria Velasquez",
    reviewValue: 5,
    timePosted: "05/28/2019",
    reviewText:
      "Great service! The owner is a wonderful man completely honest I trust them with my car they have help me and my family out many times!",
  },
  {
    fullName: "Tara Feller",
    reviewValue: 5,
    timePosted: "05/20/2021",
    reviewText:
      "The best most efficient place with the lowest prices. And by far the most fast service in town. Thanks guys for all your help I would recommend this place to all my family and friends",
  },
  {
    fullName: "Martha Kein",
    reviewValue: 4,
    timePosted: "05/15/2022",
    reviewText:
      "I like this place for it's good work and service the experience they have is great they're work is worth the money. This is my favorite shop.",
  },
];



// <------- CONTACT INFO -------->

export const contactConfig = {
  phone: "(801) 467-1477",
  phoneLink: "8014671477",
  email: "J&S_Auto@gmail.com",
  location: {
    address: "1422 S Main St,",
    addressSecondary: "Salt Lake City, UT 84115",
    googleMapEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.4411997465124!2d-111.89112639854118!3d40.738464530447104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f53226ffb157%3A0x56f70bddc746ebc0!2sJ%20%26%20S%20Auto%20Services!5e0!3m2!1sen!2sus!4v1748312403213!5m2!1sen!2sus",
    googleMapLink: "https://www.google.com/maps/place/J+%26+S+Auto+Services/@40.738472,-111.8908631,19.39z/data=!4m14!1m7!3m6!1s0x8752f53226ffb157:0x56f70bddc746ebc0!2sJ+%26+S+Auto+Services!8m2!3d40.7385071!4d-111.8906023!16s%2Fg%2F1tjkg8hf!3m5!1s0x8752f53226ffb157:0x56f70bddc746ebc0!8m2!3d40.7385071!4d-111.8906023!16s%2Fg%2F1tjkg8hf?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D",
    appleMapLink: "https://maps.apple.com/?q=J+%26+S+Auto+Services&ll=40.7385071,-111.8906023"
  },
  hours: [
    { day: "Monday", time: "8 AM - 6 PM" },
    { day: "Tuesday", time: "8 AM - 6 PM" },
    { day: "Wednesday", time: "8 AM - 6 PM" },
    { day: "Thursday", time: "8 AM - 6 PM" },
    { day: "Friday", time: "8 AM - 6 PM" },
    { day: "Saturday", time: "8 AM - 3 PM" },
    { day: "Sunday", time: "Closed" },
  ]
}