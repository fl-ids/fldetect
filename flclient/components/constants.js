const features = [
  {
    icon: "bell-alert-outline",
    title: "Real-time alerts",
    description: "Get real-time alerts about any suspicious activity on your network."
  },
  {
    icon: "shield-search",
    title: "System scanning",
    description: "Efficiently scan your entire system for potential threats."
  },
  {
    icon: "file-alert-outline",
    title: "Threat reports",
    description: "Access detailed reports on any threats detected."
  }
];

const faqData = [
  { question: "How do I start a security scan?", answer: "Navigate to the Dashboard and tap on 'Start Security Check'." },
  { question: "What permissions does the app require?", answer: "The app requires location and notification permissions to function properly." },
  { question: "How often should I run a security check?", answer: "We recommend running a security check at least once a week." },
  // Add more FAQ items as needed
];

const trainings = [
  { id: 1, name: 'IDS Model v1.0', date: '2024-08-15', duration: '2h 15m', dataSize: '1.5 GB', epochs: 50, accuracy: 0.92 },
  { id: 2, name: 'IDS Model v1.1', date: '2024-08-22', duration: '1h 45m', dataSize: '1.2 GB', epochs: 40, accuracy: 0.94 },
  { id: 3, name: 'IDS Model v1.2', date: '2024-08-29', duration: '2h 30m', dataSize: '1.8 GB', epochs: 60, accuracy: 0.95 },
  { id: 4, name: 'IDS Model v1.3', date: '2024-09-05', duration: '3h 00m', dataSize: '2.0 GB', epochs: 75, accuracy: 0.97 },
  { id: 5, name: 'IDS Model v1.4', date: '2024-09-12', duration: '2h 45m', dataSize: '1.7 GB', epochs: 55, accuracy: 0.96 },
];

const mobileIntrusionTypes = [
  'Malicious App Installation',
  'Unauthorized Root Access',
  'Suspicious API Call',
  'Abnormal Data Usage',
  'Potential Data Exfiltration',
  'Unusual GPS Access',
  'Unexpected Permission Change',
  'Suspicious Network Connection',
  'Possible SMS Interception',
  'Abnormal Battery Drain'
];

export { faqData, trainings, mobileIntrusionTypes };

export default features;