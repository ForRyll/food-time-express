
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, MapPin, Clock, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

interface ProfileProps {
  user: { name: string; email: string };
  setUser: (user: { name: string; email: string }) => void;
}

const Profile = ({ user, setUser }: ProfileProps) => {
  const [formData, setFormData] = useState({
    name: user.name || "John Doe",
    email: user.email || "john@example.com",
    phone: "0812-3456-7890",
    address: "Jl. Sudirman No. 123, Jakarta"
  });

  const orderHistory = [
    {
      id: "ORD001",
      date: "2024-01-15",
      items: ["Nasi Gudeg Jogja", "Ayam Geprek"],
      total: 45000,
      status: "Delivered"
    },
    {
      id: "ORD002", 
      date: "2024-01-10",
      items: ["Burger Beef Deluxe"],
      total: 35000,
      status: "Delivered"
    },
    {
      id: "ORD003",
      date: "2024-01-08",
      items: ["Pizza Margherita", "Pasta Carbonara"],
      total: 85000,
      status: "Delivered"
    }
  ];

  const handleSave = () => {
    setUser({ name: formData.name, email: formData.email });
    toast.success("Profile berhasil diperbarui!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Profile Saya
        </h1>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Informasi Profile</TabsTrigger>
            <TabsTrigger value="history">Riwayat Pesanan</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Informasi Pribadi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Alamat</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleSave}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Simpan Perubahan
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Riwayat Pesanan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-gray-800">#{order.id}</span>
                          <span className="text-sm text-gray-500">{order.date}</span>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-2">
                        {order.items.join(", ")}
                      </div>
                      
                      <div className="text-lg font-bold text-orange-500">
                        Rp {order.total.toLocaleString('id-ID')}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
