import { types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const Store = types
  .model({
    count: 0,
  })
  .actions((self) => ({
    increment() {
      self.count++;
    },
  }));

const store = Store.create();
makeInspectable(store);

export default store;
