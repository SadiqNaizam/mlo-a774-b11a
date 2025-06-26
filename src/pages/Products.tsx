import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/layout/Header";
import LeftSidebar from "@/components/layout/LeftSidebar";
import { PlusCircle, Search } from 'lucide-react';

const productsData = [
  {
    id: 'prod-001',
    name: 'Gourmet Coffee Beans',
    sku: 'SKU-GCB-001',
    stockStatus: 'In Stock',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1559441133-138a835a7a7c?q=80&w=800',
  },
  {
    id: 'prod-002',
    name: 'Artisanal Tea Set',
    sku: 'SKU-ATS-002',
    stockStatus: 'In Stock',
    price: 34.50,
    image: 'https://images.unsplash.com/photo-1597318181314-f42d47ea426b?q=80&w=800',
  },
  {
    id: 'prod-003',
    name: 'Handmade Ceramic Mug',
    sku: 'SKU-HCM-003',
    stockStatus: 'Low Stock',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1510626176961-4b9da5ede3b8?q=80&w=800',
  },
  {
    id: 'prod-004',
    name: 'Organic Dark Chocolate',
    sku: 'SKU-ODC-004',
    stockStatus: 'Out of Stock',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1589557438461-1e3d0c6a3c6c?q=80&w=800',
  },
  {
    id: 'prod-005',
    name: 'Leather Bound Journal',
    sku: 'SKU-LBJ-005',
    stockStatus: 'In Stock',
    price: 29.95,
    image: 'https://images.unsplash.com/photo-1516410529446-21e7e78633e4?q=80&w=800',
  },
];

const Products = () => {
  console.log('Products page loaded');

  const getStockVariant = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'default';
      case 'Low Stock':
        return 'secondary';
      case 'Out of Stock':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their inventory status.
              </CardDescription>
              <div className="flex items-center gap-4 pt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                  />
                </div>
                <div className="ml-auto">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" className="gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Product
                                </span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add New Product</DialogTitle>
                                <DialogDescription>
                                    Fill in the details below to add a new product to your inventory.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name</Label>
                                    <Input id="name" placeholder="e.g., Gourmet Coffee Beans" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="sku" className="text-right">SKU</Label>
                                    <Input id="sku" placeholder="e.g., SKU-GCB-001" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="price" className="text-right">Price</Label>
                                    <Input id="price" type="number" placeholder="e.g., 18.99" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="stock" className="text-right">Stock</Label>
                                    <Input id="stock" type="number" placeholder="e.g., 100" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save Product</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productsData.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={product.image || "/placeholder.svg"}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.sku}</TableCell>
                      <TableCell>
                        <Badge variant={getStockVariant(product.stockStatus) as 'default' | 'secondary' | 'destructive' | 'outline'}>
                          {product.stockStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-{productsData.length}</strong> of <strong>{productsData.length}</strong> products
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Products;