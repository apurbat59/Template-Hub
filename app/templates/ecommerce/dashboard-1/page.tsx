"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { ShoppingCart, DollarSign, Package, TrendingUp, Users, Filter, Search } from "lucide-react"

export default function EcommerceDashboard1() {
  const [activeTab, setActiveTab] = useState("overview")

  const recentOrders = [
    { id: "#12345", customer: "John Smith", amount: 299.99, status: "shipped", date: "2024-01-15", items: 3 },
    { id: "#12346", customer: "Sarah Johnson", amount: 149.5, status: "processing", date: "2024-01-15", items: 2 },
    { id: "#12347", customer: "Mike Chen", amount: 89.99, status: "delivered", date: "2024-01-14", items: 1 },
    { id: "#12348", customer: "Emily Davis", amount: 199.99, status: "pending", date: "2024-01-14", items: 4 },
  ]

  const topProducts = [
    { name: "Wireless Headphones", sales: 234, revenue: 23400, stock: 45, image: "/product-1.jpg" },
    { name: "Smart Watch", sales: 189, revenue: 37800, stock: 23, image: "/product-2.jpg" },
    { name: "Laptop Stand", sales: 156, revenue: 7800, stock: 67, image: "/product-3.jpg" },
    { name: "USB-C Cable", sales: 298, revenue: 5960, stock: 12, image: "/product-4.jpg" },
  ]

  const customers = [
    { name: "John Smith", email: "john@example.com", orders: 12, spent: 1299.99, status: "vip" },
    { name: "Sarah Johnson", email: "sarah@example.com", orders: 8, spent: 899.5, status: "regular" },
    { name: "Mike Chen", email: "mike@example.com", orders: 15, spent: 2199.99, status: "vip" },
    { name: "Emily Davis", email: "emily@example.com", orders: 5, spent: 599.99, status: "new" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Commerce Dashboard</h1>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders, products, customers..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Add Product
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
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
          <nav className="space-y-2">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Overview
            </Button>
            <Button
              variant={activeTab === "orders" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("orders")}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Orders
            </Button>
            <Button
              variant={activeTab === "products" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("products")}
            >
              <Package className="w-4 h-4 mr-2" />
              Products
            </Button>
            <Button
              variant={activeTab === "customers" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("customers")}
            >
              <Users className="w-4 h-4 mr-2" />
              Customers
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
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      <TrendingUp className="w-3 h-3 inline mr-1 text-green-500" />
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Orders</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Products Sold</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders & Top Products */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Latest customer orders and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-gray-500">{order.customer}</p>
                            <p className="text-xs text-gray-400">
                              {order.date} • {order.items} items
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">${order.amount}</p>
                            <Badge
                              variant={
                                order.status === "delivered"
                                  ? "default"
                                  : order.status === "shipped"
                                    ? "secondary"
                                    : order.status === "processing"
                                      ? "outline"
                                      : "destructive"
                              }
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                    <CardDescription>Best performing products this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <img
                              src={product.image || "/placeholder.svg?height=40&width=40"}
                              alt={product.name}
                              className="w-10 h-10 rounded object-cover"
                            />
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-gray-500">{product.sales} sold</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">${product.revenue.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Management</CardTitle>
                  <CardDescription>Track and manage all customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold">{order.id}</p>
                            <p className="text-sm text-gray-500">{order.customer}</p>
                            <p className="text-xs text-gray-400">
                              {order.date} • {order.items} items • ${order.amount}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              order.status === "delivered"
                                ? "default"
                                : order.status === "shipped"
                                  ? "secondary"
                                  : order.status === "processing"
                                    ? "outline"
                                    : "destructive"
                            }
                          >
                            {order.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Inventory</CardTitle>
                  <CardDescription>Manage your product catalog and inventory</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topProducts.map((product, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-start space-x-4">
                          <img
                            src={product.image || "/placeholder.svg?height=60&width=60"}
                            alt={product.name}
                            className="w-15 h-15 rounded object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{product.sales} units sold</p>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-lg font-bold">${product.revenue.toLocaleString()}</p>
                                <p className="text-sm text-gray-500">Revenue</p>
                              </div>
                              <div className="text-right">
                                <p className={`font-medium ${product.stock < 20 ? "text-red-600" : "text-green-600"}`}>
                                  {product.stock} in stock
                                </p>
                                <Badge variant={product.stock < 20 ? "destructive" : "default"}>
                                  {product.stock < 20 ? "Low Stock" : "In Stock"}
                                </Badge>
                              </div>
                            </div>
                            <div className="mt-3 flex space-x-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Management</CardTitle>
                  <CardDescription>View and manage customer relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customers.map((customer, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={`/customer-${index + 1}.jpg`} />
                            <AvatarFallback>
                              {customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{customer.name}</p>
                            <p className="text-sm text-gray-500">{customer.email}</p>
                            <p className="text-xs text-gray-400">
                              {customer.orders} orders • ${customer.spent.toLocaleString()} spent
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              customer.status === "vip"
                                ? "default"
                                : customer.status === "regular"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {customer.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Profile
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
