"use client"

import { useState, useMemo, useEffect } from "react"
import { generatePreviewHTML } from "@/app/ai-generator/preview-utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
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
  BarChart3,
  Palette,
  Zap,
} from "lucide-react"

interface AIGeneratorProps {
  onTemplateGenerated?: (template: any) => void
}

export default function AIGenerator({ onTemplateGenerated }: AIGeneratorProps) {
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

      // Save the generated template to dashboard
      if (onTemplateGenerated) {
        const templateData = {
          id: `ai-generated-${Date.now()}`,
          name: `${templateType.charAt(0).toUpperCase() + templateType.slice(1)} Template`,
          type: templateType,
          industry: industry || 'General',
          description: prompt,
          code: data.code,
          preview: '/placeholder-dashboard.jpg',
          generatedAt: new Date().toISOString(),
          isAIGenerated: true,
          features: features
        }
        onTemplateGenerated(templateData)
      }
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
      return generatePreviewHTML(templateType, industry)
    } catch (err) {
      console.error('Preview error:', err)
      return null
    }
  }, [generatedCode, templateType, industry])

  useEffect(() => {
    if (generatedCode && !previewHTML) {
      setPreviewError("Failed to create preview. The generated code may have syntax errors.")
    } else {
      setPreviewError("")
    }
  }, [generatedCode, previewHTML])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-slate-700">AI-Powered Template Generation</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4">
          Generate Beautiful Templates
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Describe your vision and watch our AI create stunning, production-ready templates instantly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Wand2 className="w-4 h-4 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Configure Your Template</CardTitle>
            </div>
            <CardDescription className="text-slate-600 text-base">
              Tell us what you want to build and we'll generate it for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Template Type */}
            <div className="space-y-4">
              <Label className="text-base font-semibold text-slate-900">Template Type</Label>
              <div className="grid grid-cols-3 gap-3">
                {templateTypes.map((type) => (
                  <Button
                    key={type.value}
                    variant={templateType === type.value ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-3 rounded-xl transition-all duration-200 ${
                      templateType === type.value 
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl border-0" 
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                    }`}
                    onClick={() => setTemplateType(type.value)}
                  >
                    <div className={`p-2 rounded-lg ${templateType === type.value ? "bg-white/20" : "bg-slate-100"}`}>
                      {type.icon}
                    </div>
                    <span className="font-semibold text-sm">{type.label}</span>
                    <span className="text-xs opacity-80 text-center leading-tight">{type.description}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div className="space-y-4">
              <Label className="text-base font-semibold text-slate-900">Industry (Optional)</Label>
              <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger className="h-12 bg-white border-slate-200 rounded-xl hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                  <SelectValue placeholder="Select an industry" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-slate-200 shadow-xl">
                  {industries.map((ind) => (
                    <SelectItem key={ind} value={ind.toLowerCase()} className="rounded-lg">
                      {ind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <Label className="text-base font-semibold text-slate-900">Features (Optional)</Label>
              <div className="flex flex-wrap gap-2">
                {commonFeatures.map((feature) => (
                  <Badge
                    key={feature}
                    variant={features.includes(feature) ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 ${
                      features.includes(feature)
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-md hover:shadow-lg"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                    onClick={() => toggleFeature(feature)}
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Prompt */}
            <div className="space-y-4">
              <Label htmlFor="prompt" className="text-base font-semibold text-slate-900">Describe Your Template</Label>
              <Textarea
                id="prompt"
                placeholder="e.g., Create a modern healthcare dashboard with patient management, appointment scheduling, and real-time vitals monitoring. Include dark mode and mobile responsiveness."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] bg-white border-slate-200 rounded-xl hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* Generate Button */}
            <Button 
              onClick={generateTemplate} 
              disabled={isGenerating || !prompt.trim()}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                  Generating Your Template...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-3" />
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
        <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">Generated Code</CardTitle>
            </div>
            <CardDescription className="text-slate-600 text-base">
              Your AI-generated template code will appear here
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedCode ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 border-0 px-4 py-2 text-sm font-medium">
                    {templateType === "dashboard" && <BarChart3 className="w-4 h-4 mr-2" />}
                    {templateType === "landing" && <Globe className="w-4 h-4 mr-2" />}
                    {templateType === "auth" && <Shield className="w-4 h-4 mr-2" />}
                    {templateType.charAt(0).toUpperCase() + templateType.slice(1)} Template
                  </Badge>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" onClick={copyToClipboard} className="bg-white border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg">
                      <Copy className="w-4 h-4 mr-2" />
                      {copyStatus === "copied" ? "Copied!" : "Copy"}
                    </Button>
                    <Button size="sm" variant="outline" onClick={downloadCode} className="bg-white border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                
                <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto relative border border-slate-800">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Dialog open={showPreview} onOpenChange={setShowPreview}>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="secondary" className="h-8 bg-slate-700 hover:bg-slate-600 text-white border-0 rounded-lg">
                          <Code className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                    
                    <Dialog open={showLivePreview} onOpenChange={setShowLivePreview}>
                      <DialogTrigger asChild>
                        <Button size="sm" className="h-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-lg">
                          <Eye className="w-3 h-3 mr-1" />
                          Live
                        </Button>
                      </DialogTrigger>
                    </Dialog>
                  </div>
                  <pre className="text-green-400 text-sm pr-24 font-mono leading-relaxed">
                    <code>{generatedCode}</code>
                  </pre>
                </div>
                
                <div className="flex gap-3">
                  <Dialog open={showLivePreview} onOpenChange={setShowLivePreview}>
                    <DialogTrigger asChild>
                      <Button className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <Eye className="w-5 h-5 mr-2" />
                        Live Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl max-h-[90vh] p-0 rounded-2xl">
                      <DialogHeader className="p-6 pb-0">
                        <DialogTitle className="flex items-center gap-3 text-xl">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Eye className="w-4 h-4 text-white" />
                          </div>
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
                  
                  <Button variant="outline" onClick={() => setGeneratedCode("")} className="h-12 bg-white border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl">
                    <X className="w-5 h-5 mr-2" />
                    Clear
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Wand2 className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">No code generated yet</h3>
                <p className="text-slate-600 max-w-md mx-auto">Configure your template and click "Generate Template" to get started</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
