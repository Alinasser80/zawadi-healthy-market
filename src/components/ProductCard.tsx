
import { ShoppingCart, Heart } from 'lucide-react'
import { Product, useCartStore } from '@/store/cartStore'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group card-hover">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {product.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
            خصم {product.discount}%
          </div>
        )}
        
        <button className="absolute top-3 left-3 p-2 bg-white/80 hover:bg-white rounded-lg transition-colors opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-natural-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-natural-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{product.price} ريال</span>
            {product.originalPrice && (
              <span className="text-sm text-natural-400 line-through">
                {product.originalPrice} ريال
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-xs px-2 py-1 bg-natural-100 text-natural-700 rounded-full">
              {product.category === 'keto' && 'كيتو'}
              {product.category === 'gluten-free' && 'خالي من الجلوتين'}
              {product.category === 'organic' && 'عضوي'}
            </span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full btn-primary flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          اشترِ الآن
        </button>
      </div>
    </div>
  )
}
