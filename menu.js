// ==================== CONFIG & DATA ====================
const CAFE_WHATSAPP_NUMBER = "923001212790";
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyszfYWPhNvf9eJfdF5iAI9SGYo2oRXT3yVPrX1--0uOthc0NbfAHw__Gke7Gh3bT3H/exec";

const navLinks = [
    { label: "Home", href: "index.html" },
    { label: "Deals", href: "#deals" },
    { label: "Karahi & Desi", href: "#karahi" },
    { label: "Handi & Daal", href: "#handi" },
    { label: "Signature & BBQ", href: "#bbq" },
    { label: "Pizzas", href: "#pizzas" },
    { label: "Burgers & Shawarma", href: "#burgers" },
    { label: "Steaks & Broast", href: "#steaks" },
    { label: "Starters & Pasta", href: "#starters" },
    { label: "Rice & Chinese", href: "#chinese" },
    { label: "Salads & Tandoor", href: "#tandoor" },
    { label: "Drinks & Desserts", href: "#drinks" }
];

const specialDeals = [
    { id: "dl1", title: "Deal-01", details: "1 Zinger Burger, 1 Reg. Fries, 1 Tin Pack", price: 820, img: "images/deal1.png" },
    { id: "dl2", title: "Deal-02", details: "1 Tower Burger, 1 Tin Pack", price: 750, img: "images/deal2.jpg" },
    { id: "dl3", title: "Deal-03", details: "2 Small Pizza (Sp. Pizza + Reg Pizza), 1 Ltr Drink", price: 1550, img: "images/deal3.jpg" },
    { id: "dl4", title: "Deal-04", details: "2 Chicken Shawarma, 2 Zinger Burgers, 1 Ltr Drink", price: 1550, img: "images/deal4.jpg" },
    { id: "dl5", title: "Deal-05", details: "3 Zinger Burgers, 1 Ltr Drink", price: 1220, img: "images/deal5.jpg" },
    { id: "dl6", title: "Deal-06", details: "5 Zinger Burgers, 1.5 Ltr Drink", price: 1990, img: "images/deal6.jpg" },
    { id: "dl7", title: "Deal-07", details: "3 Zinger Burgers, Special Medium Pizza, 1.5 Ltr Drink", price: 2550, img: "images/deal7.jpg" },
    { id: "dl8", title: "Deal-08", details: "8 Zinger Burgers, 2 Ltr Drinks", price: 3180, img: "images/deal8.jpg" },
    { id: "dl9", title: "Deal-09", details: "4 Zinger Burgers, Sp. Large Pizza, 1.5 Ltr Drink", price: 3450, img: "images/deal9.jpg" },
    { id: "dl10", title: "Deal-10", details: "2 Large Pizza (Special Pizza + Regular Pizza), 2 Ltr Drinks", price: 3950, img: "images/deal10.jpg" },
    { id: "dl11", title: "Deal-11", details: "1 Plate (Hot Wings + Nuggets), 1 Club Sandwich, 1 Reg. Fries, 1 Ltr Drink", price: 2380, img: "images/deal11.jpg" },
    { id: "dl12", title: "Deal-12", details: "1 Creamy Pasta, 2 Zinger Burgers, 1 Ltr Drink", price: 1990, img: "images/deal12.jpg" },
    { id: "dl13", title: "Deal-13", details: "2 Large Pizza, 6 Zinger Burgers, 2 Plate Hot Wings, 1 Reg. Fries, 2 x 1.5 Ltr Drink", price: 8150, img: "images/deal13.jpg" },
    { id: "dl14", title: "Birthday Deal", details: "2 Large Pizza, 6 Zinger Burgers, 2 Creamy Pasta, 1 Plate Hot Wings, 1 Plate Nuggets, 1 Loaded Fries, 2 Club Sandwich, 2 x 1.5 Ltr Drink, 2 Pound Cake + Candle", price: 11990, img: "images/birthday-deal.jpg" }
];

const karahiList = [
    { id: "k1", type: "halfFull", name: "Dream Special Mutton Karahi", half: 2400, full: 4500, img: "images/mutton-special.jpg" },
    { id: "k2", type: "halfFull", name: "Mutton Shinwari Karahi", half: 2200, full: 4400, img: "images/mutton-shinwari.jpg" },
    { id: "k3", type: "halfFull", name: "Mutton Lahori Karahi", half: 2200, full: 4200, img: "images/mutton-lahori.jpg" },
    { id: "k4", type: "halfFull", name: "Mutton White Karahi", half: 2100, full: 4000, img: "images/mutton-white.jpg" },
    { id: "k5", type: "halfFull", name: "Mutton Black Pepper Karahi", half: 2200, full: 4200, img: "images/mutton-black-pepper.jpg" },
    { id: "k6", type: "halfFull", name: "Dream Special Chicken Karahi", half: 1150, full: 2150, img: "images/ch-special-karahi.jpg" },
    { id: "k7", type: "halfFull", name: "Chicken Lahori Karahi", half: 1050, full: 2050, img: "images/ch-lahori.jpg" },
    { id: "k8", type: "halfFull", name: "Chicken Achari Karahi", half: 950, full: 1850, img: "images/ch-achari.jpg" },
    { id: "k9", type: "halfFull", name: "Chicken Karahi (Black Pepper)", half: 950, full: 1850, img: "images/ch-black-pepper.jpg" },
    { id: "k10", type: "halfFull", name: "Chicken White Karahi", half: 950, full: 1850, img: "images/ch-white.jpg" },
    { id: "k11", type: "standard", name: "Desi Murgh Karahi", price: 4000, img: "images/desi-murgh.jpg" },
    { id: "k12", type: "standard", name: "Desi Murgh White Karahi", price: 3900, img: "images/desi-murgh-white.jpg" },
    { id: "k13", type: "standard", name: "Desi Murgh Shorba", price: 3900, img: "images/desi-murgh-shorba.jpg" }
];

const handiList = [
    { id: "h1", type: "halfFull", name: "Dream Special Chicken Handi", half: 1050, full: 1950, img: "images/sp-handi.jpg" },
    { id: "h2", type: "halfFull", name: "Chicken Turkish Mughlai Handi", half: 1050, full: 1950, img: "images/mughlai-handi.jpg" },
    { id: "h3", type: "halfFull", name: "Chicken Haryali Handi", half: 1050, full: 1950, img: "images/haryali-handi.jpg" },
    { id: "h4", type: "halfFull", name: "Chicken Hyderabadi Handi", half: 1050, full: 1950, img: "images/hyderabadi-handi.jpg" },
    { id: "h5", type: "halfFull", name: "Chicken Achari Handi", half: 1000, full: 1850, img: "images/achari-handi.jpg" },
    { id: "h6", type: "halfFull", name: "Chicken Makhni Handi", half: 1000, full: 1850, img: "images/makhni-handi.jpg" },
    { id: "h7", type: "halfFull", name: "Chicken Madrasi Handi", half: 1000, full: 1850, img: "images/madrasi-handi.jpg" },
    { id: "h8", type: "standard", name: "Chicken Cheese Patyala", price: 1400, img: "images/cheese-patyala.jpg" },
    { id: "h9", type: "standard", name: "Chicken Bharta", price: 1350, img: "images/ch-bharta.jpg" },
    { id: "h10", type: "standard", name: "Chicken Jalfrezi", price: 1200, img: "images/ch-jalfrezi.jpg" },
    { id: "h11", type: "standard", name: "Chicken Ginger", price: 1200, img: "images/ch-ginger.jpg" },
    { id: "h12", type: "standard", name: "Chicken Hari Mirch", price: 1200, img: "images/ch-hari-mirch.jpg" },
    { id: "h13", type: "standard", name: "Shahi Daal Mash", price: 850, img: "images/shahi-daal.jpg" },
    { id: "h14", type: "standard", name: "Makhni Daal Mash", price: 750, img: "images/makhni-daal.jpg" },
    { id: "h15", type: "standard", name: "Daal Mash", price: 750, img: "images/daal-mash.jpg" },
    { id: "h16", type: "standard", name: "Mix Vegetable", price: 750, img: "images/mix-veg.jpg" }
];

const bbqList = [
    { id: "bbq1", type: "standard", name: "Dam Pukht Salam Bakra with Rice", price: 49500, img: "images/salam-bakra.jpg" },
    { id: "bbq2", type: "standard", name: "Mutton Balochi Sajji with Rice", price: 6500, img: "images/balochi-sajji.jpg" },
    { id: "bbq3", type: "standard", name: "Mutton Heer Gosht", price: 4500, img: "images/heer-gosht.jpg" },
    { id: "bbq4", type: "standard", name: "Mutton Kunna", price: 4400, img: "images/mutton-kunna.jpg" },
    { id: "bbq5", type: "standard", name: "Mutton Namkeen Rosh", price: 1900, img: "images/namkeen-rosh.jpg" },
    { id: "bbq6", type: "halfFull", name: "Mutton Afghani Karahi", half: 2450, full: 4650, img: "images/mutton-afghani.jpg" },
    { id: "bbq7", type: "halfFull", name: "Mutton Sulemani Karahi", half: 2300, full: 4500, img: "images/mutton-sulemani.jpg" },
    { id: "bbq8", type: "halfFull", name: "Chicken Charga With Rice", half: 1150, full: 2200, img: "images/ch-charga.jpg" },
    { id: "bbq9", type: "standard", name: "Malai Boti (10 Pcs)", price: 1150, img: "images/malai-boti.jpg" },
    { id: "bbq10", type: "standard", name: "Tikka Boti (10 Pcs)", price: 900, img: "images/tikka-boti.jpg" },
    { id: "bbq11", type: "standard", name: "Kastoori Boti (10 Pcs)", price: 1200, img: "images/kastoori-boti.jpg" },
    { id: "bbq12", type: "standard", name: "Shish Taouk Boti (10 Pcs)", price: 1200, img: "images/shish-taouk.jpg" },
    { id: "bbq13", type: "standard", name: "Irani Boti (10 Pcs)", price: 1250, img: "images/irani-boti.jpg" },
    { id: "bbq14", type: "standard", name: "Shahjahani Boti", price: 1200, img: "images/shahjahani-boti.jpg" },
    { id: "bbq15", type: "standard", name: "Cheese Achari Boti", price: 1100, img: "images/cheese-achari-boti.jpg" },
    { id: "bbq16", type: "standard", name: "Kalmi Tikka (6 Pcs)", price: 1300, img: "images/kalmi-tikka.jpg" },
    { id: "bbq17", type: "custom", name: "Tikka Piece", options: [{ label: "Chest", price: 550 }, { label: "Leg", price: 500 }], img: "images/tikka-pc.jpg" },
    { id: "bbq18", type: "standard", name: "Rajasthani Kalmi", price: 1450, img: "images/rajasthani-kalmi.jpg" },
    { id: "bbq19", type: "halfFull", name: "Grill Fish", half: 950, full: 1850, img: "images/grill-fish.jpg" },
    { id: "bbq20", type: "halfFull", name: "Angara Steam Fish", half: 1000, full: 1950, img: "images/angara-fish.jpg" },
    { id: "bbq21", type: "standard", name: "Labnani Kabab (4 Pcs)", price: 1300, img: "images/labnani-kabab.jpg" },
    { id: "bbq22", type: "standard", name: "Chicken Seekh Kabab (4 Pcs)", price: 1050, img: "images/seekh-kabab.jpg" },
    { id: "bbq23", type: "standard", name: "Reshmi Kabab (4 Pcs)", price: 1050, img: "images/reshmi-kabab.jpg" },
    { id: "bbq24", type: "standard", name: "Turkish Pizza Kabab (4 Pcs)", price: 1400, img: "images/turkish-kabab.jpg" },
    { id: "bbq25", type: "standard", name: "Beef Afghani Kabab (4 Pcs)", price: 1350, img: "images/beef-afghani-kabab.jpg" },
    { id: "bbq26", type: "standard", name: "Shashlik Boti", price: 1200, img: "images/shashlik-boti.jpg" },
    { id: "bbq27", type: "standard", name: "Chatkhara Herb Boti", price: 1200, img: "images/chatkhara-boti.jpg" },
    { id: "bbq28", type: "standard", name: "BBQ Platter (2 Persons)", price: 2850, img: "images/bbq-platter-2.jpg" },
    { id: "bbq29", type: "standard", name: "BBQ Platter (4 Persons)", price: 6990, img: "images/bbq-platter-4.jpg" },
    { id: "bbq30", type: "standard", name: "Mix BBQ Gravy Platter (Chicken)", price: 7300, img: "images/mix-bbq-chicken.jpg" },
    { id: "bbq31", type: "standard", name: "Mix BBQ Gravy Platter (Mutton)", price: 8750, img: "images/mix-bbq-mutton.jpg" }
];

const pizzasList = [
    { id: "p1", type: "pizza", name: "Dream Special Pizza", options: [{ label: "Medium", price: 1500 }, { label: "Large", price: 1990 }, { label: "Extra Large", price: 2800 }], img: "images/dream-special-pizza.jpg" },
    { id: "p2", type: "pizza", name: "Dream Special Doner Pizza", options: [{ label: "Large", price: 2000 }, { label: "Extra Large", price: 2900 }], img: "images/doner-pizza.jpg" },
    { id: "p3", type: "pizza", name: "Dream Special Flavour Pizza", options: [{ label: "Large", price: 2000 }, { label: "Extra Large", price: 2900 }], img: "images/special-flavour-pizza.jpg" },
    { id: "p4", type: "pizza", name: "Chicken Cheese Crust", options: [{ label: "Small", price: 900 }, { label: "Medium", price: 1500 }, { label: "Large", price: 2000 }, { label: "Extra Large", price: 2900 }], img: "images/cheese-crust.jpg" },
    { id: "p5", type: "pizza", name: "Chicken Kabab Stuff", options: [{ label: "Small", price: 900 }, { label: "Medium", price: 1500 }, { label: "Large", price: 2000 }, { label: "Extra Large", price: 2900 }], img: "images/kabab-stuff.jpg" },
    { id: "p6", type: "pizza", name: "Chicken Crown Crust", options: [{ label: "Small", price: 900 }, { label: "Medium", price: 1500 }, { label: "Large", price: 2000 }, { label: "Extra Large", price: 2900 }], img: "images/crown-crust.jpg" },
    { id: "p7", type: "pizza", name: "Malai Boti Pizza", options: [{ label: "Small", price: 850 }, { label: "Medium", price: 1400 }, { label: "Large", price: 1850 }, { label: "Extra Large", price: 2900 }], img: "images/malai-boti-pizza.jpg" },
    { id: "p8", type: "pizza", name: "Tandoori Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1350 }, { label: "Large", price: 1800 }, { label: "Extra Large", price: 2600 }], img: "images/tandoori-pizza.jpg" },
    { id: "p9", type: "pizza", name: "Chicken Tikka Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1350 }, { label: "Large", price: 1800 }, { label: "Extra Large", price: 2500 }], img: "images/tikka-pizza.jpg" },
    { id: "p10", type: "pizza", name: "Chicken Fajita Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1350 }, { label: "Large", price: 1800 }, { label: "Extra Large", price: 2500 }], img: "images/fajita-pizza.jpg" },
    { id: "p11", type: "pizza", name: "Vegetable Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1350 }, { label: "Large", price: 1800 }, { label: "Extra Large", price: 2500 }], img: "images/veg-pizza.jpg" },
    { id: "p12", type: "pizza", name: "BBQ Pizza", options: [{ label: "Small", price: 750 }, { label: "Medium", price: 1350 }, { label: "Large", price: 1800 }, { label: "Extra Large", price: 2500 }], img: "images/bbq-pizza.jpg" }
];

const burgersAndShawarma = [
    { id: "b1", type: "standard", name: "Smoky Grilled Burger", price: 800, img: "images/smoky-burger.jpg" },
    { id: "b2", type: "standard", name: "Classic Smashed Beef Burger", price: 850, img: "images/smashed-beef-burger.jpg" },
    { id: "b3", type: "standard", name: "Sunny Roast Beef Burger", price: 850, img: "images/roast-beef-burger.jpg" },
    { id: "b4", type: "standard", name: "Lava Flow Burger", price: 700, img: "images/lava-burger.jpg" },
    { id: "b5", type: "standard", name: "Double Decker Burger", price: 650, img: "images/double-decker.jpg" },
    { id: "b6", type: "standard", name: "Thunder Fillet Burger", price: 600, img: "images/thunder-fillet.jpg" },
    { id: "b7", type: "standard", name: "Paratha Chicken Burger", price: 600, img: "images/paratha-burger.jpg" },
    { id: "b8", type: "standard", name: "Texas Burger", price: 600, img: "images/texas-burger.jpg" },
    { id: "b9", type: "standard", name: "Zee Tower Burger", price: 600, img: "images/zee-tower.jpg" },
    { id: "b10", type: "standard", name: "Stuffer Burger", price: 550, img: "images/stuffer-burger.jpg" },
    { id: "b11", type: "standard", name: "Grilled Chicken Burger", price: 550, img: "images/grilled-ch-burger.jpg" },
    { id: "b12", type: "standard", name: "Zinger Cheese Burger", price: 450, img: "images/zinger-cheese-burger.jpg" },
    { id: "b13", type: "standard", name: "Patty Cheese Burger", price: 400, img: "images/patty-cheese-burger.jpg" },
    { id: "b14", type: "standard", name: "Zinger Burger", price: 380, img: "images/zinger-burger.jpg" },
    { id: "b15", type: "standard", name: "Patty Burger", price: 300, img: "images/patty-burger.jpg" },
    { id: "b16", type: "standard", name: "Malai Shawarma", price: 600, img: "images/malai-shawarma.jpg" },
    { id: "b17", type: "standard", name: "Shawarma Platter", price: 800, img: "images/shawarma-platter.jpg" },
    { id: "b18", type: "standard", name: "Chicken Shawarma", price: 350, img: "images/ch-shawarma.jpg" },
    { id: "b19", type: "standard", name: "Chicken Cheese Shawarma", price: 450, img: "images/ch-cheese-shawarma.jpg" },
    { id: "b20", type: "standard", name: "Zinger Shawarma", price: 380, img: "images/zinger-shawarma.jpg" },
    { id: "b21", type: "standard", name: "Zinger Cheese Shawarma", price: 450, img: "images/zinger-cheese-shawarma.jpg" },
    { id: "b22", type: "standard", name: "Kabab Paratha Roll", price: 500, img: "images/kabab-roll.jpg" },
    { id: "b23", type: "standard", name: "Malai Paratha Roll", price: 600, img: "images/malai-roll.jpg" },
    { id: "b24", type: "standard", name: "Chicken Paratha Roll", price: 350, img: "images/ch-roll.jpg" },
    { id: "b25", type: "standard", name: "Chicken Cheese Paratha Roll", price: 450, img: "images/ch-cheese-roll.jpg" },
    { id: "b26", type: "standard", name: "Zinger Paratha Roll", price: 450, img: "images/zinger-roll.jpg" }
];

const steaksAndBroast = [
    { id: "sb1", type: "standard", name: "Dream Special Beef Steak", price: 2500, img: "images/special-beef-steak.jpg" },
    { id: "sb2", type: "standard", name: "Tomahawk Steak", price: 3500, img: "images/tomahawk-steak.jpg" },
    { id: "sb3", type: "custom", name: "Dual Duck Steak", options: [{ label: "Chicken", price: 1600 }, { label: "Beef", price: 2000 }], img: "images/dual-duck-steak.jpg" },
    { id: "sb4", type: "custom", name: "Tarragon Steak", options: [{ label: "Chicken", price: 1500 }, { label: "Beef", price: 1900 }], img: "images/tarragon-steak.jpg" },
    { id: "sb5", type: "custom", name: "Mexican Steak", options: [{ label: "Chicken", price: 1500 }, { label: "Beef", price: 1900 }], img: "images/mexican-steak.jpg" },
    { id: "sb6", type: "custom", name: "Black Pepper Steak", options: [{ label: "Chicken", price: 1500 }, { label: "Beef", price: 1900 }], img: "images/black-pepper-steak.jpg" },
    { id: "sb7", type: "custom", name: "Moroccan Steak", options: [{ label: "Chicken", price: 1500 }, { label: "Beef", price: 1900 }], img: "images/moroccan-steak.jpg" },
    { id: "sb8", type: "custom", name: "Mushroom Steak", options: [{ label: "Chicken", price: 1500 }, { label: "Beef", price: 1900 }], img: "images/mushroom-steak.jpg" },
    { id: "sb9", type: "custom", name: "Injected Broast", options: [{ label: "Quarter", price: 800 }, { label: "Half", price: 1250 }, { label: "Full", price: 2450 }], img: "images/injected-broast.jpg" },
    { id: "sb10", type: "custom", name: "Fried Broast", options: [{ label: "Quarter", price: 800 }, { label: "Half", price: 1250 }, { label: "Full", price: 2450 }], img: "images/fried-broast.jpg" }
];

const startersAndPasta = [
    { id: "st1", type: "standard", name: "Spring Roll (4 Pcs)", price: 850, img: "images/7.1.jpg" },
    { id: "st2", type: "standard", name: "Honey Wings (10 Pcs)", price: 900, img: "images/7.2.jpg" },
    { id: "st3", type: "standard", name: "Fried Wings (10 Pcs)", price: 850, img: "images/7.3.jpg" },
    { id: "st4", type: "standard", name: "Chicken Katsu (5 Pcs)", price: 550, img: "images/7.4.jpg" },
    { id: "st5", type: "custom", name: "Chicken Nuggets", options: [{ label: "5 Pcs", price: 300 }, { label: "10 Pcs", price: 600 }], img: "images/7.5.jpg"},
    { id: "st6", type: "custom", name: "Hot Wings", options: [{ label: "5 Pcs", price: 400 }, { label: "10 Pcs", price: 700 }], img: "images/7.6.jpg" },
    { id: "st7", type: "standard", name: "Loaded Fries", price: 850, img: "images/7.7.jpg" },
    { id: "st8", type: "standard", name: "Mexican Fries", price: 800, img: "images/7.8.jpg" },
    { id: "st9", type: "standard", name: "Regular Fries", price: 350, img: "images/7.9.jpg" },
    { id: "st10", type: "standard", name: "Dhaka Fish (8 Pcs)", price: 1600, img: "images/7.10.jpg" },
    { id: "st11", type: "standard", name: "Fish Chilli Dry", price: 1200, img: "images/7.11.jpg" },
    { id: "st12", type: "standard", name: "Dynamic Chicken", price: 700, img: "images/7.12.jpg" },
    { id: "st13", type: "standard", name: "Buffalo Wings (8 Pcs)", price: 650, img: "images/7.13.jpg" },
    { id: "st14", type: "standard", name: "BBQ Penni Sandwich", price: 750, img: "images/7.14.jpg" },
    { id: "st15", type: "standard", name: "Crunch Chicken Sandwich", price: 750, img: "images/7.15.jpg" },
    { id: "st16", type: "standard", name: "Grilled Chicken Sandwich", price: 700, img: "images/7.16.jpg" },
    { id: "st17", type: "standard", name: "Club Sandwich", price: 700, img: "images/7.17.jpg" },
    { id: "st18", type: "standard", name: "Fajita Sandwich", price: 600, img: "images/7.18.jpg" },
    { id: "st19", type: "halfFull", name: "Crunchy Pasta", half: 650, full: 1200, img: "images/7.19.jpg" },
    { id: "st20", type: "halfFull", name: "Creamy Pasta", half: 600, full: 1150, img: "images/7.20.jpg" },
    { id: "st21", type: "standard", name: "Spicy Fettuccini Pasta", price: 1100, img: "images/7.21.jpg" },
    { id: "st22", type: "standard", name: "Penne Arrabiata", price: 1050, img: "images/7.22.jpg" },
    { id: "st23", type: "standard", name: "Lasagna", price: 1000, img: "images/7.23.jpg" },
    { id: "st24", type: "standard", name: "Alfredo Pasta", price: 800, img: "images/7.24.jpg" },
    { id: "st25", type: "standard", name: "Penne Pasta", price: 800, img: "images/7.25.jpg" },
    { id: "st26", type: "standard", name: "Dream Special Macaroni", price: 900, img: "images/7.26.jpg" },
    { id: "st27", type: "standard", name: "Cheesy Macaroni", price: 850, img: "images/7.27.jpg" },
    { id: "st28", type: "standard", name: "Chicken Macaroni", price: 800, img: "images/7.28.jpg" },
    { id: "st29", type: "standard", name: "Spicy Macaroni", price: 750, img: "images/7.29.jpg" },
    { id: "st30", type: "halfFull", name: "Dream Special Soup", half: 650, full: 1200, img: "images/7.30.jpg" },
    { id: "st31", type: "halfFull", name: "Butter Mushroom Soup", half: 650, full: 1200, img: "images/7.31.jpg" },
    { id: "st32", type: "halfFull", name: "Red Sichuan Soup", half: 600, full: 1100, img: "images/7.32.jpg" },
    { id: "st33", type: "halfFull", name: "Hot & Sour Soup", half: 600, full: 1100, img: "images/7.33.jpg" },
    { id: "st34", type: "halfFull", name: "Chicken Corn Soup", half: 550, full: 1050, img: "images/7.34.jpg" }
];

const chineseAndRiceList = [
    { id: "cr1", type: "standard", name: "Chicken Singapore Rice", price: 1000, img: "images/singapore-rice.jpg" },
    { id: "cr2", type: "standard", name: "Dream Special Rice", price: 1000, img: "images/special-rice.jpg" },
    { id: "cr3", type: "standard", name: "Chicken Fried Rice", price: 900, img: "images/ch-fried-rice.jpg" },
    { id: "cr4", type: "standard", name: "Egg Fried Rice", price: 850, img: "images/egg-fried-rice.jpg" },
    { id: "cr5", type: "standard", name: "Masala Fried Rice", price: 900, img: "images/masala-rice.jpg" },
    { id: "cr6", type: "standard", name: "Vegetable Fried Rice", price: 800, img: "images/veg-rice.jpg" },
    { id: "cr7", type: "standard", name: "Dream Special Gravy", price: 900, img: "images/special-gravy.jpg" },
    { id: "cr8", type: "standard", name: "Chicken Almond", price: 850, img: "images/ch-almond.jpg" },
    { id: "cr9", type: "standard", name: "Chicken Cherry Pineapple", price: 800, img: "images/ch-cherry-pineapple.jpg" },
    { id: "cr10", type: "standard", name: "Butter Mushroom Chicken", price: 800, img: "images/butter-mushroom-ch.jpg" },
    { id: "cr11", type: "standard", name: "Chicken Black Pepper", price: 800, img: "images/ch-black-pepper-gravy.jpg" },
    { id: "cr12", type: "standard", name: "Chicken Manchurian", price: 800, img: "images/manchurian.jpg" },
    { id: "cr13", type: "standard", name: "Chicken Shashlik", price: 850, img: "images/shashlik.jpg" },
    { id: "cr14", type: "standard", name: "Chicken Chilli Dry", price: 800, img: "images/chilli-dry.jpg" },
    { id: "cr15", type: "standard", name: "Shashlik with Rice", price: 1000, img: "images/shashlik-rice.jpg" },
    { id: "cr16", type: "standard", name: "Chilli Dry with Rice", price: 1000, img: "images/chilli-dry-rice.jpg" },
    { id: "cr17", type: "standard", name: "Chicken Almond with Rice", price: 1000, img: "images/ch-almond-rice.jpg" },
    { id: "cr18", type: "standard", name: "Chicken Manchurian with Rice", price: 1000, img: "images/manchurian-rice.jpg" },
    { id: "cr19", type: "standard", name: "American Chop Suey", price: 1100, img: "images/american-chop-suey.jpg" },
    { id: "cr20", type: "standard", name: "Chicken Chop Suey", price: 1000, img: "images/ch-chop-suey.jpg" },
    { id: "cr21", type: "standard", name: "Dream Special Chowmein", price: 1000, img: "images/special-chowmein.jpg" },
    { id: "cr22", type: "standard", name: "Chicken Chowmein", price: 900, img: "images/ch-chowmein.jpg" },
    { id: "cr23", type: "standard", name: "Mutton Afghani Pulao", price: 1400, img: "images/afghani-pulao.jpg" },
    { id: "cr24", type: "standard", name: "Dam Pukht Biryani", price: 1200, img: "images/dam-pukht-biryani.jpg" },
    { id: "cr25", type: "standard", name: "Beef Pulao", price: 1100, img: "images/beef-pulao.jpg" },
    { id: "cr26", type: "standard", name: "Chicken Biryani", price: 900, img: "images/ch-biryani.jpg" }
];

const saladsAndTandoor = [
    { id: "st1", type: "standard", name: "Dream Special Salad Platter", price: 1100, img: "images/8.1.jpg" },
    { id: "st2", type: "standard", name: "Chicken Pineapple Salad", price: 800, img: "images/8.2.jpg" },
    { id: "st3", type: "standard", name: "Chicken Stick Salad", price: 750, img: "images/8.3.jpg" },
    { id: "st4", type: "standard", name: "Fruit Salad", price: 750, img: "images/8.4.jpg" },
    { id: "st5", type: "standard", name: "Chicken Italian Salad", price: 700, img: "images/8.5.jpg" },
    { id: "st6", type: "standard", name: "Chicken Expecty Salad", price: 650, img: "images/8.6.jpg" },
    { id: "st7", type: "standard", name: "Russian Salad", price: 650, img: "images/8.7.jpg" },
    { id: "st8", type: "standard", name: "Chana Chaat", price: 600, img: "images/8.9.jpg" },
    { id: "st9", type: "standard", name: "Apple Cabbage Salad", price: 550, img: "images/8.8.jpg" },
    { id: "st10", type: "standard", name: "Macaroni Salad", price: 500, img: "images/8.10.jpg" },
    { id: "st11", type: "standard", name: "Kachumar Salad", price: 300, img: "images/8.12.jpg" },
    { id: "st12", type: "standard", name: "Fresh Salad", price: 200, img: "images/8.13.jpg" },
   { 
        id: "st13", 
        type: "custom", 
        name: "Raita", 
        options: [
            { label: "Zeera Raita", price: 150 },
            { label: "Mint Raita", price: 150 }
        ], 
        img: "images/8.14.jpg" 
    },
    { id: "st14", type: "standard", name: "Chicken Cheese Naan", price: 500, img: "images/8.16.jpg" },
   // Flavoured Naan
    { 
        id: "st15", 
        type: "custom", 
        name: "Flavoured Naan", 
        options: [
            { label: "Garlic Naan", price: 130 },
            { label: "Kalwanji Naan", price: 130 },
            { label: "Ginger Naan", price: 130 }
        ], 
        img: "images/8.17.jpg" 
    },
    { id: "st16", type: "standard", name: "Tandoori Paratha", price: 200, img: "images/8.18.jpg" },
    { id: "st17", type: "standard", name: "Roghni Naan", price: 120, img: "images/8.19.jpg" },
    { id: "st18", type: "standard", name: "Roti (per head)", price: 90, img: "images/8.20.jpg" }
];

const drinksAndDesserts = [
    // Coffee Options (Merged)
    { 
        id: "d1", 
        type: "custom", 
        name: "Coffee Options", 
        options: [
            { label: "Cappuccino Coffee", price: 500 },
            { label: "Hot Chocolate Coffee", price: 500 },
            { label: "Cold Coffee", price: 500 },
            { label: "Ice-Latte Coffee", price: 500 },
            { label: "Latte Coffee", price: 450 },
            { label: "Ice-Coffee", price: 400 }
        ], 
        img: "images/cappuccino.jpg" 
    },
    { id: "d2", type: "standard", name: "Cardamom Tea", price: 250, img: "images/cardamom-tea.jpg" },
    { id: "d3", type: "standard", name: "Kashmiri Tea", price: 250, img: "images/kashmiri-tea.jpg" },
    { id: "d4", type: "standard", name: "Iced Tea", price: 200, img: "images/iced-tea.jpg" },
   // Green Tea & Special Tea
    { 
        id: "d5", 
        type: "custom", 
        name: "Tea Options", 
        options: [
            { label: "Green Tea", price: 150 },
            { label: "Dream Special Tea", price: 150 }
        ], 
        img: "images/green-tea.jpg" 
    },
    { id: "d6", type: "standard", name: "Dream SP Margarita", price: 400, img: "images/special-margarita.jpg" },
    
    // Flavoured Margarita (Flavours Dropdown)
    { 
        id: "d7", 
        type: "custom", 
        name: "Flavoured Margarita", 
        options: [
            { label: "Mint Flavour", price: 350 },
            { label: "Strawberry Flavour", price: 350 },
            { label: "Blueberry Flavour", price: 350 },
            { label: "Peach Flavour", price: 350 }
        ], 
        img: "images/margarita.jpg" 
    },

    // Flavoured Mojito
    { 
        id: "d8", 
        type: "custom", 
        name: "Flavoured Mojito", 
        options: [
            { label: "Mint Flavour", price: 400 },
            { label: "Strawberry Flavour", price: 400 },
            { label: "Peach Flavour", price: 400 },
            { label: "Blueberry Flavour", price: 400 },
            { label: "Mango Flavour", price: 400 }
        ], 
        img: "images/mojito.jpg" 
    },

   // Flavoured Heaven Drink
    { 
        id: "d9", 
        type: "custom", 
        name: "Flavoured Heaven Drink", 
        options: [
            { label: "Blue Heaven", price: 350 },
            { label: "Red Heaven", price: 350 },
            { label: "Peach Heaven", price: 350 },
            { label: "Strawberry Heaven", price: 350 },
            { label: "Mango Heaven", price: 350 }
        ], 
        img: "images/heaven-drink.jpg" 
    },
    // Chocolate Shakes (Flavours Dropdown)
    { 
        id: "d15", 
        type: "custom", 
        name: "Chocolate Shake", 
        options: [
            { label: "Kit Kat", price: 500 },
            { label: "Oreo", price: 500 },
            { label: "Bounty", price: 500 },
            { label: "Mars", price: 500 },
            { label: "Nutella", price: 500 }
        ], 
        img: "images/chocolate-shake.jpg" 
    },

   { 
        id: "d10", 
        type: "custom", 
        name: "Smoothies", 
        options: [
            { label: "Apple Smoothie", price: 550 },
            { label: "Banana Smoothie", price: 550 },
            { label: "Strawberry Smoothie", price: 550 },
            { label: "Blueberry Smoothie", price: 550 },
            { label: "Pineapple Smoothie", price: 550 }
        ], 
        img: "images/smoothie.jpg" 
    },
    { 
        id: "d11", 
        type: "custom", 
        name: "Nuts Shake", 
        options: [
            { label: "Date & Kulfa", price: 550 },
            { label: "Almond Shake", price: 550 },
            { label: "Pista Shake", price: 550 },
            { label: "Vanilla Shake", price: 550 }
        ], 
        img: "images/nuts-shake.jpg" 
    },
    { 
        id: "d18", 
        type: "custom", 
        name: "Date & Mango Shake", 
        options: [
            { label: "Date Shake", price: 350 },
            { label: "Mango Shake", price: 350 },
            { label: "Date & Mango Mix", price: 350 }
        ], 
        img: "images/date-mango-shake.jpg" 
    },
    { 
        id: "d19", 
        type: "custom", 
        name: "Regular Shake", 
        options: [
            { label: "Strawberry Shake", price: 450 },
            { label: "Kulfa Shake", price: 450 },
            { label: "Mango Shake", price: 450 },
            { label: "Chocolate Shake", price: 450 },
            { label: "Pista Shake", price: 450 }
        ], 
        img: "images/regular-shake.jpg" 
    },
   { 
        id: "d20", 
        type: "custom", 
        name: "Special Shake", 
        options: [
            { label: "Strawberry Delight", price: 650 },
            { label: "Love Story", price: 650 },
            { label: "Blue Fantastic", price: 650 },
            { label: "Pink Lady", price: 650 },
            { label: "Oreo Bomb", price: 650 }
        ], 
        img: "images/special-shake.jpg" 
    },
    { 
        id: "d21", 
        type: "custom", 
        name: "Dream Special Ice Cream (3 Scoops)", 
        options: [
            { label: "Mix Flavours", price: 550 },
            { label: "Chocolate & Nuts Special", price: 550 },
            { label: "Fruity Mix Special", price: 550 }
        ], 
        img: "images/special-ice-cream.jpg" 
    },
    // Plain Ice Cream (Flavours Dropdown - Desserts)
    { 
        id: "d22", 
        type: "custom", 
        name: "Plain Ice Cream (2 Scoops)", 
        options: [
            { label: "Mango Flavour", price: 350 },
            { label: "Qulfa Flavour", price: 350 },
            { label: "Pista Flavour", price: 350 },
            { label: "Vanilla Flavour", price: 350 },
            { label: "Strawberry Flavour", price: 350 },
            { label: "Chocolate Flavour", price: 350 },
            { label: "Tuty Fruity Flavour", price: 350 },
            { label: "Caramel Crunch Flavour", price: 350 }
        ], 
        img: "images/plain-ice-cream.jpg" 
    }
];

const menuCategories = [
    { id: "deals", title: "🔥 Special Deals", items: specialDeals, isDeal: true },
    { id: "karahi", title: "🍲 Karahi & Desi", items: karahiList },
    { id: "handi", title: "🥘 Handi & Daal", items: handiList },
    { id: "bbq", title: "🍢 Signature & BBQ", items: bbqList },
    { id: "pizzas", title: "🍕 Pizzas", items: pizzasList },
    { id: "burgers", title: "🍔 Burgers & Shawarma", items: burgersAndShawarma },
    { id: "steaks", title: "🥩 Steaks & Broast", items: steaksAndBroast },
    { id: "starters", title: "🍟 Starters & Pasta", items: startersAndPasta },
    { id: "chinese", title: "🍚 Rice & Chinese", items: chineseAndRiceList },
    { id: "tandoor", title: "🥗 Salads & Tandoor", items: saladsAndTandoor },
    { id: "drinks", title: "🍹 Drinks & Desserts", items: drinksAndDesserts }
];

// ==================== STATE ====================
let cart = [];
let isMobileMenuOpen = false;

// Helper to get image URL
const getImgUrl = (img) => (img ? img : 'images/placeholder.jpg');

// ==================== RENDER NAVBAR ====================
function renderNavbar() {
    const navContainer = document.getElementById('navbar-links');
    const mobileNavContainer = document.getElementById('mobile-nav-overlay');

    const linksHtml = navLinks.map(link => `<a href="${link.href}">${link.label}</a>`).join('');
    navContainer.innerHTML = linksHtml;
    mobileNavContainer.innerHTML = linksHtml;

    // Mobile nav click listeners
    mobileNavContainer.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', toggleMenu);
    });
}

function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    const overlay = document.getElementById('mobile-nav-overlay');
    const backdrop = document.getElementById('menu-backdrop');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    if (isMobileMenuOpen) {
        overlay.classList.add('open');
        backdrop.classList.add('show');
        hamburgerBtn.innerText = '✕';
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.remove('open');
        backdrop.classList.remove('show');
        hamburgerBtn.innerText = '☰';
        document.body.style.overflow = 'unset';
    }
}

// ==================== RENDER DISH CARDS (DishCard Component) ====================
function renderMenuSections() {
    const menuContainer = document.getElementById('menu-sections');
    let html = '';

    menuCategories.forEach(cat => {
        html += `<section id="${cat.id}">
            <h2 class="section-title">${cat.title}</h2>
            <div class="cards-grid">`;

        cat.items.forEach(item => {
            if (cat.isDeal) {
                html += `
                    <div class="dish-card">
                        <div class="card-img-container" style="background-image: url('${getImgUrl(item.img)}')"></div>
                        <div class="card-body">
                            <h4>${item.title}</h4>
                            <p class="deal-details">${item.details}</p>
                            <p class="card-price">Rs. ${item.price}</p>
                            <button class="add-btn" onclick="addToCart('${item.title}', ${item.price})">
                                Add Deal 🛒
                            </button>
                        </div>
                    </div>`;
            } else if (item.type === 'standard') {
                html += `
                    <div class="dish-card">
                        <div class="card-img-container" style="background-image: url('${getImgUrl(item.img)}')"></div>
                        <div class="card-body">
                            <h4>${item.name}</h4>
                            <p class="card-price">Rs. ${item.price}</p>
                            <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">
                                Add 🛒
                            </button>
                        </div>
                    </div>`;
            } else {
                let options = [];
                if (item.type === 'pizza' || item.type === 'custom') {
                    options = item.options.map(opt => ({ label: `${opt.label} - Rs. ${opt.price}`, name: `${item.name} (${opt.label})`, price: opt.price }));
                } else if (item.type === 'halfFull') {
                    options = [
                        { label: `Half - Rs. ${item.half}`, name: `${item.name} (Half)`, price: item.half },
                        { label: `Full - Rs. ${item.full}`, name: `${item.name} (Full)`, price: item.full }
                    ];
                }

                html += `
                    <div class="dish-card" id="card-${item.id}">
                        <div class="card-img-container" style="background-image: url('${getImgUrl(item.img)}')"></div>
                        <div class="card-body">
                            <h4>${item.name}</h4>
                            <select class="size-select" id="select-${item.id}" onchange="updateDynamicCardPrice('${item.id}', ${JSON.stringify(options).replace(/"/g, '&quot;')})">
                                ${options.map((opt, idx) => `<option value="${idx}">${opt.label}</option>`).join('')}
                            </select>
                            <p class="card-price" id="price-${item.id}">Rs. ${options[0].price}</p>
                            <button class="add-btn" id="btn-${item.id}" onclick="addDynamicOptionToCart('${item.id}', ${JSON.stringify(options).replace(/"/g, '&quot;')})">
                                Add 🛒
                            </button>
                        </div>
                    </div>`;
            }
        });

        html += `</div></section>`;
    });

    menuContainer.innerHTML = html;
}

function updateDynamicCardPrice(itemId, options) {
    const select = document.getElementById(`select-${itemId}`);
    const selectedIdx = select.value;
    const priceElem = document.getElementById(`price-${itemId}`);
    priceElem.innerText = `Rs. ${options[selectedIdx].price}`;
}

function addDynamicOptionToCart(itemId, options) {
    const select = document.getElementById(`select-${itemId}`);
    const selectedIdx = select.value;
    const currentOption = options[selectedIdx] || options[0];
    addToCart(currentOption.name, currentOption.price);
}

// ==================== CART MANAGEMENT (Cart Component Logic) ====================
function addToCart(name, price) {
    const existingIndex = cart.findIndex(item => item.name === name);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCartUI();
}

function updateQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalBillElem = document.getElementById('total-bill');
    const mobileCartCount = document.getElementById('mobile-cart-count');

    let totalBill = 0;
    let totalCount = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <li style="color: #888; border: none; text-align: center; padding: 15px 0;">
                Your cart is empty.
            </li>`;
    } else {
        let itemsHtml = '';
        cart.forEach((item, index) => {
            const cost = item.price * item.qty;
            totalBill += cost;
            totalCount += item.qty;

            itemsHtml += `
                <li class="cart-item-row">
                    <div class="cart-item-details">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">Rs. ${cost}</span>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn minus" onclick="updateQty(${index}, -1)">−</button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn plus" onclick="updateQty(${index}, 1)">+</button>
                        </div>
                        <button class="cart-del-btn" onclick="removeItem(${index})" title="Remove Item">🗑️</button>
                    </div>
                </li>`;
        });
        cartItemsContainer.innerHTML = itemsHtml;
    }

    totalBillElem.innerText = totalBill;
    mobileCartCount.innerText = totalCount;
}

// ==================== ORDER SUBMISSION ====================
function handleSendOrder() {
    const nameInput = document.getElementById('cust-name');
    const addressInput = document.getElementById('cust-address');
    const paymentSelect = document.getElementById('payment-method');

    const name = nameInput.value.trim();
    const address = addressInput.value.trim();
    const paymentMethod = paymentSelect.value;

    if (cart.length === 0) {
        alert("Your Cart is Empty!");
        return;
    }

    if (!name || !address) {
        alert("Must Enter Your Name aur Address for Delivery process!");
        return;
    }

    const userConfirmation = window.confirm("Do you want to confirm this order?");
    if (!userConfirmation) return;

    let msg = "  NEW ORDER (Dream Cafe) FROM SITE \n\n";
    msg += `👤 *Name:* ${name}\n📍 *Address:* ${address}\n💳 *Payment:* ${paymentMethod}\n-------------\n`;

    let total = 0;
    let itemsTextList = [];

    cart.forEach((item, idx) => {
        let cost = item.price * item.qty;
        total += cost;
        msg += `${idx + 1}. *${item.name}* x ${item.qty} = Rs. ${cost}\n`;
        itemsTextList.push(`${item.name} (Qty: ${item.qty})`);
    });
    msg += `-------------\n💰 *Total Payable: Rs. ${total}*\n\nKindly confirm my order!`;

    const orderData = {
        name: name,
        location: address,
        payment: paymentMethod,
        items: itemsTextList.join("\n "),
        total: total
    };

    // 1. Send data to Google Sheet
    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
    }).catch((error) => console.error("Error saving to Google Sheets:", error));

   // WhatsApp redirect (Works on Mobile & PC)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CAFE_WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');

    // Clear inputs and cart
    nameInput.value = '';
    addressInput.value = '';
    clearCart();
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderMenuSections();
    updateCartUI();

    document.getElementById('hamburger-btn').addEventListener('click', toggleMenu);
    document.getElementById('menu-backdrop').addEventListener('click', toggleMenu);
    document.getElementById('send-order-btn').addEventListener('click', handleSendOrder);
});