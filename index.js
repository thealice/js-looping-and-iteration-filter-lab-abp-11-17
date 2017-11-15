const drivers = [{firstName: 'Bobby'}, {firstName: 'Sammy'}, {firstName: 'Sally'}, {firstName: 'Annette'}, {firstName: 'Sarah'}, {firstName: 'Bobby'}];
function findMatching (collection, string) {
  for (const driver of collection) {
    if (string(driver)) {
      return (driver.firstName);
    }
  }
}

// function findMatching(name) {
//
// }
