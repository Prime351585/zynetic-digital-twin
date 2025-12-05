'use client';

import { useState, useEffect } from 'react';

import type { Notification } from '../../env.d.ts';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/charger/:id/notifications`);
        console.log('Fetch response:', response);
        if (!response.ok) {
          throw new Error('Failed to fetch notifications');
        }
        
        const data: Notification[] = await response.json();
        setNotifications(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching notifications:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();

   
  }, []);



  const removeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return {
    notifications,
    isLoading,
    error,
    removeNotification,
    clearAllNotifications,
  };
};
