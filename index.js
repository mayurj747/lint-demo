// This file intentionally contains lint errors for demonstration purposes.

const greeting = "hello world";

function add(a, b) {
  return a + b;
}

// Using == instead of === (eqeqeq error)
if (1 == "1") {
  console.log("loose equality used");
}
