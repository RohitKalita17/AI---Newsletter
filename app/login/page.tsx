import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 p-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-white">Login</h1>
        <p className="mb-8 text-white/60">
          Login functionality will be implemented in a later phase.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

