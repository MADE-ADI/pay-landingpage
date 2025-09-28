export const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null }, // provided by ShaderPass
    darkness: { value: 1.0 }, // strength of the vignette effect
    offset: { value: 1.0 }, // vignette offset
    uTime: { value: 0.0 }, // time for animation
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float darkness;
    uniform float offset;
    uniform float uTime;
    varying vec2 vUv;
    
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      
      // Calculate distance from center
      vec2 uv = (vUv - 0.5) * 2.0;
      float dist = dot(uv, uv);
      
      // Create vignette effect
      float vignette = 1.0 - smoothstep(offset, offset + darkness, dist);
      
      // Add subtle orange glow at edges
      vec3 orangeGlow = vec3(1.0, 0.5, 0.2); // Orange color
      float edgeGlow = smoothstep(0.8, 1.2, dist) * 0.1; // Gentle glow at edges
      float timeVariation = sin(uTime * 0.5) * 0.02 + 0.02; // Subtle animation
      
      // Mix original color with orange glow
      vec3 finalColor = mix(texel.rgb, texel.rgb + orangeGlow * (edgeGlow + timeVariation), edgeGlow);
      
      gl_FragColor = vec4(finalColor * vignette, texel.a);
    }
  `
};
