import * as faker from 'faker';

class DataTableSandbox {
  modelGroup: any[];
  models: any[];

  constructor() {
    this.modelGroup = [
      { label: 'First Name', name: 'firstName', visible: true, type: 'text', filter: false },
      { label: 'Last Name', name: 'lastName', visible: true, type: 'textarea', filter: false },
      { label: 'Category', name: 'category', visible: true, type: 'textarea', filter: true },
      { label: 'Type', name: 'type', visible: true, type: 'textarea', filter: true }
     // { label: 'Donut', name: 'donut', visible: true, type: 'textarea', filter: true }
    ];
    this.models = this.onPopulateData();
  }

  onPopulateData(quantity = 60) {
    const records = [];
   // const quantity = 60;
    for (let i = 0; i < quantity; i++) {
      records.push(
        Object.assign(
          {},
          {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            category: faker.company.bsNoun(),
            type: faker.commerce.productAdjective(),
            donut: faker.name.lastName()
          }
        )
      );
    }
    return records;
  }
}

export const utils = new DataTableSandbox();
