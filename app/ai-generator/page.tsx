"use client"

import { useState, useMemo, useEffect } from "react"
import { generatePreviewHTML } from "./preview-utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sparkles,
  Wand2,
  Code,
  Globe,
  Shield,
  Download,
  Copy,
  Eye,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  BarChart3,
  Palette,
  Settings,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function AIGeneratorPage() {
  const [prompt, setPrompt] = useState("")
  const [templateType, setTemplateType] = useState("dashboard")
  const [industry, setIndustry] = useState("")
  const [features, setFeatures] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [showLivePreview, setShowLivePreview] = useState(false)
  const [copyStatus, setCopyStatus] = useState("")
  const [previewError, setPreviewError] = useState("")

  const templateTypes = [
    { value: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-4 h-4" />, description: "Data visualization and analytics" },
    { value: "landing", label: "Landing Page", icon: <Globe className="w-4 h-4" />, description: "Marketing and conversion focused" },
    { value: "auth", label: "Auth System", icon: <Shield className="w-4 h-4" />, description: "Login and registration system" },
  ]

  const industries = [
    "Healthcare", "E-commerce", "Finance", "Education", "Gaming", "Agriculture", 
    "Real Estate", "HR & Recruiting", "Technology", "Entertainment", "Travel", "Food & Beverage"
  ]

  const commonFeatures = [
    "Responsive Design", "Dark Mode", "Real-time Data", "User Authentication", 
    "Search Functionality", "Notifications", "Charts & Graphs", "Mobile First",
    "Accessibility", "Multi-language", "Payment Integration", "Social Login"
  ]

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const generateTemplate = async () => {
    if (!prompt.trim()) {
      setError("Please describe what you want to build")
      return
    }

    setIsGenerating(true)
    setError("")
    setSuccess("")
    setGeneratedCode("")

    try {
      const response = await fetch('/api/generate-template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          templateType,
          industry,
          features,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate template')
      }

      const data = await response.json()
      setGeneratedCode(data.code)
      setSuccess("Template generated successfully!")
    } catch (err) {
      setError("Failed to generate template. Please try again.")
      console.error('Generation error:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode)
      setCopyStatus("copied")
      setSuccess("Code copied to clipboard!")
      setTimeout(() => setCopyStatus(""), 2000)
    } catch (err) {
      setError("Failed to copy code")
    }
  }

  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${templateType}-${industry || 'template'}.tsx`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const previewHTML = useMemo(() => {
    if (!generatedCode) return null
    
    try {
      // Generate a simple static preview based on template type
      return generatePreviewHTML(templateType, industry)
    } catch (err) {
      console.error('Preview error:', err)
      return null
    }
  }, [generatedCode, templateType, industry])

  // Handle preview errors separately
  useEffect(() => {
    if (generatedCode && !previewHTML) {
      setPreviewError("Failed to create preview. The generated code may have syntax errors.")
    } else {
      setPreviewError("")
    }
  }, [generatedCode, previewHTML])

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
          <nav className="flex items-center space-x-6">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">AI Template Generator</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Describe your vision and let our AI create a complete, production-ready template for you. 
            From dashboards to landing pages, we've got you covered.
          </p>
          <Badge variant="secondary" className="text-sm px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Powered by Gemini AI
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="w-5 h-5" />
                Configure Your Template
              </CardTitle>
              <CardDescription>
                Tell us what you want to build and we'll generate it for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Template Type */}
              <div className="space-y-3">
                <Label>Template Type</Label>
                <div className="grid grid-cols-3 gap-2">
                  {templateTypes.map((type) => (
                    <Button
                      key={type.value}
                      variant={templateType === type.value ? "default" : "outline"}
                      className="h-auto p-4 flex flex-col items-center gap-2"
                      onClick={() => setTemplateType(type.value)}
                    >
                      {type.icon}
                      <span className="font-medium">{type.label}</span>
                      <span className="text-xs text-muted-foreground">{type.description}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-3">
                <Label>Industry (Optional)</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => (
                      <SelectItem key={ind} value={ind.toLowerCase()}>
                        {ind}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <Label>Features (Optional)</Label>
                <div className="flex flex-wrap gap-2">
                  {commonFeatures.map((feature) => (
                    <Badge
                      key={feature}
                      variant={features.includes(feature) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleFeature(feature)}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Prompt */}
              <div className="space-y-3">
                <Label htmlFor="prompt">Describe Your Template</Label>
                <Textarea
                  id="prompt"
                  placeholder="e.g., Create a modern healthcare dashboard with patient management, appointment scheduling, and real-time vitals monitoring. Include dark mode and mobile responsiveness."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              {/* Generate Button */}
              <Button 
                onClick={generateTemplate} 
                disabled={isGenerating || !prompt.trim()}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate Template
                  </>
                )}
              </Button>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && !generatedCode && (
                <Alert className="border-green-200 bg-green-50 text-green-800">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Generated Code Panel */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Generated Code
              </CardTitle>
              <CardDescription>
                Your AI-generated template code will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generatedCode ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {templateType === "dashboard" && <BarChart3 className="w-3 h-3 mr-1" />}
                      {templateType === "landing" && <Globe className="w-3 h-3 mr-1" />}
                      {templateType === "auth" && <Shield className="w-3 h-3 mr-1" />}
                      {templateType.charAt(0).toUpperCase() + templateType.slice(1)} Template
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={copyToClipboard}>
                        <Copy className="w-4 h-4 mr-1" />
                        {copyStatus === "copied" ? "Copied!" : "Copy"}
                      </Button>
                      <Button size="sm" variant="outline" onClick={downloadCode}>
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto relative">
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Dialog open={showPreview} onOpenChange={setShowPreview}>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="h-8">
                            <Code className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                      
                      <Dialog open={showLivePreview} onOpenChange={setShowLivePreview}>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="default" className="h-8">
                            <Eye className="w-3 h-3 mr-1" />
                            Live
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                    </div>
                    <pre className="text-green-400 text-sm pr-20">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                  
                  <div className="flex gap-2">
                    <Dialog open={showLivePreview} onOpenChange={setShowLivePreview}>
                      <DialogTrigger asChild>
                        <Button className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          Live Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl max-h-[90vh] p-0">
                        <DialogHeader className="p-6 pb-0">
                          <DialogTitle className="flex items-center gap-2">
                            <Eye className="w-5 h-5" />
                            Live Preview - {templateType.charAt(0).toUpperCase() + templateType.slice(1)} Template
                            {industry && ` • ${industry}`}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 overflow-hidden">
                          {previewError ? (
                            <div className="p-6 text-center">
                              <Alert className="mb-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{previewError}</AlertDescription>
                              </Alert>
                              <Button variant="outline" onClick={() => setShowLivePreview(false)}>
                                Close
                              </Button>
                            </div>
                          ) : previewHTML ? (
                            <div className="h-[70vh] border-t">
                              <iframe
                                srcDoc={previewHTML}
                                className="w-full h-full border-0"
                                title="Template Preview"
                                sandbox="allow-scripts allow-same-origin"
                              />
                            </div>
                          ) : (
                            <div className="p-6 text-center text-muted-foreground">
                              <Loader2 className="w-8 h-8 mx-auto mb-2 animate-spin" />
                              <p>Generating preview...</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Dialog open={showPreview} onOpenChange={setShowPreview}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1">
                          <Code className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Generated Code
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">
                              {templateType === "dashboard" && <BarChart3 className="w-3 h-3 mr-1" />}
                              {templateType === "landing" && <Globe className="w-3 h-3 mr-1" />}
                              {templateType === "auth" && <Shield className="w-3 h-3 mr-1" />}
                              {templateType.charAt(0).toUpperCase() + templateType.slice(1)} Template
                              {industry && ` • ${industry}`}
                            </Badge>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={copyToClipboard}>
                                <Copy className="w-4 h-4 mr-1" />
                                {copyStatus === "copied" ? "Copied!" : "Copy"}
                              </Button>
                              <Button size="sm" variant="outline" onClick={downloadCode}>
                                <Download className="w-4 h-4 mr-1" />
                                Download
                              </Button>
                            </div>
                          </div>
                          
                          <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-96">
                            <pre className="text-green-400 text-sm whitespace-pre-wrap">
                              <code>{generatedCode}</code>
                            </pre>
                          </div>
                          
                          <div className="text-sm text-muted-foreground">
                            <p><strong>Template Type:</strong> {templateType.charAt(0).toUpperCase() + templateType.slice(1)}</p>
                            {industry && <p><strong>Industry:</strong> {industry}</p>}
                            {features.length > 0 && <p><strong>Features:</strong> {features.join(", ")}</p>}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="outline" onClick={() => setGeneratedCode("")}>
                      <X className="w-4 h-4 mr-2" />
                      Clear
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Wand2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">No code generated yet</p>
                  <p className="text-sm">Configure your template and click "Generate Template" to get started</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Generation?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate complete templates in seconds, not hours. Get from idea to code instantly.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-muted-foreground">
                Every generated template is unique and tailored to your specific requirements.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="text-muted-foreground">
                Clean, maintainable code that follows best practices and is ready to deploy.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}