export function enableSensor() {
  return new Promise((resolve, reject) => {
    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission().then(permissionState => {
        if (permissionState === 'granted') {
          resolve('RELOAD');
        } else {
          reject(new Error('Permission denied'));
        }
      }).catch(e => {
        // This can happen when this method wasn't triggered by user interaction
        reject(e);
      });
    } else {
      resolve('OK');
    }
  });
}

export function iOSSafari() {
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iP(ad|hone)/i);
  const webkit = !!ua.match(/WebKit/i);
  return iOS && webkit && !ua.match(/(CriOS|OPiOS)/i);
}
