
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
      name: "Nasi Gudeg Jogja",
      description: "Gudeg tradisional dengan ayam dan telur, disajikan dengan nasi hangat",
      price: 25000,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      category: "traditional",
      rating: 4.8,
      isPopular: true
    },
    {
      id: 2,
      name: "Ayam Geprek Sambal Matah",
      description: "Ayam crispy dengan sambal matah pedas yang menggugah selera",
      price: 20000,
      image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop",
      category: "chicken",
      rating: 4.7,
      isPopular: true
    },
    {
      id: 3,
      name: "Burger Beef Deluxe",
      description: "Burger daging sapi dengan keju, lettuce, dan saus spesial",
      price: 35000,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      category: "western",
      rating: 4.6
    },
    {
      id: 4,
      name: "Pasta Carbonara",
      description: "Pasta dengan saus creamy carbonara dan bacon crispy",
      price: 40000,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      category: "western",
      rating: 4.5
    },
    {
      id: 5,
      name: "Soto Ayam Lamongan",
      description: "Soto ayam khas Lamongan dengan kuah bening yang segar",
      price: 18000,
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
      category: "traditional",
      rating: 4.9
    },
    {
      id: 6,
      name: "Pizza Margherita",
      description: "Pizza klasik dengan mozarella, basil, dan tomat segar",
      price: 45000,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      category: "western",
      rating: 4.4
    }
  ];

  const categories = [
    { id: "all", name: "Semua Menu" },
    { id: "traditional", name: "Makanan Tradisional" },
    { id: "chicken", name: "Ayam" },
    { id: "western", name: "Western Food" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    toast.success(`${item.name} ditambahkan ke keranjang!`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Menu Makanan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih dari berbagai macam makanan lezat yang telah disiapkan dengan bahan-bahan segar dan berkualitas
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
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    Popular
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
                <div className="text-xl font-bold text-orange-500">
                  Rp {item.price.toLocaleString('id-ID')}
                </div>
                <Button 
                  onClick={() => handleAddToCart(item)}
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
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
