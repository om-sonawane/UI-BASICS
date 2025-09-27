// string manipulation utilities

// Capitalizes the first letter of a string
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverses a string
export function reverseString(str) {
  if (typeof str !== 'string') return str;
  return str.split('').reverse().join('');
}

