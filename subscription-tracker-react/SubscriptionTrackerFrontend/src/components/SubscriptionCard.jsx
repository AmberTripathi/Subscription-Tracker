import React from 'react';

const SubscriptionCard = ({ subscription, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-800">{subscription.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {subscription.category || 'General'}
          </span>
        </div>
        <p className="text-3xl font-light text-gray-900 mt-4">${subscription.cost}</p>
        <p className="text-sm text-gray-500">Next bill on: {subscription.billingDate}</p>
      </div>
      <div className="mt-6 flex justify-end space-x-2">
        <button onClick={() => onEdit(subscription)} className="text-sm text-gray-600 hover:text-blue-500">Edit</button>
        <button onClick={() => onDelete(subscription.id)} className="text-sm text-gray-600 hover:text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default SubscriptionCard;