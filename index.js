const drivers = [{firstName: 'Bobby'}, {firstName: 'Sammy'}, {firstName: 'Sally'}, {firstName: 'Annette'}, {firstName: 'Sarah'}, {firstName: 'Bobby'}];
// function findMatching (collection, cb) {
//   for (const driver of collection) {
//     if (cb(driver)) {
//       return (driver.firstName);
//     }
//   }
// }
// findMathing (drivers, function (string) { return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin'; });

function findMatching (collection, string) {
  for (const driver of collection) {
    if (driver.firstName === string) {
      return (driver.firstName);
    }
  }
}
// filter(drivers, function (driver) { return driver.firstName === string; });
