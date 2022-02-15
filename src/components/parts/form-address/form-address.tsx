export default function FormAddress() {
  return (
    <div className="reg-form__elem reg-form__elem--address">
      <label htmlFor="address" className="form-label">Адрес</label>
      <textarea name="address" id="address" className="reg-form__input reg-form__textarea" required>г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152</textarea>
    </div>
  );
}
