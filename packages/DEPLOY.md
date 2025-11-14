# Deployment Guide for csse.dev

## Initial Setup (First Time)

### 1. Pull Latest Changes

```bash
git pull origin main
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
cd proto
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Create .env File (CRITICAL!)

The `.env` file is NOT in git (for security). You need to create it on csse.dev:

```bash
cd server
nano .env
```

Add these lines (use your actual MongoDB Atlas credentials):

```
MONGO_USER=anissamsoungpanya_db_user
MONGO_PWD=jMPR9CgNjYBeHs4X
MONGO_CLUSTER=cluster0.ojo234c.mongodb.net
```

Save and exit (Ctrl+X, then Y, then Enter)

### 4. Build Frontend

```bash
cd ../proto
npm run build
```

### 5. Seed Database (First time only)

```bash
cd ../server
npm run seed
```

You should see:

```
✅ MongoDB connected successfully
🌱 Starting database seeding...
✅ Seeded park: Channel Islands (channel)
✅ Seeded park: Yosemite (yosemite)
✅ Seeded park: Zion (zion)
🎉 Database seeding completed!
```

### 6. Start the Server

#### Option A: Using nohup

```bash
cd server
npm run build
nohup node dist/index.js > server.log 2>&1 &
```

Check if running:

```bash
ps aux | grep "node dist/index.js"
```

View logs:

```bash
tail -f server/server.log
```

Stop server:

```bash
pkill -f "node dist/index.js"
```

#### Option B: Using PM2 (Recommended)

```bash
# Install PM2 globally (one time)
npm install -g pm2

# Start server
cd server
npm run build
pm2 start dist/index.js --name "parks-server"
pm2 save

# Useful commands:
pm2 list              # See running processes
pm2 logs parks-server  # View logs
pm2 stop parks-server  # Stop
pm2 restart parks-server  # Restart
pm2 startup           # Auto-start on reboot
```

## Updating After Git Pull

After pulling new changes:

```bash
# 1. Pull changes
git pull origin main

# 2. Rebuild frontend
cd proto
npm install  # Only if package.json changed
npm run build

# 3. Rebuild and restart server
cd ../server
npm install  # Only if package.json changed
npm run build

# 4. Restart server
# If using PM2:
pm2 restart parks-server

# If using nohup:
pkill -f "node dist/index.js"
nohup node dist/index.js > server.log 2>&1 &
```

## Troubleshooting

### MongoDB Connection Issues

- Verify `.env` file exists: `ls -la server/.env`
- Check `.env` contents: `cat server/.env` (be careful - contains passwords!)
- Make sure MongoDB Atlas allows connections from csse.dev's IP address

### Port Issues

- Check if port 4000 is in use: `lsof -i :4000`
- Change port by setting: `export PORT=3000` (or any available port)

### Server Not Starting

- Check logs: `tail -f server/server.log` or `pm2 logs parks-server`
- Verify build succeeded: `ls -la server/dist/`
