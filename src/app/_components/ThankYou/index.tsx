'use client'

import { FC } from "react";
import styles from '@/app/_components/ThankYou/styles.module.css';
import { useAppContext } from "@/app/_contexts/app";
import HomeText from "../HomeText";
import Image from 'next/image';

interface IProps {
  children?: React.ReactNode;
}

export const Component:FC<IProps> = ({ children }) => {
  const { user } = useAppContext();

  return (
    <div className={styles.main}>
      { children && children }
      <h2 className={styles.thankyou_text}>Gracias por ayudarnos a detener este desmonte.</h2>
      <p>Ahora, además puedes enviarle un mail desde tu cuenta a los dueños de Manaos para que dejen de destruir nuestros bosques.</p>
      <nav>
        <a
          className={styles.btnEmail}
          href="mailto:info@refresnow.com.ar;recursoshumanos@refresnow.com.ar;social@manaosargentina.com.ar?cc=info@excesodedesmontes.org&subject=MANAOS: ¡BASTA%20DE%20DESMONTES!&body=Yo, junto a Greenpeace Argentina, exijo que los dueños de la empresa Manaos dejen de desmontar nuestros bosques nativos en Santiago del Estero. Ningún empresario debe llevar a cabo prácticas que atentan probadamente contra el ambiente y que agravan la actual situación de crisis climática y de biodiversidad que estamos viviendo. Destruir bosques es un crimen que debe terminar." target="_top">
            Enviar

            {/* <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo-manaos.svg)`} alt='Enviar email' width={100}/> */}

            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/email.svg`}
              alt="Facebook"
              width={30}
              height={64}
              className={styles.icon}
            />
        </a>
      </nav>
    </div>
  )
}

export default Component;
{/* <div
                className={styles.logoManaos}
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo-manaos.svg)`,
                }}
              /> */}
