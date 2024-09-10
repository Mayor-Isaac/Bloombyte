import Digital from "@/svgs/digital";
import Graphics from "@/svgs/graphics";
import Coding from "@/svgs/coding";

export const menuLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Our Services",
    link: "/services",
  },

  {
    title: "Code4kidz",
    link: "/code4kidz",
  },
  {
    title: "Pricing Plan",
    link: "/pricing",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
export const teamMembers = [
  {
    name: "Adekunle Lawal",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore beatae eveniet autem perferendis, culpa minus, rerum odio unde a quidem, harum repellat blanditiis doloribus corrupti pariatur repudiandae sed facilis laboriosam?",
    position: "ICT Instructor I",
    img: "/images/user.jpg",
  },
  {
    name: "Prof. Mrs Folashade Dahunsi",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore beatae eveniet autem perferendis, culpa minus, rerum odio unde a quidem, harum repellat blanditiis doloribus corrupti pariatur repudiandae sed facilis laboriosam?",
    position: "CEO",
    img: "/images/user.jpg",
  },
  {
    name: "Sarah Eneiremen",
    text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore beatae eveniet autem perferendis, culpa minus, rerum odio unde a quidem, harum repellat blanditiis doloribus corrupti pariatur repudiandae sed facilis laboriosam?",
    position: "ICT Instructor II",
    img: "/images/user.jpg",
  },
];

export const aboutBloom = [
  {
    head: "01",
    text: "Train people on various software and hardware skills",
  },
  {
    head: "02",
    text: "Initiate programs and services to help people develop soft skills, build character and Leadership skills,",
  },
  {
    head: "03",
    text: "Create a conducive environment for learning and development.",
  },
  {
    head: "04",
    text: "Create a motivating work environment to attract skilled talent and inspire people to reach the next level, no matter their industry.",
  },
  {
    head: "05",
    text: "Organise workshops for organisations, businesses, and government establishments.",
  },
];

export const services = [
  {
    image: "/images/growth.png",
    title: "Co-Working Space",
    textOne:
      "Tech pros and even newcomers, such as developers and designers, can work together in the coworking space Bloombyte Hub.",
    textTwo: " Some benefits and advantages of our co-working space include:",
    textThree: [
      "- Networking Opportunities: People get to connect, collaborate, and share ideas with one another, which can lead to new projects, partnerships, or business ventures",
      "- Resource Sharing: Startups  benefit from shared resources, such as office equipment and administrative support, which might be cost-prohibitive if they were to set up their own spaces.",
      "- Community and Collaboration: Bloombyte Hub co-working space often host events, workshops, and meetups that can help tech professionals stay updated on industry trends, learn new skills,",
    ],
  },
  {
    image: "/images/content.png",
    title: "Content Creation Space",
    textOne:
      "Bloombyte Hub content creation area is furnished with the equipment and resources required to produce high-caliber material ",
    textTwo:
      "Our content creation area also fosters teamwork, which frequently results in collaborative spaces where tech professionals, novices, and creators may collaborate on projects, exchange knowledge, and generate fresh concepts. and some of our equipments are: ",
    textThree: [
      "- Studio Equipment: green screens, cameras, lighting, and microphones for video production.",
      "- Audio equipment: mixing consoles, soundproofing, and top-notch microphones for voice-over and podcasting.",
      "- Editing Software: Computers equipped with graphic design, audio editing, and video editing software,",
    ],
  },
  {
    image: "/images/digitalSkill.png",
    title: "Digital Skills Training",
    textOne:
      "Here at Bloombyte hub, we offer a variety of digital skills training ",
    textTwo:
      "We teach Design skills like graphics design by making use of adobe photoshop, CorelDraw",
    textThree: [
      "- Basic Computer Skills: Teaching how to use operating systems, software applications, and internet browsing.",
      "- Software Proficiency: Training in specific software programs like Microsoft Office, Google Workspace, or industry-specific tools.",
      "- Data Management: Understanding how to handle data, including data entry, analysis, and basic database management.",
      "- Programming and Coding: For more advanced training, this includes learning programming languages and development tools.",
    ],
  },
  {
    image: "/images/hardware.png",
    title: "Hardware Workshop",
    textOne: "At our hardware workshop, we offer the following services:",
    textTwo: "Building and developing hardware equipments like drones",
    textThree: [
      "- Prototyping: Developing and testing physical prototypes of new tech products, devices, or components.",
      "- Repair and Maintenance: Fixing and maintaining electronic hardware, which can be crucial for keeping tech infrastructure in working order.",
      "- Learning and Training: Offering educational opportunities for individuals to learn about hardware design, electronics, and related skills.",
      "- Innovation and Experimentation: Allowing for experimentation with new ideas and technologies, often facilitating innovation by providing access to advanced tools and materials.",
      "- Collaboration: Serving as a collaborative space where engineers, developers, and other tech professionals can work together on hardware projects.",
    ],
  },
];

export const pricingData = [
  {
    title: "Regular Room",
    daily: 800,
    weekdays: 3000,
    monthly: 10000,
    weekends: 1600,
  },
  {
    title: "VIP Room",
    daily: 1000,
    weekdays: 4000,
    monthly: 12000,
    weekends: 2500,
  },
  {
    title: "Workstation",
    daily: 1300,
    weekdays: 5000,
    monthly: 12000,
    weekends: 2600,
  },
  {
    title: "Hardware",
    daily: 1300,
    weekdays: 5000,
    monthly: 12000,
    weekends: 2600,
  },
  {
    title: "Content Creation",
    daily: 1300,
    weekdays: 5000,
    monthly: 12000,
    weekends: 2600,
  },
];

export const codeKidzData = [
  {
    icon: <Digital />,
    title: "Digital literacy",
    text: "The digital literacy course equips students with essential computer skills, including proficient keyboard typing, digital ethics, mastery of the Microsoft Office Suite, and the ability to generate productive outcomes.",
  },
  {
    icon: <Graphics />,
    title: "Graphics Design",
    text: "This course equips students with the core principles of graphic design, empowering them to translate ideas into compelling visuals. They will learn to utilize industry-standard software like Photoshop and CorelDRAW for creating brand identities, including flyers, logos, and content writing.",
  },
  {
    icon: <Coding />,
    title: "Beginner Introduction to Computer Programming",
    text: "This course introduces students into the world of programming. Students are taught core principle of programming, giving them a basic knowledge on how to write codes to generate certain outcome. Such skill can propel them into the world of data analysis, machine learning, mobile app development and web development.",
  },
];
