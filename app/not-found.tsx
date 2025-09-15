import Link from 'next/link'
import { SimpleSimpleButton } from '@/components/ui/simple-button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-white">404</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
        <p className="text-slate-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-3">
          <Link href="/">
            <SimpleSimpleButton className="w-full">
              <Home className="w-4 h-4 mr-2" />
              Go to Home
            </SimpleSimpleButton>
          </Link>
          <SimpleSimpleButton variant="outline" onClick={() => window.history.back()} className="w-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </SimpleSimpleButton>
        </div>
      </div>
    </div>
  )
}
