import React from 'react';
import SubscriptionCard from './SubscriptionCard';

const SubscriptionList = ({ subscriptions, onEdit, onDelete }) => {
  if (subscriptions.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-8 text-center text-gray-500">
        <p>No subscriptions found. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subscriptions.map((sub) => (
        <SubscriptionCard 
          key={sub.id} 
          subscription={sub} 
          onEdit={onEdit} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default SubscriptionList;