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
  { id: "all", name: "كل الأصناف", icon: "🍽️" },
  { id: "main", name: "الأطباق الرئيسية", icon: "🍛" },
  { id: "pasta", name: "المكرونة", icon: "🍝" },
  { id: "pizza", name: "البيتزا", icon: "🍕" },
  { id: "pastry", name: "المعجنات", icon: "🥐" },
  { id: "salad", name: "السلطات", icon: "🥗" },
  { id: "appetizer", name: "المقبلات", icon: "🥟" },
  { id: "bread", name: "الخبز والمخبوزات", icon: "🍞" },
  { id: "dessert", name: "الحلويات", icon: "🍰" },
  { id: "buffet", name: "بوفيهات المناسبات", icon: "🎉" },
] as const;

const U = "https://images.unsplash.com/photo-";

export const DISHES: Dish[] = [
  // ===== الأطباق الرئيسية =====
  { id: "mandi-meat", name: "مندي لحم", nameEn: "Lamb Mandi", category: "main", price: 65, oldPrice: 80, image: "/dishes/mandi.jpg", description: "أرز بسمتي مطهو على الطريقة اليمنية مع لحم طري، متبّل بأفخر التوابل والزعفران.", isPopular: true },
  { id: "mandi-chicken", name: "مندي دجاج", nameEn: "Chicken Mandi", category: "main", price: 38, image: `${U}1569058242253-764a3ad0ad0e?w=600&q=80&auto=format&fit=crop`, description: "أرز بسمتي مع دجاج مشوي طري متبّل بالتوابل اليمنية الأصيلة.", isPopular: true },
  { id: "thareed", name: "الثريد (الفتة)", nameEn: "Thareed", category: "main", price: 45, image: "/dishes/thareed.jpg", description: "قطع الخبز المقطع مع المرق واللحم، طبق تقليدي شهي ولذيذ.", isPopular: true },
  { id: "jareesh", name: "الجريش السعودي", nameEn: "Saudi Jareesh", category: "main", price: 38, image: "/dishes/jareesh.jpg", description: "جريش كريمي مطهو ببطء مع الحليب والزبدة، يُقدّم مع السمن البلدي.", isPopular: true },
  { id: "marsa-meat", name: "المرسة لحم", nameEn: "Marsa Lamb", category: "main", price: 55, image: `${U}1544025162-7dbecf1ac4ac?w=600&q=80&auto=format&fit=crop`, description: "مرسة لحم يمنية فاخرة بخبز محمّص ومرق غني باللحم والتوابل.", isNew: true },
  { id: "marsa-chicken", name: "المرسة دجاج", nameEn: "Marsa Chicken", category: "main", price: 42, image: `${U}1604908176997-125f25cc6f3d?w=600&q=80&auto=format&fit=crop`, description: "مرسة دجاج شهية بخبز محمّص ومرق دجاج غني بالنكهة.", isNew: true },
  { id: "areekah", name: "العريكة", nameEn: "Areekah", category: "main", price: 25, image: `${U}1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop`, description: "عريكة سعودية تقليدية بالتمر والعسل والسمن البلدي.", isNew: true },
  { id: "khameer-meat", name: "الخمير لحم", nameEn: "Khameer with Meat", category: "main", price: 35, image: `${U}1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop`, description: "خبز خمير محشو باللحم المتبّل، مخبوز في التنور.", isNew: true },
  { id: "khameer-chicken", name: "الخمير دجاج", nameEn: "Khameer with Chicken", category: "main", price: 30, image: `${U}1626645798410-4a5e3b2e2e2e?w=600&q=80&auto=format&fit=crop`, description: "خبز خمير محشو بالدجاج المتبّل والخضار.", isNew: true },
  { id: "khameer-open-meat", name: "الخمير المفتوت لحم", nameEn: "Open Khameer Meat", category: "main", price: 38, image: `${U}1574484284002-1f54b176c935?w=600&q=80&auto=format&fit=crop`, description: "خمير مفتوت مع لحم ومرق غني، طبق يمني شهي.", isNew: true },
  { id: "khameer-open-chicken", name: "الخمير المفتوت دجاج", nameEn: "Open Khameer Chicken", category: "main", price: 32, image: `${U}1532550907401-a0d8e6a3eae6?w=600&q=80&auto=format&fit=crop`, description: "خمير مفتوت مع دجاج ومرق، نكهة يمنية أصيلة.", isNew: true },
  { id: "pressed-meat", name: "المظغوط لحم", nameEn: "Pressed Lamb", category: "main", price: 48, image: `${U}1544025162-7dbecf1ac4ac?w=600&q=80&auto=format&fit=crop`, description: "مظغوط لحم بالأرز والخبز المحمّص والمرق الغني.", isNew: true },
  { id: "pressed-chicken", name: "المظغوط دجاج", nameEn: "Pressed Chicken", category: "main", price: 35, image: `${U}1604908176997-125f25cc6f3d?w=600&q=80&auto=format&fit=crop`, description: "مظغوط دجاج بالأرز والخبز المحمّص، وجبة شهية ومشبعة.", isNew: true },
  { id: "zigni-meat", name: "الزقني لحم", nameEn: "Zigni Lamb", category: "main", price: 50, image: `${U}1544025162-7dbecf1ac4ac?w=600&q=80&auto=format&fit=crop`, description: "زقني لحم يمني حار بالصلصة الحمراء والتوابل الخاصة.", isNew: true, spicy: true },
  { id: "zigni-chicken", name: "الزقني دجاج", nameEn: "Zigni Chicken", category: "main", price: 38, image: `${U}1604908176997-125f25cc6f3d?w=600&q=80&auto=format&fit=crop`, description: "زقني دجاج يمني حار بصلصة الطماطم والتوابل.", isNew: true, spicy: true },
  { id: "chicken-stew", name: "مرقة الدجاج والخضار", nameEn: "Chicken Stew", category: "main", price: 42, image: "/dishes/chicken-stew.jpg", description: "مرقة دجاج غنية بالخضار الطازجة، مطهوة على نار هادئة لساعات." },
  { id: "aseedah-white-meat", name: "العصيدة البيضاء باللحم", nameEn: "White Aseedah", category: "main", price: 40, image: "/dishes/aseedah-white-meat.jpg", description: "عصيدة بيضاء تقليدية تُقدّم مع مرق اللحم الشهي." },
  { id: "aseedah-brown", name: "العصيدة البنية بالسمن", nameEn: "Brown Aseedah", category: "main", price: 35, image: "/dishes/aseedah-brown.jpg", description: "عصيدة بنية بالتمر مع الزبدة والسمن البلدي الفاخر." },
  { id: "shafout", name: "الشفوت اليمني", nameEn: "Yemeni Shafout", category: "main", price: 30, image: "/dishes/shafout.jpg", description: "طبق يمني منعش من الخبز مع اللبن والنعناع.", isNew: true },

  // ===== إيدامات بكل أنواعها =====
  { id: "stew-meat", name: "إيدام لحم", nameEn: "Meat Stew", category: "main", price: 45, image: `${U}1544025162-7dbecf1ac4ac?w=600&q=80&auto=format&fit=crop`, description: "إيدام لحم غني بالخضار والمرق، مطهو على الطريقة التقليدية.", isNew: true },
  { id: "stew-chicken", name: "إيدام دجاج", nameEn: "Chicken Stew", category: "main", price: 35, image: `${U}1604908176997-125f25cc6f3d?w=600&q=80&auto=format&fit=crop`, description: "إيدام دجاج بالخضار والصلصة الحمراء الشهية.", isNew: true },
  { id: "stew-vegetable", name: "إيدام خضار", nameEn: "Vegetable Stew", category: "main", price: 28, image: `${U}1547592180-85f173990554?w=600&q=80&auto=format&fit=crop`, description: "إيدام خضار طازجة متنوعة بصلصة الطماطم والتوابل.", isNew: true },
  { id: "stew-foul", name: "إيدام فول", nameEn: "Fava Bean Stew", category: "main", price: 18, image: `${U}1525351484163-7510b0614492?w=600&q=80&auto=format&fit=crop`, description: "إيدام فول مدمّس بالزيت والكمون والطماطم.", isNew: true },

  // ===== المكرونة =====
  { id: "pasta-meat", name: "مكرونة بشامل لحم", nameEn: "Pasta Bechamel Meat", category: "pasta", price: 35, image: `${U}1473093295043-cdd812d0e601?w=600&q=80&auto=format&fit=crop`, description: "مكرونة بالباشالكريمي مع لحم مفروم وجبنة الموزاريلا.", isPopular: true },
  { id: "pasta-chicken", name: "مكرونة بشامل دجاج", nameEn: "Pasta Bechamel Chicken", category: "pasta", price: 30, image: `${U}1481931098730-318b6f776db0?w=600&q=80&auto=format&fit=crop`, description: "مكرونة بالباشامل مع دجاج مشوي وجبنة ذائبة.", isNew: true },
  { id: "pasta-tuna", name: "مكرونة تونة", nameEn: "Tuna Pasta", category: "pasta", price: 22, image: `${U}1481478641315-97ad89c52694?w=600&q=80&auto=format&fit=crop`, description: "مكرونة بالتونة والصوص الكريمي والخضار.", isNew: true },

  // ===== البيتزا =====
  { id: "pizza-mixed", name: "بيتزا مشكلة", nameEn: "Mixed Pizza", category: "pizza", price: 35, image: `${U}1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop`, description: "بيتزا مشكلة باللحم والدجاج والخضار والجبن.", isPopular: true },
  { id: "pizza-margherita", name: "بيتزا مارجريتا", nameEn: "Margherita Pizza", category: "pizza", price: 25, image: `${U}1574071318508-1ccab60341cb?w=600&q=80&auto=format&fit=crop`, description: "بيتزا مارجريتا كلاسيكية بالصلصة والجبن والريحان.", isNew: true },
  { id: "pizza-meat", name: "بيتزا لحم", nameEn: "Meat Pizza", category: "pizza", price: 32, image: `${U}1513104890138-7c749659a591?w=600&q=80&auto=format&fit=crop`, description: "بيتزا باللحم المفروم والبصل والفلفل والجبن.", isNew: true },
  { id: "pizza-chicken", name: "بيتزا دجاج", nameEn: "Chicken Pizza", category: "pizza", price: 30, image: `${U}1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop`, description: "بيتزا بالدجاج المشوي والفطر والجبن الذائب.", isNew: true },

  // ===== المعجنات =====
  { id: "sambousek-meat", name: "سمبوسة لحم", nameEn: "Meat Samosa", category: "pastry", price: 18, oldPrice: 22, image: "/dishes/samosa.jpg", description: "سمبوسة مقرمشة محشوة باللحم والبصل، 6 قطع." },
  { id: "sambousek-cheese", name: "سمبوسة جبن", nameEn: "Cheese Samosa", category: "pastry", price: 15, image: `${U}1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop`, description: "سمبوسة مقرمشة محشوة بالجبن، 6 قطع.", isNew: true },
  { id: "fatayer", name: "فطائر سبانخ", nameEn: "Spinach Fatayer", category: "pastry", price: 16, image: `${U}1543168256-4188115669d6?w=600&q=80&auto=format&fit=crop`, description: "فطائر سبانخ طازجة باللبن والبصل، 6 قطع.", isNew: true },
  { id: "manakish", name: "مناقيش زعتر", nameEn: "Manakish Zaatar", category: "pastry", price: 12, image: `${U}1565299594821-2547b1a5e2e2?w=600&q=80&auto=format&fit=crop`, description: "مناقيش طازجة بالزعتر وزيت الزيتون، 4 قطع.", isNew: true },
  { id: "manakish-cheese", name: "مناقيش جبن", nameEn: "Cheese Manakish", category: "pastry", price: 15, image: `${U}1565299594821-2547b1a5e2e2?w=600&q=80&auto=format&fit=crop`, description: "مناقيش بالجبن العكاوي والزعتر، 4 قطع.", isNew: true },
  { id: "spring-rolls", name: "سبرينغ رول", nameEn: "Spring Rolls", category: "pastry", price: 20, image: "/dishes/spring-rolls.jpg", description: "رقائق سبرينغ رول مقرمشة محشوة بالخضار واللحم، 8 قطع." },
  { id: "kibbeh-fried", name: "كبة مقلية", nameEn: "Fried Kibbeh", category: "pastry", price: 28, image: "/dishes/kibbeh-fried.jpg", description: "كبة ذهبية مقرمشة محشوة باللحم والصنوبر.", isPopular: true },
  { id: "kibbeh-raw", name: "كبة نيئة", nameEn: "Raw Kibbeh", category: "pastry", price: 32, image: "/dishes/kibbeh-raw.jpg", description: "كبة نيئة طازجة محضّرة من لحم الغنم والبرغل." },
  { id: "grape-leaves", name: "ورق عنب محشي", nameEn: "Stuffed Grape Leaves", category: "pastry", price: 25, image: "/dishes/grape-leaves.jpg", description: "ورق عنب محشي بالأرز والخضار بزيت الزيتون." },
  { id: "merchant-pocket", name: "جيب التاجر", nameEn: "Merchant's Pocket", category: "pastry", price: 22, image: "/dishes/merchant-pocket.jpg", description: "عجينة مقرمزة محشوة بالجبن واللحم.", isNew: true },

  // ===== السلطات =====
  { id: "salad-fattoush", name: "سلطة فتوش", nameEn: "Fattoush Salad", category: "salad", price: 18, image: `${U}1540420773420-3366772f4999?w=600&q=80&auto=format&fit=crop`, description: "فتوش طازج بالخبز المحمّص والخضار ودبس الرمان.", isNew: true },
  { id: "salad-tabbouleh", name: "سلطة تبولة", nameEn: "Tabbouleh", category: "salad", price: 16, image: `${U}1543353071-873f17a7a088?w=600&q=80&auto=format&fit=crop`, description: "تبولة بالبقدونس والبرغل والنعناع وعصير الليمون.", isNew: true },
  { id: "salad-hot", name: "سلطة حارة", nameEn: "Hot Salad", category: "salad", price: 15, image: `${U}1540420773420-3366772f4999?w=600&q=80&auto=format&fit=crop`, description: "سلطة حارة بالفلفل والطماطم والثوم.", isNew: true, spicy: true },
  { id: "salad-green", name: "سلطة خضراء", nameEn: "Green Salad", category: "salad", price: 12, image: `${U}1512621779601-79c4b3c2a2e2?w=600&q=80&auto=format&fit=crop`, description: "سلطة خضراء منعشة بالخس والخيار والطماطم." },

  // ===== المقبلات =====
  { id: "hummus", name: "حمص بالطحينة", nameEn: "Hummus", category: "appetizer", price: 14, image: `${U}1571197119282-7c4c2efdb12e?w=600&q=80&auto=format&fit=crop`, description: "حمص كريمي بالطحينة وزيت الزيتون." },
  { id: "mutabbal", name: "متبل باذنجان", nameEn: "Mutabbal", category: "appetizer", price: 14, image: `${U}1632776362433-5e6b3c6f3e3e?w=600&q=80&auto=format&fit=crop`, description: "متبل باذنجان مشوي بالطحينة واللبن." },
  { id: "foul", name: "فول مدمّس", nameEn: "Foul Medames", category: "appetizer", price: 12, image: `${U}1525351484163-7510b0614492?w=600&q=80&auto=format&fit=crop`, description: "فول مدمّس بالزيت والكمون والليمون." },
  { id: "malloh", name: "خبز الملوح اليمني", nameEn: "Yemeni Malloh", category: "bread", price: 12, image: "/dishes/malloh.jpg", description: "خبز ملوح يمني تقليدي مخبوز في التنور." },
  { id: "aseedah-traditional", name: "العصيدة التقليدية", nameEn: "Traditional Aseedah", category: "bread", price: 15, image: "/dishes/aseedah-traditional.jpg", description: "عصيدة تقليدية بسيطة تُقدّم مع العسل أو السمن." },

  // ===== الحلويات =====
  { id: "cheesecake", name: "تشيز كيك فاخر", nameEn: "Cheesecake", category: "dessert", price: 24, image: "/dishes/cheesecake.jpg", description: "تشيز كيك كريمي فاخر بقاعدة بسكويت مقرمشة.", isPopular: true },
  { id: "tiramisu", name: "تراميسو", nameEn: "Tiramisu", category: "dessert", price: 26, image: "/dishes/tiramisu.jpg", description: "تراميسو بطبقاته الشهية ورشّات الشوكولاتة.", isNew: true },
  { id: "sponge-cake", name: "كيكة إسفنج", nameEn: "Sponge Cake", category: "dessert", price: 20, image: "/dishes/sponge-cake.jpg", description: "كيكة إسفنجية خفيفة وهشة." },
  { id: "date-cake", name: "كيكة التمر", nameEn: "Date Cake", category: "dessert", price: 22, image: "/dishes/date-cake.jpg", description: "كيكة تمر غنية بنكهة التمر الطبيعي والكراميل." },
  { id: "kunafa", name: "كنافة بالقشطة", nameEn: "Kunafa", category: "dessert", price: 28, image: `${U}1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop`, description: "كنافة ذهبية مقرمشة بالقشطة والقطر.", isNew: true },
  { id: "baklava", name: "بقلاوة مشكلة", nameEn: "Mixed Baklava", category: "dessert", price: 25, image: `${U}1631478243736-5e6b3c6f3e3e?w=600&q=80&auto=format&fit=crop`, description: "بقلاوة مشكلة بالفستق والجوز والعسل.", isNew: true },

  // ===== بوفيهات المناسبات =====
  { id: "buffet-wedding", name: "بوفيه أعراس", nameEn: "Wedding Buffet", category: "buffet", price: 120, image: `${U}1532550907401-a0d8e6a3eae6?w=600&q=80&auto=format&fit=crop`, description: "بوفيه متكامل للأعراس يشمل: مندي + كبة + سمبوسة + سلطات + حلويات. السعر للفرد.", isNew: true },
  { id: "buffet-corporate", name: "بوفيه مؤتمرات", nameEn: "Corporate Buffet", category: "buffet", price: 90, image: `${U}1543168256-4188115669d6?w=600&q=80&auto=format&fit=crop`, description: "بوفيه للمؤتمرات والاجتماعات يشمل: أطباق رئيسية + مقبلات + سلطات + حلويات. السعر للفرد.", isNew: true },
  { id: "buffet-family", name: "بوفيه عائلي", nameEn: "Family Buffet", category: "buffet", price: 75, image: `${U}1565299594821-2547b1a5e2e2?w=600&q=80&auto=format&fit=crop`, description: "بوفيه عائلي للمناسبات الخاصة يشمل: 3 أطباق رئيسية + مقبلات + سلطات + حلويات. السعر للفرد.", isNew: true },
  { id: "buffet-ramadan", name: "بوفيه رمضان", nameEn: "Ramadan Buffet", category: "buffet", price: 85, image: `${U}1543353071-873f17a7a088?w=600&q=80&auto=format&fit=crop`, description: "بوفيه رمضاني متكامل: شربة + سمبوسة + أطباق رئيسية + سلطات + حلويات رمضانية. السعر للفرد.", isNew: true },
];

export function formatPrice(price: number): string {
  return `${price} ر.س`;
}
