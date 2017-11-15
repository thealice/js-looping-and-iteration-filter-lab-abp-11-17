const drivers = [{firstName: 'Bobby'}, {firstName: 'Sammy'}, {firstName: 'Sally'}, {firstName: 'Annette'}, {firstName: 'Sarah'}, {firstName: 'Bobby'}];
function filter (collection, cb) {
  for (const driver of collection) {
    if (cb(driver)) {
      return (driver.firstName);
    }
  }
}

// function findMatching(name) {
// 
// }
