"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Trophy, Zap, Star, Download } from "lucide-react"

export default function GamingLandingPage1() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multiplayer Ready",
      description: "Built-in matchmaking, lobbies, and real-time multiplayer support",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Leaderboards",
      description: "Global and local leaderboards with advanced ranking systems",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Live game state synchronization and instant notifications",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GameForge
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#games" className="text-gray-300 hover:text-white transition-colors">
              Games
            </a>
            <a href="#leaderboard" className="text-gray-300 hover:text-white transition-colors">
              Leaderboard
            </a>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 bg-transparent"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Play Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            <Zap className="w-4 h-4 mr-2" />
            Next-Gen Gaming Platform
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Level Up Your Game
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of players in the ultimate gaming experience. Compete, connect, and conquer in our
            cutting-edge multiplayer universe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Playing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Game-Changing Features
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience gaming like never before with our advanced features and seamless gameplay
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section id="games" className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Popular Games</h2>
            <p className="text-lg text-gray-400">Join the action in our most played games</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Cyber Wars", players: "2.4M", rating: 4.9, image: "/cyber-wars-game.jpg" },
              { name: "Space Conquest", players: "1.8M", rating: 4.8, image: "/space-conquest-game.jpg" },
              { name: "Battle Royale X", players: "3.1M", rating: 4.7, image: "/battle-royale-game.jpg" },
            ].map((game, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{game.players} players</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white">{game.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-12 border border-white/10 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Dominate?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Join the elite gaming community and start your journey to the top of the leaderboards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                View System Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 bg-black/40 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GameForge
            </span>
          </div>
          <p className="text-gray-400">&copy; 2024 GameForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
