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
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
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
    sphereGeometry: [5, 64, 64],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corrupti assumenda quibusdam ad esse error veritatis ipsum officia saepe, molestiae minima dolore inventore unde minus consequuntur expedita quis deserunt repellendus!",
  },
];
export default planetData;
