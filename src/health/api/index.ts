import { Router } from 'express';
import health from './health';

export default function () {
  const router = Router();
  router.use('/health', health());
  return router;
}
