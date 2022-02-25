export function triangleType(sideOne, sideTwo, sideThree) {
  let triangle;
  if (sideOne === sideTwo && sideTwo === sideThree) {
    triangle = "Equilateral";
  } else if (
    sideOne !== sideTwo &&
    sideTwo !== sideThree &&
    sideOne !== sideThree
  ) {
    triangle = "Scalene";
  } else {
    triangle = "Isosceles";
  }
  return triangle;
}
