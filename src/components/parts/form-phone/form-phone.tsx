export default function FormPhone() {
  return (
    <div className="reg-form__tel">
      <label htmlFor="tel" className="form-label">Номер Телефона</label>
      <input type="tel" id="tel" placeholder="Ваш Телефон" className="reg-form__input reg-form__input--error" required/>
    </div>
  );
}
