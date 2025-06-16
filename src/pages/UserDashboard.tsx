import React, { useState } from 'react';

export default function UserDashboard() {
  const [address, setAddress] = useState('');
  const products = [
    { id: 1, name: 'Pizza Margherita', price: 299 },
    { id: 2, name: 'Veggie Pasta', price: 199 },
    { id: 3, name: 'Grilled Sandwich', price: 149 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600">User Dashboard</h2>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Address:</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          placeholder="Enter your address here"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>

      <h3 className="text-xl font-semibold mb-2">Available Products:</h3>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="border p-3 rounded">
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
