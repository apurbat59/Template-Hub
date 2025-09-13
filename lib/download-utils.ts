// Download utility functions for templates

export interface TemplateCode {
  name: string
  type: 'dashboard' | 'landing' | 'auth'
  category: string
  code: string
  dependencies: string[]
  description: string
}

export const downloadTemplate = (template: TemplateCode) => {
  // Create a zip-like structure with all necessary files
  const files = {
    [`${template.name.toLowerCase().replace(/\s+/g, '-')}.tsx`]: template.code,
    'package.json': generatePackageJson(template.dependencies),
    'README.md': generateReadme(template),
    'tailwind.config.js': generateTailwindConfig(),
    'next.config.js': generateNextConfig(),
  }

  // Create a downloadable zip file
  const zipContent = createZipContent(files)
  downloadFile(zipContent, `${template.name.toLowerCase().replace(/\s+/g, '-')}-template.zip`)
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
    return false
  }
}

const generatePackageJson = (dependencies: string[]) => {
  const baseDependencies = {
    "next": "14.2.16",
    "react": "^18",
    "react-dom": "^18",
    "typescript": "^5",
    "@types/node": "^22",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "tailwindcss": "^4.1.9",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5",
    "lucide-react": "^0.454.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
  }

  const additionalDeps = dependencies.reduce((acc, dep) => {
    acc[dep.toLowerCase()] = "latest"
    return acc
  }, {} as Record<string, string>)

  return JSON.stringify({
    name: "template-project",
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      lint: "next lint"
    },
    dependencies: { ...baseDependencies, ...additionalDeps }
  }, null, 2)
}

const generateReadme = (template: TemplateCode) => {
  return `# ${template.name}

${template.description}

## Template Type
${template.type.charAt(0).toUpperCase() + template.type.slice(1)}

## Category
${template.category}

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

## Features

- Built with Next.js 14 and TypeScript
- Responsive design with Tailwind CSS
- Modern UI components
- Production ready

## Customization

This template is fully customizable. You can:
- Modify the styling in the component files
- Add new features and components
- Integrate with your preferred backend
- Deploy to your hosting platform

## Support

For questions or support, please contact our team.
`
}

const generateTailwindConfig = () => {
  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
`
}

const generateNextConfig = () => {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
`
}

const createZipContent = (files: Record<string, string>) => {
  // This is a simplified version - in a real implementation, you'd use a proper zip library
  const fileList = Object.entries(files).map(([filename, content]) => 
    `File: ${filename}\n${content}\n---\n`
  ).join('\n')
  
  return fileList
}

const downloadFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'application/zip' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// Mock template data for demonstration
export const mockTemplates: Record<string, TemplateCode> = {
  'healthcare-dashboard': {
    name: 'Healthcare Dashboard',
    type: 'dashboard',
    category: 'Healthcare',
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
        </div>
      </div>
    </div>
  )
}`,
    dependencies: ['@radix-ui/react-card', '@radix-ui/react-badge'],
    description: 'A comprehensive medical dashboard for patient management and monitoring'
  },
  'ecommerce-landing': {
    name: 'E-commerce Landing Page',
    type: 'landing',
    category: 'E-commerce',
    code: `// E-commerce Landing Page Component
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function EcommerceLanding() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ShopEase</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>
      
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Shop Smart, <span className="text-blue-600">Save More</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover amazing products at unbeatable prices. Quality guaranteed.
              </p>
              <Button size="lg" className="text-lg px-8">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}`,
    dependencies: ['@radix-ui/react-card', '@radix-ui/react-badge'],
    description: 'A modern, conversion-focused e-commerce landing page'
  }
}
