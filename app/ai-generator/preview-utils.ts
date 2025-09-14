// Preview utilities for generating static HTML previews

export function generatePreviewHTML(templateType: string, industry: string = 'general'): string {
  let previewContent = ''
  
  if (templateType === 'landing' && industry === 'entertainment') {
    previewContent = `
      <div class="min-h-screen bg-black text-white">
        <!-- Navigation -->
        <nav class="flex items-center justify-between px-6 py-4 bg-black/90 backdrop-blur-sm">
          <div class="flex items-center space-x-8">
            <div class="text-red-600 text-2xl font-bold">NETFLIX</div>
            <div class="hidden md:flex space-x-6">
              <a href="#" class="hover:text-gray-300">Home</a>
              <a href="#" class="hover:text-gray-300">TV Shows</a>
              <a href="#" class="hover:text-gray-300">Movies</a>
              <a href="#" class="hover:text-gray-300">Anime</a>
              <a href="#" class="hover:text-gray-300">Web Series</a>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="relative">
              <input type="text" placeholder="Search..." class="bg-gray-800 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-red-600">
            </div>
            <div class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span class="text-sm font-bold">U</span>
            </div>
          </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative h-96 bg-gradient-to-r from-black via-gray-900 to-black">
          <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          <div class="relative z-10 flex items-center h-full px-6">
            <div class="max-w-2xl">
              <h1 class="text-5xl font-bold mb-4">Stranger Things</h1>
              <p class="text-lg mb-6 text-gray-300">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
              <div class="flex space-x-4">
                <button class="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play
                </button>
                <button class="bg-gray-600/70 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600/90 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  My List
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Content Rows -->
        <div class="px-6 py-8 space-y-8">
          <!-- Trending Now -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Trending Now</h2>
            <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
              <div class="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div class="h-32 bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center">
                  <span class="text-white font-bold">Movie Poster</span>
                </div>
                <div class="p-3">
                  <h3 class="font-semibold truncate">The Witcher</h3>
                  <p class="text-sm text-gray-400">Action, Fantasy</p>
                  <div class="flex items-center mt-1">
                    <span class="text-yellow-400">★★★★☆</span>
                    <span class="text-sm text-gray-400 ml-2">4.2</span>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div class="h-32 bg-gradient-to-br from-blue-500 to-green-600 flex items-center justify-center">
                  <span class="text-white font-bold">Anime Poster</span>
                </div>
                <div class="p-3">
                  <h3 class="font-semibold truncate">Attack on Titan</h3>
                  <p class="text-sm text-gray-400">Anime, Action</p>
                  <div class="flex items-center mt-1">
                    <span class="text-yellow-400">★★★★★</span>
                    <span class="text-sm text-gray-400 ml-2">4.8</span>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div class="h-32 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <span class="text-white font-bold">Series Poster</span>
                </div>
                <div class="p-3">
                  <h3 class="font-semibold truncate">Money Heist</h3>
                  <p class="text-sm text-gray-400">Thriller, Crime</p>
                  <div class="flex items-center mt-1">
                    <span class="text-yellow-400">★★★★☆</span>
                    <span class="text-sm text-gray-400 ml-2">4.5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Continue Watching -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Continue Watching</h2>
            <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
              <div class="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div class="h-32 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span class="text-white font-bold">Web Series</span>
                </div>
                <div class="p-3">
                  <h3 class="font-semibold truncate">The Office</h3>
                  <p class="text-sm text-gray-400">Comedy, Sitcom</p>
                  <div class="w-full bg-gray-600 rounded-full h-1 mt-2">
                    <div class="bg-red-600 h-1 rounded-full" style="width: 65%"></div>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">S2 E5 - 25 min left</p>
                </div>
              </div>
              <div class="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div class="h-32 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <span class="text-white font-bold">Movie</span>
                </div>
                <div class="p-3">
                  <h3 class="font-semibold truncate">Inception</h3>
                  <p class="text-sm text-gray-400">Sci-Fi, Thriller</p>
                  <div class="w-full bg-gray-600 rounded-full h-1 mt-2">
                    <div class="bg-red-600 h-1 rounded-full" style="width: 30%"></div>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">1h 15min left</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Anime Section -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Popular Anime</h2>
            <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
              <div class="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div class="h-32 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <span class="text-white font-bold">Anime</span>
                </div>
                <div class="p-3">
                  <h3 class="font-semibold truncate">Demon Slayer</h3>
                  <p class="text-sm text-gray-400">Anime, Action</p>
                  <div class="flex items-center mt-1">
                    <span class="text-yellow-400">★★★★★</span>
                    <span class="text-sm text-gray-400 ml-2">4.9</span>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0 w-48 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <div class="h-32 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span class="text-white font-bold">Anime</span>
                </div>
                <div class="p-3">
                  <h3 class="font-semibold truncate">One Piece</h3>
                  <p class="text-sm text-gray-400">Anime, Adventure</p>
                  <div class="flex items-center mt-1">
                    <span class="text-yellow-400">★★★★★</span>
                    <span class="text-sm text-gray-400 ml-2">4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  } else if (templateType === 'dashboard') {
    previewContent = `
      <div class="min-h-screen bg-gray-50 p-6">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Dashboard Preview</h1>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-sm font-medium text-gray-500 mb-2">Total Users</h3>
              <p class="text-2xl font-bold text-gray-900">2,350</p>
              <p class="text-xs text-green-600">+20.1% from last month</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-sm font-medium text-gray-500 mb-2">Revenue</h3>
              <p class="text-2xl font-bold text-gray-900">$45,231</p>
              <p class="text-xs text-green-600">+12% from last month</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-sm font-medium text-gray-500 mb-2">Active Projects</h3>
              <p class="text-2xl font-bold text-gray-900">12</p>
              <p class="text-xs text-blue-600">+2 from last week</p>
            </div>
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-sm font-medium text-gray-500 mb-2">Upcoming Events</h3>
              <p class="text-2xl font-bold text-gray-900">8</p>
              <p class="text-xs text-purple-600">This week</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-medium">New user registered</p>
                    <p class="text-sm text-gray-500">2 minutes ago</p>
                  </div>
                  <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Success</span>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-medium">Payment processed</p>
                    <p class="text-sm text-gray-500">5 minutes ago</p>
                  </div>
                  <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Success</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow p-6">
              <h3 class="text-lg font-semibold mb-4">Quick Actions</h3>
              <div class="space-y-2">
                <button class="w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add New Item</button>
                <button class="w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Generate Report</button>
                <button class="w-full text-left px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">View Analytics</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  } else if (templateType === 'landing') {
    previewContent = `
      <div class="min-h-screen bg-white">
        <!-- Hero Section -->
        <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Our Platform
              </h1>
              <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Discover amazing features and solutions for your ${industry} needs
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
                  Get Started
                </button>
                <button class="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p class="text-xl text-gray-600">We provide the best solutions for your business</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p class="text-gray-600">100% satisfaction guaranteed with our products</p>
              </div>
              <div class="text-center">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Expert Support</h3>
                <p class="text-gray-600">24/7 customer support from our expert team</p>
              </div>
              <div class="text-center">
                <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Top Rated</h3>
                <p class="text-gray-600">Rated 4.9/5 by thousands of customers</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-16 bg-blue-600">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p class="text-xl text-blue-100 mb-8">Join thousands of satisfied customers today</p>
            <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">
              Start Your Journey
            </button>
          </div>
        </section>
      </div>
    `
  } else if (templateType === 'auth') {
    previewContent = `
      <div class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div class="w-full max-w-md">
          <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8">
            <div class="text-center mb-6">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h1 class="text-2xl font-bold text-white mb-2">Welcome Back!</h1>
              <p class="text-white/80">Sign in to continue</p>
            </div>
            
            <form class="space-y-4">
              <div>
                <label class="block text-white text-sm font-medium mb-2">Email</label>
                <div class="relative">
                  <svg class="absolute left-3 top-3 h-4 w-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <input type="email" placeholder="Enter your email" class="w-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              
              <div>
                <label class="block text-white text-sm font-medium mb-2">Password</label>
                <div class="relative">
                  <svg class="absolute left-3 top-3 h-4 w-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <input type="password" placeholder="Enter your password" class="w-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              
              <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition duration-200">
                Sign In
              </button>
            </form>
            
            <div class="mt-6 text-center">
              <button class="text-white/80 hover:text-white text-sm underline">
                Don't have an account? Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  }
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Template Preview</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
        .preview-container { min-height: 100vh; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      </style>
    </head>
    <body>
      <div class="preview-container">
        ${previewContent}
      </div>
    </body>
    </html>
  `
}
