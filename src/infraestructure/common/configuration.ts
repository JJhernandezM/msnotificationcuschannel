import { registerAs } from '@nestjs/config';


export default registerAs('configuration', () => ({
    PORT: parseInt(process.env.PORT) || 3000,
    TIMEOUT: parseInt(process.env.TIMEOUT, 10) || 60000,
    APM: {
        HOST: process.env.APM_HOST,
        ENVIRONMENT: process.env.APM_ENVIRONMENT,
        ISACTIVE: process.env.APM_ISACTIVE === 'true',
      }
}))