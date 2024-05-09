precision mediump float;

uniform vec2 resolution;
uniform float time;

void main() {
    vec2 st = gl_FragCoord.xy / resolution.xy;
    gl_FragColor = vec4(sin(st.x * time),st.y,1.0 * time,1.0);
}