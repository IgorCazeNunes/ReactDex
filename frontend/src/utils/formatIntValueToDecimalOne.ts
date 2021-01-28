const formatIntValueToDecimalOne = (value: number): string => {
  return `${value / 10},${value % 10}`;
};

export default formatIntValueToDecimalOne;
