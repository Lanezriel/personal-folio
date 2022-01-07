export function enableMotionSensor() {
  return new Promise((resolve, reject) => {
    if (DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission().then(permissionState => {
        if (permissionState === "granted") {
          resolve();
        } else {
          reject(new Error("permission denied"));
        }
      }).catch(e => {
        // This can happen when this method wasn't triggered by user interaction
        reject(e);
      });
    } else {
      resolve();
    }
  });
}

export function enableOrientationSensor() {
  return new Promise((resolve, reject) => {
    if (DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === "function") {
      DeviceOrientationEvent.requestPermission().then(permissionState => {
        if (permissionState === "granted") {
          resolve();
        } else {
          reject(new Error("permission denied"));
        }
      }).catch(e => {
        reject(e);
      });
    } else {
      resolve();
    }
  });
}