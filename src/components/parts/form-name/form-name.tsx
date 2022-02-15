export default function FormName() {
  return (
    <div className="reg-form__name">
      <label htmlFor="name" className="form-label">Имя</label>
      <input type="text" id="name"  placeholder="Ваше Имя" className="reg-form__input" required/>
    </div>
  );
}
