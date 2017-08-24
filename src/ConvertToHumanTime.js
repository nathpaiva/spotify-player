export default function convertToHumanTime(duration) {
  let s = parseInt((duration / 1000) % 60, 10);
  s = (s < 10) ? `0${s}` : s;

  // const m = parseInt((duration / (1000 * 60));
  const m = parseInt((duration / (1000 * 60)) % 60, 10);

  return `${m}:${s}`;
}
