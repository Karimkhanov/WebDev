// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }

//   No difference!

// In both cases, return confirm('Did parents allow you?')
//  executes exactly when the if condition is falsy.