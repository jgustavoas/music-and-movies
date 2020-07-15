import { Input, Datalist, Select } from './inputs.constructor.obj';

export const input = {
  text(name, isValid) {
    return new Input(name).construct(isValid);
  },
  email(name, isValid) {
    return new Input(name, 'email').construct(isValid);
  },
  password(name, isValid) {
    return new Input(name, 'password').construct(isValid);
  },
  datalist(name, isValid, list) {
    return new Datalist(name, list).construct(isValid);
  },
  select(name, isValid, options) {
    return new Select(name, options).construct(isValid);
  },
};
