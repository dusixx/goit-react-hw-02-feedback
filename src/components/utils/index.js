export const isStr = v => typeof v === 'string';

export function cap(v) {
  return isStr(v) && v ? v[0].toUpperCase() + v.slice(1) : '';
}
