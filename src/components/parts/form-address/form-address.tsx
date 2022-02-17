import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinate } from '../../../store/api-actions';
import { getAddress } from '../../../store/map-reducer/map-reducer-selectors';

export default function FormAddress() {
  const address = useSelector(getAddress);

  const [valueAddress, setValueAddress] = useState(address);
  const [error, setError] = useState(false);

  useEffect(() => {
    setValueAddress(address);
  }, [address]);

  const dispatch = useDispatch();

  const handleAddressChange = (evt: FormEvent<HTMLTextAreaElement>) => {
    const value = evt.currentTarget.value;
    if (value) {
      setError(false);
    }
    setValueAddress(value); // чтобы менялось поле при событии на карте
  };

  const handleAddressBlur = () => {
    dispatch(fetchCoordinate(valueAddress));
    setError(!valueAddress);
  };

  const classesLabel = `form-label ${ error ? 'form-label--error' : ''}`;

  return (
    <div className="reg-form__elem reg-form__elem--address">
      <label htmlFor="address" className={classesLabel}>Адрес</label>
      <textarea
        onBlur={handleAddressBlur}
        onChange={handleAddressChange}
        value={valueAddress}
        name="address" id="address" className="reg-form__input reg-form__textarea" required
      >
      </textarea>
    </div>
  );
}
