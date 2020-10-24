function formatNumber(number: number): string {
  if (number > 999) {
    return `${Math.sign(number) * Number((number / 1000).toFixed(1))}K`;
  }

  return String(number);
}

export default formatNumber;
