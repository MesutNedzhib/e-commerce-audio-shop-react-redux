const data = {
  products: [
    {
      _id: 1,
      name: "Piooner CD Player",
      categoryName: "CD-Players",
      images: 
      {
        image1:"/images/product-1-CD-Player.jpg",
        image2:"/images/gallery/Gallery-2.jpg",
        image3:"/images/gallery/Gallery-3.jpg",
        image4:"/images/gallery/Gallery-4.jpg",
      },
      
      price: 120.99,
      countInStock: 10,
      brand: "Pioneer",
      rating: 4,
      description: "high quality product",
    },
    {
      _id: 2,
      name: "JBL Loudspeaker",
      categoryName: "Speakers",
      images: 
      {
        image1:"/images/product-2-JBL-Loudspeaker.jpg",
        image2:"/images/gallery/Gallery-2.jpg",
        image3:"/images/gallery/Gallery-3.jpg",
        image4:"/images/gallery/Gallery-4.jpg",
      },
      price: 129.99,
      countInStock: 10,
      brand: "JBL",
      rating: 4.5,
      description: "high quality product",
    },
    {
      _id: 3,
      name: "Dr.Dre Wireless Headphones",
      categoryName: "Headphones",
      images: 
      {
        image1:"/images/product-3-Dr.Dre-Wireless-Headphones.jpg",
        image2:"/images/gallery/Gallery-2.jpg",
        image3:"/images/gallery/Gallery-3.jpg",
        image4:"/images/gallery/Gallery-4.jpg",
      },
      price: 220.99,
      countInStock: 2,
      brand: "Beats",
      rating: 4.8,
      description: "high quality product",
    },
    {
      _id: 4,
      name: "Sony Headphone Loudspeaker",
      categoryName: "Speakers",
      images: 
      {
        image1:"/images/product-4-Sony-Headphone-Amplifier-Loudspeaker.jpg",
        image2:"/images/gallery/Gallery-2.jpg",
        image3:"/images/gallery/Gallery-3.jpg",
        image4:"/images/gallery/Gallery-4.jpg",
      },
      price: 269.99,
      countInStock: 15,
      brand: "Sony",
      rating: 4.7,
      description: "high quality product",
    },
    {
      _id: 5,
      name: "Pioneer Digital Player",
      categoryName: "Digital-Players",
      images: 
      {
        image1:"/images/product-5-Pioneer-Digital-Player.jpg",
        image2:"/images/gallery/Gallery-2.jpg",
        image3:"/images/gallery/Gallery-3.jpg",
        image4:"/images/gallery/Gallery-4.jpg",
      },
      price: 99.99,
      countInStock: 0,
      brand: "Pionner",
      rating: 3.8,
      description: "high quality product",
    },
    {
      _id: 6,
      name: "JBL Bluetooth Speaker",
      categoryName: "Speakers",
      images: 
      {
        image1:"/images/product-6-JBL-Bluetooth-Speaker.jpg",
        image2:"/images/gallery/Gallery-2.jpg",
        image3:"/images/gallery/Gallery-3.jpg",
        image4:"/images/gallery/Gallery-4.jpg",
      },
      price: 139.99,
      countInStock: 12,
      brand: "JBL",
      rating: 4.2,
      description: "high quality product",
    },
  ],
  categories: [
    {
      _id: 1,
      name: "Headphones",
      icon: "fa fa-headphones",
    },
    {
      _id: 2,
      name: "CD-Players",
      icon: "fa fa-compact-disc",
    },
    {
      _id: 3,
      name: "Digital-Players",
      icon: "fab fa-digital-ocean",
    },
    {
      _id: 4,
      name: "Speakers",
      icon: "fas fa-volume-up",
    },
  ],
};

export default data;
