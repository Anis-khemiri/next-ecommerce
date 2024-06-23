import AdminLayout from '@/components/admin/AdminLayout'
import Dashboard from './Dashboard'

export const metadata = {
  title: 'Admin Dashboard',
}
const DashbaordPage = () => {
  return (
    <AdminLayout activeItem="dashboard">
      <Dashboard />
      <h2>hello</h2>
    </AdminLayout>
  )
}

export default DashbaordPage
