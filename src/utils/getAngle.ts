const getAngle = () => {
  const date: Date = new Date();

  // Get current hr,min,sec
  const hr: number = date.getHours();
  const min: number = date.getMinutes();
  const sec: number = date.getSeconds();

  // Set angle for hr,min,sec hands
  const hrDeg: number = (hr % 12) * 30 + min * 0.5;
  const minDeg: number = min * 6;
  const secDeg: number = sec * 6;

  return { hrDeg, minDeg, secDeg, sec };
};

export default getAngle;
