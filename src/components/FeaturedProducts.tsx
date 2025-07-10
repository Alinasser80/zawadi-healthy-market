
import { Star, TrendingUp } from 'lucide-react'
import { ProductCard } from './ProductCard'
import { getFeaturedProducts } from '@/data/products'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-16 bg-gradient-to-br from-natural-50 to-organic-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              المنتجات المميزة
            </h2>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-lg text-natural-600 max-w-2xl mx-auto">
            اكتشف مجموعتنا المختارة من أفضل المنتجات الصحية بأسعار خاصة ومحدودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            🎉 عروض لفترة محدودة!
          </h3>
          <p className="text-natural-600 mb-6">
            احصل على خصومات تصل إلى 20% على جميع المنتجات المميزة
          </p>
          <button className="btn-primary">
            تسوق العروض الآن
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
