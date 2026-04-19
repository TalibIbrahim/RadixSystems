module.exports = [
"[project]/weblanding-next/components/Aurora/Aurora.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Aurora
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__ = __turbopack_context__.i("[externals]/ogl [external] (ogl, esm_import, [project]/weblanding-next/node_modules/ogl)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// Aurora styles are included in global stylesheet (styles/globals.css)
const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \\
  int index = 0;                                            \\
  for (int i = 0; i < 2; i++) {                               \\
     ColorStop currentColor = colors[i];                    \\
     bool isInBetween = currentColor.position <= factor;    \\
     index = int(mix(float(index), float(i), float(isInBetween))); \\
  }                                                         \\
  ColorStop currentColor = colors[index];                   \\
  ColorStop nextColor = colors[index + 1];                  \\
  float range = nextColor.position - currentColor.position; \\
  float lerpFactor = (factor - currentColor.position) / range; \\
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \\
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;
function Aurora(props) {
    const { colorStops = [
        "#5227FF",
        "#7cff67",
        "#5227FF"
    ], amplitude = 0.3, blend = 0.9 } = props;
    const propsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(props);
    propsRef.current = props;
    const ctnDom = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const ctn = ctnDom.current;
        if (!ctn) return;
        const renderer = new __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__["Renderer"]({
            alpha: true,
            premultipliedAlpha: true,
            antialias: true
        });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.canvas.style.backgroundColor = "transparent";
        let program;
        function resize() {
            if (!ctn) return;
            const width = ctn.offsetWidth;
            const height = ctn.offsetHeight;
            renderer.setSize(width, height);
            if (program) {
                program.uniforms.uResolution.value = [
                    width,
                    height
                ];
            }
        }
        window.addEventListener("resize", resize);
        const geometry = new __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__["Triangle"](gl);
        if (geometry.attributes.uv) {
            delete geometry.attributes.uv;
        }
        const colorStopsArray = colorStops.map((hex)=>{
            const c = new __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__["Color"](hex);
            return [
                c.r,
                c.g,
                c.b
            ];
        });
        program = new __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__["Program"](gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: {
                    value: 0
                },
                uAmplitude: {
                    value: amplitude
                },
                uColorStops: {
                    value: colorStopsArray
                },
                uResolution: {
                    value: [
                        ctn.offsetWidth,
                        ctn.offsetHeight
                    ]
                },
                uBlend: {
                    value: blend
                }
            }
        });
        const mesh = new __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__["Mesh"](gl, {
            geometry,
            program
        });
        ctn.appendChild(gl.canvas);
        let animateId = 0;
        const update = (t)=>{
            animateId = requestAnimationFrame(update);
            const { time = t * 0.01, speed = 1.0 } = propsRef.current;
            program.uniforms.uTime.value = time * speed * 0.1;
            program.uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0;
            program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
            const stops = propsRef.current.colorStops ?? colorStops;
            program.uniforms.uColorStops.value = stops.map((hex)=>{
                const c = new __TURBOPACK__imported__module__$5b$externals$5d2f$ogl__$5b$external$5d$__$28$ogl$2c$__esm_import$2c$__$5b$project$5d2f$weblanding$2d$next$2f$node_modules$2f$ogl$29$__["Color"](hex);
                return [
                    c.r,
                    c.g,
                    c.b
                ];
            });
            renderer.render({
                scene: mesh
            });
        };
        animateId = requestAnimationFrame(update);
        resize();
        return ()=>{
            cancelAnimationFrame(animateId);
            window.removeEventListener("resize", resize);
            if (ctn && gl.canvas.parentNode === ctn) {
                ctn.removeChild(gl.canvas);
            }
            gl.getExtension("WEBGL_lose_context")?.loseContext();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        amplitude
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ctnDom,
        className: "aurora-container"
    }, void 0, false, {
        fileName: "[project]/weblanding-next/components/Aurora/Aurora.jsx",
        lineNumber: 205,
        columnNumber: 10
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/weblanding-next/components/Aurora/Aurora.jsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/weblanding-next/components/Aurora/Aurora.jsx [ssr] (ecmascript)"));
}),
"[externals]/ogl [external] (ogl, esm_import, [project]/weblanding-next/node_modules/ogl)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("ogl-693ffcf2e65f1794");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__019qa1i._.js.map