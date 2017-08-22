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

const AboutModel = Record({
  domain: undefined,
  appname: undefined,
  location: undefined,
}, "AboutModel");

export default AboutModel;
export { LocationRecord };
