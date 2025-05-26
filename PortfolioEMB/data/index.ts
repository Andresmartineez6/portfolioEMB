export const navItems = [
  { name: "Nosotros", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizamos la colaboración con el cliente, fomentando una comunicación abierta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Somos flexibles con las comunicaciones en diferentes zonas horarias",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Nuestras tecnologías",
    description: "Constantemente buscamos mejorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiastas de la tecnología con pasión por el desarrollo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Comprometidos con la innovación tecnológica",
    description: "Explorando nuevas fronteras en desarrollo web",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Quieres iniciar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Peaky Blinders",
    des: "Plataforma interactiva desarrollada por EMB para la presentación oficial de la serie Peaky Blinders. Incluye biografías detalladas de personajes, líneas temporales interactivas y contenido exclusivo para fans. El sitio incorpora elementos visuales inspirados en la estética de la época, con animaciones sutiles que mejoran la experiencia del usuario sin comprometer el rendimiento.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://github.com/agchdev/PeakyBlinders",
    videoUrl: "https://www.youtube.com/embed/ad2kRJL0Y7U?si=SuEzKTfCtc_EQsik",
    client: "BBC Entertainment",
    year: "2023",
    category: "Entretenimiento",
    challenge: "Crear una experiencia inmersiva que capturara la esencia de la serie mientras se mantenía un alto rendimiento en todos los dispositivos.",
    solution: "EMB implementó una arquitectura React optimizada con lazy loading y una interfaz de usuario que refleja la estética de la época, manteniendo tiempos de carga mínimos y una experiencia fluida en dispositivos móviles y de escritorio."
  },
  {
    id: 2,
    title: "Dunkin Donuts",
    des: "Rediseño completo del sitio web corporativo de Dunkin Donuts realizado por EMB, con enfoque en mejorar la experiencia de usuario y optimizar las conversiones. La plataforma incluye un sistema de pedidos online, localización de tiendas mediante geolocalización, y un panel de administración personalizado para gestionar productos, promociones y análisis de ventas en tiempo real.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://github.com/agchdev/DUNKIN.github.io",
    videoUrl: "https://www.youtube.com/embed/rh_RyPbTMp0?si=kLm7PqXuA9Ks1",
    client: "Dunkin Brands International",
    year: "2024",
    category: "E-commerce / Alimentación",
    challenge: "Modernizar la presencia digital de la marca mientras se implementaba un sistema de pedidos eficiente y escalable que pudiera manejar picos de tráfico.",
    solution: "EMB desarrolló una arquitectura Next.js con SSR para optimizar SEO y rendimiento, integró pasarelas de pago seguras, y diseñó una interfaz intuitiva que refleja la personalidad de la marca mientras facilita la conversión."
  },
  {
    id: 3,
    title: "Learn IA",
    des: "Plataforma educativa innovadora desarrollada por EMB que utiliza inteligencia artificial para personalizar la experiencia de aprendizaje. El sistema analiza el progreso y estilo de aprendizaje de cada estudiante para adaptar el contenido, ejercicios y evaluaciones. Incluye herramientas de colaboración en tiempo real, sistema de gamificación, y análisis detallado del rendimiento para estudiantes y educadores.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/new-php-logo.svg"],
    link: "https://github.com/agchdev/PeakyBlinders",
    client: "Instituto Tecnológico de Educación Digital",
    year: "2023",
    category: "Educación / Tecnología",
    challenge: "Desarrollar una plataforma educativa que utilizara IA para personalizar el aprendizaje mientras mantenía una alta escalabilidad y facilidad de uso para estudiantes y profesores.",
    solution: "EMB implementó un sistema híbrido con React en el frontend y PHP en el backend para procesamiento de datos de IA, creando algoritmos de aprendizaje adaptativo y una interfaz intuitiva que facilita tanto la enseñanza como el aprendizaje."
  },
  {
    id: 4,
    title: "Goiko web",
    des: "Recreación premium del sitio web del iPhone 15 Pro desarrollada por EMB, que eleva la experiencia de usuario mediante animaciones avanzadas GSAP y efectos 3D inmersivos con Three.js. El sitio presenta el producto con transiciones fluidas, visualizaciones 3D interactivas del dispositivo, y una narrativa visual que destaca las características del producto de manera elegante y atractiva.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://agchdev.github.io/",
    videoUrl: "https://www.youtube.com/embed/1RmBcOkUP4w?si=qjkLm7yPcXuA9Ks1",
    client: "Apple Inc. (Proyecto de demostración)",
    year: "2024",
    category: "Tecnología / Showcase",
    challenge: "Recrear la experiencia premium de Apple con animaciones fluidas y modelos 3D detallados sin comprometer el rendimiento en dispositivos de gama media y baja.",
    solution: "EMB utilizó Next.js con TypeScript para una base sólida, implementó Three.js para renderizado 3D optimizado con nivel de detalle adaptativo, y empleó GSAP para animaciones fluidas con alta eficiencia de recursos."
  },
  {
    id: 5,
    title: "Ana Portfolio",
    des: "Recreación premium del sitio web del iPhone 15 Pro desarrollada por EMB, que eleva la experiencia de usuario mediante animaciones avanzadas GSAP y efectos 3D inmersivos con Three.js. El sitio presenta el producto con transiciones fluidas, visualizaciones 3D interactivas del dispositivo, y una narrativa visual que destaca las características del producto de manera elegante y atractiva.",
    img: "/p5.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://agchdev.github.io/",
    videoUrl: "https://www.youtube.com/embed/ZTXSaYglEvA?si=l9DtOJvkMTuC4exE",
    client: "Apple Inc. (Proyecto de demostración)",
    year: "2024",
    category: "Tecnología / Showcase",
    challenge: "Recrear la experiencia premium de Apple con animaciones fluidas y modelos 3D detallados sin comprometer el rendimiento en dispositivos de gama media y baja.",
    solution: "EMB utilizó Next.js con TypeScript para una base sólida, implementó Three.js para renderizado 3D optimizado con nivel de detalle adaptativo, y empleó GSAP para animaciones fluidas con alta eficiencia de recursos."
  },
  {
    id: 6,
    title: "Redefine",
    des: "Recreación premium del sitio web del iPhone 15 Pro desarrollada por EMB, que eleva la experiencia de usuario mediante animaciones avanzadas GSAP y efectos 3D inmersivos con Three.js. El sitio presenta el producto con transiciones fluidas, visualizaciones 3D interactivas del dispositivo, y una narrativa visual que destaca las características del producto de manera elegante y atractiva.",
    img: "/p6.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://agchdev.github.io/",
    videoUrl: "https://www.youtube.com/embed/G7wznClsDSg?si=rVXmSHcQcH-ISsIc",
    client: "Apple Inc. (Proyecto de demostración)",
    year: "2024",
    category: "Tecnología / Showcase",
    challenge: "Recrear la experiencia premium de Apple con animaciones fluidas y modelos 3D detallados sin comprometer el rendimiento en dispositivos de gama media y baja.",
    solution: "EMB utilizó Next.js con TypeScript para una base sólida, implementó Three.js para renderizado 3D optimizado con nivel de detalle adaptativo, y empleó GSAP para animaciones fluidas con alta eficiencia de recursos."
  },
];

export const testimonials = [
  {
    quote:
      "Es sin duda la mejor experiencia de trabajo con EMB. Su dedicación, profesionalismo y habilidad para resolver problemas de manera eficiente son invaluables. Recomendamos firmemente a EMB para cualquier proyecto de desarrollo web.",
    name: "Agustin51",
    title: "Creador de contenido",
  },
  {
    quote:
      "Nos hicieron la web de juicion monitorio, la dedicación y el trabajo duro es inigualable. Un equipo joven y con muchas ganas de aprender y crecer.",
    name: "Jose Manuel",
    title: "Ecoley Granada",
  },
  {
    quote:
      "Es la persona mas disciplinada y entregada a su trabajo que conocemos. En estos años no nos ha fallado una sola vez. Es una persona obsesiva y ama su trabajo.",
    name: "Roger Espuga",
    title: "Fundador de FiveMediaClan",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrollo Web Full Stack",
    desc: "Especialistas en crear sitios web y aplicaciones web de alto rendimiento con React, Next.js y frameworks modernos que ofrecen experiencias excepcionales.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Aplicaciones Móviles Multiplataforma",
    desc: "Desarrollo de aplicaciones nativas para iOS y Android utilizando React Native y Flutter, garantizando experiencias fluidas en todos los dispositivos.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Diseño UX/UI Centrado en el Usuario",
    desc: "Creamos interfaces intuitivas y atractivas que priorizan la experiencia del usuario, combinando estética con funcionalidad para maximizar la satisfacción y conversión.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Desarrollo e Integración de APIs",
    desc: "Construimos arquitecturas backend robustas y escalables que conectan perfectamente su plataforma con servicios externos y fuentes de datos.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  // {
  //   id: 3,
  //   img: "/link.svg",
  // },
];
