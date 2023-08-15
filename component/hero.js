import React from "react";
import Image from "next/image";
import classess from "./style/hero.module.css";
export default function Hero() {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/image/profileImg.jpg"
          width={150}
          height={150}
          alt="My image"
        />
      </div>
      <h1>Hi, I'm Ramekabal Singh</h1>
      <p>
        I bloq about web development - especily frontend library like React,
        Next, Javascript
      </p>
    </section>
  );
}
