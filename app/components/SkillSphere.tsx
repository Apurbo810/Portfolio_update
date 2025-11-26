"use client";

import { useEffect, useRef } from "react";

export default function SkillSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.goat1000.com/tagcanvas.js";
    script.async = true;
  
    script.onload = () => {
      if (typeof window !== "undefined") {
        // @ts-ignore
        if (window.TagCanvas && canvasRef.current) {
          try {
            // @ts-ignore
            window.TagCanvas.Start("skillSphere", "skillTags", {
              textColour: null,
              outlineColour: "transparent",
              reverse: true,
              depth: 0.9,
              maxSpeed: 0.05,
              wheelZoom: false,
              imageMode: "both",
              clickToFront: false,
            });
          } catch (e) {
            console.log("TagCanvas error:", e);
          }
        }
      }
    };
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="flex justify-center items-center w-full h-[350px] relative">

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        id="skillSphere"
        className="absolute"
      />

      {/* Tags */}
      <div id="skillTags" className="hidden">
        <ul>
          <li><a href="#"><img src="/skill_icons/react.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/nextjs.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/node.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/typescript.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/javascript.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/tailwind.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/html.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/git.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/css.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/laravel.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/PHP.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/npm.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/bootstrap.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/vuejs.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/xampp.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/postgresql.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/mysql.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/postman.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/figma.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/shadcnui.svg" width={40} height={40} /></a></li>
          <li><a href="#"><img src="/skill_icons/motion-one.svg" width={40} height={40} /></a></li>
          
        </ul>
      </div>

    </div>
  );
}
