# Troubleshooting csse.dev Connection Issues

## Check if Server is Running

On csse.dev, run these commands:

```bash
# Check if the process is running
ps aux | grep "node dist/index.js"

# Check what's listening on port 4000
lsof -i :4000
# or
netstat -tlnp | grep 4000
```

## Check Server Logs

```bash
cd /home/asoungpa/CSC437/packages/server
tail -f server.log
# or
cat server.log
```

Look for:

- "✅ MongoDB connected successfully"
- "Server running at http://0.0.0.0:4000"

## Restart the Server Properly

```bash
cd /home/asoungpa/CSC437/packages/server

# 1. Kill any existing processes
pkill -f "node dist/index.js"

# 2. Wait a moment
sleep 2

# 3. Rebuild
npm run build

# 4. Start with nohup
nohup node dist/index.js > server.log 2>&1 &

# 5. Check it started
sleep 2
ps aux | grep "node dist/index.js"

# 6. Check logs
tail -20 server.log
```

## Test Locally on csse.dev

```bash
# Test if server responds locally
curl http://localhost:4000/hello
# Should return: "Hello from server!"

# Test API
curl http://localhost:4000/api/parks
# Should return JSON
```

## Firewall/Port Issues

If localhost works but external doesn't:

```bash
# Check if port 4000 is open
sudo ufw status
# or
sudo iptables -L

# Check if nginx is configured
sudo systemctl status nginx
```

## Alternative: Use Different Port

If port 4000 is blocked, try a different port:

```bash
cd server
PORT=3000 nohup node dist/index.js > server.log 2>&1 &
```

Then access: `http://asoungpa.csse.dev:3000/`
