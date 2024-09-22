import Section from '../components/Section';
import ReactIcon from '../assets/react.svg';
import NextIcon from '../assets/next.svg';
import FigmaIcon from '../assets/figma.svg';
import SassIcon from '../assets/sass.svg';
import TailwindIcon from '../assets/tailwind.svg';
import { motion } from 'framer-motion';
import NestIcon from '../assets/nest.svg';
import MongoIcon from '../assets/mongo.svg';
import PostgreIcon from '../assets/postgre.svg';
import DockerIcon from '../assets/docker.svg';
import AwsIcon from '../assets/aws.svg';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ModeContext } from '../context/ModeContext';

const SKILLS = [
  {
    category: 'Frontend',
    tools: [
      { name: 'React', icon: ReactIcon, caption: 'React' },
      { name: 'Next.js', icon: NextIcon, caption: 'Next.js' },
      { name: 'Figma', icon: FigmaIcon, caption: 'Figma' },
      { name: 'SASS', icon: SassIcon, caption: 'SASS' },
      { name: 'TailwindCSS', icon: TailwindIcon, caption: 'TailwindCSS' }
    ]
  },
  {
    category: 'Backend',
    tools: [
      {
        name: 'Express',
        icon: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png',
        caption: 'Express'
      },
      { name: 'NestJS', icon: NestIcon, caption: 'NestJS' },
      { name: 'MongoDB', icon: MongoIcon, caption: 'MongoDB' },
      { name: 'PostgreSQL', icon: PostgreIcon, caption: 'PostgreSQL' }
    ]
  },
  {
    category: 'DevOps',
    tools: [
      { name: 'Docker', icon: DockerIcon, caption: 'Docker' },
      { name: 'AWS', icon: AwsIcon, caption: 'AWS' }
    ]
  }
];

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);
  return (
    <motion.div className={`flex w-full justify-center px-6`}>
      <Section role={'region'} ariaLabel={'Skills section'} id='skills'>
        <div className=' w-full'>
          <h2
            className={`mt-48 mb-10 text-4xl font-bold tracking-tight ${
              mode === 'DARK' ? 'text-gray-200' : 'text-lightRed'
            } sm:text-6xl text-center`}>
            {language === 'ENGLISH' && 'Tools I use to create solutions'}
            {language === 'SPANISH' &&
              'Herramientas que uso para crear soluciones'}
            {language === 'ITALIAN' && 'Strumenti che uso per creare soluzioni'}
          </h2>
          <div className='flex flex-col  items-center md:flex-row md:items-baseline gap-2 md:gap-10 w-full'>
            {SKILLS.map((area) => {
              return (
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 }
                  }}
                  key={area.category}
                  className={`border rounded-3xl pb-8 px-4  w-full md:flex md:flex-grow flex-col ${
                    mode === 'DARK' ? 'bg-midGray' : 'bg-lightGray'
                  }`}>
                  <div className='mb-5'>
                    <h3
                      className={`mt-10 text-3xl font-bold tracking-tight ${
                        mode === 'DARK' ? 'text-gray-200' : 'text-lightRed'
                      } sm:text-5xl text-center`}>
                      {area.category}
                    </h3>
                  </div>
                  <div className='flex justify-evenly flex-wrap gap-2'>
                    {area.tools.map((tool) => {
                      return (
                        <div
                          key={tool.name}
                          className='flex flex-col items-center'>
                          <img
                            src={tool.icon}
                            width={56}
                            height={56}
                            alt={tool.name}
                            loading='lazy'
                            className={`w-14 ${
                              mode === 'DARK' &&
                              tool.name === 'Next.js' &&
                              'invert'
                            }`}
                          />
                          <figcaption>{tool.caption}</figcaption>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};
export default Skills;
