import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Eye, Download, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GamingTemplatesPage() {
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
            <Link href="/#ai" className="text-muted-foreground hover:text-foreground transition-colors">
              AI Assistant
            </Link>
            <Link href="/auth">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Link href="/templates" className="flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Templates
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-4xl">🎮</div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Gaming Templates</h1>
              <p className="text-lg text-muted-foreground">
                Dark-themed gaming interfaces with leaderboards, analytics, and player management
              </p>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img src="/cyber-wars-game.jpg" alt="Gaming Landing Page" className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary">Free</Badge>
              </div>
              <div className="absolute top-2 left-2">
                <Badge variant="outline" className="bg-background/80">
                  Landing Page
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">Gaming Landing Page</CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                    <span>•</span>
                    <span>2100 downloads</span>
                  </div>
                </div>
              </div>
              <CardDescription className="mt-2">
                Futuristic gaming landing page with neon effects and immersive design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Neon Effects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Dark Theme</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Animations</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Gaming
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Dark Theme
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href="/templates/gaming/landing-page-1" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                  <Link href="/templates/gaming-landing-1/preview" className="flex-1">
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img
                src="/gaming-leaderboard-interface.jpg"
                alt="Gaming Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary">Free</Badge>
              </div>
              <div className="absolute top-2 left-2">
                <Badge variant="outline" className="bg-background/80">
                  Dashboard
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">Gaming Analytics Dashboard</CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                    <span>•</span>
                    <span>2100 downloads</span>
                  </div>
                </div>
              </div>
              <CardDescription className="mt-2">
                Dark-themed gaming dashboard with player statistics, leaderboards, and achievement tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Player Statistics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Leaderboards</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Achievement Tracking</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Gaming
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Analytics
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Dark Theme
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href="/templates/gaming/dashboard-1" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                  <Link href="/templates/gaming-dashboard-1/preview" className="flex-1">
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img
                src="/gaming-authentication-interface.jpg"
                alt="Gaming Authentication"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary">Free</Badge>
              </div>
              <div className="absolute top-2 left-2">
                <Badge variant="outline" className="bg-background/80">
                  Authentication
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">Gaming Authentication</CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8</span>
                    <span>•</span>
                    <span>1800 downloads</span>
                  </div>
                </div>
              </div>
              <CardDescription className="mt-2">
                Futuristic gaming authentication with neon effects and animated backgrounds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Neon Effects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Animated Backgrounds</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Gaming Theme</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Gaming
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Neon
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Animation
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href="/templates/gaming/auth-1" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                  <Link href="/templates/gaming-auth-1/preview" className="flex-1">
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
