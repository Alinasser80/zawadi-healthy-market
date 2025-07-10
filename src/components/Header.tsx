
import { useState } from 'react'
import { ShoppingCart, Menu, X, Search, Heart } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { Cart } from './Cart'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems, toggleCart } = useCartStore()

  const navigation = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'منتجات الكيتو', href: '#keto' },
    { name: 'خالي من الجلوتين', href: '#gluten-free' },
    { name: 'عضوي', href: '#organic' },
    { name: 'تواصل معنا', href: '#contact' }
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-natural-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient">زوادي</h1>
              <span className="mr-2 text-sm text-natural-600">متجر الغذاء الصحي</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-reverse space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-reverse space-x-4">
              {/* Search */}
              <button className="p-2 hover:bg-natural-100 rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <button className="p-2 hover:bg-natural-100 rounded-lg transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative p-2 hover:bg-natural-100 rounded-lg transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-natural-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-natural-200 animate-fade-in">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <Cart />
    </>
  )
}

export default Header
