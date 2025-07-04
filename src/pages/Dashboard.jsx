// import { Users, DollarSign, Clock } from "lucide-react";
// import { MetricCard } from "../components/dashboard/MetricCard";
// import { UsersTable } from "../components/tables/UsersTable";
// import { PaymentsTable } from "../components/tables/PaymentsTable";
// import { ApplicationsTable } from "../components/tables/ApplicationsTable";
// import { mockMetrics, mockUsers, mockPayments, mockApplications } from "../lib/mock-data";

// export default function Dashboard() {
//   return (
//     <div className="flex-1 overflow-hidden">
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="px-6 py-4">
//           <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
//         </div>
//       </header>
//       <main className="p-6 overflow-y-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <MetricCard title="Total Users" value={mockMetrics.totalUsers} icon={Users} variant="blue" />
//           <MetricCard title="Total Payments" value={mockMetrics.totalPayments} icon={DollarSign} variant="green" />
//           <MetricCard title="Pending Applications" value={mockMetrics.pendingApplications} icon={Clock} variant="orange" />
//         </div>
//         <div className="space-y-8">
//           <UsersTable users={mockUsers} />
//           <PaymentsTable payments={mockPayments} />
//           <ApplicationsTable applications={mockApplications} />
//         </div>
//       </main>
//     </div>
//   );
// }
<<<<<<< HEAD
import { Users, DollarSign, Clock } from "lucide-react";
import { MetricCard } from "../components/dashboard/MetricCard";
import { UsersTable } from "../components/tables/UsersTable";
import { PaymentsTable } from "../components/tables/PaymentsTable";
import { ApplicationsTable } from "../components/tables/ApplicationsTable";
import { mockMetrics, mockUsers, mockPayments, mockApplications } from "../lib/mock-data";
=======
import { Users, DollarSign, Clock } from "lucide-react"
import { MetricCard } from "../components/dashboard/MetricCard"
import { UsersTable } from "../components/tables/UsersTable"
import { PaymentsTable } from "../components/tables/PaymentsTable"
import { ApplicationsTable } from "../components/tables/ApplicationsTable"
import {
  mockMetrics,
  mockUsers,
  mockPayments,
  mockApplications,
} from "../lib/mock-data"
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-hidden">
      {/* Header */}
<<<<<<< HEAD
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Dashboard</h1>
=======
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 sm:p-6 overflow-y-auto">
<<<<<<< HEAD
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <MetricCard title="Total Users" value={mockMetrics.totalUsers} icon={Users} variant="blue" />
          <MetricCard title="Total Payments" value={mockMetrics.totalPayments} icon={DollarSign} variant="green" />
          <MetricCard title="Pending Applications" value={mockMetrics.pendingApplications} icon={Clock} variant="orange" />
        </div>

        {/* Tables */}
        <div className="space-y-6 sm:space-y-8">
=======
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <MetricCard
            title="Total Users"
            value={mockMetrics.totalUsers}
            icon={Users}
            variant="blue"
          />
          <MetricCard
            title="Total Payments"
            value={mockMetrics.totalPayments}
            icon={DollarSign}
            variant="green"
          />
          <MetricCard
            title="Pending Applications"
            value={mockMetrics.pendingApplications}
            icon={Clock}
            variant="orange"
          />
        </div>

        {/* Tables */}
        <div className="space-y-8">
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
          <UsersTable users={mockUsers} />
          <PaymentsTable payments={mockPayments} />
          <ApplicationsTable applications={mockApplications} />
        </div>
      </main>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 9432315becf677a42b7d2a4437702ec822022735
}
