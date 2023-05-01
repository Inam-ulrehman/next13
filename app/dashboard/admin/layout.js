import DashboardNav from './dashboardNav'
import Section from './section'

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return <Section children={children} />
}
