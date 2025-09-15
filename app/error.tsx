"use client"

import { useEffect } from 'react'
import { SimpleSimpleButton } from '@/components/ui/simple-button'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong!</h1>
        <p className="text-slate-600 mb-6">
          We're sorry, but something unexpected happened. Please try again or go back to the home page.
        </p>
        <div className="space-y-3">
          <SimpleSimpleButton onClick={reset} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </SimpleSimpleButton>
          <Link href="/" className="block">
            <SimpleSimpleButton variant="outline" className="w-full">
              <Home className="w-4 h-4 mr-2" />
              Go to Home
            </SimpleSimpleButton>
          </Link>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-slate-500">Error Details</summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
