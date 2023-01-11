import * as THREE from "three"

export default class Planet extends THREE.Object3D {
  private radius: number
  private posX: number
  private mesh!: THREE.Mesh
  private ringMesh!: THREE.Mesh
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

      const ringGeometry = new THREE.RingGeometry(
        this.radius + 10,
        this.radius + 20,
        35
      )
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide,
      })

      this.mesh = new THREE.Mesh(geometry, material)
      this.mesh.position.x += this.posX

      this.ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
      this.ringMesh.position.x += this.posX
      this.ringMesh.rotateX(90)
    } else {
      const geometry = new THREE.SphereGeometry(this.radius)
      const material = new THREE.MeshNormalMaterial()
      this.mesh = new THREE.Mesh(geometry, material)
      this.mesh.position.x += this.posX
    }

    this.add(this.mesh)
    // this.add(this.ringMesh)
  }
}
