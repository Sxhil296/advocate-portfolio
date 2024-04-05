// import profile images
import ProfilePhoto1 from '../src/assets/img/profile1.png';
import ProfilePhoto2 from '../src/assets/img/profile2.png';
import ProfilePhoto3 from '../src/assets/img/profile3.png';

// import about icons
import Skill1 from '../src/assets/img/skills/skill1.png';
import Skill2 from '../src/assets/img/skills/skill2.png';
import Skill3 from '../src/assets/img/skills/skill3.png';
import Skill4 from '../src/assets/img/skills/skill4.png';
import Skill5 from '../src/assets/img/skills/skill5.png';
import Skill6 from '../src/assets/img/skills/skill6.png';

// import team images
// import TeamMember1 from '../src/assets/img/lawyer1.png';


// import social icons
import FacebookIcon from '../src/assets/img/social/facebook.png';
import TwitterIcon from '../src/assets/img/social/twitter.png';
import InstagramIcon from '../src/assets/img/social/instagram.png';
// import mailIcon from '../src/assets/img/social/mail.png'


// navigation data
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'What I do',
    href: 'skills',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
];

// testimonials data
export const testimonials = [
  {
    text: "Mr. Malik's legal expertise and strategic approach were instrumental in resolving my property dispute. I highly recommend his services to anyone in need of a reliable and knowledgeable lawyer.",
    name: 'Javed Malik',
    image: ProfilePhoto1,
    position: 'Property Dealer',
  },
  {
    text: "I am grateful to Mr. Amjad for his dedicated representation in my criminal defense case. His courtroom skills and deep understanding of Indian criminal law secured a favorable outcome for me.",
    name: 'Sonu Singh',
    image: ProfilePhoto2,
    position: '',
  },
  {
    text: "Adv Amjad Bhai ki professionalism aur integrity ne meri divorce proceedings mein chamak dikhayi. Unki empathetic approach aur legal samajh ne ek challenging process ko aasan banaya.",
    name: 'Javed Malik',
    image: ProfilePhoto3,
    position: '',
  },
];

// skills data
export const skills = [
  {
    icon: Skill1,
    title: 'Corruption',
    description:
      'Upholding integrity and fighting against corrupt practices is at the core of my legal practice. I work tirelessly to ensure fair and just outcomes.',
  },
  {
    icon: Skill2,
    title: 'Employment',
    description:
      "As an advocate for workers' rights, I navigate employment law complexities to protect the interests of employees and employers alike.",
  },
  {
    icon: Skill3,
    title: 'Real Estate',
    description:
      'From property transactions to disputes, I offer comprehensive legal services tailored to meet the needs of clients in the real estate sector.',
  },
  {
    icon: Skill4,
    title: 'Taxes',
    description:
      'Providing strategic tax advice and solutions, I assist individuals and businesses in navigating tax laws and regulations effectively.',
  },
  {
    icon: Skill5,
    title: 'Corporate',
    description:
      'I assist businesses with legal compliance, contract negotiations, and dispute resolution, ensuring smooth operations and risk management.',
  },
  {
    icon: Skill6,
    title: 'Banking',
    description:
      'With expertise in banking and finance law, I offer legal guidance to financial institutions and individuals on regulatory matters and transactions.',
  },
];

// team data
// export const team = [
//   {
//     image: TeamMember1,
//     name: 'Jane William',
//     position: 'Band & Financial Lawyer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
//   },
// ];

// social data
export const social = [
  {
    icon: FacebookIcon,
    socialLink: "https://www.facebook.com"
  },
  {
    icon: TwitterIcon,
    socialLink: "https://www.twitter.com"

  },
  {
    icon: InstagramIcon,
    socialLink: "https://www.instagram.com"
  },
];
