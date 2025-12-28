const fs = require('fs');
const path = require('path');

const envContent = `NEXT_PUBLIC_SUPABASE_URL=https://llvsnwoegckmlyieidab.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsdnNud29lZ2NrbWx5aWVpZGFiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjkxNTg5MywiZXhwIjoyMDgyNDkxODkzfQ.OF9MYIt0ELCR3L3nUlgkbjYNS1nvUTCHnY4tfhvnCdE
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsdnNud29lZ2NrbWx5aWVpZGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5MTU4OTMsImV4cCI6MjA4MjQ5MTg5M30.n5fbr5zoTyI3qAGpYKfHXMKSS5SCYPCEf3Q0dnvodGM
`;

const envPath = path.join(__dirname, '.env.local');

try {
  fs.writeFileSync(envPath, envContent, 'utf8');
  console.log('✅ .env.local file created successfully!');
  console.log('\nFile location:', envPath);
  console.log('\nFile contents:');
  console.log(fs.readFileSync(envPath, 'utf8'));
  console.log('\n⚠️  IMPORTANT: Restart your dev server (npm run dev) for changes to take effect!');
} catch (error) {
  console.error('❌ Error writing .env.local:', error.message);
  process.exit(1);
}

