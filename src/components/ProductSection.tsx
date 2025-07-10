
import { ProductCard } from './ProductCard'
import { Product } from '@/store/cartStore'

interface ProductSectionProps {
  id: string
  title: string
  description: string
  products: Product[]
  backgroundColor?: string
}

export const ProductSection = ({ id, title, description, products, backgroundColor = 'bg-white' }: ProductSectionProps) => {
  return (
    <section id={id} className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-natural-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn-secondary">
            عرض المزيد من {title}
          </button>
        </div>
      </div>
    </section>
  )
}
