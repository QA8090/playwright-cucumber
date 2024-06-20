import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    baseURL: 'https://www.zoro.co.uk',
    viewport: { width: 1280, height: 720 },
  },
};

export default config;
