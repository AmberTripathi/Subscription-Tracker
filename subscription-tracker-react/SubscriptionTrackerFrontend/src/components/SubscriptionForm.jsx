import React, { useState, useEffect } from 'react';
import apiClient from '../services/api';

const SubscriptionForm = ({ subscription, onSave, onClose }) => {
  const [formData, setFormData] = useState({ name: '', cost: '', billingDate: '', category: '' });

  useEffect(() => {
    if (subscription) {
      setFormData({
        name: subscription.name,
        cost: subscription.cost,
        billingDate: subscription.billingDate,
        category: subscription.category || '',
      });
    } else {
      setFormData({ name: '', cost: '', billingDate: '', category: '' });
    }
  }, [subscription]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subscriptionData = { ...formData, cost: parseFloat(formData.cost) };
    
    try {
      if (subscription) {
        await apiClient.put(`/subscriptions/${subscription.id}`, subscriptionData);
      } else {
        await apiClient.post('/subscriptions', subscriptionData);
      }
      onSave();
    } catch (error) {
      console.error('Failed to save subscription', error);
      alert('Failed to save. Please check the details and try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">{subscription ? 'Edit Subscription' : 'Add New Subscription'}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name (e.g., Netflix)" required className="w-full px-4 py-2 border rounded-md" />
          <input type="number" name="cost" step="0.01" value={formData.cost} onChange={handleChange} placeholder="Monthly Cost" required className="w-full px-4 py-2 border rounded-md" />
          <input type="date" name="billingDate" value={formData.billingDate} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md text-gray-500" />
          <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category (e.g., Entertainment)" className="w-full px-4 py-2 border rounded-md" />
        </div>
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;