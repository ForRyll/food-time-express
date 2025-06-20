
import { ShoppingCart, User, Home, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isLoggedIn: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  cartItemsCount: number;
  user: { name: string; email: string };
}

const Header = ({ currentPage, setCurrentPage, isLoggedIn, setIsAuthModalOpen, cartItemsCount, user }: HeaderProps) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-red-600" />
            <h1 className="text-2xl font-bold text-red-600">
              Gacoan Online
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage("home")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                currentPage === "home" ? "bg-red-100 text-red-600" : "text-gray-600 hover:text-red-500"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Beranda</span>
            </button>
            
            <button
              onClick={() => setCurrentPage("cart")}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors relative ${
                currentPage === "cart" ? "bg-red-100 text-red-600" : "text-gray-600 hover:text-red-500"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Keranjang</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentPage("profile")}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">{user.name || "Profile"}</span>
                </button>
              </div>
            ) : (
              <Button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Login
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex justify-around border-t pt-4">
          <button
            onClick={() => setCurrentPage("home")}
            className={`flex flex-col items-center space-y-1 ${
              currentPage === "home" ? "text-red-600" : "text-gray-600"
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Beranda</span>
          </button>
          
          <button
            onClick={() => setCurrentPage("cart")}
            className={`flex flex-col items-center space-y-1 relative ${
              currentPage === "cart" ? "text-red-600" : "text-gray-600"
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">Keranjang</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
          
          {isLoggedIn && (
            <button
              onClick={() => setCurrentPage("profile")}
              className={`flex flex-col items-center space-y-1 ${
                currentPage === "profile" ? "text-red-600" : "text-gray-600"
              }`}
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
