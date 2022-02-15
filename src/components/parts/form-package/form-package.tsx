export default function FormPackage() {
  return (
    <div className="reg-form__elem  package package--up" >
      <label htmlFor="package" className="form-label">Тип Упаковки</label>
      <input type="text" id="package" placeholder="Тип Упаковки" className="reg-form__input" required/>
    </div>
  );
}
