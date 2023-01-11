import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { InteractionManager } from "three.interactive"

export default class SceneInit {
  private camera!: THREE.PerspectiveCamera
  public scene!: THREE.Scene
  public renderer!: THREE.WebGLRenderer
  private controls!: OrbitControls
  public interactionManager!: InteractionManager

  constructor() {}

  initScene() {
    const { innerHeight, innerWidth } = window
    const canvas = document.getElementById("canvas") as HTMLCanvasElement

    this.camera = new THREE.PerspectiveCamera(
      undefined,
      innerWidth / innerHeight,
      undefined,
      undefined
    )

    this.camera.position.z = 300

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    this.renderer.setSize(innerWidth, innerHeight)

    this.controls = new OrbitControls(this.camera, canvas)

    this.interactionManager = new InteractionManager(
      this.renderer,
      this.camera,
      canvas,
      undefined
    )

    window.addEventListener("resize", () => this.onWindowResize(), false)
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this))
    this.render()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
    this.controls.update()
    this.interactionManager.update()
  }

  onWindowResize() {
    const { innerHeight, innerWidth } = window

    this.camera.aspect = innerWidth / innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(innerWidth, innerHeight)
  }
}
