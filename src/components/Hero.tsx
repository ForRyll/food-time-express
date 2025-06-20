
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Pesan Makanan Favorit Anda
          </h1>
          <p className="text-lg md:text-xl mb-8 text-orange-100">
            Nikmati pengalaman memesan makanan yang cepat, mudah, dan lezat dari restoran terbaik di kota Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Pesan Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3"
            >
              Lihat Menu
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Clock className="h-8 w-8 mb-3 text-orange-200" />
              <h3 className="font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-sm text-orange-100">Makanan sampai dalam 30 menit</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Star className="h-8 w-8 mb-3 text-orange-200" />
              <h3 className="font-semibold mb-2">Kualitas Terbaik</h3>
              <p className="text-sm text-orange-100">Makanan segar dan berkualitas</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Truck className="h-8 w-8 mb-3 text-orange-200" />
              <h3 className="font-semibold mb-2">Gratis Ongkir</h3>
              <p className="text-sm text-orange-100">Untuk pembelian di atas Rp 50.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
