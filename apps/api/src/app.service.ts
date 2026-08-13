import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot() {
    return {
      name: 'Portfolio API',
      version: '1.0.0',
      status: 'running',
      timestamp: new Date().toISOString(),
    };
  }

  getHealth() {
    return {
      status: 'ok',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      node: process.version,
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    };
  }
}
