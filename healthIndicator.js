export const healthIndicator = (character) => {
  const { health } = character;

  if (health > 50) {
    return 'healthy';
  } else if (health < 51 && health >= 15) {
    return 'wounded';
  } else if (health < 15){
    return 'critical';
  }
};