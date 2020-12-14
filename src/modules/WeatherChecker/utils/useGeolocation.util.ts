import React from 'react';

const PositionInitialValues = { latitude: 0, longitude: 0 };

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export const useGeolocation = () => {
  const [position, setPosition] = React.useState(PositionInitialValues);

  const onChange = (position: Position) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  React.useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      throw new Error('Geolocation is not supported');
    }
    const watcher = geolocation.watchPosition(onChange);

    return () => geolocation.clearWatch(watcher);
  }, []);

  return { ...position };
};
