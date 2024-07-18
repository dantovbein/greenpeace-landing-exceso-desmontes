'use client'

import { useEffect } from 'react';
import styles from '@/app/page.module.css'
import HomeText from './_components/HomeText';

declare global {
  interface Window {
    hbspt: any;
  }
}

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      if(window.hbspt) {
        window.hbspt.forms.create({
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
      <HomeText />
      <div id="hubspot-form-wrapper" className={styles.hubspotForm}>Cargando formulario ...</div>
    </section>
  )
}








