export default function suma(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Must be a number");
  }

  return a + b;
}
