const products = [
  {
    id: 1,
    title: "ASUS Rog Strix 3070ti",
    price: 25000,
    categoryId: 1,
    category: "placa de video",
    categoryName:"placa de video",
    description:
      "Los bloques de construcción para la GPU más rápida y eficiente del mundo, el nuevo Ampere SM ofrece el doble de rendimiento FP32 y una eficiencia energética mejorada. Experimenta el doble de rendimiento que los RT Cores de primera generación, además de RT y sombreado simultáneos para un nivel completamente nuevo de rendimiento de trazado de rayos.",
    thumbnail:
      "https://media.ldlc.com/r1600/ld/products/00/05/74/25/LD0005742587_1_0005869333.jpg",
    stock: 5,
    amountOfFees: 3,
  },
  {
    id: 2,
    title: "Fuente de alimentación Giga-Byte GP-P750GM",
    price: 20000,
    categoryId: 4,
    category: "fuente",
    categoryName:"fuente",
    description:
      "Con la fuente de alimentación Giga-Byte Technology GP-P750GM podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes.",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_839855-MLA45653444301_042021-O.webp",
    stock: 11,
    amountOfFees: 3,
  },
  {
    id: 3,
    title: "MSI RTX 3050",
    price: 110000,
    categoryId: 1,
    category: "placa de video",
    categoryName:"placa de video",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/video-geforce-rtx-3050-8gb-msi-gaming-x-2.jpg",
    stock: 7,
    amountOfFees: 12,
  },
  {
    id: 4,
    title: "Fuente de alimentación para PC XPG",
    price: 30000,
    categoryId: 4,
    category: "fuente",
    categoryName:"fuente",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam aliquid eligendi minus voluptas culpa, alias, repellendus soluta, reprehenderit veniam delectus quis libero asperiores facilis nobis eaque obcaecati. Repellendus reiciendis tempora excepturi mollitia quibusdam pariatur recusandae quam? Assumenda vero, illum deserunt enim minima aut adipisci ab quis veniam maxime molestias? Assumenda tenetur nisi doloremque odit ipsa velit iusto? Iure, accusantium.",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_952421-MLA45686583993_042021-O.webp",
    stock: 5,
    amountOfFees: 3,
  },
  {
    id: 5,
    title: "Asus TUF RTX 3080",
    price: 450000,
    categoryId: 4,
    category: "placa de video",
    categoryName:"placa de video",
    description:
      "Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_859399-MLA49924537069_052022-O.webp",
    stock: 10,
    amountOfFees: 12,
  },
  {
    id: 6,
    title: "Fuente de alimentación para PC Corsair",
    price: 41000,
    categoryId: 4,
    category: "fuente",
    categoryName:"fuente",
    description:
      "Con la fuente de alimentación Corsair RM750x podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento. ",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_896876-MLA45978614530_052021-O.webp",
    stock: 1,
    amountOfFees: 6,
  },
  {
    id: 7,
    title: "Procesador AMD Ryzen™ 7 5700G",
    price: 75000,
    categoryId: 2,
    category: "procesador",
    categoryName:"procesador",
    description:
      "Bienvenido a la nueva era del rendimiento. La serie AMD Ryzen 7000 saca a relucir la velocidad descomunal de “Zen 4” y su potencia pura para que los jugadores y creadores puedan procesar cualquier juego o flujo de trabajo que se cruce en su camino. Los procesadores de PC más avanzados del mundo1 para jugadores y creadores amplían el liderazgo de rendimiento de AMD para potenciar tu PC.",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_642030-MLU47593199220_092021-O.webp",
    stock: 3,
    amountOfFees: 6,
  },
  {
    id: 8,
    title: "Motherboard Asus Rog Strix B550-f",
    price: 64000,
    categoryId: 3,
    category: "mother",
    categoryName:"mother",
    description:
      "Las tarjetas madre de la serie ROG Strix B550 Gaming ofrecen buena parte de las características que puedes encontrar en la serie de gama alta ROG Strix X570 Gaming, como por ejemplo PCIe® 4.0. Con un suministro de energía potente y una refrigeración eficaz, la serie ROG Strix B550 Gaming está optimizada para las CPU AMD Ryzen™ de 3.ª Gen. Con una estética futurista y el intuitivo software ROG, la ROG Strix B550-F Gaming (Wi-Fi) es la plataforma ideal para montar el equipo de tus sueños.",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_985217-MLA43783495710_102020-W.jpg",
    stock: 8,
    amountOfFees: 6,
  },
  {
    id: 9,
    title: "Motherboard Gigabyte Ga B550 Aorus Elite",
    price: 54000,
    categoryId: 3,
    category: "mother",
    categoryName:"mother",
    description:
      "Bienvenido a la nueva era del rendimiento. La serie AMD Ryzen 7000 saca a relucir la velocidad descomunal de “Zen 4” y su potencia pura para que los jugadores y creadores puedan procesar cualquier juego o flujo de trabajo que se cruce en su camino. Los procesadores de PC más avanzados del mundo1 para jugadores y creadores amplían el liderazgo de rendimiento de AMD para potenciar tu PC.",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_642030-MLU47593199220_092021-O.webp",
    stock: 2,
    amountOfFees: 3,
  },
  {
    id: 10,
    title: "Procesador Intel Core i7-10700",
    price: 87000,
    categoryId: 2,
    category: "procesador",
    categoryName:"procesador",
    description:
      "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo.",
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_970575-MLA42767646612_072020-O.webp",
    stock: 3,
    amountOfFees: 6,
  },
];

export default products;
