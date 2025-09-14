import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Code,
  Zap,
  Globe,
  Shield,
  Download,
  Sparkles,
  Star,
  Users,
  Rocket,
  CheckCircle,
  Play,
  Eye,
  Heart,
  ShoppingBag,
  Activity,
  TrendingUp,
  Calendar,
  Settings,
  BarChart3,
  Smartphone,
  Monitor,
  Laptop,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const templateCategories = [
    {
      name: "Healthcare",
      icon: "🏥",
      slug: "healthcare",
      description: "Medical dashboards, patient management",
      preview: "/healthcare-dashboard.png",
      templates: ["Dashboard", "Auth", "Landing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "E-commerce",
      icon: "🛒",
      slug: "ecommerce", 
      description: "Online stores, product catalogs",
      preview: "/ecommerce-store-interface.png",
      templates: ["Dashboard", "Auth", "Landing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Gaming",
      icon: "🎮",
      slug: "gaming",
      description: "Leaderboards, user profiles",
      preview: "/gaming-leaderboard-interface.jpg",
      templates: ["Dashboard", "Auth", "Landing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Finance",
      icon: "💰",
      slug: "finance",
      description: "Trading dashboards, portfolio tracking",
      preview: "/finance-trading-dashboard.jpg",
      templates: ["Dashboard", "Auth", "Landing"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Education",
      icon: "📚",
      slug: "education",
      description: "Learning management, student portals",
      preview: "/learning-management-system.png",
      templates: ["Landing", "Auth"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Agriculture",
      icon: "🌾",
      slug: "agriculture",
      description: "IoT dashboards, crop monitoring",
      preview: "/smart-farming-dashboard.jpg",
      templates: ["Dashboard", "Auth", "Landing"],
      color: "from-green-600 to-lime-500"
    }
  ]

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

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary"></div>
                <div className="w-8 h-8 rounded-full bg-secondary"></div>
                <div className="w-8 h-8 rounded-full bg-accent"></div>
              </div>
              <span>50,000+ developers</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1">4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-primary" />
              <span>1M+ downloads</span>
            </div>
          </div>

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

          {/* Trust indicators */}
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

      {/* Live Demo Section */}
      <section id="demos" className="py-20 px-4 bg-gradient-to-br from-slate-50/50 via-blue-50/20 to-purple-50/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">Experience Templates in Action</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Click on any template to see it live. No signup required for demos.
            </p>
          </div>

          <Tabs defaultValue="dashboards" className="w-full">
            <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-8 bg-slate-100/50 p-1 rounded-xl mx-auto">
              <TabsTrigger value="dashboards" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">
                <BarChart3 className="w-4 h-4" />
                Dashboards
              </TabsTrigger>
              <TabsTrigger value="landing" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">
                <Globe className="w-4 h-4" />
                Landing Pages
              </TabsTrigger>
              <TabsTrigger value="auth" className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">
                <Shield className="w-4 h-4" />
                Auth Systems
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboards" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templateCategories.filter(cat => cat.templates.includes("Dashboard")).map((category) => (
                  <Card key={category.slug} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image
                        src={category.preview}
                        alt={`${category.name} Dashboard Preview`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 right-4">
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{category.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg">{category.name} Dashboard</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">TypeScript</Badge>
                        </div>
                        <Link href={`/templates/${category.slug}/dashboard-1`}>
                          <Button size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Demo
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="landing" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templateCategories.filter(cat => cat.templates.includes("Landing")).map((category) => (
                  <Card key={category.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image
                        src={category.preview}
                        alt={`${category.name} Landing Page Preview`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 right-4">
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{category.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg">{category.name} Landing</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="outline">Next.js</Badge>
                          <Badge variant="outline">Tailwind</Badge>
                        </div>
                        <Link href={`/templates/${category.slug}/landing-page-1`}>
                          <Button size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Demo
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="auth" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templateCategories.filter(cat => cat.templates.includes("Auth")).map((category) => (
                  <Card key={category.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Shield className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                          <p className="text-lg font-medium text-gray-600">{category.name} Auth</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 right-4">
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 mr-1" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{category.icon}</div>
                        <div>
                          <h3 className="font-semibold text-lg">{category.name} Auth</h3>
                          <p className="text-sm text-muted-foreground">Sign in & sign up system</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="outline">Auth0</Badge>
                          <Badge variant="outline">JWT</Badge>
                        </div>
                        <Link href={`/templates/${category.slug}/auth-1`}>
                          <Button size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Demo
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Developers Choose TemplateHub</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ship 10x Faster</h3>
              <p className="opacity-90">
                From idea to production in hours, not weeks. Complete systems ready to deploy.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="opacity-90">Security, scalability, and best practices built in. No cutting corners.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted by 50K+</h3>
              <p className="opacity-90">Join the community of developers building the next generation of apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Ship Faster</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From landing pages to complex dashboards, get complete systems that work out of the box.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Complete Codebases</CardTitle>
                <CardDescription>
                  Frontend + Backend + Auth + Dashboard - everything included with clean, maintainable code.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Cross-Platform Ready</CardTitle>
                <CardDescription>
                  Detailed setup manuals for Windows, macOS, and Linux with dependency management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Production Ready</CardTitle>
                <CardDescription>
                  Security best practices, error handling, and scalable architecture built in.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>AI-Powered Generation</CardTitle>
                <CardDescription>
                  Generate custom templates on demand with our intelligent design assistant.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Instant Download</CardTitle>
                <CardDescription>
                  Get structured project files with documentation and setup instructions immediately.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Multi-Domain Support</CardTitle>
                <CardDescription>
                  Templates for healthcare, gaming, HR, agriculture, and more specialized industries.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Dashboard Section */}
      <section id="dashboard" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Your Complete Template Hub</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access all templates, components, and code in one powerful dashboard. Download, customize, and deploy instantly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">All Dashboards</h3>
                      <p className="text-sm text-muted-foreground">50+ dashboard templates</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Healthcare, Finance, E-commerce</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Real-time data visualization</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Responsive design</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Landing Pages</h3>
                      <p className="text-sm text-muted-foreground">30+ landing page designs</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Modern, conversion-focused</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>SEO optimized</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Mobile-first approach</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Auth Systems</h3>
                      <p className="text-sm text-muted-foreground">Complete auth solutions</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Email & social login</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Role-based access</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Secure & scalable</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Components</h3>
                      <p className="text-sm text-muted-foreground">200+ reusable components</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>UI/UX components</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fully customizable</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>TypeScript ready</span>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Settings className="w-5 h-5 mr-2" />
                    Access Dashboard
                  </Button>
              </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download All Templates
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-500">TemplateHub Dashboard</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Dashboard Templates</span>
                    <Badge variant="secondary" className="ml-auto">24</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Landing Pages</span>
                    <Badge variant="secondary" className="ml-auto">18</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <span className="font-medium">Auth Systems</span>
                    <Badge variant="secondary" className="ml-auto">12</Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Code className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">Components</span>
                    <Badge variant="secondary" className="ml-auto">200+</Badge>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Recent Downloads</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    <div>Healthcare Dashboard v2.1</div>
                    <div>E-commerce Landing v1.8</div>
                    <div>Finance Auth System v3.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="ai" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Generate Custom Templates with AI</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Describe your project requirements and our AI will generate a complete template with landing page,
                authentication, dashboard, and all necessary components.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Intelligent code generation based on requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Follows industry best practices and patterns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Customizable and extensible architecture</span>
                </div>
              </div>
              <Link href="/auth">
                <Button size="lg" variant="secondary">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Access Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl p-8 border border-border">
              <div className="bg-background rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="text-muted-foreground">
                    {">"} Generate a healthcare dashboard with patient management
                  </div>
                  <div className="text-accent">✓ Creating authentication system...</div>
                  <div className="text-accent">✓ Building patient dashboard...</div>
                  <div className="text-accent">✓ Adding data visualization...</div>
                  <div className="text-foreground">🎉 Template ready for download!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 50,000+ developers who've already shipped faster with TemplateHub.
            <strong> Start your free trial today - no credit card required.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/auth">
              <Button size="lg" variant="secondary" className="text-lg px-12 py-6 shadow-lg">
                Start Free Trial - No CC Required
              </Button>
            </Link>
            <Link href="#demo">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Watch 2-Min Demo
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">TemplateHub</span>
              </div>
              <p className="text-muted-foreground">
                The fastest way to ship production-ready applications with complete templates and AI assistance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#dashboard" className="hover:text-foreground transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TemplateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
