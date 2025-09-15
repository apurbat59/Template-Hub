"use client"

import { useState } from "react"
import { SimpleButton } from "@/components/ui/simple-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  TrendingUp,
  Droplets,
  Sun,
  Thermometer,
  Wind,
  BarChart3,
  Calendar,
  Settings,
  Bell,
  Search,
  Filter,
  MoreHorizontal,
  Activity,
  AlertTriangle,
  Clock,
  Download,
  Eye,
} from "lucide-react"

export default function AgricultureDashboard1() {
  const [activeTab, setActiveTab] = useState("overview")

  const farms = [
    {
      id: 1,
      name: "North Field",
      crop: "Wheat",
      area: "50 acres",
      status: "healthy",
      lastIrrigation: "2 hours ago",
      yield: "85%",
      avatar: "/farm-1.jpg",
    },
    {
      id: 2,
      name: "South Field",
      crop: "Corn",
      area: "75 acres",
      status: "needs_attention",
      lastIrrigation: "5 hours ago",
      yield: "72%",
      avatar: "/farm-2.jpg",
    },
    {
      id: 3,
      name: "East Field",
      crop: "Soybeans",
      area: "60 acres",
      status: "healthy",
      lastIrrigation: "1 hour ago",
      yield: "91%",
      avatar: "/farm-3.jpg",
    },
  ]

  const weatherData = [
    { label: "Temperature", value: "24°C", status: "normal", trend: "stable" },
    { label: "Humidity", value: "65%", status: "normal", trend: "up" },
    { label: "Soil Moisture", value: "78%", status: "good", trend: "stable" },
    { label: "Wind Speed", value: "12 km/h", status: "normal", trend: "down" },
  ]

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white border-b border-green-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">AgriSmart Dashboard</h1>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search farms, crops..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SimpleButton variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </SimpleButton>
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AG</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-green-200 min-h-screen p-6">
          <nav className="space-y-2">
            <SimpleButton
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <Activity className="w-4 h-4 mr-2" />
              Overview
            </SimpleButton>
            <SimpleButton
              variant={activeTab === "farms" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("farms")}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Farms
            </SimpleButton>
            <SimpleButton
              variant={activeTab === "weather" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("weather")}
            >
              <Sun className="w-4 h-4 mr-2" />
              Weather
            </SimpleButton>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Farms</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      +2 this month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Crops</CardTitle>
                    <Sun className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">3 ready for harvest</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Irrigation Status</CardTitle>
                    <Droplets className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <p className="text-xs text-muted-foreground">Optimal moisture levels</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Yield Prediction</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92%</div>
                    <p className="text-xs text-muted-foreground">Above average</p>
                  </CardContent>
                </Card>
              </div>

              {/* Farm Status & Weather */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Farm Status Overview</CardTitle>
                    <CardDescription>Current status of all monitored farms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {farms.map((farm) => (
                        <div key={farm.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <BarChart3 className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">{farm.name}</p>
                              <p className="text-sm text-gray-500">{farm.crop} • {farm.area}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                farm.status === "healthy"
                                  ? "default"
                                  : farm.status === "needs_attention"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {farm.status.replace("_", " ")}
                            </Badge>
                            <p className="text-sm text-gray-500 mt-1">Yield: {farm.yield}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Weather & Soil Conditions</CardTitle>
                    <CardDescription>Real-time environmental data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {weatherData.map((data, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            {index === 0 && <Thermometer className="w-5 h-5 text-orange-500" />}
                            {index === 1 && <Droplets className="w-5 h-5 text-blue-500" />}
                            {index === 2 && <Sun className="w-5 h-5 text-yellow-500" />}
                            {index === 3 && <Wind className="w-5 h-5 text-gray-500" />}
                            <div>
                              <p className="font-medium">{data.label}</p>
                              <p className="text-2xl font-bold text-green-600">{data.value}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {data.status}
                            </Badge>
                            <p className="text-sm text-gray-500">{data.trend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="farms" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Farm Management</CardTitle>
                  <CardDescription>Monitor and manage all your farms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {farms.map((farm) => (
                      <div
                        key={farm.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold">{farm.name}</p>
                            <p className="text-sm text-gray-500">
                              {farm.crop} • {farm.area}
                            </p>
                            <p className="text-xs text-gray-400">Last irrigation: {farm.lastIrrigation}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              farm.status === "healthy"
                                ? "default"
                                : farm.status === "needs_attention"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {farm.status.replace("_", " ")}
                          </Badge>
                          <SimpleButton variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </SimpleButton>
                          <SimpleButton variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </SimpleButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weather" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weather Forecast</CardTitle>
                  <CardDescription>7-day weather forecast for your farms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <div key={day} className="text-center p-4 border rounded-lg">
                        <p className="text-sm font-medium">Day {day}</p>
                        <Sun className="w-8 h-8 mx-auto my-2 text-yellow-500" />
                        <p className="text-lg font-bold">24°C</p>
                        <p className="text-xs text-gray-500">Sunny</p>
                        <p className="text-xs text-gray-500">65% humidity</p>
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
