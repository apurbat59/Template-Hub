import { SimpleButton } from "@/components/ui/simple-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, BarChart3, DollarSign, ArrowRight, Check, Users, Award } from "lucide-react"

export default function FinanceLandingPage1() {
  const stats = [
    { label: "Assets Under Management", value: "$2.4B", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Active Clients", value: "50K+", icon: <Users className="w-6 h-6" /> },
    { label: "Average Returns", value: "12.8%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Years of Experience", value: "15+", icon: <Award className="w-6 h-6" /> },
  ]

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Real-time market data and sophisticated portfolio analysis tools",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "Your investments are protected with enterprise-grade security measures",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Smart Investing",
      description: "AI-powered investment recommendations tailored to your goals",
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners",
      features: ["Basic portfolio tracking", "Market news", "Educational resources", "Mobile app access"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$29/mo",
      description: "For serious investors",
      features: [
        "Advanced analytics",
        "Real-time data",
        "Portfolio optimization",
        "Priority support",
        "Tax optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For institutions",
      features: ["White-label solution", "API access", "Dedicated support", "Custom integrations", "Compliance tools"],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">WealthTech</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Solutions
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Pricing
            </a>
            <a href="#insights" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Insights
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              About
            </a>
            <SimpleButton variant="outline" size="sm" className="border-slate-300 bg-transparent">
              Sign In
            </SimpleButton>
            <SimpleButton size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </SimpleButton>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trusted by 50,000+ Investors
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Grow Your Wealth with
                <span className="text-emerald-400"> Smart Investing</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Professional-grade investment tools and insights to help you build long-term wealth. Start with as
                little as $100.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <SimpleButton size="lg" className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700">
                  Start Investing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </SimpleButton>
                <SimpleButton
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Watch Demo
                </SimpleButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 text-emerald-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="/finance-dashboard-preview.jpg"
                  alt="Investment Dashboard"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  +12.8% YTD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose WealthTech?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven investment strategies to deliver superior results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-slate-900">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flexible pricing options to match your investment journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "border-emerald-500 shadow-lg scale-105" : "border-slate-200"
                } hover:shadow-lg transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-slate-900">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{plan.price}</div>
                  <CardDescription className="text-slate-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <SimpleButton
                    className={`w-full ${
                      plan.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </SimpleButton>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-emerald-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Building Wealth?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of investors who trust WealthTech to grow their portfolios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SimpleButton size="lg" className="text-lg px-8 bg-white text-emerald-600 hover:bg-slate-100">
              Open Account
            </SimpleButton>
            <SimpleButton
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
            >
              Schedule Consultation
            </SimpleButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">WealthTech</span>
              </div>
              <p className="text-slate-400">
                Professional investment management and financial planning services for the modern investor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Investment Accounts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Retirement Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Financial Planning
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Market Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Investment Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Webinars
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
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
                    Press
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
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 WealthTech. All rights reserved. Securities offered through registered broker-dealers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
