
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-natural-50 to-organic-50 font-arabic">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">الصفحة غير موجودة</h2>
          <p className="text-natural-600 mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-flex items-center justify-center gap-2 btn-primary"
          >
            <Home className="w-4 h-4" />
            العودة للرئيسية
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <div className="text-sm text-natural-500">
            أو يمكنك تصفح منتجاتنا الصحية المميزة
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-natural/20 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default NotFound;
