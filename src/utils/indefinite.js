export const indefinite = word => {
  return word.match(/^(a|e|i|o|u)/im) ? "an" : "a"
}
