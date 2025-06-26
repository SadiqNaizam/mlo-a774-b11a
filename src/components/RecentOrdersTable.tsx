import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  totalPrice: number;
  status: 'Fulfilled' | 'Pending' | 'Cancelled';
};

// Mock data to represent the 5-10 most recent orders.
const recentOrders: Order[] = [
  {
    id: 'ORD001',
    customerName: 'Olivia Martin',
    customerEmail: 'olivia.martin@email.com',
    orderDate: '2023-11-23',
    totalPrice: 42.99,
    status: 'Fulfilled',
  },
  {
    id: 'ORD002',
    customerName: 'Jackson Lee',
    customerEmail: 'jackson.lee@email.com',
    orderDate: '2023-11-23',
    totalPrice: 199.99,
    status: 'Fulfilled',
  },
  {
    id: 'ORD003',
    customerName: 'Isabella Nguyen',
    customerEmail: 'isabella.nguyen@email.com',
    orderDate: '2023-11-22',
    totalPrice: 75.50,
    status: 'Pending',
  },
  {
    id: 'ORD004',
    customerName: 'William Kim',
    customerEmail: 'will@email.com',
    orderDate: '2023-11-21',
    totalPrice: 250.00,
    status: 'Fulfilled',
  },
  {
    id: 'ORD005',
    customerName: 'Sofia Davis',
    customerEmail: 'sofia.davis@email.com',
    orderDate: '2023-11-20',
    totalPrice: 35.00,
    status: 'Cancelled',
  },
];

const RecentOrdersTable: React.FC = () => {
  console.log('RecentOrdersTable loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>A summary of your most recent sales.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {order.customerEmail}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {order.totalPrice.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrdersTable;