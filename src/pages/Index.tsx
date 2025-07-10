
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import { ProductSection } from '@/components/ProductSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { products, getCategoryProducts } from '@/data/products'

const Index = () => {
  const ketoProducts = getCategoryProducts('keto')
  const glutenFreeProducts = getCategoryProducts('gluten-free')
  const organicProducts = getCategoryProducts('organic')

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      
      <main>
        <HeroSection />
        
        <FeaturedProducts />
        
        <ProductSection
          id="keto"
          title="منتجات الكيتو"
          description="مجموعة متنوعة من المنتجات المناسبة للنظام الغذائي الكيتوني، غنية بالدهون الصحية ومنخفضة الكربوهيدرات"
          products={ketoProducts}
          backgroundColor="bg-natural-50"
        />
        
        <ProductSection
          id="gluten-free"
          title="خالي من الجلوتين"
          description="منتجات طبيعية وآمنة خالية من الجلوتين، مناسبة لمن يعانون من حساسية الجلوتين أو مرض السيلياك"
          products={glutenFreeProducts}
          backgroundColor="bg-white"
        />
        
        <ProductSection
          id="organic"
          title="منتجات عضوية"
          description="منتجات عضوية معتمدة، مزروعة بطرق طبيعية بدون مبيدات حشرية أو أسمدة كيميائية"
          products={organicProducts}
          backgroundColor="bg-organic-50"
        />
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  )
}

export default Index
