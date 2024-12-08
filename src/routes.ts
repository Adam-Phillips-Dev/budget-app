import express, { Router } from 'express';
import { Echo, HealthCheck } from './controllers/health_controller';

const DefaultRouter: Router = express.Router();

// System Info
DefaultRouter.get('/health', HealthCheck);
DefaultRouter.get('/echo', Echo);

export default DefaultRouter;