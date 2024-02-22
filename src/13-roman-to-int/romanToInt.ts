const numeralMap: Map<string, number> = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

export const romanToInt = (s: string): number => {
  let val = 0
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1) {
      const current = numeralMap.get(s[i]) ?? 0;
      const next = numeralMap.get(s[i+1]) ?? 0;
      if (current < next) {
        val += next-current;
        i++;
      } else {
        val += current;
      }
    } else {
      const numeral = s[i];
      val += numeralMap.get(numeral) ?? 0;
    }
  }
  return val;
}