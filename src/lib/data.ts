export interface Dish {
  id: string;
  name: string;
  nameEn: string;
  category: "main" | "appetizer" | "dessert" | "bread" | "pizza" | "salad" | "pasta" | "pastry" | "buffet";
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
  { id: "main", name: "رئيسية", icon: "🍛" },
  { id: "pasta", name: "مكرونة", icon: "🍝" },
  { id: "pizza", name: "بيتزا", icon: "🍕" },
  { id: "pastry", name: "معجنات", icon: "🥐" },
  { id: "salad", name: "سلطات", icon: "🥗" },
  { id: "appetizer", name: "مقبلات", icon: "🥟" },
  { id: "bread", name: "خبز", icon: "🍞" },
  { id: "dessert", name: "حلويات", icon: "🍰" },
  { id: "buffet", name: "بوفيهات", icon: "🎉" },
] as const;

// Only verified working Unsplash photo IDs (HTTP 200)
const IMG = {
  riceChicken: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80&auto=format&fit=crop",
  dessert: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop",
  pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop",
  pasta: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80&auto=format&fit=crop",
  pasta2: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=600&q=80&auto=format&fit=crop",
  pizza2: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80&auto=format&fit=crop",
  salad: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80&auto=format&fit=crop",
  salad2: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600&q=80&auto=format&fit=crop",
  stew: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&auto=format&fit=crop",
  // Local images that always work for buffets
  buffet1: "/dishes/mandi.jpg",
  buffet2: "/dishes/kibbeh-fried.jpg",
  buffet3: "/dishes/thareed.jpg",
  buffet4: "/dishes/cheesecake.jpg",
};

export const DISHES: Dish[] = [
  // ===== الأطباق الرئيسية =====
  { id: "mandi-meat", name: "مندي لحم", nameEn: "Lamb Mandi", category: "main", price: 65, oldPrice: 80, image: "/dishes/mandi.jpg", description: "أرز بسمتي مطهو على الطريقة الشعبية مع لحم طري، متبّل بأفخر التوابل والزعفران.", isPopular: true },
  { id: "mandi-chicken", name: "مندي دجاج", nameEn: "Chicken Mandi", category: "main", price: 38, image: IMG.riceChicken, description: "أرز بسمتي مع دجاج مشوي طري متبّل بالتوابل الأصيلة.", isPopular: true },
  { id: "thareed", name: "الثريد (الفتة)", nameEn: "Thareed", category: "main", price: 45, image: "/dishes/thareed.jpg", description: "قطع الخبز المقطع مع المرق واللحم، طبق شعبي شهي ولذيذ.", isPopular: true },
  { id: "jareesh", name: "الجريش السعودي", nameEn: "Saudi Jareesh", category: "main", price: 38, image: "/dishes/jareesh.jpg", description: "جريش كريمي مطهو ببطء مع الحليب والزبدة، يُقدّم مع السمن البلدي.", isPopular: true },
  { id: "marsa-meat", name: "المرسة لحم", nameEn: "Marsa Lamb", category: "main", price: 55, image: "/dishes/chicken-stew.jpg", description: "مرسة لحم فاخرة بخبز محمّص ومرق غني باللحم والتوابل.", isNew: true },
  { id: "marsa-chicken", name: "المرسة دجاج", nameEn: "Marsa Chicken", category: "main", price: 42, image: IMG.riceChicken, description: "مرسة دجاج شهية بخبز محمّص ومرق دجاج غني بالنكهة.", isNew: true },
  { id: "areekah", name: "العريكة", nameEn: "Areekah", category: "main", price: 25, image: IMG.dessert, description: "عريكة سعودية تقليدية بالتمر والعسل والسمن البلدي.", isNew: true },
  { id: "khameer-meat", name: "الخمير لحم", nameEn: "Khameer with Meat", category: "main", price: 35, image: IMG.pizza, description: "خبز خمير محشو باللحم المتبّل، مخبوز في التنور.", isNew: true },
  { id: "khameer-chicken", name: "الخمير دجاج", nameEn: "Khameer with Chicken", category: "main", price: 30, image: IMG.pizza2, description: "خبز خمير محشو بالدجاج المتبّل والخضار.", isNew: true },
  { id: "khameer-open-meat", name: "الخمير المفتوت لحم", nameEn: "Open Khameer Meat", category: "main", price: 38, image: "/dishes/thareed.jpg", description: "خمير مفتوت مع لحم ومرق غني، طبق شعبي شهي.", isNew: true },
  { id: "khameer-open-chicken", name: "الخمير المفتوت دجاج", nameEn: "Open Khameer Chicken", category: "main", price: 32, image: IMG.riceChicken, description: "خمير مفتوت مع دجاج ومرق، نكهة شعبية أصيلة.", isNew: true },
  { id: "pressed-meat", name: "المظغوط لحم", nameEn: "Pressed Lamb", category: "main", price: 48, image: "/dishes/mandi.jpg", description: "مظغوط لحم بالأرز والخبز المحمّص والمرق الغني.", isNew: true },
  { id: "pressed-chicken", name: "المظغوط دجاج", nameEn: "Pressed Chicken", category: "main", price: 35, image: IMG.riceChicken, description: "مظغوط دجاج بالأرز والخبز المحمّص، وجبة شهية ومشبعة.", isNew: true },
  { id: "zigni-meat", name: "الزقني لحم", nameEn: "Zigni Lamb", category: "main", price: 50, image: IMG.stew, description: "زقني لحم شعبي حار بالصلصة الحمراء والتوابل الخاصة.", isNew: true, spicy: true },
  { id: "zigni-chicken", name: "الزقني دجاج", nameEn: "Zigni Chicken", category: "main", price: 38, image: IMG.stew, description: "زقني دجاج شعبي حار بصلصة الطماطم والتوابل.", isNew: true, spicy: true },
  { id: "chicken-stew", name: "مرقة الدجاج والخضار", nameEn: "Chicken Stew", category: "main", price: 42, image: "/dishes/chicken-stew.jpg", description: "مرقة دجاج غنية بالخضار الطازجة، مطهوة على نار هادئة لساعات." },
  { id: "aseedah-white-meat", name: "العصيدة البيضاء باللحم", nameEn: "White Aseedah", category: "main", price: 40, image: "/dishes/aseedah-white-meat.jpg", description: "عصيدة بيضاء تقليدية تُقدّم مع مرق اللحم الشهي." },
  { id: "aseedah-brown", name: "العصيدة البنية بالسمن", nameEn: "Brown Aseedah", category: "main", price: 35, image: "/dishes/aseedah-brown.jpg", description: "عصيدة بنية بالتمر مع الزبدة والسمن البلدي الفاخر." },
  { id: "shafout", name: "الشفوت", nameEn: "Shafout", category: "main", price: 30, image: "/dishes/shafout.jpg", description: "طبق شعبي منعش من الخبز مع اللبن والنعناع.", isNew: true },
  { id: "stew-meat", name: "إيدام لحم", nameEn: "Meat Stew", category: "main", price: 45, image: IMG.stew, description: "إيدام لحم غني بالخضار والمرق، مطهو على الطريقة التقليدية.", isNew: true },
  { id: "stew-chicken", name: "إيدام دجاج", nameEn: "Chicken Stew", category: "main", price: 35, image: IMG.stew, description: "إيدام دجاج بالخضار والصلصة الحمراء الشهية.", isNew: true },
  { id: "stew-vegetable", name: "إيدام خضار", nameEn: "Vegetable Stew", category: "main", price: 28, image: IMG.salad, description: "إيدام خضار طازجة متنوعة بصلصة الطماطم والتوابل.", isNew: true },

  // ===== المكرونة =====
  { id: "pasta-meat", name: "مكرونة بشامل لحم", nameEn: "Pasta Bechamel Meat", category: "pasta", price: 35, image: IMG.pasta, description: "مكرونة بالباشامل الكريمي مع لحم مفروم وجبنة الموزاريلا.", isPopular: true },
  { id: "pasta-chicken", name: "مكرونة بشامل دجاج", nameEn: "Pasta Bechamel Chicken", category: "pasta", price: 30, image: IMG.pasta2, description: "مكرونة بالباشامل مع دجاج مشوي وجبنة ذائبة.", isNew: true },
  { id: "pasta-tuna", name: "مكرونة تونة", nameEn: "Tuna Pasta", category: "pasta", price: 22, image: IMG.pasta2, description: "مكرونة بالتونة والصوص الكريمي والخضار.", isNew: true },

  // ===== البيتزا =====
  { id: "pizza-mixed", name: "بيتزا مشكلة", nameEn: "Mixed Pizza", category: "pizza", price: 35, image: IMG.pizza, description: "بيتزا مشكلة باللحم والدجاج والخضار والجبن.", isPopular: true },
  { id: "pizza-margherita", name: "بيتزا مارجريتا", nameEn: "Margherita Pizza", category: "pizza", price: 25, image: IMG.pizza2, description: "بيتزا مارجريتا كلاسيكية بالصلصة والجبن والريحان.", isNew: true },
  { id: "pizza-meat", name: "بيتزا لحم", nameEn: "Meat Pizza", category: "pizza", price: 32, image: IMG.pizza, description: "بيتزا باللحم المفروم والبصل والفلفل والجبن.", isNew: true },
  { id: "pizza-chicken", name: "بيتزا دجاج", nameEn: "Chicken Pizza", category: "pizza", price: 30, image: IMG.pizza2, description: "بيتزا بالدجاج المشوي والفطر والجبن الذائب.", isNew: true },

  // ===== المعجنات =====
  { id: "sambousek-meat", name: "سمبوسة لحم", nameEn: "Meat Samosa", category: "pastry", price: 18, oldPrice: 22, image: "/dishes/samosa.jpg", description: "سمبوسة مقرمشة محشوة باللحم والبصل، 6 قطع." },
  { id: "sambousek-cheese", name: "سمبوسة جبن", nameEn: "Cheese Samosa", category: "pastry", price: 15, image: "/dishes/samosa.jpg", description: "سمبوسة مقرمشة محشوة بالجبن، 6 قطع.", isNew: true },
  { id: "fatayer", name: "فطائر سبانخ", nameEn: "Spinach Fatayer", category: "pastry", price: 16, image: "/dishes/grape-leaves.jpg", description: "فطائر سبانخ طازجة باللبن والبصل، 6 قطع.", isNew: true },
  { id: "manakish-zaatar", name: "مناقيش زعتر", nameEn: "Manakish Zaatar", category: "pastry", price: 12, image: "/dishes/malloh.jpg", description: "مناقيش طازجة بالزعتر وزيت الزيتون، 4 قطع.", isNew: true },
  { id: "manakish-cheese", name: "مناقيش جبن", nameEn: "Cheese Manakish", category: "pastry", price: 15, image: "/dishes/malloh.jpg", description: "مناقيش بالجبن العكاوي والزعتر، 4 قطع.", isNew: true },
  { id: "spring-rolls", name: "سبرينغ رول", nameEn: "Spring Rolls", category: "pastry", price: 20, image: "/dishes/spring-rolls.jpg", description: "رقائق سبرينغ رول مقرمشة محشوة بالخضار واللحم، 8 قطع." },
  { id: "kibbeh-fried", name: "كبة مقلية", nameEn: "Fried Kibbeh", category: "pastry", price: 28, image: "/dishes/kibbeh-fried.jpg", description: "كبة ذهبية مقرمشة محشوة باللحم والصنوبر.", isPopular: true },
  { id: "kibbeh-raw", name: "كبة نيئة", nameEn: "Raw Kibbeh", category: "pastry", price: 32, image: "/dishes/kibbeh-raw.jpg", description: "كبة نيئة طازجة محضّرة من لحم الغنم والبرغل." },
  { id: "grape-leaves", name: "ورق عنب محشي", nameEn: "Stuffed Grape Leaves", category: "pastry", price: 25, image: "/dishes/grape-leaves.jpg", description: "ورق عنب محشي بالأرز والخضار بزيت الزيتون." },
  { id: "merchant-pocket", name: "جيب التاجر", nameEn: "Merchant's Pocket", category: "pastry", price: 22, image: "/dishes/merchant-pocket.jpg", description: "عجينة مقرمزة محشوة بالجبن واللحم.", isNew: true },

  // ===== السلطات =====
  { id: "salad-fattoush", name: "سلطة فتوش", nameEn: "Fattoush Salad", category: "salad", price: 18, image: IMG.salad, description: "فتوش طازج بالخبز المحمّص والخضار ودبس الرمان.", isNew: true },
  { id: "salad-tabbouleh", name: "سلطة تبولة", nameEn: "Tabbouleh", category: "salad", price: 16, image: IMG.salad2, description: "تبولة بالبقدونس والبرغل والنعناع وعصير الليمون.", isNew: true },
  { id: "salad-hot", name: "سلطة حارة", nameEn: "Hot Salad", category: "salad", price: 15, image: IMG.salad, description: "سلطة حارة بالفلفل والطماطم والثوم.", isNew: true, spicy: true },
  { id: "salad-green", name: "سلطة خضراء", nameEn: "Green Salad", category: "salad", price: 12, image: IMG.salad2, description: "سلطة خضراء منعشة بالخس والخيار والطماطم." },

  // ===== المقبلات =====
  { id: "hummus", name: "حمص بالطحينة", nameEn: "Hummus", category: "appetizer", price: 14, image: "/dishes/shafout.jpg", description: "حمص كريمي بالطحينة وزيت الزيتون." },
  { id: "mutabbal", name: "متبل باذنجان", nameEn: "Mutabbal", category: "appetizer", price: 14, image: "/dishes/shafout.jpg", description: "متبل باذنجان مشوي بالطحينة واللبن." },
  { id: "foul", name: "فول مدمّس", nameEn: "Foul Medames", category: "appetizer", price: 12, image: IMG.stew, description: "فول مدمّس بالزيت والكمون والليمون." },
  { id: "malloh", name: "خبز الملوح", nameEn: "Malloh Bread", category: "bread", price: 12, image: "/dishes/malloh.jpg", description: "خبز ملوح تقليدي مخبوز في التنور." },
  { id: "aseedah-traditional", name: "العصيدة التقليدية", nameEn: "Traditional Aseedah", category: "bread", price: 15, image: "/dishes/aseedah-traditional.jpg", description: "عصيدة تقليدية بسيطة تُقدّم مع العسل أو السمن." },

  // ===== الحلويات =====
  { id: "cheesecake", name: "تشيز كيك فاخر", nameEn: "Cheesecake", category: "dessert", price: 24, image: "/dishes/cheesecake.jpg", description: "تشيز كيك كريمي فاخر بقاعدة بسكويت مقرمشة.", isPopular: true },
  { id: "tiramisu", name: "تراميسو", nameEn: "Tiramisu", category: "dessert", price: 26, image: "/dishes/tiramisu.jpg", description: "تراميسو بطبقاته الشهية ورشّات الشوكولاتة.", isNew: true },
  { id: "sponge-cake", name: "كيكة إسفنج", nameEn: "Sponge Cake", category: "dessert", price: 20, image: "/dishes/sponge-cake.jpg", description: "كيكة إسفنجية خفيفة وهشة." },
  { id: "date-cake", name: "كيكة التمر", nameEn: "Date Cake", category: "dessert", price: 22, image: "/dishes/date-cake.jpg", description: "كيكة تمر غنية بنكهة التمر الطبيعي والكراميل." },
  { id: "kunafa", name: "كنافة بالقشطة", nameEn: "Kunafa", category: "dessert", price: 28, image: IMG.dessert, description: "كنافة ذهبية مقرمشة بالقشطة والقطر.", isNew: true },
  { id: "baklava", name: "بقلاوة مشكلة", nameEn: "Mixed Baklava", category: "dessert", price: 25, image: IMG.dessert, description: "بقلاوة مشكلة بالفستق والجوز والعسل.", isNew: true },

  // ===== بوفيهات المناسبات =====
  { id: "buffet-wedding", name: "بوفيه أعراس", nameEn: "Wedding Buffet", category: "buffet", price: 120, image: IMG.buffet1, description: "بوفيه متكامل للأعراس يشمل: مندي + كبة + سمبوسة + سلطات + حلويات. السعر للفرد.", isNew: true },
  { id: "buffet-corporate", name: "بوفيه مؤتمرات", nameEn: "Corporate Buffet", category: "buffet", price: 90, image: IMG.buffet2, description: "بوفيه للمؤتمرات والاجتماعات. السعر للفرد.", isNew: true },
  { id: "buffet-family", name: "بوفيه عائلي", nameEn: "Family Buffet", category: "buffet", price: 75, image: IMG.buffet3, description: "بوفيه عائلي للمناسبات الخاصة. السعر للفرد.", isNew: true },
  { id: "buffet-ramadan", name: "بوفيه رمضان", nameEn: "Ramadan Buffet", category: "buffet", price: 85, image: IMG.buffet4, description: "بوفيه رمضاني متكامل: شربة + سمبوسة + أطباق رئيسية + حلويات. السعر للفرد.", isNew: true },
];

export function formatPrice(price: number): string {
  return `${price} ر.س`;
}
