import { getEnvValue } from './utils';

const appPort = getEnvValue('NEXT_PUBLIC_APP_PORT');
const appSchema = getEnvValue('NEXT_PUBLIC_APP_PROTOCOL');
const appHost = getEnvValue('NEXT_PUBLIC_APP_HOST');
const baseUrl = [
  appSchema || 'https',
  '://',
  appHost,
  appPort && ':' + appPort,
].filter(Boolean).join('');
const isDev = getEnvValue('NEXT_PUBLIC_APP_ENV') === 'development';

const app = Object.freeze({
  isDev,
  protocol: appSchema,
  host: appHost,
  port: appPort,
  baseUrl,
  useProxy: getEnvValue('NEXT_PUBLIC_USE_NEXT_JS_PROXY') === 'true',
  buildbearBase: getEnvValue('NEXT_PUBLIC_BUILDBEAR_BASE'),
  buildbearTawkPropertyId: getEnvValue('NEXT_PUBLIC_TAWK_PROPERTYID'),
  buildbearTawkWidgetId: getEnvValue('NEXT_PUBLIC_TAWK_WIDGETID'),
});

export default app;
