import React, { useState } from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';

// shadcn/ui Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Placeholder customer data
const customers = [
  {
    id: 'usr_1',
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=olivia',
    signupDate: '2024-03-15',
  },
  {
    id: 'usr_2',
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=jackson',
    signupDate: '2024-03-12',
  },
  {
    id: 'usr_3',
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=isabella',
    signupDate: '2024-03-10',
  },
  {
    id: 'usr_4',
    name: 'William Kim',
    email: 'will@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=william',
    signupDate: '2024-02-28',
  },
  {
    id: 'usr_5',
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=sofia',
    signupDate: '2024-02-25',
  },
];

const Customers = () => {
  console.log('Customers page loaded');
  const [filter, setFilter] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.toLowerCase()) ||
    customer.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Customer Directory</CardTitle>
              <CardDescription>
                A list of all customers who have registered with your store.
              </CardDescription>
              <div className="pt-4">
                  <Input
                    placeholder="Filter by name or email..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="max-w-sm"
                  />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Sign-up Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.length > 0 ? (
                    filteredCustomers.map(customer => (
                      <TableRow key={customer.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={customer.avatarUrl} alt={customer.name} />
                              <AvatarFallback>{customer.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{customer.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell className="text-right">{customer.signupDate}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center h-24">
                        No customers found.
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

export default Customers;