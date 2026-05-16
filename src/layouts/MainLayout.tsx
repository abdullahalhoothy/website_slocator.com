import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
