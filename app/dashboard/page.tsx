"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Filter,
  Download,
  Eye,
  Heart,
  Star,
  Code,
  BarChart3,
  Globe,
  Shield,
  Settings,
  LogOut,
  User,
  Bell,
  TrendingUp,
  Calendar,
  Clock,
  ArrowRight,
  Play,
  Copy,
  ExternalLink,
  Grid3X3,
  List,
  SortAsc,
  SortDesc,
  Wand2,
  Sparkles,
  Zap,
  Layers,
  Palette,
  MousePointer,
  Activity,
  Target,
  Award,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { downloadTemplate, copyToClipboard, mockTemplates } from "@/lib/download-utils"
import { CodePreview } from "@/components/ui/code-preview"
import AIGenerator from "@/components/ai-generator"

export default function DashboardPage() {
  const [user, setUser] = useState({ name: "", email: "", type: "" })
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState<"name" | "date" | "popularity">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [activeTab, setActiveTab] = useState("dashboards")
  const [downloadStatus, setDownloadStatus] = useState<Record<string, string>>({})
  const [userGeneratedTemplates, setUserGeneratedTemplates] = useState<any[]>([])
  const [showAIGenerator, setShowAIGenerator] = useState(false)

  // Get user data from cookies
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(';').shift()
      return ""
    }

    setUser({
      name: getCookie("userName") || "User",
      email: getCookie("userEmail") || "user@example.com",
      type: getCookie("userType") || "user"
    })
  }, [])

  // Load user-generated templates from localStorage
  useEffect(() => {
    const savedTemplates = localStorage.getItem('userGeneratedTemplates')
    if (savedTemplates) {
      setUserGeneratedTemplates(JSON.parse(savedTemplates))
    }
  }, [])

  // Handle AI-generated templates
  const handleTemplateGenerated = (template: any) => {
    const newTemplates = [...userGeneratedTemplates, template]
    setUserGeneratedTemplates(newTemplates)
    localStorage.setItem('userGeneratedTemplates', JSON.stringify(newTemplates))
    setShowAIGenerator(false)
  }

  // Listen for download events from preview modal
  useEffect(() => {
    const handleDownloadFromPreview = (event: CustomEvent) => {
      const template = event.detail
      handleDownload(template)
    }

    window.addEventListener('downloadTemplate', handleDownloadFromPreview as EventListener)
    
    return () => {
      window.removeEventListener('downloadTemplate', handleDownloadFromPreview as EventListener)
    }
  }, [])

  const handleLogout = () => {
    // Clear cookies
    document.cookie = "isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "userType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    
    // Redirect to home
    window.location.href = "/"
  }

  const templateCategories = [
    {
      name: "Healthcare",
      icon: "🏥",
      slug: "healthcare",
      description: "Medical dashboards, patient management",
      preview: "/placeholder-dashboard.jpg",
      color: "from-blue-500 to-cyan-500",
      templates: [
        { name: "Medical Dashboard", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 1247, rating: 4.9 },
        { name: "Patient Management", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 892, rating: 4.8 },
        { name: "Healthcare Landing", type: "landing", preview: "/placeholder-dashboard.jpg", downloads: 634, rating: 4.7 },
        { name: "Auth System", type: "auth", preview: "/placeholder-dashboard.jpg", downloads: 445, rating: 4.6 }
      ]
    },
    {
      name: "E-commerce",
      icon: "🛒",
      slug: "ecommerce",
      description: "Online stores, product catalogs",
      preview: "/placeholder-dashboard.jpg",
      color: "from-green-500 to-emerald-500",
      templates: [
        { name: "Store Dashboard", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 2156, rating: 4.9 },
        { name: "Product Catalog", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 1834, rating: 4.8 },
        { name: "E-commerce Landing", type: "landing", preview: "/placeholder-dashboard.jpg", downloads: 1456, rating: 4.7 },
        { name: "Auth System", type: "auth", preview: "/placeholder-dashboard.jpg", downloads: 1234, rating: 4.6 }
      ]
    },
    {
      name: "Gaming",
      icon: "🎮",
      slug: "gaming",
      description: "Leaderboards, user profiles",
      preview: "/placeholder-dashboard.jpg",
      color: "from-purple-500 to-pink-500",
      templates: [
        { name: "Gaming Dashboard", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 987, rating: 4.8 },
        { name: "Leaderboard", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 756, rating: 4.7 },
        { name: "Gaming Landing", type: "landing", preview: "/placeholder-dashboard.jpg", downloads: 634, rating: 4.6 },
        { name: "Auth System", type: "auth", preview: "/placeholder-dashboard.jpg", downloads: 523, rating: 4.5 }
      ]
    },
    {
      name: "Finance",
      icon: "💰",
      slug: "finance",
      description: "Trading dashboards, portfolio tracking",
      preview: "/placeholder-dashboard.jpg",
      color: "from-yellow-500 to-orange-500",
      templates: [
        { name: "Trading Dashboard", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 1876, rating: 4.9 },
        { name: "Portfolio Tracker", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 1456, rating: 4.8 },
        { name: "Finance Landing", type: "landing", preview: "/placeholder-dashboard.jpg", downloads: 1123, rating: 4.7 },
        { name: "Auth System", type: "auth", preview: "/placeholder-dashboard.jpg", downloads: 987, rating: 4.6 }
      ]
    },
    {
      name: "Education",
      icon: "📚",
      slug: "education",
      description: "Learning management, student portals",
      preview: "/placeholder-dashboard.jpg",
      color: "from-indigo-500 to-blue-500",
      templates: [
        { name: "LMS Dashboard", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 1234, rating: 4.8 },
        { name: "Student Portal", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 987, rating: 4.7 },
        { name: "Education Landing", type: "landing", preview: "/placeholder-dashboard.jpg", downloads: 756, rating: 4.6 },
        { name: "Auth System", type: "auth", preview: "/placeholder-dashboard.jpg", downloads: 634, rating: 4.5 }
      ]
    },
    {
      name: "Agriculture",
      icon: "🌾",
      slug: "agriculture",
      description: "IoT dashboards, crop monitoring",
      preview: "/placeholder-dashboard.jpg",
      color: "from-green-600 to-lime-500",
      templates: [
        { name: "Farm Dashboard", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 756, rating: 4.7 },
        { name: "Crop Monitoring", type: "dashboard", preview: "/placeholder-dashboard.jpg", downloads: 634, rating: 4.6 },
        { name: "Agriculture Landing", type: "landing", preview: "/placeholder-dashboard.jpg", downloads: 523, rating: 4.5 },
        { name: "Auth System", type: "auth", preview: "/placeholder-dashboard.jpg", downloads: 445, rating: 4.4 }
      ]
    }
  ]

  const allTemplates = templateCategories.flatMap(category => 
    category.templates.map(template => ({
      ...template,
      category: category.name,
      categorySlug: category.slug,
      categoryIcon: category.icon,
      categoryColor: category.color,
      isAIGenerated: false
    }))
  )

  // Combine regular templates with user-generated templates
  const combinedTemplates = [...allTemplates, ...userGeneratedTemplates]

  const filteredTemplates = combinedTemplates.filter(template => 
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (template.industry && template.industry.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    let comparison = 0
    switch (sortBy) {
      case "name":
        comparison = a.name.localeCompare(b.name)
        break
      case "date":
        comparison = b.downloads - a.downloads // Using downloads as proxy for date
        break
      case "popularity":
        comparison = b.downloads - a.downloads
        break
    }
    return sortOrder === "asc" ? comparison : -comparison
  })

  const getTemplateTypeIcon = (type: string) => {
    switch (type) {
      case "dashboard": return <BarChart3 className="w-4 h-4" />
      case "landing": return <Globe className="w-4 h-4" />
      case "auth": return <Shield className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  const getTemplateTypeColor = (type: string) => {
    switch (type) {
      case "dashboard": return "bg-blue-100 text-blue-800"
      case "landing": return "bg-green-100 text-green-800"
      case "auth": return "bg-purple-100 text-purple-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const handleDownload = async (template: any) => {
    const templateKey = `${template.categorySlug}-${template.type}`
    setDownloadStatus(prev => ({ ...prev, [templateKey]: "downloading" }))
    
    try {
      // Create template object for download
      const templateForDownload = {
        name: template.name,
        type: template.type,
        industry: template.category || 'general',
        description: template.description || `A ${template.type} template for ${template.category}`,
        preview: template.preview || '/placeholder-dashboard.jpg'
      }
      
      await downloadTemplate(templateForDownload)
      setDownloadStatus(prev => ({ ...prev, [templateKey]: "downloaded" }))
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus(prev => ({ ...prev, [templateKey]: "" }))
      }, 3000)
    } catch (error) {
      console.error('Download failed:', error)
      setDownloadStatus(prev => ({ ...prev, [templateKey]: "error" }))
    }
  }

  const handleCopyCode = async (template: any) => {
    const templateKey = `${template.categorySlug}-${template.type}`
    
    try {
      // Generate a simple code snippet for copying
      const codeSnippet = `// ${template.name} Component
import React from 'react'

export default function ${template.name.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold p-8">${template.name}</h1>
      <p className="px-8">This is a ${template.type} template for ${template.category}.</p>
    </div>
  )
}`
      
      await copyToClipboard(codeSnippet)
      setDownloadStatus(prev => ({ ...prev, [templateKey]: "copied" }))
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus(prev => ({ ...prev, [templateKey]: "" }))
      }, 3000)
    } catch (error) {
      console.error('Copy failed:', error)
      setDownloadStatus(prev => ({ ...prev, [templateKey]: "error" }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  TemplateHub
                </span>
                <p className="text-xs text-slate-500 -mt-1">AI-Powered Templates</p>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-slate-100/50 rounded-lg px-3 py-1">
              <Activity className="w-4 h-4 text-green-500" />
              <span className="text-sm text-slate-600">Live</span>
            </div>
            
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <Input
                type="text"
                placeholder="Search templates..."
                className="pl-10 w-64 bg-white/50 border-slate-200 focus:bg-white focus:border-blue-300 transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="outline" size="sm" className="hover:bg-slate-100/50 transition-all duration-200">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            
            <div className="relative">
              <Bell className="w-6 h-6 text-slate-600 cursor-pointer hover:text-blue-600 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex items-center space-x-3 bg-slate-50/50 rounded-lg px-3 py-2 hover:bg-slate-100/50 transition-all duration-200 cursor-pointer">
              <Avatar className="ring-2 ring-blue-200">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-slate-900">{user.name}</p>
                <p className="text-xs text-slate-500">{user.email}</p>
              </div>
            </div>
            
            <Button variant="outline" size="sm" onClick={handleLogout} className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2">
                Welcome back, {user.name}! 👋
              </h1>
              <p className="text-slate-600 text-lg">
                {user.type === 'student' ? 'Student' : 'User'} • {user.email}
              </p>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">{combinedTemplates.length}</p>
                <p className="text-sm text-slate-500">Total Templates</p>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">{userGeneratedTemplates.length}</p>
                <p className="text-sm text-slate-500">AI Generated</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Total Templates</p>
                    <p className="text-2xl font-bold text-blue-900">{combinedTemplates.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-blue-600 mt-1">Growing collection</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-600">AI Generated</p>
                    <p className="text-2xl font-bold text-purple-900">{userGeneratedTemplates.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={userGeneratedTemplates.length * 10} className="h-2" />
                  <p className="text-xs text-purple-600 mt-1">AI creativity</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-600">Categories</p>
                    <p className="text-2xl font-bold text-green-900">{templateCategories.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">Diverse options</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-600">Downloads</p>
                    <p className="text-2xl font-bold text-orange-900">
                      {combinedTemplates.reduce((sum, template) => sum + template.downloads, 0)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-orange-600 mt-1">Popular choice</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between mb-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-slate-100/50 p-1 rounded-xl">
              <TabsTrigger 
                value="dashboards" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboards</span>
              </TabsTrigger>
              <TabsTrigger 
                value="landing" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">Landing Pages</span>
              </TabsTrigger>
              <TabsTrigger 
                value="auth" 
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Auth Systems</span>
              </TabsTrigger>
              <TabsTrigger 
                value="ai-generator" 
                className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-200"
              >
                <Wand2 className="w-4 h-4" />
                <span className="hidden sm:inline">AI Generator</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              >
                {sortOrder === "asc" ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          <TabsContent value="dashboards" className="space-y-6">
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedTemplates.filter(template => template.type === "dashboard").map((template, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <Image
                      src={template.preview}
                      alt={`${template.name} Preview`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 hover:text-red-600 backdrop-blur-sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 backdrop-blur-sm">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <Badge className={`${getTemplateTypeColor(template.type)} backdrop-blur-sm shadow-lg`}>
                        {getTemplateTypeIcon(template.type)}
                        <span className="ml-1 capitalize">{template.type}</span>
                      </Badge>
                      {template.isAIGenerated && (
                        <Badge className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white border-0 backdrop-blur-sm shadow-lg">
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI Generated
                        </Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                  </div>
                  <CardContent className="p-6 bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {template.name}
                        </h3>
                        <p className="text-sm text-slate-600 flex items-center gap-2">
                          <span className="text-lg">{template.categoryIcon}</span>
                          <span className="font-medium">{template.category}</span>
                          {template.industry && (
                            <>
                              <span className="mx-1 text-slate-400">•</span>
                              <span className="text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full text-xs">
                                {template.industry}
                              </span>
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-700">{template.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{template.downloads.toLocaleString()} downloads</span>
                      <span>Updated 2 days ago</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href={`/templates/${template.categorySlug}/dashboard-1`} className="flex-1">
                        <Button size="sm" className="w-full">
                          <Eye className="w-4 h-4 mr-1" />
                          View Demo
                        </Button>
                      </Link>
                      <CodePreview template={template}>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </CodePreview>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(template)}
                        disabled={downloadStatus[`${template.categorySlug}-${template.type}`] === "downloading"}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCopyCode(template)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="landing" className="space-y-6">
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedTemplates.filter(template => template.type === "landing").map((template, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={template.preview}
                      alt={`${template.name} Preview`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <Badge className={getTemplateTypeColor(template.type)}>
                        {getTemplateTypeIcon(template.type)}
                        <span className="ml-1 capitalize">{template.type}</span>
                      </Badge>
                      {template.isAIGenerated && (
                        <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200">
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI Generated
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <span className="text-lg">{template.categoryIcon}</span>
                          {template.category}
                          {template.industry && (
                            <>
                              <span className="mx-1">•</span>
                              <span className="text-blue-600 font-medium">{template.industry}</span>
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{template.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{template.downloads.toLocaleString()} downloads</span>
                      <span>Updated 2 days ago</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href={`/templates/${template.categorySlug}/landing-page-1`} className="flex-1">
                        <Button size="sm" className="w-full">
                          <Eye className="w-4 h-4 mr-1" />
                          View Demo
                        </Button>
                      </Link>
                      <CodePreview template={template}>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </CodePreview>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(template)}
                        disabled={downloadStatus[`${template.categorySlug}-${template.type}`] === "downloading"}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCopyCode(template)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="auth" className="space-y-6">
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedTemplates.filter(template => template.type === "auth").map((template, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <p className="text-lg font-medium text-gray-600">{template.name}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <Badge className={getTemplateTypeColor(template.type)}>
                        {getTemplateTypeIcon(template.type)}
                        <span className="ml-1 capitalize">{template.type}</span>
                      </Badge>
                      {template.isAIGenerated && (
                        <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200">
                          <Sparkles className="w-3 h-3 mr-1" />
                          AI Generated
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <span className="text-lg">{template.categoryIcon}</span>
                          {template.category}
                          {template.industry && (
                            <>
                              <span className="mx-1">•</span>
                              <span className="text-blue-600 font-medium">{template.industry}</span>
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{template.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{template.downloads.toLocaleString()} downloads</span>
                      <span>Updated 2 days ago</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href={`/templates/${template.categorySlug}/auth-1`} className="flex-1">
                        <Button size="sm" className="w-full">
                          <Eye className="w-4 h-4 mr-1" />
                          View Demo
                        </Button>
                      </Link>
                      <CodePreview template={template}>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </CodePreview>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(template)}
                        disabled={downloadStatus[`${template.categorySlug}-${template.type}`] === "downloading"}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCopyCode(template)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai-generator" className="space-y-6">
            <AIGenerator onTemplateGenerated={handleTemplateGenerated} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
