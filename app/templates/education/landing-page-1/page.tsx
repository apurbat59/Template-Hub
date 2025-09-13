import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Play, ArrowRight, Star, Clock } from "lucide-react"

export default function EducationLandingPage1() {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12847,
      duration: "40 hours",
      price: 89,
      originalPrice: 199,
      image: "/web-development-course.jpg",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8934,
      duration: "35 hours",
      price: 79,
      originalPrice: 149,
      image: "/data-science-course.jpg",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      students: 15623,
      duration: "25 hours",
      price: 69,
      originalPrice: 129,
      image: "/digital-marketing-course.jpg",
      level: "Beginner",
    },
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with real-world experience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with peers and instructors in our vibrant community",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificates",
      description: "Earn recognized certificates to boost your career prospects",
    },
  ]

  const stats = [
    { number: "500K+", label: "Students Enrolled" },
    { number: "1,200+", label: "Courses Available" },
    { number: "95%", label: "Completion Rate" },
    { number: "4.8/5", label: "Average Rating" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">LearnHub</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Courses
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About
            </a>
            <a href="#instructors" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Instructors
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Pricing
            </a>
            <Button variant="outline" size="sm" className="border-orange-200 bg-transparent">
              Sign In
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
                <Award className="w-4 h-4 mr-2" />
                #1 Online Learning Platform
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Learn New Skills,
                <span className="text-orange-500"> Advance Your Career</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join over 500,000 students learning from expert instructors. Master in-demand skills with our
                comprehensive courses and hands-on projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="text-lg px-8 bg-orange-500 hover:bg-orange-600">
                  Start Learning Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-orange-200 bg-transparent">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100">
                <img
                  src="/online-learning-illustration.jpg"
                  alt="Online Learning"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                  Free Trial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LearnHub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with cutting-edge technology and expert instruction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-orange-100 hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses taught by industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className={
                        course.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : course.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="destructive">
                      {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from thousands of students who have transformed their careers with LearnHub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Software Developer",
                content:
                  "LearnHub helped me transition from marketing to web development. The courses are practical and the instructors are amazing!",
                rating: 5,
              },
              {
                name: "Maria Garcia",
                role: "Data Analyst",
                content:
                  "The data science course was exactly what I needed. I got promoted within 3 months of completing it!",
                rating: 5,
              },
              {
                name: "James Wilson",
                role: "Digital Marketer",
                content: "Excellent platform with high-quality content. The certificate helped me land my dream job.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-orange-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join over 500,000 students and start building the skills you need for your dream career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-orange-500 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-white text-white hover:bg-white/10 bg-transparent"
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LearnHub</span>
              </div>
              <p className="text-gray-400">
                Empowering learners worldwide with high-quality online education and professional development courses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
