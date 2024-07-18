'use client'

import { FC } from "react";
import styles from '@/app/_components/HomeText/styles.module.css';

const HomeText: FC<{}> = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.heading1} style={{textAlign: 'center'}}>MANAOS: EXCESO DE DESMONTES</h1><br/>
      <h2 className={styles.heading2}>¿Sabías cuál es el ingrediente secreto de Manaos? ¡Bosques destruidos!</h2>
      <p className={styles.text}>La familia Canido, dueños de las gaseosas Manaos, tienen varias fincas por toda la provincia de Santiago del Estero. Allí desde hace una década vienen deforestando e intentando desalojar a familias campesinas e indígenas.</p>
      <p className={styles.text}>Recientemente descubrimos que realizaron el desmonte de más de 10.000 hectáreas de bosques nativos, el tamaño de media ciudad de Buenos Aires, para producción ganadera.</p>
      <p className={styles.text}>Las topadoras no se detienen y amenazan la rica biodiversidad de la región, con especies como el oso hormiguero, la corzuela, el pecarí, el loro hablador, y la tortuga terrestre. Además, se trata de la zona de pastoreo y uso del monte de comunidades campesinas.</p>
      <p className={styles.text}>Destruir bosques es un crimen. <strong className={styles.highlighted}>Exigile con tu firma a los dueños de Manaos que paren de deforestar.</strong></p>
    </section>
  )
}

HomeText.displayName = 'HomeText';
export default HomeText;
