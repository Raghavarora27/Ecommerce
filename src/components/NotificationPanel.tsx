import React from 'react';
import { Bug, UserPlus, Speaker, User, X } from 'lucide-react';
import { Notification, Activity, Contact } from '../types';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  activities: Activity[];
  contacts: Contact[];
}

const iconMap = {
  Bug,
  UserPlus,
  Speaker,
  User
};

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  isOpen,
  onClose,
  notifications,
  activities,
  contacts
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="notification-title">
      <div className="absolute inset-0 bg-black bg-opacity-25" onClick={onClose}></div>
      
      <div className="relative ml-auto h-full w-80 sm:w-96 bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 id="notification-title" className="text-lg font-semibold text-gray-900">Notifications</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close notifications panel"
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  onClose();
                }
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Notifications Section */}
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Notifications</h3>
              <div className="space-y-3">
                {notifications.map((notification) => {
                  const IconComponent = iconMap[notification.icon as keyof typeof iconMap];
                  return (
                    <div key={notification.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-gray-400 mt-0.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{notification.title}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Activities Section */}
            <div className="border-b border-gray-200 px-6 py-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Activities</h3>
              <div className="space-y-3">
                {activities.map((activity) => {
                  const IconComponent = iconMap[activity.icon as keyof typeof iconMap];
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-gray-400 mt-0.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contacts Section */}
            <div className="px-6 py-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Contacts</h3>
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div key={contact.id} className="flex items-center space-x-3">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-900">{contact.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
