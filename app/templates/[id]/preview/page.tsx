"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Download,
  Copy,
  Heart,
  Star,
  Eye,
  Code,
  Smartphone,
  Monitor,
  Laptop,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Globe,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function TemplatePreviewPage() {
  const params = useParams()
  const [template, setTemplate] = useState<any>(null)
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [activeTab, setActiveTab] = useState("preview")

  useEffect(() => {
    // Mock template data - in a real app, this would come from an API
    const mockTemplate = {
      id: params.id,
    name: "Healthcare Dashboard",
    category: "Healthcare",
      type: "dashboard",
      description: "A comprehensive medical dashboard for patient management and monitoring",
    rating: 4.9,
      downloads: 1247,
      lastUpdated: "2 days ago",
      features: ["Real-time Data", "Patient Management", "Appointment Scheduling", "Dark Mode", "Mobile Responsive"],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      preview: "/healthcare-dashboard.png",
      code: `// Healthcare Dashboard Component
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function HealthcareDashboard() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white border-b border-blue-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">MedCare Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">Filter</Button>
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </header>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          {/* More cards... */}
        </div>
      </div>
    </div>
  )
}`,
      author: "TemplateHub Team",
      license: "MIT",
      price: "Free"
    }
    
    setTemplate(mockTemplate)
  }, [params.id])

  if (!template) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading template...</p>
        </div>
      </div>
    )
  }

  const getViewModeIcon = () => {
    switch (viewMode) {
      case "desktop": return <Monitor className="w-4 h-4" />
      case "tablet": return <Laptop className="w-4 h-4" />
      case "mobile": return <Smartphone className="w-4 h-4" />
    }
  }

  const getViewModeWidth = () => {
    switch (viewMode) {
      case "desktop": return "w-full"
      case "tablet": return "w-3/4 max-w-4xl"
      case "mobile": return "w-80"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">{template.name}</h1>
              <p className="text-sm text-muted-foreground">{template.category} • {template.type}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 border rounded-lg p-1">
              <Button
                variant={viewMode === "desktop" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("desktop")}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "tablet" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("tablet")}
              >
                <Laptop className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "mobile" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Save
            </Button>
            
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Template Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{template.name}</CardTitle>
                    <CardDescription className="mt-2">{template.description}</CardDescription>
                    </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {template.rating}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Downloads</span>
                  <span className="font-medium">{template.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium">{template.lastUpdated}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Author</span>
                  <span className="font-medium">{template.author}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">License</span>
                  <span className="font-medium">{template.license}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-medium text-green-600">{template.price}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {template.features.map((feature: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {template.techStack.map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button className="w-full" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Template
              </Button>
              <Button variant="outline" className="w-full">
                <Copy className="w-4 h-4 mr-2" />
                Copy Code
              </Button>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="preview" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Code
                </TabsTrigger>
                <TabsTrigger value="info" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-6">
                <Card>
                  <CardContent className="p-0">
                    <div className="flex justify-center bg-gray-100 p-4">
                      <div className={`${getViewModeWidth()} bg-white rounded-lg shadow-lg overflow-hidden`}>
                        <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-600 ml-4">{template.name}</span>
                        </div>
                        <div className="p-6">
                          <div className="text-center py-12">
                            <div className="text-6xl mb-4">
                              {template.type === "dashboard" && <BarChart3 className="w-16 h-16 mx-auto text-blue-500" />}
                              {template.type === "landing" && <Globe className="w-16 h-16 mx-auto text-green-500" />}
                              {template.type === "auth" && <Shield className="w-16 h-16 mx-auto text-purple-500" />}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
                            <p className="text-muted-foreground mb-4">{template.description}</p>
                            <div className="flex justify-center gap-2">
                              <Badge variant="outline">{template.category}</Badge>
                              <Badge variant="outline">{template.type}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="code" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Source Code</CardTitle>
                      <Button size="sm" variant="outline">
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{template.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="info" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Template Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-muted-foreground">{template.description}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Features Included</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {template.features.map((feature: string, index: number) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Requirements</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Node.js 18+</li>
                        <li>React 18+</li>
                        <li>TypeScript 5+</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>
              </CardContent>
            </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}