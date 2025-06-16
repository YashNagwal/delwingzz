// src/pages/AdminDashboard.tsx
import React from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import SidebarItem from '../components/SidebarItem';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-muted">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border">
        <div className="p-6 font-bold text-lg text-delwingz-red font-display">
          Delwingz Admin
        </div>
        <nav className="mt-8">
          <ul>
            <SidebarItem icon={MdOutlineDashboard} label="Dashboard" />
            {/* Add more sidebar items as needed */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-delwingz-black">Products</h1>
          <button className="bg-delwingz-red text-white px-4 py-2 rounded hover:bg-primary/90 flex items-center gap-1">
            <FaPlus /> Add Product
          </button>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded shadow p-4">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-2">ID</th>
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2">#001</td>
                <td className="p-2">Pasta Delight</td>
                <td className="p-2">₹250</td>
                <td className="p-2 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              {/* Add more rows here */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
