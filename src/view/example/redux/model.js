import { Record } from 'immutable';

const LocationRecord = Record({
  latitude: undefined,
  longitude: undefined,
  address: undefined,
  country: undefined,
  province: undefined,
  city: undefined,
  district: undefined,
  street: undefined,
  streetNumber: undefined,
}, 'LocationRecord');

const ExampleModel = Record({
  domain: undefined,
  appname: undefined,
  location: undefined,
}, "ExampleModel");

export default ExampleModel;
export { LocationRecord };
