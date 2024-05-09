attribute vec3 position;

void main() {
  // 2x2のサイズで作成したPlaneBufferGeometryは、両辺とも (-1.0 〜 1.0） の範囲で頂点を持っています。このgeometryに対し座標変換をまったく行わないことで、canvasのサイズにぴったり合わさるようにPlaneを表示させることができます。
  gl_Position = vec4( position, 1.0 );
}