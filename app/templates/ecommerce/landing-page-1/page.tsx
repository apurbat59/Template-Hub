import { SimpleButton } from "@/components/ui/simple-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Truck, Shield, Star, ArrowRight, Check, Heart } from "lucide-react"

export default function EcommerceLandingPage1() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1247,
      image: "/premium-headphones.jpg",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199,
      originalPrice: 249,
      rating: 4.9,
      reviews: 892,
      image: "/smart-fitness-watch.jpg",
      badge: "New",
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      price: 449,
      originalPrice: 599,
      rating: 4.7,
      reviews: 634,
      image: "/ergonomic-office-chair.jpg",
      badge: "Sale",
    },
  ]

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "Free delivery on orders over $50",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payment",
      description: "Your payment information is safe",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ShopEase</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </a>
            <a href="#categories" className="text-gray-600 hover:text-gray-900 transition-colors">
              Categories
            </a>
            <a href="#deals" className="text-gray-600 hover:text-gray-900 transition-colors">
              Deals
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <SimpleButton variant="outline" size="sm">
              Sign In
            </SimpleButton>
            <SimpleButton size="sm" className="bg-blue-600 hover:bg-blue-700">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Cart (0)
            </SimpleButton>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Limited Time Offer</Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Shop Smart,
                <span className="text-blue-600"> Save More</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover amazing products at unbeatable prices. Quality guaranteed, satisfaction promised.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SimpleButton size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </SimpleButton>
                <SimpleButton variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Browse Categories
                </SimpleButton>
              </div>
              <div className="flex items-center space-x-8 mt-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="/hero-product-showcase.jpg"
                  alt="Featured Products"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                  50% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Handpicked products that our customers love most</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={product.badge === "Sale" ? "destructive" : "secondary"}
                      className={
                        product.badge === "New"
                          ? "bg-green-100 text-green-800"
                          : product.badge === "Best Seller"
                            ? "bg-orange-100 text-orange-800"
                            : ""
                      }
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  <SimpleButton
                    size="sm"
                    variant="outline"
                    className="absolute top-4 right-4 w-10 h-10 p-0 bg-white/80 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </SimpleButton>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    <Badge variant="destructive" className="text-xs">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  <SimpleButton className="w-full bg-blue-600 hover:bg-blue-700">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </SimpleButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">Get the latest deals and product updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <SimpleButton className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</SimpleButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ShopEase</span>
              </div>
              <p className="text-gray-400">
                Your trusted online shopping destination for quality products at great prices.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
