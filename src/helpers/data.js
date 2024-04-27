const planetData = [
  {
    id: 0,
    name: "Earth",
    position: [20, 0, -4],
    type: "Planet",
    textures: {
      texture: "/assets/earthTexture.jpg",
      normalMap: "/assets/earthNormalMap.jpg",
      specMap: "/assets/earthSpecMap.jpg",
      nightMap: "/assets/earthNightMap.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=HCDVN7DCzYE",
    },
    sphereGeometry: [2, 32, 32],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
  {
    id: 1,
    name: "Mars",
    type: "Planet",
    position: [-16, 0, -9],
    textures: {
      texture: "/assets/marsTexture.jpeg",
    },
    sphereGeometry: [1.5, 32, 32],
    links: {
      video: "https://www.youtube.com/watch?v=D8pnmwOXhoY",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
  {
    id: 2,
    name: "Mercury",
    type: "Planet",
    position: [10, 0, -5],
    textures: {
      texture: "/assets/mercuryTexture.jpeg",
    },
    sphereGeometry: [1.4, 32, 32],
    links: {
      video: "https://www.youtube.com/watch?v=0KBjnNuhRHs",
    },
    introduction:
      "Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C).",
    sizeDescription:
      "With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry. From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.",
  },
  {
    id: 3,
    name: "Saturn",
    type: "Planet",
    hasRing: true,
    position: [-20, 0, -20],
    sphereGeometry: [2.3, 32, 32],
    textures: {
      texture: "/assets/saturnTexture.jpeg",
      ringTexture: "/assets/saturnRing.jpg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=epZdZaEQhS0",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
  {
    id: 4,
    name: "Venus",
    type: "Planet",
    position: [-12, 0, -1],
    sphereGeometry: [1.95, 32, 32],
    textures: {
      texture: "/assets/venusTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=BvXa1n9fjow",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
  {
    id: 5,
    name: "Neptune",
    type: "Planet",
    position: [-50, 0, -20],
    sphereGeometry: [1.6, 32, 32],
    textures: {
      texture: "/assets/neptuneTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=NStn7zZKXfE",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
  {
    id: 6,
    name: "Jupiter",
    type: "Planet",
    position: [-20, 0, 23],
    sphereGeometry: [2.6, 32, 32],
    textures: {
      texture: "/assets/jupiterTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=PtkqwslbLY8",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
  {
    id: 7,
    name: "Uranus",
    type: "Planet",
    position: [-35, 0, 40],
    sphereGeometry: [1.6, 32, 32],
    textures: {
      texture: "/assets/uranusTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=m4NXbFOiOGk",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
  {
    id: 8,
    name: "Sun",
    type: "Yellow Dwarf",
    position: [0, 0, 0],
    textures: {
      texture: "/assets/sunTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=2HoTK_Gqi2Q",
    },
    sphereGeometry: [5, 64, 64],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
];
export default planetData;
