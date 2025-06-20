
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Gacoan Terenak Se-Indonesia
          </h1>
          <p className="text-lg md:text-xl mb-8 text-red-100">
            Nikmati kelezatan mie ayam, bakso, dan dimsum terbaik langsung dari dapur Gacoan. Pesan sekarang dan rasakan cita rasa yang bikin nagih!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Pesan Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3"
            >
              Lihat Menu
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Clock className="h-8 w-8 mb-3 text-red-200" />
              <h3 className="font-semibold mb-2">Pengiriman Cepat</h3>
              <p className="text-sm text-red-100">Gacoan sampai dalam 30 menit</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Star className="h-8 w-8 mb-3 text-red-200" />
              <h3 className="font-semibold mb-2">Rasa Original</h3>
              <p className="text-sm text-red-100">Cita rasa khas Gacoan yang autentik</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Truck className="h-8 w-8 mb-3 text-red-200" />
              <h3 className="font-semibold mb-2">Gratis Ongkir</h3>
              <p className="text-sm text-red-100">Untuk pembelian di atas Rp 50.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
