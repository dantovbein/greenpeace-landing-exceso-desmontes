'use client'

// import FeedbackForm from '@/app/_components/FeedbackForm'
// import { useAppContext } from './_contexts/app'
import { useEffect } from 'react';
import styles from '@/app/page.module.css'
// import Script from 'next/script';
// import { HubspotProvider, useHubspotForm } from 'next-hubspot';

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      console.log(window.hbspt)
      if(window.hbspt) {
        const form = window.hbspt.forms.create({
          region: "na1",
          portalId: "20432059",
          formId: "d047bc8f-5ece-4fef-9f27-df80cad9dd65",
          target: '#hubspot-form-wrapper',
        });
      }
    }, 2000)
  }, [])

  return (
    <section className={styles.main}>
      <h1 style={{textAlign: 'center'}}>MANAOS: EXCESO DE DESMONTES</h1><br/>
      <h2>¿Sabías cuál es el ingrediente secreto de Manaos? <strong className={styles.highlighted}>¡Bosques destruidos!</strong></h2>
      <p>La familia Canido, dueños de las gaseosas Manaos, tienen varias fincas por toda la provincia de Santiago del Estero. Allí desde hace una década vienen deforestando e intentando desalojar a familias campesinas e indígenas.</p>
      <p>Recientemente descubrimos que realizaron el desmonte de más de 10.000 hectáreas de bosques nativos, el tamaño de media ciudad de Buenos Aires, para producción ganadera.</p>
      <p>Las topadoras no se detienen y amenazan la rica biodiversidad de la región, con especies como el oso hormiguero, la corzuela, el pecarí, el loro hablador, y la tortuga terrestre. Además, se trata de la zona de pastoreo y uso del monte de comunidades campesinas.</p>
      <p>Destruir bosques es un crimen. Exigile con tu firma a los dueños de Manaos que paren de deforestar.</p>

      <div id="hubspot-form-wrapper" className={styles.hubspotForm}>Cargando formulario ...</div>
    </section>
  )
}








