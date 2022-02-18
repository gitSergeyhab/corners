import { KEY_GEO_CODE_YANDEX } from '../const';

export const formatCoordinates = (coordinate: string | null) => {
  if (!coordinate) {
    return null;
  }
  const newCoordinate = coordinate.split(' ').map((item) => +item);
  if (!newCoordinate || newCoordinate.length !== 2 || !newCoordinate[0] || !newCoordinate[1]) {
    return null;
  }
  return newCoordinate;
};

export const getCoordinateFromResponse = (res: any): string | null => {
  try {
    const result = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
    return result;
  } catch {
    return null;
  }
};

export const getAddressFromResponse = (res: any): string | null => {
  try {
    const result = res.data.response.GeoObjectCollection.featureMember[0].GeoObject;
    const firstPart = result.description.split(', Россия')[0] || '';
    const secondPart = result.name ? `, ${result.name}` : '';
    return `${firstPart}${secondPart}`;
  } catch {
    return null;
  }
};

export const getStringAddressFromText = (text: string) => text.split(' ').join('+');

export const getGeoCoordinatesString = (coordinate: number[]) => `${coordinate[1]},${coordinate[0]}`;

export const getMapUrl = (params: string) => `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${KEY_GEO_CODE_YANDEX}&geocode=${params}`;
