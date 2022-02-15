import FormAddress from '../form-address/form-address';
import FormEmail from '../form-email/form-email';
import FormName from '../form-name/form-name';
import FormPackage from '../form-package/form-package';
import FormPhone from '../form-phone/form-phone';
import FormComment from '../forrm-comment/forrm-comment';
import MapSection from '../map-section/map-section';

export default function RegistrationMap() {
  return (

    <section className="form__reg reg-form">

      <FormAddress/>

      <MapSection/>

      <div className="reg-form__elem reg-form__name-tel">
        <FormName/>
        <FormPhone/>
      </div>

      <FormEmail/>
      <FormPackage/>
      <FormComment/>

    </section>
  );
}
