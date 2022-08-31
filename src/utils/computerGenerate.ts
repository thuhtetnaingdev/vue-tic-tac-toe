export function generateComClick(clicks: Array<number>): number {
  const num = Math.floor(Math.random() * 9 + 1);
  if (clicks.includes(num)) {
    return generateComClick(clicks);
  }
  return num;
}
