"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  Gamepad2,
  Trophy,
  Users,
  TrendingUp,
  Zap,
  Target,
  Crown,
  Star,
  Play,
  Pause,
  Settings,
  BarChart3,
} from "lucide-react"

export default function GamingDashboard1() {
  const [activeTab, setActiveTab] = useState("overview")

  const topPlayers = [
    { rank: 1, name: "ProGamer_X", score: 15420, level: 87, avatar: "/gamer-1.jpg", status: "online" },
    { rank: 2, name: "ShadowNinja", score: 14890, level: 84, avatar: "/gamer-2.jpg", status: "online" },
    { rank: 3, name: "CyberQueen", score: 14230, level: 82, avatar: "/gamer-3.jpg", status: "offline" },
    { rank: 4, name: "StormRider", score: 13950, level: 80, avatar: "/gamer-4.jpg", status: "in-game" },
    { rank: 5, name: "NeonBlast", score: 13670, level: 78, avatar: "/gamer-5.jpg", status: "online" },
  ]

  const gameStats = [
    { game: "Cyber Wars", players: 2847, peak: 3200, trend: "+12%" },
    { game: "Space Conquest", players: 1923, peak: 2100, trend: "+8%" },
    { game: "Battle Royale", players: 4521, peak: 5000, trend: "-5%" },
    { game: "Racing Thunder", players: 1456, peak: 1800, trend: "+15%" },
  ]

  const achievements = [
    { title: "First Victory", description: "Win your first match", rarity: "common", unlocked: 89 },
    { title: "Legendary Streak", description: "Win 10 matches in a row", rarity: "legendary", unlocked: 12 },
    { title: "Master Tactician", description: "Complete all strategy missions", rarity: "epic", unlocked: 34 },
    { title: "Speed Demon", description: "Finish a race under 2 minutes", rarity: "rare", unlocked: 67 },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">GameHub Analytics</h1>
            </div>
            <Badge className="bg-green-600 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Live
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700 bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Avatar>
              <AvatarImage src="/admin-avatar.jpg" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 border-r border-gray-700 min-h-screen p-6">
          <nav className="space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start text-white hover:bg-gray-700"
              onClick={() => setActiveTab("overview")}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Button
              variant={activeTab === "players" ? "default" : "ghost"}
              className="w-full justify-start text-white hover:bg-gray-700"
              onClick={() => setActiveTab("players")}
            >
              <Users className="w-4 h-4 mr-2" />
              Players
            </Button>
            <Button
              variant={activeTab === "games" ? "default" : "ghost"}
              className="w-full justify-start text-white hover:bg-gray-700"
              onClick={() => setActiveTab("games")}
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              Games
            </Button>
            <Button
              variant={activeTab === "achievements" ? "default" : "ghost"}
              className="w-full justify-start text-white hover:bg-gray-700"
              onClick={() => setActiveTab("achievements")}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Active Players</CardTitle>
                    <Users className="h-4 w-4 text-purple-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">12,847</div>
                    <p className="text-xs text-gray-400">
                      <TrendingUp className="w-3 h-3 inline mr-1 text-green-400" />
                      +23% from yesterday
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Matches Played</CardTitle>
                    <Target className="h-4 w-4 text-blue-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">45,231</div>
                    <p className="text-xs text-gray-400">+18% from yesterday</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Server Load</CardTitle>
                    <Zap className="h-4 w-4 text-yellow-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">73%</div>
                    <Progress value={73} className="mt-2" />
                  </CardContent>
                </Card>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">Revenue</CardTitle>
                    <Trophy className="h-4 w-4 text-green-400" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">$24,567</div>
                    <p className="text-xs text-gray-400">+31% from last week</p>
                  </CardContent>
                </Card>
              </div>

              {/* Leaderboard & Game Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Crown className="w-5 h-5 mr-2 text-yellow-400" />
                      Top Players
                    </CardTitle>
                    <CardDescription className="text-gray-400">Current leaderboard rankings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topPlayers.map((player) => (
                        <div key={player.rank} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                              {player.rank}
                            </div>
                            <Avatar>
                              <AvatarImage src={player.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-white">{player.name}</p>
                              <p className="text-sm text-gray-400">Level {player.level}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-white">{player.score.toLocaleString()}</p>
                            <Badge
                              variant="outline"
                              className={
                                player.status === "online"
                                  ? "border-green-400 text-green-400"
                                  : player.status === "in-game"
                                    ? "border-blue-400 text-blue-400"
                                    : "border-gray-400 text-gray-400"
                              }
                            >
                              {player.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Game Statistics</CardTitle>
                    <CardDescription className="text-gray-400">Current player counts by game</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gameStats.map((game, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                          <div>
                            <p className="font-medium text-white">{game.game}</p>
                            <p className="text-sm text-gray-400">Peak: {game.peak.toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-white">{game.players.toLocaleString()}</p>
                            <p className={`text-sm ${game.trend.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                              {game.trend}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="players" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Player Management</CardTitle>
                  <CardDescription className="text-gray-400">Monitor and manage all registered players</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPlayers.map((player) => (
                      <div key={player.rank} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={player.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-white">{player.name}</p>
                            <p className="text-sm text-gray-400">
                              Level {player.level} • Score: {player.score.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">Rank #{player.rank}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="outline"
                            className={
                              player.status === "online"
                                ? "border-green-400 text-green-400"
                                : player.status === "in-game"
                                  ? "border-blue-400 text-blue-400"
                                  : "border-gray-400 text-gray-400"
                            }
                          >
                            {player.status}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-600 text-white hover:bg-gray-600 bg-transparent"
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="games" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Game Management</CardTitle>
                  <CardDescription className="text-gray-400">
                    Monitor game performance and player engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {gameStats.map((game, index) => (
                      <div key={index} className="p-4 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-white">{game.game}</h3>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-600 text-white hover:bg-gray-600 bg-transparent"
                            >
                              <Play className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-600 text-white hover:bg-gray-600 bg-transparent"
                            >
                              <Pause className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Current Players:</span>
                            <span className="text-white font-medium">{game.players.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Peak Today:</span>
                            <span className="text-white font-medium">{game.peak.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Trend:</span>
                            <span className={game.trend.startsWith("+") ? "text-green-400" : "text-red-400"}>
                              {game.trend}
                            </span>
                          </div>
                          <Progress value={(game.players / game.peak) * 100} className="mt-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Achievement System</CardTitle>
                  <CardDescription className="text-gray-400">
                    Track player achievements and unlock rates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="p-4 bg-gray-700 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <Star
                              className={`w-5 h-5 ${
                                achievement.rarity === "legendary"
                                  ? "text-yellow-400"
                                  : achievement.rarity === "epic"
                                    ? "text-purple-400"
                                    : achievement.rarity === "rare"
                                      ? "text-blue-400"
                                      : "text-gray-400"
                              }`}
                            />
                            <Badge
                              variant="outline"
                              className={`${
                                achievement.rarity === "legendary"
                                  ? "border-yellow-400 text-yellow-400"
                                  : achievement.rarity === "epic"
                                    ? "border-purple-400 text-purple-400"
                                    : achievement.rarity === "rare"
                                      ? "border-blue-400 text-blue-400"
                                      : "border-gray-400 text-gray-400"
                              }`}
                            >
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-400">{achievement.unlocked}% unlocked</span>
                        </div>
                        <h3 className="font-semibold text-white mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                        <Progress value={achievement.unlocked} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
