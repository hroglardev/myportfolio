import Section from '../components/Section';
import { motion } from 'framer-motion';
import {
  CloudIcon,
  CodeBracketIcon,
  LockClosedIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ModeContext } from '../context/ModeContext';
const features = [
  {
    icon: CodeBracketIcon,
    ENGLISH: {
      name: 'Fullstack development',
      description:
        'Building robust web applications whether you need a backend system, a frontend system or both.'
    },
    SPANISH: {
      name: 'Desarrollo Fullstack',
      description:
        'Construyendo aplicaciones web robustas, ya sea que necesites un sistema backend, un sistema frontend o ambos.'
    },
    ITALIAN: {
      name: 'Sviluppo Fullstack',
      description:
        'Costruzione di applicazioni web robuste, sia che tu abbia bisogno di un sistema backend, di un sistema frontend o di entrambi.'
    }
  },
  {
    icon: LockClosedIcon,
    ENGLISH: {
      name: 'Security Best Practices',
      description:
        'Implementing advanced security measures, including authorization and encryption, to protect user data.'
    },
    SPANISH: {
      name: 'Mejores Prácticas de Seguridad',
      description:
        'Implementación de medidas de seguridad avanzadas, incluyendo autorización y encriptación, para proteger los datos de los usuarios.'
    },
    ITALIAN: {
      name: 'Migliori Pratiche di Sicurezza',
      description:
        "Implementazione di misure di sicurezza avanzate, inclusa l'autorizzazione e la crittografia, per proteggere i dati degli utenti."
    }
  },
  {
    icon: CloudIcon,
    ENGLISH: {
      name: 'Cloud Integration',
      description:
        'Leveraging AWS services for scalable and reliable cloud infrastructure to ensure your services are highly available.'
    },
    SPANISH: {
      name: 'Integración en la Nube',
      description:
        'Aprovechando los servicios de AWS para una infraestructura en la nube escalable y confiable, asegurando que tus servicios estén altamente disponibles.'
    },
    ITALIAN: {
      name: 'Integrazione Cloud',
      description:
        "Sfruttando i servizi AWS per un'infrastruttura cloud scalabile e affidabile, garantendo che i tuoi servizi siano altamente disponibili."
    }
  },
  {
    icon: ChartBarIcon,
    ENGLISH: {
      name: 'Performance Optimization',
      description:
        'Optimizing application performance through code reviews, load testing, and monitoring to ensure smooth user experiences.'
    },
    SPANISH: {
      name: 'Optimización del Rendimiento',
      description:
        'Optimizando el rendimiento de la aplicación a través de revisiones de código, pruebas de carga y monitoreo para asegurar experiencias de usuario fluidas.'
    },
    ITALIAN: {
      name: 'Ottimizzazione delle Prestazioni',
      description:
        'Ottimizzazione delle prestazioni delle applicazioni attraverso revisioni del codice, test di carico e monitoraggio per garantire esperienze utente fluide.'
    }
  }
];
const Services = () => {
  const { language } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);
  return (
    <div className={`flex w-full justify-center px-6 `}>
      <Section role={'region'} ariaLabel={'Services section'} id='services'>
        <div className='w-full py-24 sm:py-32'>
          <div className='mx-auto w-full px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl lg:text-center'>
              <h2
                className={`mt-10 text-4xl font-bold tracking-tight ${
                  mode === 'DARK' ? 'text-gray-200' : 'text-lightRed'
                } sm:text-6xl text-center`}>
                {language === 'ENGLISH' && 'What I offer'}
                {language === 'SPANISH' && 'Lo que ofrezco'}
                {language === 'ITALIAN' && 'Cosa offro'}
              </h2>
              <p
                className={`mt-6 text-lg leading-8 text-gray-200 ${
                  mode === 'DARK' ? 'text-gray-200' : 'text-gray-950'
                }`}>
                {language === 'ENGLISH' &&
                  'I specialize in delivering high-quality web development services, leveraging modern technologies and best practices to build solutions that meet the appropriate requirements.'}
                {language === 'SPANISH' &&
                  'Me especializo en ofrecer servicios de desarrollo web de alta calidad, aprovechando las tecnologías modernas y las mejores prácticas para construir soluciones que cumplan con los requisitos adecuados.'}
                {language === 'ITALIAN' &&
                  'Mi specializzo nella fornitura di servizi di sviluppo web di alta qualità, sfruttando le tecnologie moderne e le migliori pratiche per creare soluzioni che soddisfino i requisiti appropriati.'}
              </p>
            </div>
            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
              <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                {features.map((feature, index) => (
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: {
                        opacity: 0,
                        x: index === 0 || index === 2 ? -100 : 100
                      }
                    }}
                    key={feature[language].name}
                    className='relative pl-16'
                    index={index}>
                    <dt className='text-base font-semibold leading-7'>
                      <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-darkRed'>
                        <feature.icon
                          aria-hidden='true'
                          className='h-6 w-6 text-white'
                        />
                      </div>
                      {feature[language].name}
                    </dt>
                    <dd
                      className={`mt-2 text-base leading-7 ${
                        mode === 'DARK' ? 'text-gray-200' : 'text-gray-900'
                      }`}>
                      {feature[language].description}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default Services;
