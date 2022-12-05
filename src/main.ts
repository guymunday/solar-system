import "./style.css"
import * as THREE from "three"
// import { gsap } from "gsap"
import SceneInit from "./three/SceneInit"
import Planet from "./three/Planet"

function handleStartScene() {
  const scene = new SceneInit()
  scene.initScene()
  scene.animate()

  const sun = new Planet(30, 0, "sun", "sun.jpeg")
  const mercury = new Planet(10, 50, "mercury", "mercury.png")
  const venus = new Planet(15, 100, "venus", "venus.jpeg")
  const earth = new Planet(17, 200, "earth", "earth.jpeg")
  const planets = new THREE.Group()

  planets.add(sun)
  planets.add(mercury)
  planets.add(venus)
  planets.add(earth)
  scene.scene.add(planets)

  // planets.children.forEach((p) => {
  //   const pPlanet = p as Planet
  //   scene.interactionManager.add(pPlanet)

  //   pPlanet.addEventListener("click", (event) => {
  //     event.stopPropagation()
  //     console.log(pPlanet.name)
  //     // document.body.style.cursor = "pointer"

  //     const defaults = { duration: 5, yoyo: true, repeat: -1, ease: "linear" }

  //     gsap.to(pPlanet.position, {
  //       x: 100,
  //       ...defaults,
  //     })
  //   })
  // })

  const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60)
  const animate = () => {
    sun.rotation.y += EARTH_YEAR * 1
    mercury.rotation.y += EARTH_YEAR * 6
    venus.rotation.y += EARTH_YEAR * 2
    earth.rotation.y += EARTH_YEAR * 1
    requestAnimationFrame(animate)
  }
  animate()
}

handleStartScene()
