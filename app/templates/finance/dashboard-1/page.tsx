"use client"

import { useState } from "react"
import { SimpleButton } from "@/components/ui/simple-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  EyeOff,
  RefreshCw,
} from "lucide-react"

export default function FinanceDashboard1() {
  const [activeTab, setActiveTab] = useState("overview")
  const [balanceVisible, setBalanceVisible] = useState(true)

  const portfolioData = [
    { symbol: "AAPL", name: "Apple Inc.", price: 182.52, change: +2.34, changePercent: +1.3, shares: 50, value: 9126 },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 138.21,
      change: -1.45,
      changePercent: -1.04,
      shares: 25,
      value: 3455.25,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: 378.85,
      change: +5.67,
      changePercent: +1.52,
      shares: 30,
      value: 11365.5,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 248.42,
      change: -8.23,
      changePercent: -3.2,
      shares: 15,
      value: 3726.3,
    },
  ]

  const transactions = [
    { type: "buy", symbol: "AAPL", amount: 1825.2, shares: 10, date: "2024-01-15", time: "09:30" },
    { type: "sell", symbol: "GOOGL", amount: 2764.2, shares: 20, date: "2024-01-15", time: "11:45" },
    { type: "buy", symbol: "MSFT", amount: 3788.5, shares: 10, date: "2024-01-14", time: "14:20" },
    { type: "dividend", symbol: "AAPL", amount: 125.5, shares: 50, date: "2024-01-14", time: "16:00" },
  ]

  const watchlist = [
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 722.48, change: +15.67, changePercent: +2.22 },
    { symbol: "AMD", name: "Advanced Micro Devices", price: 152.33, change: -2.45, changePercent: -1.58 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 155.89, change: +3.21, changePercent: +2.1 },
    { symbol: "META", name: "Meta Platforms Inc.", price: 484.2, change: +8.45, changePercent: +1.78 },
  ]

  const totalValue = portfolioData.reduce((sum, stock) => sum + stock.value, 0)
  const totalChange = portfolioData.reduce((sum, stock) => sum + stock.change * stock.shares, 0)
  const totalChangePercent = (totalChange / (totalValue - totalChange)) * 100

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900">FinanceHub</h1>
            </div>
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Market Open</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <SimpleButton variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </SimpleButton>
            <SimpleButton size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              New Trade
            </SimpleButton>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-6">
          <nav className="space-y-2">
            <SimpleButton
              variant={activeTab === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </SimpleButton>
            <SimpleButton
              variant={activeTab === "portfolio" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("portfolio")}
            >
              <PieChart className="w-4 h-4 mr-2" />
              Portfolio
            </SimpleButton>
            <SimpleButton
              variant={activeTab === "transactions" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("transactions")}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Transactions
            </SimpleButton>
            <SimpleButton
              variant={activeTab === "watchlist" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("watchlist")}
            >
              <Eye className="w-4 h-4 mr-2" />
              Watchlist
            </SimpleButton>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="overview" className="space-y-6">
              {/* Portfolio Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Portfolio Value</CardTitle>
                      <SimpleButton variant="ghost" size="sm" onClick={() => setBalanceVisible(!balanceVisible)}>
                        {balanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </SimpleButton>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-3xl font-bold text-slate-900">
                          {balanceVisible
                            ? `$${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                            : "••••••"}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          {totalChange >= 0 ? (
                            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-600" />
                          )}
                          <span
                            className={`text-sm font-medium ${totalChange >= 0 ? "text-emerald-600" : "text-red-600"}`}
                          >
                            {balanceVisible
                              ? `$${Math.abs(totalChange).toFixed(2)} (${Math.abs(totalChangePercent).toFixed(2)}%)`
                              : "••••"}
                          </span>
                          <span className="text-sm text-slate-500">today</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-sm text-slate-500">Cash</p>
                          <p className="text-lg font-semibold">{balanceVisible ? "$5,234.67" : "••••••"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Invested</p>
                          <p className="text-lg font-semibold">
                            {balanceVisible ? `$${totalValue.toLocaleString()}` : "••••••"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Total</p>
                          <p className="text-lg font-semibold">
                            {balanceVisible ? `$${(totalValue + 5234.67).toLocaleString()}` : "••••••"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>1 Day</span>
                          <span className="text-emerald-600">+2.34%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>1 Week</span>
                          <span className="text-emerald-600">+5.67%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>1 Month</span>
                          <span className="text-red-600">-1.23%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>1 Year</span>
                          <span className="text-emerald-600">+18.45%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Holdings & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Holdings</CardTitle>
                    <CardDescription>Your largest positions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {portfolioData.slice(0, 3).map((stock) => (
                        <div key={stock.symbol} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{stock.symbol}</p>
                            <p className="text-sm text-slate-500">{stock.shares} shares</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${stock.value.toLocaleString()}</p>
                            <div className="flex items-center space-x-1">
                              {stock.change >= 0 ? (
                                <TrendingUp className="w-3 h-3 text-emerald-600" />
                              ) : (
                                <TrendingDown className="w-3 h-3 text-red-600" />
                              )}
                              <span className={`text-sm ${stock.change >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                                {stock.changePercent > 0 ? "+" : ""}
                                {stock.changePercent.toFixed(2)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.slice(0, 3).map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                transaction.type === "buy"
                                  ? "bg-emerald-100"
                                  : transaction.type === "sell"
                                    ? "bg-red-100"
                                    : "bg-blue-100"
                              }`}
                            >
                              {transaction.type === "buy" ? (
                                <ArrowUpRight className={`w-4 h-4 text-emerald-600`} />
                              ) : transaction.type === "sell" ? (
                                <ArrowDownRight className={`w-4 h-4 text-red-600`} />
                              ) : (
                                <DollarSign className={`w-4 h-4 text-blue-600`} />
                              )}
                            </div>
                            <div>
                              <p className="font-medium capitalize">
                                {transaction.type} {transaction.symbol}
                              </p>
                              <p className="text-sm text-slate-500">
                                {transaction.date} at {transaction.time}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${transaction.amount.toLocaleString()}</p>
                            <p className="text-sm text-slate-500">{transaction.shares} shares</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="portfolio" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Holdings</CardTitle>
                  <CardDescription>Complete view of your investment portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolioData.map((stock) => (
                      <div
                        key={stock.symbol}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-slate-600">{stock.symbol.slice(0, 2)}</span>
                          </div>
                          <div>
                            <p className="font-semibold">{stock.symbol}</p>
                            <p className="text-sm text-slate-500">{stock.name}</p>
                            <p className="text-xs text-slate-400">
                              {stock.shares} shares @ ${stock.price}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">${stock.value.toLocaleString()}</p>
                          <div className="flex items-center space-x-1">
                            {stock.change >= 0 ? (
                              <TrendingUp className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                            <span
                              className={`text-sm font-medium ${stock.change >= 0 ? "text-emerald-600" : "text-red-600"}`}
                            >
                              ${Math.abs(stock.change).toFixed(2)} ({stock.changePercent > 0 ? "+" : ""}
                              {stock.changePercent.toFixed(2)}%)
                            </span>
                          </div>
                          <div className="mt-2 flex space-x-2">
                            <SimpleButton variant="outline" size="sm">
                              Buy
                            </SimpleButton>
                            <SimpleButton variant="outline" size="sm">
                              Sell
                            </SimpleButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                  <CardDescription>Complete record of all your trades and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              transaction.type === "buy"
                                ? "bg-emerald-100"
                                : transaction.type === "sell"
                                  ? "bg-red-100"
                                  : "bg-blue-100"
                            }`}
                          >
                            {transaction.type === "buy" ? (
                              <ArrowUpRight className={`w-6 h-6 text-emerald-600`} />
                            ) : transaction.type === "sell" ? (
                              <ArrowDownRight className={`w-6 h-6 text-red-600`} />
                            ) : (
                              <DollarSign className={`w-6 h-6 text-blue-600`} />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold capitalize">
                              {transaction.type} {transaction.symbol}
                            </p>
                            <p className="text-sm text-slate-500">
                              {transaction.date} at {transaction.time}
                            </p>
                            <p className="text-xs text-slate-400">{transaction.shares} shares</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">${transaction.amount.toLocaleString()}</p>
                          <Badge
                            variant={
                              transaction.type === "buy"
                                ? "default"
                                : transaction.type === "sell"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {transaction.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="watchlist" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Watchlist</CardTitle>
                  <CardDescription>Stocks you're monitoring for potential investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {watchlist.map((stock) => (
                      <div
                        key={stock.symbol}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-slate-600">{stock.symbol.slice(0, 2)}</span>
                          </div>
                          <div>
                            <p className="font-semibold">{stock.symbol}</p>
                            <p className="text-sm text-slate-500">{stock.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">${stock.price.toFixed(2)}</p>
                          <div className="flex items-center space-x-1">
                            {stock.change >= 0 ? (
                              <TrendingUp className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-600" />
                            )}
                            <span
                              className={`text-sm font-medium ${stock.change >= 0 ? "text-emerald-600" : "text-red-600"}`}
                            >
                              ${Math.abs(stock.change).toFixed(2)} ({stock.changePercent > 0 ? "+" : ""}
                              {stock.changePercent.toFixed(2)}%)
                            </span>
                          </div>
                          <div className="mt-2 flex space-x-2">
                            <SimpleButton variant="outline" size="sm">
                              Buy
                            </SimpleButton>
                            <SimpleButton variant="ghost" size="sm">
                              Remove
                            </SimpleButton>
                          </div>
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
