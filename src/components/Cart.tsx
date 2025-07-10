
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

export const Cart = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={toggleCart} />
      
      <div className="absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-natural-200 p-4">
            <h2 className="text-lg font-semibold text-foreground">سلة التسوق</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-natural-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-natural-300 mb-4" />
                <p className="text-natural-500 mb-2">سلة التسوق فارغة</p>
                <p className="text-sm text-natural-400">أضف بعض المنتجات للبدء</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-natural-50 p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{item.name}</h3>
                      <p className="text-sm text-natural-600 mt-1">{item.price} ريال</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-natural-200 rounded transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 py-1 bg-white rounded border text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-natural-200 rounded transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-natural-200 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">المجموع:</span>
                <span className="text-xl font-bold text-primary">{getTotalPrice()} ريال</span>
              </div>
              
              <div className="space-y-2">
                <button className="w-full btn-primary">
                  إتمام الشراء
                </button>
                <button
                  onClick={clearCart}
                  className="w-full btn-secondary"
                >
                  إفراغ السلة
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
