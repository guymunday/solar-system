import "./style.css"
import * as THREE from "three"
// import { gsap } from "gsap"
import SceneInit from "./three/SceneInit"
import Planet from "./three/Planet"

function handleStartScene() {
  const scene = new SceneInit()
  scene.initScene()
  scene.animate()

  const sun = new Planet(30, 0, "venus", "venus.jpeg")
  const one = new Planet(15, 50, "one", "one.jpg")
  const two = new Planet(10, 75, "two", "two.jpg")
  const three = new Planet(15, 100, "three", "three.jpg")
  const four = new Planet(10, 125, "four", "four.jpg")
  const five = new Planet(15, 150, "five", "five.jpg")
  const six = new Planet(10, 175, "six", "six.jpg")
  const seven = new Planet(15, 200, "seven", "sun.jpg")

  const planets = new THREE.Group()

  planets.add(sun)
  planets.add(one)
  planets.add(two)
  planets.add(three)
  planets.add(four)
  planets.add(five)
  planets.add(six)
  planets.add(seven)

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
    one.rotation.y -= EARTH_YEAR * 6
    two.rotation.y += EARTH_YEAR * 2
    three.rotation.y -= EARTH_YEAR * 1
    four.rotation.y += EARTH_YEAR * 6
    five.rotation.y -= EARTH_YEAR * 2
    six.rotation.y += EARTH_YEAR * 1
    seven.rotation.y -= EARTH_YEAR * 3
    requestAnimationFrame(animate)
  }
  animate()
}

handleStartScene()
