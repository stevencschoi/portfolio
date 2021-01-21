import VegWebp from '../assets/veg.webp';
import Veg from '../assets/veg.png';
import MeowzzaWebp from '../assets/meowzza.webp';
import Meowzza from '../assets/meowzza.png';
import SchedulerWebp from '../assets/scheduler2.webp';
import Scheduler from '../assets/scheduler2.png';
import RapsWebp from '../assets/raps.webp';
import Raps from '../assets/raps.png';

export const projects = [
  {
    title: 'VegTable',
    url: 'https://vegtable.xyz/',
    languages: ['React', 'Node.js', 'Postgres'],
    libraries: ['Recharts.js', 'socket.io', 'Edamam'],
    desc: `An analytics driven, meal planning application. Plot your nutritional intake on charts relative to national health recommendations, and observe friends' activity in real-time.`,
    pic: Veg,
    webp: VegWebp
  },
  {
    title: 'Raptors Memory Game',
    url: 'https://raptors-memory-game.netlify.app/',
    languages: ['JavaScript'],
    desc: `A Vanilla JavaScript card matching game built in memorial of the 2019 NBA Champion Toronto Raptors.`,
    pic: Raps,
    webp: RapsWebp
  },
  {
    title: 'Interview Scheduler',
    url: 'https://sc-scheduler.netlify.app/',
    languages: ['React', 'Node.js'],
    desc: 'An interview scheduling application founded in React with real-time updates through socket.io. Tested with Jest & Cypress.',
    pic: Scheduler,
    webp: SchedulerWebp
  },
  {
    title: 'Meowzza!',
    url: 'https://github.com/stevencschoi/meowzza',
    languages: ['jQuery', 'Node.js', 'Postgres' ],
    libraries: ['Material UI', 'Twilio'],
    desc: 'An online marketplace for exotic cat adoption. Users browse and search cat listings and may contact cat owners by SMS via the Twilio API.',
    pic: Meowzza,
    webp: MeowzzaWebp
  },
  
];