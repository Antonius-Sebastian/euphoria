import images from "../assets/images";

// export const navLinks = [
//     { href: '#home', label: 'Home' },
//     { href: '#about-us', label: 'About Us' },
//     { href: '#products', label: 'Products' },
//     { href: '#contact-us', label: 'Contact Us' },
// ]

export const deals = [
  {
    bgImage: images.deals_1,
    overline: "Low Price",
    title: "High Coziness",
    subtitle: "Upto 50% off",
  },
  {
    bgImage: images.deals_2,
    overline: "Beyoung Presents",
    title: "Breezy Summer Style",
    subtitle: "Upto 50% off",
  },
];

export const newArrivals = [
  {
    bgImage: images.newArrival_1,
    title: "Knitted Joggers",
  },
  {
    bgImage: images.newArrival_2,
    title: "Full Sleeve",
  },
  {
    bgImage: images.newArrival_3,
    title: "Active T-Shirts",
  },
  {
    bgImage: images.newArrival_4,
    title: "Urban Shirts",
  },
];

// gridSpan, images, title, subtitle, deals, limited, align
export const savingZone = [
  {
    colSpan: "2",
    image: images.hawaiianShirt,
    title: "Hawaiian Shirt",
    subtitle: "Dress up in summer vibe",
    deals: "50%",
    limited: false,
    contentAlign: "left",
    textAlign: "left",
    color: "light",
  },
  {
    colSpan: "2",
    image: images.printedTShirt,
    title: "Printed T-Shirt",
    subtitle: "New Designs Every Week",
    deals: "40%",
    limited: true,
    contentAlign: "right",
    textAlign: "right",
    color: "light",
  },
  {
    colSpan: "2",
    image: images.cargoJoggers,
    title: "Cargo Joggers",
    subtitle: "Move with style & comfort",
    deals: "50%",
    limited: false,
    contentAlign: "right",
    textAlign: "left",
    color: "dark",
  },
  {
    colSpan: "3",
    image: images.urbanShirt,
    title: "Urban Shirts",
    subtitle: "Live in Comfort",
    deals: "60%",
    limited: false,
    contentAlign: "right",
    textAlign: "left",
    color: "dark",
  },
  {
    colSpan: "3",
    image: images.oversizedTShirt,
    title: "Oversized T-Shirts",
    subtitle: "Street Style Icon",
    deals: "60%",
    limited: false,
    contentAlign: "right",
    textAlign: "left",
    color: "dark",
  },
];

export const brands = [
  images.nike,
  images.hm,
  images.levis,
  images.polo,
  images.puma,
];

export const feedbacks = [
  {
    userImg: images.feedbackUser1,
    rating: 4,
    name: "Floyd Miles",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. \nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    userImg: images.feedbackUser2,
    rating: 5,
    name: "Ronald Richards",
    text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    userImg: images.feedbackUser3,
    rating: 4,
    name: "Savannah Nguyen",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. \nExercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export const footerLinks = [
  {
    title: "Need Help",
    labels: [
      "Contact Us",
      "Track Order",
      "Returns & Refunds",
      "FAQ’s",
      "Career",
    ],
  },
  {
    title: "Company",
    labels: [
      "About Us",
      "Euphoria Blog",
      "Euphoriastan",
      "Collaboration",
      "Media",
    ],
  },
  {
    title: "More Info",
    labels: [
      "Term and Conditions",
      "Privacy Policy",
      "Shipping Policy",
      "Sitemap",
    ],
  },
  {
    title: "Location",
    labels: [
      "support@euphoria.in",
      "Eklingpura Chouraha, Ahmedabad Main Road",
      "(NH 8 - Near Mahadev Hotel) Udaipur, India - 313002",
    ],
  },
];

// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ]

// export const statistics = [
//     { value: '1k+', label: 'Brands' },
//     { value: '500+', label: 'Shops' },
//     { value: '250k+', label: 'Customers' },
// ]

// export const products = [
//     {
//         imgURL: shoe4,
//         name: 'Nike Air Jordan-01',
//         price: '$200.20',
//         rating: 4.5,
//     },
//     {
//         imgURL: shoe5,
//         name: 'Nike Air Jordan-10',
//         price: '$210.20',
//         rating: 4.7,
//     },
//     {
//         imgURL: shoe6,
//         name: 'Nike Air Jordan-100',
//         price: '$220.20',
//         rating: 4.8,
//     },
//     {
//         imgURL: shoe7,
//         name: 'Nike Air Jordan-001',
//         price: '$230.20',
//         rating: 4.5,
//     },
// ]

// export const services = [
//     {
//         imgURL: truckFast,
//         label: 'Free shipping',
//         subtext:
//             'Enjoy seamless shopping with our complimentary shipping service.',
//     },
//     {
//         imgURL: shieldTick,
//         label: 'Secure Payment',
//         subtext:
//             'Experience worry-free transactions with our secure payment options.',
//     },
//     {
//         imgURL: support,
//         label: 'Love to help you',
//         subtext:
//             'Our dedicated team is here to assist you every step of the way.',
//     },
// ]

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback:
//             'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback:
//             "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
//     },
// ]

// export const footerLinks = [
//     {
//         title: 'Products',
//         links: [
//             { name: 'Air Force 1', link: '/' },
//             { name: 'Air Max 1', link: '/' },
//             { name: 'Air Jordan 1', link: '/' },
//             { name: 'Air Force 2', link: '/' },
//             { name: 'Nike Waffle Racer', link: '/' },
//             { name: 'Nike Cortez', link: '/' },
//         ],
//     },
//     {
//         title: 'Help',
//         links: [
//             { name: 'About us', link: '/' },
//             { name: 'FAQs', link: '/' },
//             { name: 'How it works', link: '/' },
//             { name: 'Privacy policy', link: '/' },
//             { name: 'Payment policy', link: '/' },
//         ],
//     },
//     {
//         title: 'Get in touch',
//         links: [
//             { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
//             { name: '+92554862354', link: 'tel:+92554862354' },
//         ],
//     },
// ]

// export const socialMedia = [
//     { src: facebook, alt: 'facebook logo', url: 'https://www.facebook.com/' },
//     { src: twitter, alt: 'twitter logo', url: 'https://www.tiktok.com/' },
//     {
//         src: instagram,
//         alt: 'instagram logo',
//         url: 'https://www.instagram.com/',
//     },
// ]
