import { SimpleButton } from "@/components/ui/simple-button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Sun, BarChart3, ArrowRight, Check, Thermometer, Cloud } from "lucide-react"

export default function AgricultureLandingPage1() {
  const features = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Smart Monitoring",
      description: "Real-time soil temperature, moisture, and nutrient level tracking",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Weather Integration",
      description: "Accurate weather forecasts and climate data for better planning",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Yield Analytics",
      description: "Data-driven insights to maximize crop yield and profitability",
    },
  ]

  const solutions = [
    {
      title: "Precision Irrigation",
      description: "Automated watering systems that optimize water usage based on soil conditions",
      image: "/precision-irrigation-system.jpg",
      benefits: ["30% water savings", "Improved crop health", "Reduced labor costs"],
    },
    {
      title: "Crop Health Monitoring",
      description: "AI-powered disease detection and pest management recommendations",
      image: "/crop-health-monitoring.jpg",
      benefits: ["Early disease detection", "Reduced pesticide use", "Higher quality yields"],
    },
    {
      title: "Farm Management Dashboard",
      description: "Comprehensive overview of your entire farming operation in one place",
      image: "/farm-management-dashboard.jpg",
      benefits: ["Real-time insights", "Automated reporting", "Mobile access"],
    },
  ]

  const stats = [
    { number: "25%", label: "Average Yield Increase" },
    { number: "30%", label: "Water Savings" },
    { number: "40%", label: "Reduced Labor Costs" },
    { number: "500+", label: "Farms Using Our Tech" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="border-b border-green-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AgriTech</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Solutions
            </a>
            <a href="#technology" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Technology
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Pricing
            </a>
            <a href="#support" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Support
            </a>
            <SimpleButton variant="outline" size="sm" className="border-green-300 bg-transparent">
              Sign In
            </SimpleButton>
            <SimpleButton size="sm" className="bg-green-600 hover:bg-green-700">
              Get Started
            </SimpleButton>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                <Leaf className="w-4 h-4 mr-2" />
                Sustainable Farming Technology
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Smarter with
                <span className="text-green-600"> Precision Agriculture</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Harness the power of IoT sensors, AI analytics, and automated systems to increase yields, reduce costs,
                and farm sustainably for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <SimpleButton size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </SimpleButton>
                <SimpleButton variant="outline" size="lg" className="text-lg px-8 border-green-300 bg-transparent">
                  Schedule Demo
                </SimpleButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-200 shadow-xl">
                <img
                  src="/smart-farming-dashboard.jpg"
                  alt="Smart Farming Dashboard"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  Live Data
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="absolute top-1/2 -right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg">
                <Sun className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Farming Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our integrated platform combines cutting-edge technology with agricultural expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-green-200 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Farm Management</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From seed to harvest, our solutions cover every aspect of modern farming
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <SimpleButton className="bg-green-600 hover:bg-green-700">Learn More</SimpleButton>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
                    <img
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/farmer-testimonial.jpg"
                alt="John Martinez"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20"
              />
              <h3 className="text-xl font-semibold">John Martinez</h3>
              <p className="text-green-200">Organic Farm Owner, California</p>
            </div>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              "AgriTech transformed our 200-acre farm. We've seen a 25% increase in yield while using 30% less water.
              The ROI was evident within the first season."
            </blockquote>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div>
                <div className="text-2xl font-bold">25%</div>
                <div className="text-green-200">Yield Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold">30%</div>
                <div className="text-green-200">Water Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold">$50K</div>
                <div className="text-green-200">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-green-200 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Farm?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of farmers who are already using AgriTech to increase yields and reduce costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SimpleButton size="lg" className="text-lg px-8 bg-green-600 hover:bg-green-700">
                Start Your Free Trial
              </SimpleButton>
              <SimpleButton variant="outline" size="lg" className="text-lg px-8 border-green-300 bg-transparent">
                Contact Sales Team
              </SimpleButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AgriTech</span>
              </div>
              <p className="text-gray-400">
                Empowering farmers with smart technology for sustainable and profitable agriculture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Precision Irrigation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Crop Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Weather Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yield Optimization
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Training
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
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgriTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
