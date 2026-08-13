export interface Dish {
  id: string;
  name: string;
  nameEn: string;
  category: "main" | "appetizer" | "dessert" | "bread";
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  isPopular?: boolean;
  isNew?: boolean;
  spicy?: boolean;
}

export const CATEGORIES = [
  { id: "all", name: "الكل", icon: "🍽️" },
  { id: "main", name: "الأطباق الرئيسية", icon: "🍛" },
  { id: "appetizer", name: "المقبلات", icon: "🥟" },
  { id: "bread", name: "الخبز والمخبوزات", icon: "🍞" },
  { id: "dessert", name: "الحلويات", icon: "🍰" },
] as const;

export const DISHES: Dish[] = [
  {
    id: "mandi",
    name: "مندي اللحم",
    nameEn: "Lamb Mandi",
    category: "main",
    price: 65,
    oldPrice: 80,
    image: "/dishes/mandi.png",
    description: "أرز بسمتي مطهو على الطريقة اليمنية مع لحم طري وطري، متبّل بأفخر التوابل والزعفران.",
    isPopular: true,
  },
  {
    id: "thareed",
    name: "الثريد (الفتة)",
    nameEn: "Thareed",
    category: "main",
    price: 45,
    image: "/dishes/thareed.png",
    description: "قطع الخبز المقطع مع المرق واللحم أو الخضار، طبق تقليدي شهي ولذيذ.",
    isPopular: true,
  },
  {
    id: "jareesh",
    name: "الجريش السعودي",
    nameEn: "Saudi Jareesh",
    category: "main",
    price: 38,
    image: "/dishes/jareesh.png",
    description: "جريش كريمي مطهو ببطء مع الحليب والزبدة، يُقدّم مع السمن البلدي.",
    isPopular: true,
  },
  {
    id: "chicken-stew",
    name: "مرقة الدجاج والخضار",
    nameEn: "Chicken Vegetable Stew",
    category: "main",
    price: 42,
    image: "/dishes/chicken-stew.png",
    description: "مرقة دجاج غنية بالخضار الطازجة، مطهوة على نار هادئة لساعات.",
  },
  {
    id: "aseedah-white-meat",
    name: "العصيدة البيضاء باللحم",
    nameEn: "White Aseedah with Meat",
    category: "main",
    price: 40,
    image: "/dishes/aseedah-white-meat.png",
    description: "عصيدة بيضاء تقليدية تُقدّم مع مرق اللحم الشهي.",
  },
  {
    id: "aseedah-brown",
    name: "العصيدة البنية بالسمن",
    nameEn: "Brown Aseedah with Butter",
    category: "main",
    price: 35,
    image: "/dishes/aseedah-brown.png",
    description: "عصيدة بنية بالتمر مع الزبدة والسمن البلدي الفاخر.",
  },
  {
    id: "aseedah-lentil",
    name: "عصيدة بمرقة العدس",
    nameEn: "Aseedah with Lentil Sauce",
    category: "main",
    price: 32,
    image: "/dishes/aseedah-lentil.png",
    description: "عصيدة بيضاء تُقدّم مع مرقة العدس الغنية بالبهارات.",
  },
  {
    id: "shafout",
    name: "الشفوت اليمني",
    nameEn: "Yemeni Shafout",
    category: "main",
    price: 30,
    image: "/dishes/shafout.png",
    description: "طبق يمني منعش من الخبز مع اللبن والنعناع، مثالي للأيام الحارة.",
    isNew: true,
  },
  {
    id: "kibbeh-fried",
    name: "كبة البرغل المقلية",
    nameEn: "Fried Kibbeh",
    category: "appetizer",
    price: 28,
    image: "/dishes/kibbeh-fried.png",
    description: "كبة ذهبية مقرمشة محشوة باللحم والصنوبر، طبق لا يُقاوَم.",
    isPopular: true,
  },
  {
    id: "kibbeh-raw",
    name: "كبة البرغل النيئة",
    nameEn: "Raw Kibbeh",
    category: "appetizer",
    price: 32,
    image: "/dishes/kibbeh-raw.png",
    description: "كبة نيئة طازجة محضّرة من لحم الغنم المفروم والبرغل والبهارات.",
    isNew: true,
  },
  {
    id: "samosa",
    name: "سمبوسة محشوة",
    nameEn: "Samosa",
    category: "appetizer",
    price: 18,
    oldPrice: 22,
    image: "/dishes/samosa.png",
    description: "رقائق سمبوسة مقرمشة محشوة باللحم والخضار، 6 قطع.",
  },
  {
    id: "spring-rolls",
    name: "سبرينغ رول محشي",
    nameEn: "Spring Rolls",
    category: "appetizer",
    price: 20,
    image: "/dishes/spring-rolls.png",
    description: "رقائق سبرينغ رول مقرمشة محشوة بالخضار واللحم، 8 قطع.",
  },
  {
    id: "grape-leaves",
    name: "ورق عنب محشي",
    nameEn: "Stuffed Grape Leaves",
    category: "appetizer",
    price: 25,
    image: "/dishes/grape-leaves.png",
    description: "ورق عنب محشي بالأرز والخضار، مطهو بزيت الزيتون والليمون.",
  },
  {
    id: "merchant-pocket",
    name: "جيب التاجر",
    nameEn: "Merchant's Pocket",
    category: "appetizer",
    price: 22,
    image: "/dishes/merchant-pocket.png",
    description: "عجينة مقرمزة محشوة بالجبن واللحم، طبق مميز وفريد.",
    isNew: true,
  },
  {
    id: "malloh",
    name: "خبز الملوح اليمني",
    nameEn: "Yemeni Malloh Bread",
    category: "bread",
    price: 12,
    image: "/dishes/malloh.png",
    description: "خبز ملوح يمني تقليدي مخبوز في التنور، طري ولذيذ.",
  },
  {
    id: "aseedah-traditional",
    name: "العصيدة التقليدية",
    nameEn: "Traditional Aseedah",
    category: "bread",
    price: 15,
    image: "/dishes/aseedah-traditional.png",
    description: "عصيدة تقليدية بسيطة تُقدّم مع العسل أو السمن.",
  },
  {
    id: "cheesecake",
    name: "تشيز كيك فاخر",
    nameEn: "Cheesecake",
    category: "dessert",
    price: 24,
    image: "/dishes/cheesecake.png",
    description: "تشيز كيك كريمي فاخر بقاعدة بسكويت مقرمشة.",
    isPopular: true,
  },
  {
    id: "tiramisu",
    name: "تراميسو",
    nameEn: "Tiramisu",
    category: "dessert",
    price: 26,
    image: "/dishes/tiramisu.png",
    description: "تراميسو بطبقاته الشهية ورشّات الشوكولاتة على السطح.",
    isNew: true,
  },
  {
    id: "sponge-cake",
    name: "كيكة الإسفنج",
    nameEn: "Sponge Cake",
    category: "dessert",
    price: 20,
    image: "/dishes/sponge-cake.png",
    description: "كيكة إسفنجية خفيفة وهشة، مثالية مع الشاي.",
  },
  {
    id: "date-cake",
    name: "كيكة التمر",
    nameEn: "Date Cake",
    category: "dessert",
    price: 22,
    image: "/dishes/date-cake.png",
    description: "كيكة تمر غنية بنكهة التمر الطبيعي والكراميل.",
  },
];

export function formatPrice(price: number): string {
  return `${price} ر.س`;
}
