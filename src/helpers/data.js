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
    orbitRadius: 20,
    introduction:
      "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means 'the ground.' There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.",
    sizeDescription:
      "With an equatorial diameter of 7926 miles (12,760 kilometers), Earth is the biggest of the terrestrial planets and the fifth largest planet in our solar system.From an average distance of 93 million miles (150 million kilometers), Earth is exactly one astronomical unit away from the Sun because one astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. This unit provides an easy way to quickly compare planets' distances from the Sun.It takes about eight minutes for light from the Sun to reach our planet.",
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
    orbitRadius: 3,
    links: {
      video: "https://www.youtube.com/watch?v=D8pnmwOXhoY",
    },
    introduction:
      "Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago. Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. The Egyptians called it 'Her Desher,' meaning 'the red one.'Even today, it is frequently called the 'Red Planet' because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.",
    sizeDescription:
      "With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.",
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
    orbitRadius: 4,
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
    orbitRadius: 5,
    textures: {
      texture: "/assets/saturnTexture.jpeg",
      ringTexture: "/assets/saturnRing.jpg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=epZdZaEQhS0",
    },
    introduction:
      "Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.",

    sizeDescription:
      "With an equatorial diameter of about 74,897 miles (120,500 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball.From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn.",
  },
  {
    id: 4,
    name: "Venus",
    type: "Planet",
    position: [-12, 0, -1],
    sphereGeometry: [1.95, 32, 32],
    orbitRadius: 6,
    textures: {
      texture: "/assets/venusTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=BvXa1n9fjow",
    },
    introduction:
      "Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets.Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense, persistent clouds, the surface has volcanoes and deformed mountains",

    sizeDescription:
      "Venus orbits the Sun from an average distance of 67 million miles (108 million kilometers), or 0.72 astronomical units. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight about six minutes to travel from the Sun to Venus.Earth's nearness to Venus is a matter of perspective. The planet is nearly as big around as Earth. Its diameter at its equator is about 7,521 miles (12,104 kilometers), versus 7,926 miles (12,756 kilometers) for Earth. From Earth, Venus is the brightest object in the night sky after our own Moon. The ancients, therefore, gave it great importance in their cultures, even thinking it was two objects: a morning star and an evening star. That's where the trick of perspective comes in.",
  },
  {
    id: 5,
    name: "Neptune",
    type: "Planet",
    position: [-50, 0, -20],
    sphereGeometry: [1.6, 32, 32],
    orbitRadius: 7,
    textures: {
      texture: "/assets/neptuneTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=NStn7zZKXfE",
    },
    introduction:
      "Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune",

    sizeDescription:
      "With an equatorial diameter of 30,775 miles (49,528 kilometers), Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball.From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune.",
  },
  {
    id: 6,
    name: "Jupiter",
    type: "Planet",
    position: [-20, 0, 23],
    sphereGeometry: [2.6, 32, 32],
    orbitRadius: 8,
    textures: {
      texture: "/assets/jupiterTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=PtkqwslbLY8",
    },
    introduction:
      "Jupiter's signature stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The dark orange stripes are called belts, while the lighter bands are called zones, and they flow east and west in opposite directions. Jupiter's iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.The king of planets was named for Jupiter, king of the gods in Roman mythology. Most of its moons are also named for mythological characters, figures associated with Jupiter or his Greek counterpart, Zeus.",
    sizeDescription:
      "With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth. If Earth were the size of a grape, Jupiter would be about as big as a basketball. From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 43 minutes to travel from the Sun to Jupiter.",
  },
  {
    id: 7,
    name: "Uranus",
    type: "Planet",
    position: [-35, 0, 40],
    sphereGeometry: [1.6, 32, 32],
    orbitRadius: 9,
    textures: {
      texture: "/assets/uranusTexture.jpeg",
    },
    links: {
      video: "https://www.youtube.com/watch?v=m4NXbFOiOGk",
    },
    introduction:
      "Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball. Uranus was the first planet found with the aid of a telescope. It was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.",

    sizeDescription:
      "With an equatorial diameter of 31,763 miles (51,118 kilometers), Uranus is four times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball.From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is about 19 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus.",
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
    introduction:
      "Our Sun is a 4.5 billion-year-old yellow dwarf star - a hot glowing ball of hydrogen and helium - at the center of our solar system. It's about 93 million miles (150 million kilometers) from Earth and it's our solar system's only star. Without the Sun's energy, life as we know it could not exist on our home planet.",
    sizeDescription:
      " Our Sun is a medium-sized star with a radius of about 435,000 miles (700,000 kilometers). Many stars are much larger - but the Sun is far more massive than our home planet: it would take more than 330,000 Earths to match the mass of the Sun, and it would take 1.3 million Earths to fill the Sun's volume. The Sun is about 93 million miles (150 million kilometers) from Earth. Its nearest stellar neighbor is the Alpha Centauri triple star system: red dwarf star Proxima Centauri is 4.24 light-years away, and Alpha Centauri A and B - two sunlike stars orbiting each other - are 4.37 light-years away. A light-year is the distance light travels in one year, which equals about 6 trillion miles (9.5 trillion kilometers).",
  },
];
export default planetData;
