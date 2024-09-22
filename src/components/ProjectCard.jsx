import { motion } from 'framer-motion';
import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ModeContext } from '../context/ModeContext';

const ProjectCard = ({ title, src, description, index, repo, live }) => {
  const { language } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);
  return (
    <>
      <motion.article
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ delay: index * 0.21 }}
        variants={{
          visible: { scale: 1 },
          hidden: { scale: 0 }
        }}
        className={`relative p-8 flex max-h-[260px] max-w-[520px] justify-between gap-4 rounded-3xl border shadow-lg ${
          mode === 'DARK' ? 'bg-midGray' : 'bg-lightGray'
        }`}>
        <div className='w-full'>
          <h4 className='text-xl font-bold'>{title}</h4>
          <p
            className={`mt-3 text-sm ${
              mode === 'DARK' ? 'text-gray-200' : 'text-gray-900'
            }`}>
            {description}
          </p>
        </div>

        <div className=' w-full border hidden sm:flex rounded-3xl'>
          <img
            src={src}
            alt={title}
            loading='lazy'
            className='max-h-full max-w-full object-cover aspect-video rounded-3xl'
          />
        </div>

        <div className='absolute flex gap-4 -bottom-5 left-10'>
          <a
            href={repo}
            target='_blank'
            className='bg-lightRed text-white hover:bg-darkRed transition-all rounded-full p-2 px-3 flex items-center gap-2'>
            <CodeBracketIcon className='w-6 h-6' />
            <p className='hidden xsm:block'>
              {language === 'ENGLISH' && 'Repository'}
              {language === 'SPANISH' && 'Repositorio'}
              {language === 'ITALIAN' && 'Repository'}
            </p>
          </a>
          <a
            href={live}
            target='_blank'
            className='bg-lightRed text-white hover:bg-darkRed transition-all rounded-full p-2 px-3 flex items-center gap-2'>
            <LinkIcon className='w-6 h-6' />
            <p className='hidden xsm:block'>
              {language === 'ENGLISH' && 'Live Version'}
              {language === 'SPANISH' && 'Versión en Vivo'}
              {language === 'ITALIAN' && 'Versione Live'}
            </p>
          </a>
        </div>
      </motion.article>
    </>
  );
};

export default ProjectCard;
