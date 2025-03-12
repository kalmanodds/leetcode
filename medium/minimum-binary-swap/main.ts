export function minSwaps(s: string): number {
  const errorCount = {
    odd: {
      zero: 0,
      one: 0,
    },
    even: {
      zero: 0,
      one: 0,
    },
  };
  for (let i = 0; i < s.length; i++) {
    const isEvenPosition = i % 2 === 0;
    if (isEvenPosition) {
      if (s[i] === "1") {
        errorCount.odd.one++;
      } else {
        errorCount.even.zero++;
      }
    } else {
      if (s[i] === "1") {
        errorCount.even.one++;
      } else {
        errorCount.odd.zero++;
      }
    }
  }

  const { odd, even } = errorCount;
  const minSwapsForOdd = minSwapsForStringType(odd);
  const minSwapsForEven = minSwapsForStringType(even);
  if (
    minSwapsForEven === Number.MAX_SAFE_INTEGER &&
    minSwapsForOdd === Number.MAX_SAFE_INTEGER
  ) {
    return -1;
  }
  return Math.min(minSwapsForOdd, minSwapsForEven);
}

type ErrorCount = { zero: number; one: number };

function minSwapsForStringType({ zero, one }: ErrorCount) {
  if (zero === one) return zero;

  return Number.MAX_SAFE_INTEGER;
}
