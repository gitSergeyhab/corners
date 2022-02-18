import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress } from '../../../store/api-actions';
import { getCoordinates } from '../../../store/map-reducer/map-reducer-selectors';
import { useState } from 'react';


const ZOOM = 17;
const PRESET = 'islands#blackStretchyIcon';
const COLOR = 'black';


export default function MapSection() {

  const dispatch = useDispatch();
  const coordinates = useSelector(getCoordinates);
  const [localCoords, setLocalCoords] = useState(coordinates);


  const handleMouseUp = () => dispatch(fetchAddress(localCoords));
  const handleMarkDrag = (evt) => setLocalCoords(evt.originalEvent.target.geometry._coordinates);

  return (
    <section className="map-section">
      <YMaps>
        <div
          onMouseUp={ handleMouseUp }
          onTouchEnd={ handleMouseUp }
        >
          <Map
            modules={['Placemark', 'geocode', 'geoObject.addon.balloon']}
            state={{ center: coordinates, zoom: ZOOM }}
            height="100%"
            width="100%"
          >
            <Placemark
              geometry={coordinates}
              options={{preset: PRESET, iconColor: COLOR, draggable: true}}
              onGeometryChange={handleMarkDrag}
            />
          </Map>
        </div>
      </YMaps>
    </section>
  );
}
