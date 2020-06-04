import { Response, Router } from 'express';
import HealthUseCase from '@health/app/health';

export default function () {
  const router = Router();
  router.get('/', ({}, res: Response) => {
    const health = new HealthUseCase('Hello There!');
    res.status(200).json({
      success: true,
      data: {
        message: health.check(),
      },
    });
  });
  return router;
}
