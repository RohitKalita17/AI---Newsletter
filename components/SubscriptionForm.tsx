'use client';

import { useState } from 'react';
import { useSubscriptions } from '@/hooks/useSubscriptions';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { subscribe } = useSubscriptions();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('loading');
    setErrorMessage('');

    const result = await subscribe(email);
    
    if (result.success) {
      setStatus('success');
      setEmail('');
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    } else {
      setStatus('error');
      setErrorMessage(result.message);
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-0">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 sm:rounded-r-none sm:border-r-0"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black px-6 py-3 font-medium text-white transition-all hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed sm:rounded-l-none"
      >
        {status === 'loading' ? (
          'Subscribing...'
        ) : status === 'success' ? (
          <>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Subscribed!
          </>
        ) : (
          <>
            Subscribe
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
      
      {status === 'error' && errorMessage && (
        <div className="mt-2 text-sm text-red-400 sm:absolute sm:mt-12">
          {errorMessage}
        </div>
      )}
    </form>
  );
}

