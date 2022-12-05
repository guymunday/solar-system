import * as THREE from "three"

export default class Planet extends THREE.Object3D {
  private radius: number
  private posX: number
  private mesh!: THREE.Mesh
  public name: string
  private textureFile: string | undefined

  constructor(
    radius: number,
    positionX: number,
    name?: string,
    textureFile?: string
  ) {
    super()

    this.radius = radius
    this.posX = positionX
    this.name = name || "planet"
    this.textureFile = textureFile || undefined

    if (this.textureFile) {
      const geometry = new THREE.SphereGeometry(this.radius)
      const texture = new THREE.TextureLoader().load(this.textureFile)
      const material = new THREE.MeshBasicMaterial({ map: texture })
      this.mesh = new THREE.Mesh(geometry, material)
      this.mesh.position.x += this.posX
    } else {
      const geometry = new THREE.SphereGeometry(this.radius)
      const material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.mesh.position.x += this.posX
    }

    this.add(this.mesh)
  }
}
