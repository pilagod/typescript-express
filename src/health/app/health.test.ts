import HealthUseCase from './health';

describe('HealthUseCase', () => {
  describe('ping', () => {
    it('should return given message', () => {
      const health = new HealthUseCase('Hello World!');
      expect(health.check()).toBe('Hello World!');
    });
  });
});
