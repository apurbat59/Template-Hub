"use client"

import { useState } from "react"
import { SimpleSimpleButton } from "@/components/ui/simple-button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Search,
  Filter,
  Eye,
  Star,
  Download,
  Layout,
  Heart,
  Gamepad2,
  ShoppingBag,
  DollarSign,
  Leaf,
} from "lucide-react"
import Link from "next/link"

export default function TemplatShowcase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const templates = [
    // Healthcare Templates
    {
      id: "healthcare-landing-1",
      name: "Healthcare Landing Page",
      category: "Healthcare",
      type: "Landing Page",
      description: "Professional medical practice landing page with appointment booking",
      image: "/healthcare-landing-page.jpg",
      rating: 4.9,
      downloads: 1450,
      tags: ["React", "Healthcare", "Appointments"],
      demoUrl: "/templates/healthcare/landing-page-1",
      previewUrl: "/templates/healthcare-landing-1/preview",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      id: "healthcare-dashboard-1",
      name: "Healthcare Dashboard",
      category: "Healthcare",
      type: "Dashboard",
      description: "Complete patient management system with real-time monitoring",
      image: "/healthcare-dashboard.png",
      rating: 4.8,
      downloads: 1200,
      tags: ["React", "Dashboard", "Medical"],
      demoUrl: "/templates/healthcare/dashboard-1",
      previewUrl: "/templates/healthcare-dashboard-1/preview",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      id: "healthcare-auth-1",
      name: "Healthcare Authentication",
      category: "Healthcare",
      type: "Authentication",
      description: "Secure medical professional and patient authentication system",
      image: "/healthcare-authentication-portal.jpg",
      rating: 4.7,
      downloads: 980,
      tags: ["React", "Auth", "Security"],
      demoUrl: "/templates/healthcare/auth-1",
      previewUrl: "/templates/healthcare-auth-1/preview",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    // Gaming Templates
    {
      id: "gaming-dashboard-1",
      name: "Gaming Analytics Dashboard",
      category: "Gaming",
      type: "Dashboard",
      description: "Dark-themed gaming dashboard with player statistics and leaderboards",
      image: "/gaming-leaderboard-interface.jpg",
      rating: 4.9,
      downloads: 2100,
      tags: ["React", "Gaming", "Analytics"],
      demoUrl: "/templates/gaming/dashboard-1",
      previewUrl: "/templates/gaming-dashboard-1/preview",
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      id: "gaming-auth-1",
      name: "Gaming Authentication",
      category: "Gaming",
      type: "Authentication",
      description: "Futuristic gaming authentication with neon effects",
      image: "/gaming-authentication-interface.jpg",
      rating: 4.8,
      downloads: 1800,
      tags: ["React", "Gaming", "Neon"],
      demoUrl: "/templates/gaming/auth-1",
      previewUrl: "/templates/gaming-auth-1/preview",
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    // E-commerce Templates
    {
      id: "ecommerce-dashboard-1",
      name: "E-commerce Dashboard",
      category: "E-commerce",
      type: "Dashboard",
      description: "Complete online store management with orders and analytics",
      image: "/ecommerce-store-interface.png",
      rating: 4.9,
      downloads: 2800,
      tags: ["React", "E-commerce", "Management"],
      demoUrl: "/templates/ecommerce/dashboard-1",
      previewUrl: "/templates/ecommerce-dashboard-1/preview",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "bg-orange-500",
    },
    {
      id: "ecommerce-auth-1",
      name: "E-commerce Authentication",
      category: "E-commerce",
      type: "Authentication",
      description: "Conversion-optimized authentication with special offers",
      image: "/ecommerce-authentication-system.jpg",
      rating: 4.7,
      downloads: 1600,
      tags: ["React", "Shopping", "Conversion"],
      demoUrl: "/templates/ecommerce/auth-1",
      previewUrl: "/templates/ecommerce-auth-1/preview",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "bg-orange-500",
    },
    // Finance Templates
    {
      id: "finance-dashboard-1",
      name: "Finance Dashboard",
      category: "Finance",
      type: "Dashboard",
      description: "Professional investment dashboard with portfolio tracking",
      image: "/finance-trading-dashboard.jpg",
      rating: 4.8,
      downloads: 1900,
      tags: ["React", "Finance", "Trading"],
      demoUrl: "/templates/finance/dashboard-1",
      previewUrl: "/templates/finance-dashboard-1/preview",
      icon: <DollarSign className="w-5 h-5" />,
      color: "bg-emerald-500",
    },
    {
      id: "finance-auth-1",
      name: "Finance Authentication",
      category: "Finance",
      type: "Authentication",
      description: "Bank-level security authentication for financial apps",
      image: "/education-authentication-portal.jpg",
      rating: 4.9,
      downloads: 1400,
      tags: ["React", "Finance", "Security"],
      demoUrl: "/templates/finance/auth-1",
      previewUrl: "/templates/finance-auth-1/preview",
      icon: <DollarSign className="w-5 h-5" />,
      color: "bg-emerald-500",
    },
    // Agriculture Templates
    {
      id: "agriculture-landing-1",
      name: "Agriculture Landing Page",
      category: "Agriculture",
      type: "Landing Page",
      description: "Smart farming landing page with IoT solutions showcase",
      image: "/real-estate-landing-page.jpg",
      rating: 4.8,
      downloads: 1100,
      tags: ["React", "Agriculture", "IoT"],
      demoUrl: "/templates/agriculture/landing-page-1",
      previewUrl: "/templates/agriculture-landing-1/preview",
      icon: <Leaf className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      id: "agriculture-auth-1",
      name: "Agriculture Authentication",
      category: "Agriculture",
      type: "Authentication",
      description: "Farm-focused authentication with natural design theme",
      image: "/telemedicine-platform-interface.png",
      rating: 4.6,
      downloads: 850,
      tags: ["React", "Agriculture", "Natural"],
      demoUrl: "/templates/agriculture/auth-1",
      previewUrl: "/templates/agriculture-auth-1/preview",
      icon: <Leaf className="w-5 h-5" />,
      color: "bg-green-500",
    },
  ]

  const categories = [
    { id: "all", name: "All Templates", count: templates.length },
    { id: "Healthcare", name: "Healthcare", count: templates.filter((t) => t.category === "Healthcare").length },
    { id: "Gaming", name: "Gaming", count: templates.filter((t) => t.category === "Gaming").length },
    { id: "E-commerce", name: "E-commerce", count: templates.filter((t) => t.category === "E-commerce").length },
    { id: "Finance", name: "Finance", count: templates.filter((t) => t.category === "Finance").length },
    { id: "Agriculture", name: "Agriculture", count: templates.filter((t) => t.category === "Agriculture").length },
  ]

  const templateTypes = [
    { id: "all", name: "All Types" },
    { id: "Landing Page", name: "Landing Pages" },
    { id: "Dashboard", name: "Dashboards" },
    { id: "Authentication", name: "Authentication" },
  ]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TemplateHub</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </Link>
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <SimpleButton variant="outline" size="sm">
              Sign In
            </SimpleButton>
            <SimpleButton size="sm">Get Started</SimpleButton>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Template Showcase</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of industry-specific templates with working demos
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <SimpleButton variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </SimpleButton>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.name} ({category.count})
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                  <img
                    src={template.image || "/placeholder.svg?height=200&width=350"}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <Link href={template.demoUrl}>
                        <SimpleButton size="sm" className="bg-white text-black hover:bg-gray-100">
                          <Eye className="w-4 h-4 mr-2" />
                          Demo
                        </SimpleButton>
                      </Link>
                      <Link href={template.previewUrl}>
                        <SimpleButton size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                          <Layout className="w-4 h-4 mr-2" />
                          Details
                        </SimpleButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 ${template.color} rounded-lg flex items-center justify-center text-white`}>
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{template.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {template.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {template.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{template.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {template.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No templates found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
