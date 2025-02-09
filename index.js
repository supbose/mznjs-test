// run `node index.js` in the terminal
import { db, lib } from '@mznjs/helper';
import * as mznjs from '@mznjs/helper';

// import overlay from 'unstorage/drivers/overlay';
// import memory from 'unstorage/drivers/memory';
// import fs from 'unstorage/drivers/fs';

// const overlay = await import(builtinDrivers.overlay);
// const memory = await import(builtinDrivers.memory);
// const fs = await import(builtinDrivers.fs);
// const storage = createStorage({
//   base: 'app:',
//   driver: overlay.default({
//     layers: [fs.default({ base: './data' }), memory.default()],
//   }),
// });

// const storage = createStorage({
//   base: 'app:',
//   // driver: overlay({
//   //   layers: [fs({ base: './data' }), memory()],
//   // }),
// });
// await storage.setItem('1', 'test');
// await storage.setItem('2', 'test');
// await storage.setItem('3', 'test');
// await storage.setItem('4', 'test');
// await storage.setItem('5', 'test');
// const items = await storage.getItems(['1', '2', '3']);
await db.setItem('1', 'test');
await db.setItem('2', 'test');
await db.setItem('3', 'test');
await db.setItem('4', 'test');
await db.setItem('5', 'test');
const items = await db.getItems(['1', '2', '3','4','5']);
console.log({ items });
const id = mznjs.lib.id.nanoid();
console.log('id', id);

const id2 = lib.id.nanoid();
console.log('id2', id2);
//33311

