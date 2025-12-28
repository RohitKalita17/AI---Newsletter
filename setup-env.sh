#!/bin/bash
cd "$(dirname "$0")"

cat > .env.local << 'ENVEOF'
NEXT_PUBLIC_SUPABASE_URL=https://llvsnwoegckmlyieidab.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsdnNud29lZ2NrbWx5aWVpZGFiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjkxNTg5MywiZXhwIjoyMDgyNDkxODkzfQ.OF9MYIt0ELCR3L3nUlgkbjYNS1nvUTCHnY4tfhvnCdE
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsdnNud29lZ2NrbWx5aWVpZGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5MTU4OTMsImV4cCI6MjA4MjQ5MTg5M30.n5fbr5zoTyI3qAGpYKfHXMKSS5SCYPCEf3Q0dnvodGM
ENVEOF

echo "✅ .env.local file created successfully!"
echo ""
echo "File contents:"
cat .env.local
echo ""
echo "⚠️  IMPORTANT: Restart your dev server (npm run dev) for changes to take effect!"

