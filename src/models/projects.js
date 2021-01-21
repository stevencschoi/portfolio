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
    desc: `A full-stack meal planning application`,
    pic: Veg,
    webp: VegWebp
  },
  {
    title: 'Raptors Memory Game',
    url: 'https://raptors-memory-game.netlify.app/',
    languages: ['JavaScript'],
    desc: `A Vanilla JavaScript card game built in memorial of the 2019 NBA Champions`,
    pic: Raps,
    webp: RapsWebp
  },
  {
    title: 'Interview Scheduler',
    url: 'https://sc-scheduler.netlify.app/',
    languages: ['React', 'Node.js'],
    desc: 'An interview scheduling application',
    pic: Scheduler,
    webp: SchedulerWebp
  },
  {
    title: 'Meowzza!',
    url: 'https://github.com/stevencschoi/meowzza',
    languages: ['jQuery', 'Node.js', 'Postgres' ],
    desc: 'An online marketplace for exotic cat adoption',
    pic: Meowzza,
    webp: MeowzzaWebp
  },
  
];