import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the type for an order
type Order = {
  id: string;
  customer: string;
  date: string;
  status: 'Fulfilled' | 'Pending' | 'Cancelled';
  total: number;
};

// Placeholder data for the orders table
const ordersData: Order[] = [
  { id: "ORD001", customer: "Liam Johnson", date: "2023-06-23", status: "Fulfilled", total: 250.00 },
  { id: "ORD002", customer: "Olivia Smith", date: "2023-06-24", status: "Pending", total: 150.75 },
  { id: "ORD003", customer: "Noah Williams", date: "2023-06-25", status: "Fulfilled", total: 350.50 },
  { id: "ORD004", customer: "Emma Brown", date: "2023-06-26", status: "Cancelled", total: 75.00 },
  { id: "ORD005", customer: "Ava Jones", date: "2023-06-27", status: "Fulfilled", total: 450.25 },
  { id: "ORD006", customer: "James Garcia", date: "2023-06-28", status: "Pending", total: 55.00 },
  { id: "ORD007", customer: "Sophia Miller", date: "2023-06-29", status: "Fulfilled", total: 125.00 },
];

const Orders = () => {
  console.log('Orders page loaded');
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = useMemo(() => {
    if (!searchTerm) {
      return ordersData;
    }
    return ordersData.filter(order =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const getStatusBadgeVariant = (status: Order['status']): 'default' | 'secondary' | 'destructive' => {
    switch (status) {
      case 'Fulfilled':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'default';
    }
  };
  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Orders</h1>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>All Orders</CardTitle>
              <CardDescription>
                An overview of all recent transactions.
              </CardDescription>
              <div className="relative mt-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by customer or order ID..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          ${order.total.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

        </main>
      </div>
    </div>
  );
};

export default Orders;