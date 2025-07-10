
import { Product } from '@/store/cartStore'

export const products: Product[] = [
  // منتجات الكيتو
  {
    id: 'keto-1',
    name: 'زيت جوز الهند العضوي',
    price: 45,
    originalPrice: 55,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
    description: 'زيت جوز الهند العضوي الخام، مثالي للطبخ والنظام الغذائي الكيتوني',
    category: 'keto'
  },
  {
    id: 'keto-2',
    name: 'زبدة اللوز الطبيعية',
    price: 35,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop',
    description: 'زبدة اللوز الطبيعية 100% بدون إضافات، غنية بالدهون الصحية',
    category: 'keto'
  },
  {
    id: 'keto-3',
    name: 'بذور الشيا العضوية',
    price: 28,
    image: 'https://images.unsplash.com/photo-1587736700124-0b24e8e7f04b?w=400&h=400&fit=crop',
    description: 'بذور الشيا العضوية الغنية بالأوميجا 3 والألياف',
    category: 'keto'
  },
  {
    id: 'keto-4',
    name: 'أفوكادو أويل',
    price: 50,
    originalPrice: 60,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1583286862501-c5b29e0862f9?w=400&h=400&fit=crop',
    description: 'زيت الأفوكادو البكر الممتاز، مقاوم للحرارة العالية',
    category: 'keto'
  },

  // منتجات خالية من الجلوتين
  {
    id: 'gluten-1',
    name: 'دقيق اللوز',
    price: 40,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    description: 'دقيق اللوز الطبيعي، بديل مثالي للدقيق العادي في الخبز',
    category: 'gluten-free'
  },
  {
    id: 'gluten-2',
    name: 'كراكرز الأرز البني',
    price: 22,
    image: 'https://images.unsplash.com/photo-1586049811797-79df88529b40?w=400&h=400&fit=crop',
    description: 'كراكرز الأرز البني المقرمشة، خالية من الجلوتين',
    category: 'gluten-free'
  },
  {
    id: 'gluten-3',
    name: 'معكرونة الكينوا',
    price: 32,
    originalPrice: 38,
    discount: 16,
    image: 'https://images.unsplash.com/photo-1551892589-865f69869476?w=400&h=400&fit=crop',
    description: 'معكرونة الكينوا الغنية بالبروتين، خالية من الجلوتين',
    category: 'gluten-free'
  },
  {
    id: 'gluten-4',
    name: 'خبز بذور الكتان',
    price: 25,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    description: 'خبز بذور الكتان الطازج، خالي من الجلوتين وغني بالألياف',
    category: 'gluten-free'
  },

  // منتجات عضوية
  {
    id: 'organic-1',
    name: 'عسل المانوكا النيوزيلندي',
    price: 120,
    originalPrice: 140,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop',
    description: 'عسل المانوكا النيوزيلندي الأصلي، مضاد طبيعي للبكتيريا',
    category: 'organic'
  },
  {
    id: 'organic-2',
    name: 'شاي الماتشا العضوي',
    price: 85,
    image: 'https://images.unsplash.com/photo-1564890273409-9b3d3e10ad4e?w=400&h=400&fit=crop',
    description: 'شاي الماتشا العضوي الياباني، غني بمضادات الأكسدة',
    category: 'organic'
  },
  {
    id: 'organic-3',
    name: 'توت الغوجي المجفف',
    price: 55,
    image: 'https://images.unsplash.com/photo-1544465544-3bfa6de2ee46?w=400&h=400&fit=crop',
    description: 'توت الغوجي المجفف العضوي، سوبر فود غني بالفيتامينات',
    category: 'organic'
  },
  {
    id: 'organic-4',
    name: 'كاكاو خام عضوي',
    price: 65,
    originalPrice: 75,
    discount: 13,
    image: 'https://images.unsplash.com/photo-1541599468348-e96984315905?w=400&h=400&fit=crop',
    description: 'كاكاو خام عضوي 100%، غير محمص ومليء بالمعادن',
    category: 'organic'
  }
]

export const getCategoryProducts = (category: string) => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.discount && product.discount > 15)
}
