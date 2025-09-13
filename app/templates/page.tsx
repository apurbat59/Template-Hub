"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Code,
  Eye,
  Download,
  Star,
  Grid,
  List,
  Heart,
  Gamepad2,
  ShoppingBag,
  DollarSign,
  Leaf,
  User,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState("grid")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("")
  const router = useRouter()

  const allTemplates = [
    // Healthcare Templates
    {
      id: "healthcare-landing-1",
      name: "Healthcare Landing Page",
      category: "Healthcare",
      description: "Professional medical practice landing page with appointment booking and patient portal access",
      image: "/healthcare-landing-page.jpg",
      rating: 4.9,
      downloads: 1450,
      tags: ["React", "Next.js", "TypeScript", "Tailwind", "Healthcare"],
      price: "Free",
      type: "Landing Page",
      lastUpdated: "2024-01-15",
      demoUrl: "/templates/healthcare/landing-page-1",
      previewUrl: "/templates/healthcare-landing-1/preview",
      icon: <Heart className="w-4 h-4" />,
      color: "text-blue-600",
    },
    {
      id: "healthcare-dashboard-1",
      name: "Healthcare Dashboard",
      category: "Healthcare",
      description: "Complete patient management system with appointments, medical records, and real-time monitoring",
      image: "/healthcare-dashboard.png",
      rating: 4.8,
      downloads: 1200,
      tags: ["React", "Next.js", "Dashboard", "Medical"],
      price: "Free",
      type: "Dashboard",
      lastUpdated: "2024-01-14",
      demoUrl: "/templates/healthcare/dashboard-1",
      previewUrl: "/templates/healthcare-dashboard-1/preview",
      icon: <Heart className="w-4 h-4" />,
      color: "text-blue-600",
    },
    {
      id: "healthcare-auth-1",
      name: "Healthcare Authentication",
      category: "Healthcare",
      description: "Secure medical professional and patient authentication system with HIPAA compliance",
      image: "/healthcare-authentication-portal.jpg",
      rating: 4.7,
      downloads: 980,
      tags: ["React", "Authentication", "Security", "HIPAA"],
      price: "Free",
      type: "Authentication",
      lastUpdated: "2024-01-13",
      demoUrl: "/templates/healthcare/auth-1",
      previewUrl: "/templates/healthcare-auth-1/preview",
      icon: <Heart className="w-4 h-4" />,
      color: "text-blue-600",
    },
    // Gaming Templates
    {
      id: "gaming-dashboard-1",
      name: "Gaming Analytics Dashboard",
      category: "Gaming",
      description: "Dark-themed gaming dashboard with player statistics, leaderboards, and achievement tracking",
      image: "/gaming-leaderboard-interface.jpg",
      rating: 4.9,
      downloads: 2100,
      tags: ["React", "Gaming", "Analytics", "Dark Theme"],
      price: "Free",
      type: "Dashboard",
      lastUpdated: "2024-01-12",
      demoUrl: "/templates/gaming/dashboard-1",
      previewUrl: "/templates/gaming-dashboard-1/preview",
      icon: <Gamepad2 className="w-4 h-4" />,
      color: "text-purple-600",
    },
    {
      id: "gaming-auth-1",
      name: "Gaming Authentication",
      category: "Gaming",
      description: "Futuristic gaming authentication with neon effects and animated backgrounds",
      image: "/gaming-authentication-interface.jpg",
      rating: 4.8,
      downloads: 1800,
      tags: ["React", "Gaming", "Neon", "Animation"],
      price: "Free",
      type: "Authentication",
      lastUpdated: "2024-01-11",
      demoUrl: "/templates/gaming/auth-1",
      previewUrl: "/templates/gaming-auth-1/preview",
      icon: <Gamepad2 className="w-4 h-4" />,
      color: "text-purple-600",
    },
    // E-commerce Templates
    {
      id: "ecommerce-dashboard-1",
      name: "E-commerce Dashboard",
      category: "E-commerce",
      description: "Complete online store management dashboard with orders, products, and customer analytics",
      image: "/ecommerce-store-interface.png",
      rating: 4.9,
      downloads: 2800,
      tags: ["React", "E-commerce", "Analytics", "Management"],
      price: "Free",
      type: "Dashboard",
      lastUpdated: "2024-01-16",
      demoUrl: "/templates/ecommerce/dashboard-1",
      previewUrl: "/templates/ecommerce-dashboard-1/preview",
      icon: <ShoppingBag className="w-4 h-4" />,
      color: "text-orange-600",
    },
    {
      id: "ecommerce-auth-1",
      name: "E-commerce Authentication",
      category: "E-commerce",
      description: "Conversion-optimized authentication system with special offers and social login integration",
      image: "/ecommerce-authentication-system.jpg",
      rating: 4.7,
      downloads: 1600,
      tags: ["React", "E-commerce", "Conversion", "Shopping"],
      price: "Free",
      type: "Authentication",
      lastUpdated: "2024-01-10",
      demoUrl: "/templates/ecommerce/auth-1",
      previewUrl: "/templates/ecommerce-auth-1/preview",
      icon: <ShoppingBag className="w-4 h-4" />,
      color: "text-orange-600",
    },
    // Finance Templates
    {
      id: "finance-dashboard-1",
      name: "Finance Dashboard",
      category: "Finance",
      description:
        "Professional investment dashboard with portfolio tracking, trading interface, and financial analytics",
      image: "/finance-trading-dashboard.jpg",
      rating: 4.8,
      downloads: 1900,
      tags: ["React", "Finance", "Trading", "Analytics"],
      price: "Free",
      type: "Dashboard",
      lastUpdated: "2024-01-09",
      demoUrl: "/templates/finance/dashboard-1",
      previewUrl: "/templates/finance-dashboard-1/preview",
      icon: <DollarSign className="w-4 h-4" />,
      color: "text-emerald-600",
    },
    {
      id: "finance-auth-1",
      name: "Finance Authentication",
      category: "Finance",
      description:
        "Bank-level security authentication system designed for financial applications and trading platforms",
      image: "/education-authentication-portal.jpg",
      rating: 4.9,
      downloads: 1400,
      tags: ["React", "Finance", "Security", "Banking"],
      price: "Free",
      type: "Authentication",
      lastUpdated: "2024-01-08",
      demoUrl: "/templates/finance/auth-1",
      previewUrl: "/templates/finance-auth-1/preview",
      icon: <DollarSign className="w-4 h-4" />,
      color: "text-emerald-600",
    },
    // Agriculture Templates
    {
      id: "agriculture-landing-1",
      name: "Agriculture Landing Page",
      category: "Agriculture",
      description: "Smart farming landing page showcasing IoT solutions and precision agriculture technology",
      image: "/real-estate-landing-page.jpg",
      rating: 4.8,
      downloads: 1100,
      tags: ["React", "Agriculture", "IoT", "Smart Farming"],
      price: "Free",
      type: "Landing Page",
      lastUpdated: "2024-01-07",
      demoUrl: "/templates/agriculture/landing-page-1",
      previewUrl: "/templates/agriculture-landing-1/preview",
      icon: <Leaf className="w-4 h-4" />,
      color: "text-green-600",
    },
    {
      id: "agriculture-auth-1",
      name: "Agriculture Authentication",
      category: "Agriculture",
      description: "Farm-focused authentication system with natural design theme and agricultural-specific features",
      image: "/telemedicine-platform-interface.png",
      rating: 4.6,
      downloads: 850,
      tags: ["React", "Agriculture", "Farming", "Natural"],
      price: "Free",
      type: "Authentication",
      lastUpdated: "2024-01-06",
      demoUrl: "/templates/agriculture/auth-1",
      previewUrl: "/templates/agriculture-auth-1/preview",
      icon: <Leaf className="w-4 h-4" />,
      color: "text-green-600",
    },
  ]

  const categories = [
    { name: "All", count: allTemplates.length, active: false },
    { name: "Healthcare", count: allTemplates.filter((t) => t.category === "Healthcare").length, active: false },
    { name: "Gaming", count: allTemplates.filter((t) => t.category === "Gaming").length, active: false },
    { name: "E-commerce", count: allTemplates.filter((t) => t.category === "E-commerce").length, active: false },
    { name: "Finance", count: allTemplates.filter((t) => t.category === "Finance").length, active: false },
    { name: "Agriculture", count: allTemplates.filter((t) => t.category === "Agriculture").length, active: false },
  ]

  const filteredTemplates = allTemplates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    count:
      category.name === "All" ? allTemplates.length : allTemplates.filter((t) => t.category === category.name).length,
    active: category.name === selectedCategory,
  }))

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated")
    const email = localStorage.getItem("userEmail")
    const name = localStorage.getItem("userName")

    if (authStatus === "true") {
      setIsAuthenticated(true)
      setUserEmail(email || "user@example.com")
      setUserName(name || "User")
    } else {
      router.push("/auth")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userName")
    router.push("/")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    )
  }

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
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/templates" className="text-foreground font-medium">
              Templates
            </Link>
            <Link href="/ai-generator" className="text-muted-foreground hover:text-foreground transition-colors">
              AI Generator
            </Link>
            <Link href="/showcase" className="text-muted-foreground hover:text-foreground transition-colors">
              Showcase
            </Link>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{userName}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-primary mb-2">Welcome back, {userName}! 🎉</h2>
            <p className="text-sm text-muted-foreground">
              You now have access to all 500+ premium templates. Start building something amazing!
            </p>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Template Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Browse our collection of production-ready templates across different industries
          </p>
          <div className="mt-4">
            <Link href="/showcase">
              <Button variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                View Full Showcase
              </Button>
            </Link>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search templates..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex border border-border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" className="lg:w-auto bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categoriesWithCounts.map((category) => (
                  <div
                    key={category.name}
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                      category.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant={category.active ? "secondary" : "outline"}>{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Template Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["All Types", "Landing Page", "Dashboard", "Authentication"].map((type) => (
                  <div
                    key={type}
                    className="flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors hover:bg-muted"
                  >
                    <span className="font-medium">{type}</span>
                    <Badge variant="outline">
                      {type === "All Types" ? allTemplates.length : allTemplates.filter((t) => t.type === type).length}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Templates Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredTemplates.length} of {allTemplates.length} templates
              </p>
              <select className="bg-background border border-border rounded-lg px-3 py-2 text-sm">
                <option>Sort by: Most Popular</option>
                <option>Sort by: Newest</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Price</option>
              </select>
            </div>

            <div className={viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredTemplates.map((template) => (
                <Card
                  key={template.id}
                  className={`overflow-hidden hover:shadow-lg transition-shadow ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                >
                  <div
                    className={`bg-muted relative overflow-hidden ${
                      viewMode === "list" ? "w-48 h-32" : "aspect-video"
                    }`}
                  >
                    <img
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={template.price === "Free" ? "secondary" : "default"}>{template.price}</Badge>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="bg-background/80">
                        {template.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className={`${template.color}`}>{template.icon}</div>
                            <CardTitle className="text-lg">{template.name}</CardTitle>
                          </div>
                          <Badge variant="outline">{template.category}</Badge>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{template.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="mt-2">{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {template.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{template.downloads} downloads</span>
                        <span>Updated {template.lastUpdated}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link href={template.demoUrl} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                        <Link href={template.previewUrl} className="flex-1">
                          <Button size="sm" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {filteredTemplates.length > 9 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="default" size="sm">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
