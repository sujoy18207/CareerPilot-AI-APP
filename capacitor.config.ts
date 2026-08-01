import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.careerpilot.app',
  appName: 'CareerPilot',
  webDir: 'out',
  server: {
    url: 'https://career-pilot-ai-app.vercel.app/',
    cleartext: true
  }
};

export default config;
