import sleep from '../util/sleep';

export function fetchDomain(payload) {
  return sleep(5000).then(() => {
    return 'lvyii.com';
  })
}

export function fetchLocation(payload) {
  // return new Promise((resolve, reject) => {
  //   resolve({
  //     latitude: 20.23323,
  //     longitude: 122.34134,
  //     address: '湖南省长沙市岳麓区麓谷街道',
  //     country: '中国',
  //     province: '湖南省',
  //     city: '长沙市',
  //     district: '岳麓区',
  //     street: '麓谷街道',
  //     streetNumber: 23,
  //   })
  // })
  return sleep(1000).then(() => {
    return ({
      latitude: 20.23323,
        longitude: 122.34134,
      address: '湖南省长沙市岳麓区尖山路39号',
      country: '中国',
      province: '湖南省',
      city: '长沙市',
      district: '岳麓区',
      street: '尖山路',
      streetNumber: 39,
    })
  });
}