
import { Facebook, Twitter, Instagram, Youtube, Leaf, Heart, Shield } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-natural-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">زوادي</h3>
            <p className="text-natural-200 mb-6 leading-relaxed">
              متجرك المتخصص في المنتجات الغذائية الصحية والطبيعية. 
              نسعى لتقديم أفضل المنتجات العضوية والصحية لك ولعائلتك.
            </p>
            
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="p-2 bg-natural-700 hover:bg-primary rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-natural-700 hover:bg-primary rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-natural-700 hover:bg-primary rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-natural-700 hover:bg-primary rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-natural-200 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#keto" className="text-natural-200 hover:text-white transition-colors">منتجات الكيتو</a></li>
              <li><a href="#gluten-free" className="text-natural-200 hover:text-white transition-colors">خالي من الجلوتين</a></li>
              <li><a href="#organic" className="text-natural-200 hover:text-white transition-colors">منتجات عضوية</a></li>
              <li><a href="#contact" className="text-natural-200 hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدمة العملاء</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-natural-200 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-natural-200 hover:text-white transition-colors">سياسة الإرجاع</a></li>
              <li><a href="#" className="text-natural-200 hover:text-white transition-colors">طرق الدفع</a></li>
              <li><a href="#" className="text-natural-200 hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="text-natural-200 hover:text-white transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">مميزاتنا</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="text-natural-200">منتجات طبيعية 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-natural-200">صحي ومفيد</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-natural-200">مضمون ومعتمد</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">تواصل معنا</h5>
              <p className="text-natural-200 text-sm">+966 50 123 4567</p>
              <p className="text-natural-200 text-sm">info@zawadi.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-natural-700 mt-8 pt-8 text-center">
          <p className="text-natural-300">
            © 2024 زوادي. جميع الحقوق محفوظة. صنع بـ ❤️ للصحة والعافية
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
