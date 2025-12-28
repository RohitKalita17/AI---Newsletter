import { getSubscribedEmails, Subscription } from './subscriptionStore';

/**
 * Utility functions for working with subscriptions
 * Can be used in both client and server components
 */

/**
 * Get all subscribed emails as a simple array
 */
export function getAllSubscribedEmails(): string[] {
  const subscriptions = getSubscribedEmails();
  return subscriptions
    .filter(sub => sub.status === 'active')
    .map(sub => sub.email);
}

/**
 * Get all subscription data
 */
export function getAllSubscriptions(): Subscription[] {
  return getSubscribedEmails();
}

/**
 * Export subscriptions as CSV format
 */
export function exportSubscriptionsAsCSV(): string {
  const subscriptions = getSubscribedEmails();
  const headers = 'Email,Subscribed At,Status\n';
  const rows = subscriptions
    .map(sub => `"${sub.email}","${sub.subscribedAt}","${sub.status}"`)
    .join('\n');
  return headers + rows;
}

