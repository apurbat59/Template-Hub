"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Eye, Copy, Download, CheckCircle } from 'lucide-react'

interface CodePreviewProps {
  template: any
  children: React.ReactNode
}

export function CodePreview({ template, children }: CodePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(template.code || '// Template code will be generated here')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
  }

  const handleDownload = () => {
    // This would trigger the download functionality
    console.log('Download template:', template.name)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Code Preview - {template.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{template.type}</Badge>
            <Badge variant="outline">{template.category}</Badge>
            {template.industry && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                {template.industry}
              </Badge>
            )}
          </div>

          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="preview">Live Preview</TabsTrigger>
            </TabsList>
            
            <TabsContent value="code" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Template Code</h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                    className="flex items-center gap-2"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy Code'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
              
              <div className="bg-slate-900 rounded-lg p-4 overflow-auto max-h-96">
                <pre className="text-slate-100 text-sm">
                  <code>{template.code || '// Template code will be generated here\n// This is a placeholder for the actual template code'}</code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="space-y-4">
              <h3 className="text-lg font-semibold">Live Preview</h3>
              <div className="border rounded-lg overflow-hidden">
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <title>${template.name} Preview</title>
                      <script src="https://cdn.tailwindcss.com"></script>
                    </head>
                    <body>
                      <div class="p-8">
                        <h1 class="text-2xl font-bold mb-4">${template.name}</h1>
                        <p class="text-gray-600">This is a preview of the ${template.type} template.</p>
                        <div class="mt-4 p-4 bg-gray-100 rounded">
                          <p class="text-sm text-gray-700">Live preview will be available here once the template is generated.</p>
                        </div>
                      </div>
                    </body>
                    </html>
                  `}
                  className="w-full h-96"
                  title={`${template.name} Preview`}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}