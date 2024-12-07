export function generatePassword(length, options) {
  const charSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+',
  };

  const ambiguousChars = 'il1Lo0O';
  let chars = '';

  Object.keys(options).forEach(option => {
    if (options[option]) {
      chars += charSets[option];
    }
  });

  if (options.excludeAmbiguous) {
    chars = chars.split('').filter(char => !ambiguousChars.includes(char)).join('');
  }

  if (chars.length === 0) return '';

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}