//  fullName(person): Returns the full name of a person object (given properties firstName and lastName).
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

//  isAdult(person): Checks if a person is 18 or older (given property age).
function isAdult(person) {
    return person.age >= 18;
}

//  filterByAge(people, minAge): Filters an array of person objects to keep only those at least minAge years old.
function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}
