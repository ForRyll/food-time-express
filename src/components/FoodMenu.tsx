
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { toast } from "sonner";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isPopular?: boolean;
}

interface FoodMenuProps {
  addToCart: (item: FoodItem) => void;
}

const FoodMenu = ({ addToCart }: FoodMenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Mie Ayam Original",
      description: "Mie ayam khas Gacoan dengan topping ayam suwir, pangsit goreng, dan kuah kaldu gurih",
      price: 15000,
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
      category: "mie",
      rating: 4.9,
      isPopular: true
    },
    {
      id: 2,
      name: "Mie Ayam Cabe Ijo",
      description: "Mie ayam dengan sambal cabe ijo yang pedas menggigit, cocok untuk pecinta pedas",
      price: 17000,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
      category: "mie",
      rating: 4.8,
      isPopular: true
    },
    {
      id: 3,
      name: "Bakso Urat Original",
      description: "Bakso urat kenyal dengan kuah kaldu segar, dilengkapi tahu dan bihun",
      price: 18000,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      category: "bakso",
      rating: 4.7
    },
    {
      id: 4,
      name: "Bakso Mercon",
      description: "Bakso dengan level kepedasan tinggi, tantangan untuk pecinta makanan pedas",
      price: 20000,
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400&h=300&fit=crop",
      category: "bakso",
      rating: 4.6
    },
    {
      id: 5,
      name: "Dimsum Ayam (4 pcs)",
      description: "Dimsum ayam lembut dengan kulit tipis, disajikan dengan saus sambal khas Gacoan",
      price: 12000,
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
      category: "dimsum",
      rating: 4.5
    },
    {
      id: 6,
      name: "Dimsum Udang (4 pcs)",
      description: "Dimsum udang segar dengan tekstur kenyal, cocok untuk camilan atau makanan utama",
      price: 15000,
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",
      category: "dimsum",
      rating: 4.4
    },
    {
      id: 7,
      name: "Es Teh Manis",
      description: "Es teh manis segar untuk menemani makanan pedas Gacoan",
      price: 5000,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
      category: "minuman",
      rating: 4.3
    },
    {
      id: 8,
      name: "Es Jeruk",
      description: "Es jeruk segar asam manis yang menyegarkan",
      price: 8000,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
      category: "minuman",
      rating: 4.2
    }
  ];

  const categories = [
    { id: "all", name: "Semua Menu" },
    { id: "mie", name: "Mie Ayam" },
    { id: "bakso", name: "Bakso" },
    { id: "dimsum", name: "Dimsum" },
    { id: "minuman", name: "Minuman" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    toast.success(`${item.name} ditambahkan ke keranjang!`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
            Menu Gacoan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih dari berbagai menu andalan Gacoan yang sudah terbukti kelezatannya dan bikin nagih
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-red-50 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-red-500">
                    Favorit
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="flex items-center justify-between">
                <div className="text-xl font-bold text-red-600">
                  Rp {item.price.toLocaleString('id-ID')}
                </div>
                <Button 
                  onClick={() => handleAddToCart(item)}
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Tambah
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
