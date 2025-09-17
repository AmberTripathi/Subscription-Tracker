import React, { useState, useEffect } from 'react';
import apiClient from '../services/api';
import SubscriptionList from '../components/SubscriptionList';
import SubscriptionForm from '../components/SubscriptionForm';

const DashboardPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const fetchSubscriptions = async () => {
    try {
      const response = await apiClient.get('/subscriptions');
      setSubscriptions(response.data);
    } catch (error) {
      console.error('Failed to fetch subscriptions', error);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const handleEdit = (subscription) => {
    setEditingSubscription(subscription);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this subscription?')) {
      try {
        await apiClient.delete(`/subscriptions/${id}`);
        fetchSubscriptions();
      } catch (error) {
        console.error('Failed to delete subscription', error);
      }
    }
  };
  
  const handleFormSave = () => {
    setIsFormVisible(false);
    setEditingSubscription(null);
    fetchSubscriptions();
  };

  const showAddForm = () => {
    setEditingSubscription(null);
    setIsFormVisible(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Subscriptions</h1>
        <button
          onClick={showAddForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          + Add Subscription
        </button>
      </div>

      {isFormVisible && (
        <SubscriptionForm 
          subscription={editingSubscription} 
          onSave={handleFormSave} 
          onClose={() => setIsFormVisible(false)}
        />
      )}

      <SubscriptionList 
        subscriptions={subscriptions} 
        onEdit={handleEdit} 
        onDelete={handleDelete}
      />
    </div>
  );
};

export default DashboardPage;