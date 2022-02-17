import { FocusEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoordinate } from '../../../store/api-actions';
import { getAddress } from '../../../store/map-reducer/map-reducer-selectors';

export default function FormAddress() {
  const address = useSelector(getAddress);
  console.log('address', address);

  const [valueAddress, setValueAddress] = useState(address);

  console.log('valueAddress', valueAddress);

  useEffect(() => {
    setValueAddress(address);
  }, [address]);

  const dispatch = useDispatch();

  const handleAddressChange = (evt: FormEvent<HTMLTextAreaElement>) => {
    const value = evt.currentTarget.value;
    setValueAddress(value); // чтобы менялось поле при событии на карте
  };

  const handleAddressBlur = () => {

    dispatch(fetchCoordinate(valueAddress));
  };


  return (
    <div className="reg-form__elem reg-form__elem--address">
      <label htmlFor="address" className="form-label">Адрес</label>
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
