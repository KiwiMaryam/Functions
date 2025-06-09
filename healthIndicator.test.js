import { healthIndicator } from './healthIndicator';

describe('healthIndicator', () => {
  test('should return healthy if health is greater than 50', () => {
    expect(healthIndicator({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('should return wounded if health is between 50 and 15', () => {
    expect(healthIndicator({ name: 'Воин', health: 40 })).toBe('wounded');
    expect(healthIndicator({ name: 'Танк', health: 15 })).toBe('wounded');
  });

  test('should return critical if health is 15 or less', () => {
    expect(healthIndicator({ name: 'Лучник', health: 10 })).toBe('critical');
    expect(healthIndicator({ name: 'Ассасин', health: 0 })).toBe('critical');
  });
});