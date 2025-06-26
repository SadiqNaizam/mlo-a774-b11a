import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Props for the KpiCard component.
 */
interface KpiCardProps {
  /** The main title of the metric (e.g., 'Total Revenue'). */
  title: string;
  /** The primary value to be displayed in a large format. */
  value: string;
  /** A secondary statistic, typically showing change or trend (e.g., '+5.2% from last month'). */
  change?: string;
  /** The type of change, used for styling the 'change' text. */
  changeType?: 'positive' | 'negative' | 'neutral';
  /** An optional icon from lucide-react to be displayed in the header. */
  icon?: React.ReactNode;
  /** Optional additional class names for custom styling. */
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  className,
}) => {
  console.log('KpiCard loaded:', title);

  const changeColorClass = cn({
    "text-green-600 dark:text-green-500": changeType === 'positive',
    "text-red-600 dark:text-red-500": changeType === 'negative',
    "text-muted-foreground": changeType === 'neutral',
  });

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={cn("text-xs", changeColorClass)}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;