"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User, Chrome, Shield, Zap, CheckCircle, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [authError, setAuthError] = useState("")
  const [authSuccess, setAuthSuccess] = useState("")
  const router = useRouter()

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const allowedDomains = ['gmail.com', 'student.nitw.ac.in']
    
    if (!emailRegex.test(email)) {
      return { valid: false, message: "Please enter a valid email address" }
    }
    
    const domain = email.split('@')[1]
    if (!allowedDomains.includes(domain)) {
      return { 
        valid: false, 
        message: "Please use @gmail.com or @student.nitw.ac.in email addresses" 
      }
    }
    
    return { valid: true, message: "Email is valid" }
  }

  // Real-time email validation
  useEffect(() => {
    if (email.length > 0) {
      const validation = validateEmail(email)
      setEmailValid(validation.valid)
      setEmailError(validation.valid ? "" : validation.message)
    } else {
      setEmailValid(false)
      setEmailError("")
    }
  }, [email])

  const setCookie = (name: string, value: string, days = 7) => {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError("")
    setAuthSuccess("")
    
    // Validate email before submission
    if (!emailValid) {
      setAuthError("Please enter a valid email address")
      return
    }
    
    if (password.length < 6) {
      setAuthError("Password must be at least 6 characters long")
      return
    }
    
    setIsLoading(true)
    
    // Simulate API call with real-time feedback
    setTimeout(() => {
      setIsLoading(false)
      setAuthSuccess("Authentication successful! Redirecting...")
      
      // Set user data based on email domain
      const domain = email.split('@')[1]
      const userName = name || email.split('@')[0]
      const userType = domain === 'student.nitw.ac.in' ? 'student' : 'user'
      
      setCookie("isAuthenticated", "true")
      setCookie("userEmail", email)
      setCookie("userName", userName)
      setCookie("userType", userType)
      
      // Redirect to dashboard after success
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    }, 1500)
  }

  const handleGoogleAuth = async () => {
    setAuthError("")
    setAuthSuccess("")
    setIsGoogleLoading(true)
    
    // Simulate Google OAuth with domain validation
    setTimeout(() => {
      setIsGoogleLoading(false)
      
      // Simulate random email from allowed domains
      const domains = ['gmail.com', 'student.nitw.ac.in']
      const randomDomain = domains[Math.floor(Math.random() * domains.length)]
      const mockEmail = `user${Math.floor(Math.random() * 1000)}@${randomDomain}`
      
      setAuthSuccess("Google authentication successful! Redirecting...")
      
      setCookie("isAuthenticated", "true")
      setCookie("userEmail", mockEmail)
      setCookie("userName", "Google User")
      setCookie("userType", randomDomain === 'student.nitw.ac.in' ? 'student' : 'user')
      
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to TemplateHub
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to TemplateHub</h1>
          <p className="text-muted-foreground">Join 50,000+ developers building faster</p>
        </div>

        <Card className="border-border shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Get Started Free</CardTitle>
            <CardDescription>Access 500+ premium templates instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <Button
                onClick={handleGoogleAuth}
                disabled={isGoogleLoading}
                size="lg"
                className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-sm"
              >
                {isGoogleLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                    Signing in with Google...
                  </div>
                ) : (
                  <>
                    <Chrome className="mr-2 h-5 w-5 text-blue-500" />
                    Continue with Google
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-blue-500" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span>Free Trial</span>
                </div>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
              </div>
            </div>

            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        className={`pl-10 pr-10 ${emailError ? 'border-red-500' : emailValid ? 'border-green-500' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                      {emailValid && (
                        <CheckCircle2 className="absolute right-3 top-3 h-4 w-4 text-green-500" />
                      )}
                      {emailError && (
                        <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-red-500" />
                      )}
                    </div>
                    {emailError && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {emailError}
                      </p>
                    )}
                    {emailValid && (
                      <p className="text-sm text-green-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Email is valid
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {authError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{authError}</AlertDescription>
                    </Alert>
                  )}
                  
                  {authSuccess && (
                    <Alert className="border-green-200 bg-green-50 text-green-800">
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertDescription>{authSuccess}</AlertDescription>
                    </Alert>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isLoading || !emailValid}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="pl-10" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="Enter your email" 
                        className={`pl-10 pr-10 ${emailError ? 'border-red-500' : emailValid ? 'border-green-500' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                      {emailValid && (
                        <CheckCircle2 className="absolute right-3 top-3 h-4 w-4 text-green-500" />
                      )}
                      {emailError && (
                        <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-red-500" />
                      )}
                    </div>
                    {emailError && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {emailError}
                      </p>
                    )}
                    {emailValid && (
                      <p className="text-sm text-green-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Email is valid
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {password.length > 0 && password.length < 6 && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Password must be at least 6 characters
                      </p>
                    )}
                  </div>
                  
                  {authError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{authError}</AlertDescription>
                    </Alert>
                  )}
                  
                  {authSuccess && (
                    <Alert className="border-green-200 bg-green-50 text-green-800">
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertDescription>{authSuccess}</AlertDescription>
                    </Alert>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isLoading || !emailValid || password.length < 6}>
                    {isLoading ? "Creating account..." : "Create Free Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">What you get with your free account:</p>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>500+ Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>AI Generator</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          By continuing, you agree to our{" "}
          <Link href="#" className="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
