import { Record } from 'immutable';

const PositionRecord = Record({
  latitude: undefined,
  longitude: undefined,
  address: undefined,
  country: undefined,
  province: undefined,
  city: undefined,
  district: undefined,
  street: undefined,
  streetNumber: undefined,
}, 'PositionRecord');

const ExampleModel = Record({
  domain: undefined,
  appname: undefined,
  position: undefined,
}, "ExampleModel");

export default ExampleModel;
export { PositionRecord };
