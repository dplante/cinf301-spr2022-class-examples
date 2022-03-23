import faker from "faker";

/*
 * See: https://marak.github.io/faker.js/
 *
 * This site no longer works, so neither does this code.
 */
function createFakeRow(index) {
  return {
    id: index,
    animals: faker.image.animals(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    date: faker.date.past().toLocaleDateString(),
    companyName: faker.company.companyName(),
  };
}

export default function createRowData(count) {
  return [...Array(count).keys()].map(i => createFakeRow(i));
}
