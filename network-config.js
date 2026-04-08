// Your computer's IP address on the network
const YOUR_IP = '192.168.88.22';

// Network API URL (for other devices on same WiFi)
const NETWORK_API_URL = `http://${YOUR_IP}:3000/api`;

// Local API URL (for your own computer)
const LOCAL_API_URL = 'http://localhost:3000/api';

// Auto-detect which to use
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? LOCAL_API_URL 
  : NETWORK_API_URL;

console.log('🌐 Pulse API URL:', API_URL);
console.log('📱 Share this URL with students: http://' + YOUR_IP + ':8080');