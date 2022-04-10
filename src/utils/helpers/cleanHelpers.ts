export const isCorrectValue = (value: unknown): boolean => (typeof value === 'number' ? !Number.isNaN(value) : true);
export const isExist = (value: unknown): boolean => value !== undefined && value !== null && isCorrectValue(value);

export const debounce = <T extends unknown[]>(fn: (...args: T) => void, ms: number): ((...args: T) => void) => {
  let timeoutId: number;

  return (...args: T): void => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(...args), ms);
  };
};
