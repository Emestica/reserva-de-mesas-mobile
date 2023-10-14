import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'reserva.mesas.app',
  appName: 'reserva-de-mesas-mobile',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
