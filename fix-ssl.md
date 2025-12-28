# Fix SSL Certificate Error

If you're getting "unable to get local issuer certificate" errors, try these solutions:

## Solution 1: Update CA Certificates (Recommended)

Run this command in your terminal:
```bash
brew install ca-certificates
```

Then restart your dev server.

## Solution 2: Update Node.js

Make sure you're using Node.js 18 or later:
```bash
node --version
```

If you're on an older version, update Node.js using nvm or download from nodejs.org.

## Solution 3: Set Environment Variable (Temporary Workaround)

For development only, you can temporarily disable SSL verification by adding this to your `.env.local`:
```
NODE_TLS_REJECT_UNAUTHORIZED=0
```

⚠️ **Warning**: Only use this for development. Never use this in production!

## Solution 4: Install Certificates via npm

Try installing the latest certificates:
```bash
npm install -g update-ca-certificates
```

After trying any of these solutions, restart your dev server.

