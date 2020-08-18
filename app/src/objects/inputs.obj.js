import { Input, Datalist, Select } from './inputs.constructor.obj';

const basic = (settings) => new Input(settings).construct();
const datalist = (settings) => new Datalist(settings).construct();
const select = (settings) => new Select(settings).construct();

export const input = {
  text: basic,
  email: basic,
  password: basic,
  datalist,
  select,
};
