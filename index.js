function findMatching (collection, string) {
  for (const driver of collection) {
    if (function (driver) { return driver.toLowerCase === string.toLowerCase; } ) {
      return driver;
    }
  }
}
// filter(drivers, function (driver) { return driver.firstName === string; });
// function (user) { return user.favoriteColor === 'Blue' && user.favoriteAnimal === 'Penguin'; }
