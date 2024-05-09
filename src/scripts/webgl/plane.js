import { Mesh, PlaneGeometry, RawShaderMaterial, Vector2 } from 'three';
import { WebglBase } from "./webgl-base";
import vertexShader from './shaders/vertexshader.vert';
import fragmentShader from './shaders/fragmentshader.frag';

export class Plane extends WebglBase {
  constructor(canvas) {
    super(canvas);

    this.mesh = null;
  }

  /**
   * 初期化する
   */
  init() {
    this.setup();
  }

  /**
   * セットアップする
   */
  setup() {
    const geometry = new PlaneGeometry(2, 2);
    const material = new RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new Vector2(window.innerWidth, window.innerHeight) },
      }
    });

    this.mesh = new Mesh(geometry, material);
    this.scene.add(this.mesh);
  }

  /**
   * リサイズする
   */
  onResize() {
    super.onResize();

    if(this.mesh) this.mesh.material.uniforms.resolution.value.x = window.innerWidth;
    if(this.mesh) this.mesh.material.uniforms.resolution.value.y = window.innerHeight;
  }

  /**
   * レンダリングする
   */
  onRaf() {
    // base
    if (this.orbitcontrols) this.orbitcontrols.update();
    this.renderer.render(this.scene, this.camera);

    if(this.mesh) this.mesh.material.uniforms.time.value += 0.05;
  }
}