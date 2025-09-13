import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Eye, Download, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HealthcareTemplatesPage() {
  const templatesByType = {
    "Landing Pages": [
      {
        id: 1,
        name: "Medical Practice Landing",
        description: "Professional medical practice website with appointment booking and service showcase",
        image: "/healthcare-landing-page.jpg",
        rating: 4.9,
        downloads: 1450,
        tags: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
        price: "Free",
        demoUrl: "/templates/healthcare/landing-page-1",
        features: ["Online Booking", "Service Pages", "Doctor Profiles", "Contact Forms", "SEO Optimized"],
      },
    ],
    Dashboards: [
      {
        id: 2,
        name: "Patient Management Dashboard",
        description: "Complete patient management system with appointments, medical records, and billing integration",
        image: "/healthcare-dashboard.png",
        rating: 4.8,
        downloads: 1200,
        tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma"],
        price: "Free",
        demoUrl: "/templates/healthcare/dashboard-1",
        features: ["Patient Records", "Appointment Scheduling", "Billing System", "Medical History", "Reports"],
      },
    ],
    Authentication: [
      {
        id: 3,
        name: "Healthcare Auth System",
        description: "HIPAA-compliant authentication system for healthcare applications with secure login",
        image: "/healthcare-authentication-portal.jpg",
        rating: 4.7,
        downloads: 980,
        tags: ["React", "JWT", "HIPAA", "2FA", "Encryption"],
        price: "Free",
        demoUrl: "/templates/healthcare/auth-1",
        features: ["HIPAA Compliance", "Two-Factor Auth", "Role-Based Access", "Audit Logs", "Secure Sessions"],
      },
    ],
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
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-3xl">
              🏥
            </div>
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-2">Healthcare Templates</h1>
              <p className="text-xl text-muted-foreground">
                HIPAA-compliant templates for medical practices, hospitals, and healthcare startups
              </p>
            </div>
          </div>
        </div>

        {Object.entries(templatesByType).map(([type, templates]) => (
          <div key={type} className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <h2 className="text-3xl font-bold text-foreground">{type}</h2>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {templates.length} template{templates.length !== 1 ? "s" : ""}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                        {template.price}
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur">
                        {type.slice(0, -1)}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{template.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{template.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{template.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mt-3">{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {template.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {template.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Link href={template.demoUrl} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                        <Link href={`/templates/${template.id}/preview`} className="flex-1">
                          <Button size="sm" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
