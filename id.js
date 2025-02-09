import * as mznjs from '@mznjs/helper';
import { consola as log } from "consola";
const id = mznjs.lib.id.nanoid();
console.log('id', id);
const id2 = mznjs.lib.id.customAlphabet('1234567890', 10)();
console.log('id2', id2);
log.info(id2)
log.info(id)