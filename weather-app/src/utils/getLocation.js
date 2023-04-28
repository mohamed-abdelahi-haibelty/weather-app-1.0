
export const getLocation = () => {
    let location = null
    return new Promise((resolve, reject) => {
      const message = "We need to access your location to provide weather information. Can we use your current location?";
      const canAccessLocation = window.confirm(message);
  
      if (canAccessLocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          location = { lat, lon };
          resolve(location);
        }, error => {
          reject(`Error getting user location: ${error.message}`);
        });
      } else {
        reject(location);
      }
    });
  };
  