"use client"

import { useState } from "react"
import { SimpleButton } from "@/components/ui/simple-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  Heart,
  Activity,
  Users,
  Calendar,
  Bell,
  Search,
  Filter,
  MoreHorizontal,
  TrendingUp,
  AlertTriangle,
  Clock,
} from "lucide-react"

export default function HealthcareDashboard1() {
  const [activeTab, setActiveTab] = useState("overview")

  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 34,
      condition: "Hypertension",
      status: "stable",
      lastVisit: "2024-01-15",
      nextAppointment: "2024-01-22",
      avatar: "/patient-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 67,
      condition: "Diabetes Type 2",
      status: "critical",
      lastVisit: "2024-01-14",
      nextAppointment: "2024-01-18",
      avatar: "/patient-2.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      age: 28,
      condition: "Asthma",
      status: "improving",
      lastVisit: "2024-01-13",
      nextAppointment: "2024-01-25",
      avatar: "/patient-3.jpg",
    },
  ]

  const appointments = [
    { time: "09:00", patient: "John Doe", type: "Consultation", status: "confirmed" },
    { time: "10:30", patient: "Jane Smith", type: "Follow-up", status: "pending" },
    { time: "14:00", patient: "Bob Wilson", type: "Surgery", status: "confirmed" },
    { time: "15:30", patient: "Alice Brown", type: "Check-up", status: "cancelled" },
  ]

  const vitals = [
    { label: "Heart Rate", value: "72 BPM", status: "normal", trend: "stable" },
    { label: "Blood Pressure", value: "120/80", status: "normal", trend: "down" },
    { label: "Temperature", value: "98.6°F", status: "normal", trend: "stable" },
    { label: "Oxygen Saturation", value: "98%", status: "normal", trend: "up" },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-blue-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">MedCare Dashboard</h1>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients, appointments..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <Avatar>
              <AvatarImage src="/doctor-avatar.jpg" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-blue-200 min-h-screen p-6">
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
              variant={activeTab === "patients" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("patients")}
            >
              <Users className="w-4 h-4 mr-2" />
              Patients
            </SimpleButton>
            <SimpleButton
              variant={activeTab === "appointments" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("appointments")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Appointments
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
                    <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">4 pending confirmations</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600">3</div>
                    <p className="text-xs text-muted-foreground">Requires immediate attention</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Bed Occupancy</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <Progress value={87} className="mt-2" />
                  </CardContent>
                </Card>
              </div>

              {/* Recent Patients & Vitals */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Patients</CardTitle>
                    <CardDescription>Latest patient visits and status updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {patients.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {patient.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{patient.name}</p>
                              <p className="text-sm text-gray-500">{patient.condition}</p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              patient.status === "critical"
                                ? "destructive"
                                : patient.status === "stable"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {patient.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Patient Vitals Overview</CardTitle>
                    <CardDescription>Current vital signs monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {vitals.map((vital, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{vital.label}</p>
                            <p className="text-2xl font-bold text-blue-600">{vital.value}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {vital.status}
                            </Badge>
                            <p className="text-sm text-gray-500">{vital.trend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="patients" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Patient Management</CardTitle>
                  <CardDescription>Manage all patient records and information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patients.map((patient) => (
                      <div
                        key={patient.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{patient.name}</p>
                            <p className="text-sm text-gray-500">
                              Age: {patient.age} • {patient.condition}
                            </p>
                            <p className="text-xs text-gray-400">Last visit: {patient.lastVisit}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              patient.status === "critical"
                                ? "destructive"
                                : patient.status === "stable"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {patient.status}
                          </Badge>
                          <SimpleButton variant="outline" size="sm">
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

            <TabsContent value="appointments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Appointments</CardTitle>
                  <CardDescription>Manage and track all scheduled appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.map((appointment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 text-center">
                            <Clock className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                            <p className="text-sm font-medium">{appointment.time}</p>
                          </div>
                          <div>
                            <p className="font-semibold">{appointment.patient}</p>
                            <p className="text-sm text-gray-500">{appointment.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              appointment.status === "confirmed"
                                ? "default"
                                : appointment.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {appointment.status}
                          </Badge>
                          <SimpleButton variant="outline" size="sm">
                            {appointment.status === "pending" ? "Confirm" : "View"}
                          </SimpleButton>
                        </div>
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
