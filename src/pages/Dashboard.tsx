import React from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import KpiCard from '@/components/KpiCard';
import SalesOverTimeChart from '@/components/SalesOverTimeChart';
import RecentOrdersTable from '@/components/RecentOrdersTable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Package, Users2, Activity } from 'lucide-react';

const Dashboard = () => {
  console.log('Dashboard page loaded');

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LeftSidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-1 sm:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {/* Other tabs like 'analytics' could be added here in the future */}
            </TabsList>
            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
                <KpiCard
                  title="Total Revenue"
                  value="$45,231.89"
                  change="+20.1% from last month"
                  changeType="positive"
                  icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
                />
                <KpiCard
                  title="New Orders"
                  value="2,350"
                  change="+180.1% from last month"
                  changeType="positive"
                  icon={<Package className="h-4 w-4 text-muted-foreground" />}
                />
                <KpiCard
                  title="New Customers"
                  value="1,210"
                  change="+19% from last month"
                  changeType="positive"
                  icon={<Users2 className="h-4 w-4 text-muted-foreground" />}
                />
                <KpiCard
                  title="Site Activity"
                  value="15,204"
                  change="+201 since last hour"
                  changeType="neutral"
                  icon={<Activity className="h-4 w-4 text-muted-foreground" />}
                />
              </div>
              <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="lg:col-span-4">
                  <SalesOverTimeChart />
                </div>
                <div className="lg:col-span-3">
                  <RecentOrdersTable />
                </div>
              </div>
            </TabsContent>
          </Tabs>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;