const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// Strip out GSAP imports and register
code = code.replace(/import gsap from "gsap";\r?\nimport { ScrollTrigger } from "gsap\/ScrollTrigger";\r?\nimport { useGSAP } from "@gsap\/react";\r?\n\r?\nif \(typeof window !== "undefined"\) \{\r?\n  gsap\.registerPlugin\(ScrollTrigger, useGSAP\);\r?\n\}\r?\n/, '');

// Strip out the useGSAP hook entirely (this uses a lazy match trick to grab the whole block)
code = code.replace(/const containerRef = useRef<HTMLDivElement>\(null\);[\s\S]*?\}, \{ scope: containerRef \}\);/, '');

// Strip out the reveal-up class
code = code.replace(/reveal-up /g, '');

// Save back
fs.writeFileSync('src/app/page.tsx', code);
console.log('Stripped GSAP successfully');
