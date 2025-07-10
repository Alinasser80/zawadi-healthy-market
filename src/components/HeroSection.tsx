
import { ArrowLeft, Leaf, Heart, Shield } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-bl from-natural-50 via-white to-organic-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              مرحباً بكم في{' '}
              <span className="text-gradient">زوادي</span>
            </h1>
            <p className="text-xl text-natural-600 mb-8 leading-relaxed">
              متجركم المتخصص في المنتجات الغذائية الصحية والطبيعية. 
              نقدم لكم أفضل المنتجات العضوية والكيتونية والخالية من الجلوتين
            </p>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="p-2 bg-natural-100 rounded-lg">
                  <Leaf className="w-5 h-5 text-natural-600" />
                </div>
                <span className="text-natural-700 font-medium">100% طبيعي</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="p-2 bg-natural-100 rounded-lg">
                  <Heart className="w-5 h-5 text-natural-600" />
                </div>
                <span className="text-natural-700 font-medium">صحي ومفيد</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="p-2 bg-natural-100 rounded-lg">
                  <Shield className="w-5 h-5 text-natural-600" />
                </div>
                <span className="text-natural-700 font-medium">معتمد ومضمون</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center gap-2">
                تسوق الآن
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                تعرف على منتجاتنا
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
                alt="منتجات صحية طبيعية"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-natural-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-organic-200 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-primary/20 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
