export function pluralize(word, count, suffix = 's') {
  return `${word}${count !== 1 ? suffix : ''}`;
}