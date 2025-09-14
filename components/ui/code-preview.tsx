"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Copy, Download, Eye, FileText, Package, Settings } from 'lucide-react'
import { copyToClipboard } from '@/lib/download-utils'

interface CodePreviewProps {
  template: {
    name: string
    type: string
    industry: string
    description: string
  }
  children: React.ReactNode
}

export function CodePreview({ template, children }: CodePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('component')
  const [copyStatus, setCopyStatus] = useState('')

  // Generate the code based on template type
  const generateCode = () => {
    const { name, type, industry } = template
    
    if (type === 'dashboard') {
      return generateDashboardCode(name, industry)
    } else if (type === 'landing') {
      return generateLandingPageCode(name, industry)
    } else if (type === 'auth') {
      return generateAuthCode(name, industry)
    }
    
    return `// ${name} - ${type} for ${industry}`
  }

  const generateDashboardCode = (name: string, industry: string) => {
    return `import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Activity, TrendingUp, Calendar } from 'lucide-react';

export default function ${name.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">${name}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'New user registered', time: '2 minutes ago', status: 'success' },
                  { action: 'Payment processed', time: '5 minutes ago', status: 'success' },
                  { action: 'System update', time: '1 hour ago', status: 'info' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                    <Badge variant={item.status === 'success' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full justify-start">Add New Item</Button>
                <Button className="w-full justify-start" variant="outline">Generate Report</Button>
                <Button className="w-full justify-start" variant="outline">View Analytics</Button>
                <Button className="w-full justify-start" variant="outline">Settings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}`
  }

  const generateLandingPageCode = (name: string, industry: string) => {
    return `import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowRight, CheckCircle, Users } from 'lucide-react';

export default function ${name.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to ${name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover amazing features and solutions for your ${industry} needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">We provide the best solutions for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guaranteed with our products</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">24/7 customer support from our expert team</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
              <p className="text-gray-600">Rated 4.9/5 by thousands of customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers today</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}`
  }

  const generateAuthCode = (name: string, industry: string) => {
    return `import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

export default function ${name.replace(/\s+/g, '')}() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </CardTitle>
            <p className="text-white/80">
              {isLogin ? 'Sign in to continue' : 'Sign up to get started'}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 pl-10"
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-white/60 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 pl-10"
                    />
                  </div>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white/80 hover:text-white text-sm underline"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}`
  }

  const generatePackageJson = () => {
    return `{
  "name": "${template.name.toLowerCase().replace(/\s+/g, '-')}",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.16",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "typescript": "^5.5.4",
    "tailwindcss": "^3.4.1",
    "lucide-react": "^0.460.0",
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "@types/node": "^20.16.11",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "eslint": "^8.57.1",
    "eslint-config-next": "14.2.16",
    "postcss": "^8.4.47",
    "autoprefixer": "^10.4.20"
  }
}`
  }

  const generateReadme = () => {
    return `# ${template.name}

A modern ${template.type} template for ${template.industry} applications.

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Template Details

- **Type**: ${template.type}
- **Industry**: ${template.industry}
- **Description**: ${template.description}

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Features

- Modern UI/UX design
- Responsive layout
- TypeScript support
- Tailwind CSS styling
- Accessible components

## Customization

You can customize this template by:
1. Modifying the component code
2. Updating the styling with Tailwind CSS classes
3. Adding new features and functionality
4. Integrating with your preferred backend services

## Support

For questions or support, please refer to the documentation or create an issue in the repository.`
  }

  const handleCopyCode = async (code: string, type: string) => {
    try {
      await copyToClipboard(code)
      setCopyStatus(`${type} copied!`)
      setTimeout(() => setCopyStatus(''), 2000)
    } catch (error) {
      setCopyStatus('Copy failed')
      setTimeout(() => setCopyStatus(''), 2000)
    }
  }

  const code = generateCode()
  const packageJson = generatePackageJson()
  const readme = generateReadme()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold">{template.name}</DialogTitle>
              <DialogDescription className="mt-2">
                Preview the generated code for this {template.type} template
              </DialogDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="capitalize">
                {template.type}
              </Badge>
              <Badge variant="secondary" className="capitalize">
                {template.industry}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="component" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Component
              </TabsTrigger>
              <TabsTrigger value="package" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Package.json
              </TabsTrigger>
              <TabsTrigger value="readme" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                README
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="component" className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg">Component Code</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopyCode(code, 'Component')}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px] w-full">
                    <pre className="p-4 text-sm bg-gray-900 text-gray-100 overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="package" className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg">Package.json</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopyCode(packageJson, 'Package.json')}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px] w-full">
                    <pre className="p-4 text-sm bg-gray-900 text-gray-100 overflow-x-auto">
                      <code>{packageJson}</code>
                    </pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="readme" className="mt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg">README.md</CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopyCode(readme, 'README')}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[500px] w-full">
                    <pre className="p-4 text-sm bg-gray-900 text-gray-100 overflow-x-auto">
                      <code>{readme}</code>
                    </pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="p-6 pt-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {copyStatus && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                {copyStatus}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button 
              onClick={() => {
                // Trigger download
                const downloadEvent = new CustomEvent('downloadTemplate', { 
                  detail: template 
                })
                window.dispatchEvent(downloadEvent)
                setIsOpen(false)
              }}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Template
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
