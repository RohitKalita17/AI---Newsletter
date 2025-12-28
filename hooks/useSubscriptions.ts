'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  getSubscribedEmails,
  addSubscription,
  removeSubscription,
  isSubscribed as checkIsSubscribed,
  getSubscriptionCount,
  Subscription,
} from '@/lib/subscriptionStore';

export interface UseSubscriptionsReturn {
  subscriptions: Subscription[];
  subscribe: (email: string) => Promise<{ success: boolean; message: string }>;
  unsubscribe: (email: string) => Promise<{ success: boolean; message: string }>;
  isSubscribed: (email: string) => boolean;
  count: number;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

/**
 * Custom hook to manage email subscriptions
 * Handles subscription logic and persistence
 */
export function useSubscriptions(): UseSubscriptionsReturn {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load subscriptions from storage
  const loadSubscriptions = useCallback(() => {
    try {
      const stored = getSubscribedEmails();
      setSubscriptions(stored);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load subscriptions');
    }
  }, []);

  useEffect(() => {
    loadSubscriptions();
  }, [loadSubscriptions]);

  const subscribe = useCallback(async (email: string): Promise<{ success: boolean; message: string }> => {
    setLoading(true);
    setError(null);

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setLoading(false);
        return {
          success: false,
          message: 'Please enter a valid email address',
        };
      }

      // Check if already subscribed locally
      if (checkIsSubscribed(email)) {
        setLoading(false);
        return {
          success: false,
          message: 'This email is already subscribed',
        };
      }

      // Call the API to save to Supabase
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        setLoading(false);
        return {
          success: false,
          message: 'Server returned an invalid response. Please try again.',
        };
      }

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return {
          success: false,
          message: data.error || 'Failed to subscribe. Please try again.',
        };
      }

      // If API call successful, also add to local storage
      const success = addSubscription(email);

      if (success) {
        loadSubscriptions();
        setLoading(false);
        return {
          success: true,
          message: 'Successfully subscribed!',
        };
      } else {
        setLoading(false);
        return {
          success: false,
          message: 'Failed to subscribe. Please try again.',
        };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
      setLoading(false);
      return {
        success: false,
        message: errorMessage,
      };
    }
  }, [loadSubscriptions]);

  const unsubscribe = useCallback(async (email: string): Promise<{ success: boolean; message: string }> => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Remove subscription (in real app, this would be an API call)
      const success = removeSubscription(email);

      if (success) {
        loadSubscriptions();
        setLoading(false);
        return {
          success: true,
          message: 'Successfully unsubscribed',
        };
      } else {
        setLoading(false);
        return {
          success: false,
          message: 'Failed to unsubscribe. Please try again.',
        };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
      setLoading(false);
      return {
        success: false,
        message: errorMessage,
      };
    }
  }, [loadSubscriptions]);

  const checkIsSubscribedWrapper = useCallback((email: string): boolean => {
    return checkIsSubscribed(email);
  }, []);

  const count = getSubscriptionCount();

  return {
    subscriptions,
    subscribe,
    unsubscribe,
    isSubscribed: checkIsSubscribedWrapper,
    count,
    loading,
    error,
    refresh: loadSubscriptions,
  };
}

