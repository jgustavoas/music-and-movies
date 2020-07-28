import { Input, Datalist, Select } from './inputs.constructor.obj';

export const input = {
  text(name, value, isValid) {
    return new Input(name, value).construct(isValid);
  },
  email(name, isValid) {
    return new Input(name, {}, 'email').construct(isValid);
  },
  password(name, isValid) {
    return new Input(name, {}, 'password').construct(isValid);
  },
  datalist(name, value, isValid, list) {
    return new Datalist(name, value, list).construct(isValid);
  },
  select(name, value, isValid, options) {
    return new Select(name, value, options).construct(isValid);
  },
};
