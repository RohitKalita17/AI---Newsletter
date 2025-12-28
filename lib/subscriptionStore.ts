'use client';

/**
 * Subscription store to manage email subscriptions
 * Currently uses localStorage for persistence, will be replaced with API calls later
 */

export interface Subscription {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
}

const STORAGE_KEY = 'ai_newsletter_subscriptions';

/**
 * Get all subscribed emails from storage
 */
export function getSubscribedEmails(): Subscription[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as Subscription[];
  } catch (error) {
    console.error('Error reading subscriptions from storage:', error);
    return [];
  }
}

/**
 * Add a new email subscription
 */
export function addSubscription(email: string): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const subscriptions = getSubscribedEmails();
    
    // Check if email already exists
    const exists = subscriptions.some(sub => sub.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return false; // Email already subscribed
    }
    
    // Add new subscription
    const newSubscription: Subscription = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      status: 'active',
    };
    
    subscriptions.push(newSubscription);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
    return true;
  } catch (error) {
    console.error('Error saving subscription:', error);
    return false;
  }
}

/**
 * Remove/unsubscribe an email
 */
export function removeSubscription(email: string): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const subscriptions = getSubscribedEmails();
    const filtered = subscriptions.filter(
      sub => sub.email.toLowerCase() !== email.toLowerCase()
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error removing subscription:', error);
    return false;
  }
}

/**
 * Check if an email is subscribed
 */
export function isSubscribed(email: string): boolean {
  const subscriptions = getSubscribedEmails();
  return subscriptions.some(
    sub => sub.email.toLowerCase() === email.toLowerCase() && sub.status === 'active'
  );
}

/**
 * Get subscription count
 */
export function getSubscriptionCount(): number {
  const subscriptions = getSubscribedEmails();
  return subscriptions.filter(sub => sub.status === 'active').length;
}

