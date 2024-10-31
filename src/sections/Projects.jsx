import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import Glamour from '../assets/Glamour.webp';
import DBZ from '../assets/MemoryGame.webp';
import EmigrandoHoy from '../assets/EmigrandoHoy.webp';
import Battleship from '../assets/Battleship.webp';
import CVbuddy from '../assets/CVbuddy.webp';
import Todo from '../assets/Todo.webp';
import Recycle from '../assets/Recycleworld.webp';
import { useCallback, useContext, useState } from 'react';
import Pagination from '../components/Pagination';
import { ModeContext } from '../context/ModeContext';
import { LanguageContext } from '../context/LanguageContext';

const PROJECTS = [
  {
    title: 'Glamour Glow',
    src: Glamour,
    description: {
      ENGLISH:
        'Fullstack marketplace application integrating payment gateway, notifications, authorization and authentication as well as admin panel.',
      SPANISH:
        'Aplicación marketplace fullstack completa que integra pasarela de pago, notificaciones, autorización y autenticación, así como panel de administración.',
      ITALIAN:
        'Applicazione di mercato fullstack che integra gateway di pagamento, notifiche, autorizzazione e autenticazione, nonché pannello di amministrazione.'
    },
    category: 'advanced',
    repo: 'https://github.com/hroglardev/Glamour-Glow',
    live: 'https://glamour-glow.vercel.app/'
  },
  {
    title: 'Emigrando Hoy',
    src: EmigrandoHoy,
    description: {
      ENGLISH:
        'Personal site for an agency which provides services regarding migration outside of LATAM, foreign citizenships and proper documentation.',
      SPANISH:
        'Sitio personal para una agencia que ofrece servicios relacionados con la migración fuera de LATAM, ciudadanías extranjeras y documentación apropiada.',
      ITALIAN:
        "Sito personale per un'agenzia che offre servizi relativi alla migrazione fuori da LATAM, cittadinanze straniere e documentazione appropriata."
    },
    category: 'advanced',
    repo: 'https://github.com/hroglardev/Emigrando-Hoy',
    live: 'https://hroglardev.github.io/Emigrando-Hoy/'
  },
  {
    title: 'Battleship',
    src: Battleship,
    description: {
      ENGLISH:
        'Implementation of the classic Battleship game including simulating an AI to play against a computer player.',
      SPANISH:
        'Implementación del juego clásico Battleship, incluyendo la simulación de una IA para jugar contra un jugador de computadora.',
      ITALIAN:
        "Implementazione del gioco classico Battleship, inclusa la simulazione di un'IA per giocare contro un giocatore computerizzato."
    },
    category: 'advanced',
    repo: 'https://github.com/hroglardev/Battleship',
    live: 'https://hroglardev.github.io/Battleship/'
  },
  {
    title: 'Memory Game',
    src: DBZ,
    description: {
      ENGLISH:
        'Project with interaction with an API to create a child-friendly memory game based around a Dragon Ball theme.',
      SPANISH:
        'Proyecto con interacción con una API para crear un juego de memoria amigable para niños basado en un tema de Dragon Ball.',
      ITALIAN:
        "Progetto con interazione con un'API per creare un gioco di memoria adatto ai bambini basato su un tema di Dragon Ball."
    },
    category: 'advanced',
    repo: 'https://github.com/hroglardev/Memory-game',
    live: 'https://dbz-memory-game.vercel.app/'
  },
  {
    title: 'CV Buddy',
    src: CVbuddy,
    description: {
      ENGLISH:
        'Learner project to handle form validation and react state management at the component level.',
      SPANISH:
        'Proyecto de aprendizaje para manejar la validación de formularios y la gestión del estado de react a nivel de componente.',
      ITALIAN:
        'Progetto di apprendimento per gestire la validazione dei moduli e la gestione dello stato di React a livello di componente.'
    },
    category: 'learner',
    repo: 'https://github.com/hroglardev/CV-creator',
    live: 'https://cv-buddy.vercel.app/'
  },
  {
    title: 'Recycle World',
    src: Recycle,
    description: {
      ENGLISH:
        'University gamified project developed to increase consciousness on recycling properly oriented to children.',
      SPANISH:
        'Proyecto gamificado universitario desarrollado para aumentar la conciencia sobre el reciclaje adecuado orientado a los niños.',
      ITALIAN:
        'Progetto gamificato universitario sviluppato per aumentare la consapevolezza sul riciclaggio adeguato orientato ai bambini.'
    },
    category: 'advanced',
    repo: 'https://github.com/hroglardev/Recycle-World',
    live: 'https://hroglardev.github.io/Recycle-World/'
  },
  {
    title: 'To do',
    src: Todo,
    description: {
      ENGLISH:
        'Classic project for task management. Separate tasks by project, set due dates, delete or mark tasks as complete.',
      SPANISH:
        'Proyecto clásico para la gestión de tareas. Separar tareas por proyecto, establecer fechas de vencimiento, eliminar o marcar tareas como completas.',
      ITALIAN:
        'Progetto classico per la gestione delle attività. Separare le attività per progetto, impostare le date di scadenza, eliminare o contrassegnare le attività come completate.'
    },
    category: 'learner',
    repo: 'https://github.com/hroglardev/To-do-list-js',
    live: 'https://hroglardev.github.io/To-do-list-js/'
  }
];

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const { mode } = useContext(ModeContext);
  const [page, setPage] = useState(0);
  const limit = 4;

  const calculatePages = useCallback((items) => {
    let pages = [];
    const totalPages = Math.ceil(items.length / limit);
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }, []);
  return (
    <div className={`flex justify-center px-6 items-center`}>
      <Section role={'region'} ariaLabel={'Projects section'} id='projects'>
        <div className='flex flex-col items-center'>
          <h2
            className={`mb-10 mt-10 text-4xl font-bold tracking-tight text-center relative ${
              mode === 'DARK' ? 'text-gray-200' : 'text-lightRed'
            } sm:text-6xl`}>
            {language === 'ENGLISH' && 'My Projects'}
            {language === 'SPANISH' && 'Mis Proyectos'}
            {language === 'ITALIAN' && 'I Miei Progetti'}
          </h2>

          <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8 items-stretch'>
            {PROJECTS.slice(page * limit, (page + 1) * limit).map(
              (project, index) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description[language]}
                    index={index}
                    src={project.src}
                    repo={project.repo}
                    live={project.live}
                  />
                );
              }
            )}
          </div>
          <Pagination
            items={PROJECTS}
            page={page}
            setPage={setPage}
            limit={limit}
            pages={calculatePages(PROJECTS)}
          />
        </div>
      </Section>
    </div>
  );
};
export default Projects;
