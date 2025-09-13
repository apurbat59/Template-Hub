"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  BookOpen,
  Users,
  Calendar,
  BarChart3,
  TrendingUp,
  Clock,
  Bell,
  Search,
  Filter,
  MoreHorizontal,
  Activity,
  AlertTriangle,
  CheckCircle,
  GraduationCap,
  Award,
} from "lucide-react"

export default function EducationDashboard1() {
  const [activeTab, setActiveTab] = useState("overview")

  const students = [
    {
      id: 1,
      name: "Sarah Johnson",
      course: "Computer Science",
      progress: 85,
      lastActive: "2 hours ago",
      status: "active",
      avatar: "/student-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      course: "Data Science",
      progress: 72,
      lastActive: "1 day ago",
      status: "active",
      avatar: "/student-2.jpg",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      course: "Web Development",
      progress: 95,
      lastActive: "30 minutes ago",
      status: "active",
      avatar: "/student-3.jpg",
    },
  ]

  const courses = [
    { name: "Introduction to Programming", students: 45, completion: 78, status: "active" },
    { name: "Advanced React", students: 32, completion: 65, status: "active" },
    { name: "Database Design", students: 28, completion: 82, status: "active" },
    { name: "Machine Learning Basics", students: 19, completion: 45, status: "upcoming" },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-blue-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">EduLearn Dashboard</h1>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students, courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">ED</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-blue-200 min-h-screen p-6">
          <nav className="space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <Activity className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Button
              variant={activeTab === "students" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("students")}
            >
              <Users className="w-4 h-4 mr-2" />
              Students
            </Button>
            <Button
              variant={activeTab === "courses" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("courses")}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Courses
            </Button>
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
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
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
                    <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">3 new this week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">87%</div>
                    <p className="text-xs text-muted-foreground">Above average</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Certificates Issued</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">456</div>
                    <p className="text-xs text-muted-foreground">This month</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Students & Course Progress */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Students</CardTitle>
                    <CardDescription>Latest student activity and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {students.map((student) => (
                        <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Users className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-gray-500">{student.course}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {student.progress}% Complete
                            </Badge>
                            <p className="text-sm text-gray-500">{student.lastActive}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Course Progress Overview</CardTitle>
                    <CardDescription>Current course completion rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {courses.map((course, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{course.name}</p>
                            <p className="text-sm text-gray-500">{course.students} students</p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={course.status === "active" ? "default" : "secondary"}
                              className="mb-2"
                            >
                              {course.status}
                            </Badge>
                            <p className="text-sm text-gray-500">{course.completion}% complete</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Management</CardTitle>
                  <CardDescription>View and manage all enrolled students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {students.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold">{student.name}</p>
                            <p className="text-sm text-gray-500">{student.course}</p>
                            <p className="text-xs text-gray-400">Last active: {student.lastActive}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="mb-2">
                            {student.progress}% Complete
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Activity className="w-4 h-4 mr-1" />
                            View Progress
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Management</CardTitle>
                  <CardDescription>Manage all available courses and their content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold">{course.name}</p>
                            <p className="text-sm text-gray-500">{course.students} enrolled students</p>
                            <p className="text-xs text-gray-400">{course.completion}% completion rate</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={course.status === "active" ? "default" : "secondary"}
                            className="mb-2"
                          >
                            {course.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <BookOpen className="w-4 h-4 mr-1" />
                            Edit Course
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
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
