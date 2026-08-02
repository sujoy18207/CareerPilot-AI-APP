import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.careerpilot.app',
  appName: 'CareerPilot',
  webDir: 'out',
  server: {
    url: 'https://www.careerpilot.cc/',
    cleartext: true
  },
  plugins: {
    CapacitorCookies: {
      enabled: true
    }
  }
};

export default config;
