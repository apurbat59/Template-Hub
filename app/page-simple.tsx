"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Zap,
  Globe,
  Shield,
  Sparkles,
  Play,
  Rocket,
  BarChart3,
  TrendingUp,
  Clock,
  Users,
  Heart,
  Star,
  Download,
  Eye,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                TemplateHub
              </span>
              <p className="text-xs text-slate-500 -mt-1">AI-Powered Templates</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#demos" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Live Demos
            </a>
            <a href="#templates" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Templates
            </a>
            <a href="#dashboard" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Dashboard
            </a>
            <Link href="/auth">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200">
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">Get Started Free</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 text-center bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <Badge variant="secondary" className="mb-6 animate-pulse bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />🚀 Join 50,000+ developers building faster
          </Badge>
          <h1 className="text-6xl md:text-7xl font-black mb-8 text-balance leading-tight">
            Transform Your Ideas into
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Reality</span> with
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Live Demos</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            Experience our templates in action with interactive live demos. See exactly what you're getting before you download.{" "}
            <strong className="text-slate-900">Try before you buy.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/auth">
              <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                Start Building Now - Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#demos">
              <Button variant="outline" size="lg" className="text-lg px-12 py-6 bg-transparent hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200">
                <Play className="w-5 h-5 mr-2" />
                Try Live Demos
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-slate-600">Live Demos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-slate-600">AI Assistant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-slate-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Demo Section */}
      <section id="demos" className="py-24 px-4 bg-gradient-to-br from-slate-50/50 via-blue-50/20 to-purple-50/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Live Demos</span> in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See our templates working in real-time. No downloads, no setup - just pure interactive experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-slate-800 backdrop-blur-sm shadow-lg">Dashboard</Badge>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Analytics Dashboard
                </h3>
                <p className="text-slate-600 mb-4">Modern analytics dashboard with real-time data visualization</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                    <span className="text-sm text-slate-500">(128 reviews)</span>
                  </div>
                  <Link href="/templates/agriculture/dashboard-1">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-slate-800 backdrop-blur-sm shadow-lg">Landing</Badge>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Landing Page
                </h3>
                <p className="text-slate-600 mb-4">Beautiful landing page with modern design and animations</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                    <span className="text-sm text-slate-500">(95 reviews)</span>
                  </div>
                  <Link href="/templates/agriculture/landing-page-1">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-slate-800 backdrop-blur-sm shadow-lg">Auth</Badge>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Auth System
                </h3>
                <p className="text-slate-600 mb-4">Secure authentication system with modern UI</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">4.7</span>
                    </div>
                    <span className="text-sm text-slate-500">(87 reviews)</span>
                  </div>
                  <Link href="/templates/agriculture/auth-1">
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers who are building faster with our AI-powered templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="text-lg px-12 py-6 bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="text-lg px-12 py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200">
                <Eye className="w-5 h-5 mr-2" />
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">TemplateHub</span>
          </div>
          <p className="text-slate-400 mb-6">
            AI-powered templates for modern web development
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
