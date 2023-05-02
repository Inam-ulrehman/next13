import DashboardNav from './dashboardNav'

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardNav />
      {children}
    </>
  )
}
