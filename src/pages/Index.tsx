
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FoodMenu from "../components/FoodMenu";
import Cart from "../components/Cart";
import Profile from "../components/Profile";
import AuthModal from "../components/AuthModal";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (item: any) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      ));
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero />
            <FoodMenu addToCart={addToCart} />
          </>
        );
      case "cart":
        return (
          <Cart 
            items={cartItems} 
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        );
      case "profile":
        return <Profile user={user} setUser={setUser} />;
      default:
        return (
          <>
            <Hero />
            <FoodMenu addToCart={addToCart} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsAuthModalOpen={setIsAuthModalOpen}
        cartItemsCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        user={user}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={(userData) => {
          setIsLoggedIn(true);
          setUser(userData);
          setIsAuthModalOpen(false);
        }}
      />
    </div>
  );
};

export default Index;
