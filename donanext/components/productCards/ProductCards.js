"use client";
import classes from "./ProductCards.module.css";
import { BsArrowDown } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductCards({ images, title, info1, info2 }) {
  const router = useRouter();
  const path = usePathname();

  return (
    <div>
      <section className={classes.hpText}>
        <h1>{title}</h1>
        <h5>
          {info1}
          <br />
          {info2}
        </h5>
        <a href="#products">
          <BsArrowDown className={classes.arrowDown} />
        </a>
      </section>
      <section id="products" className={classes.products}>
        {images.map((img, i) => {
          return (
            <div key={i}>
              <div
                className={classes.product}
                style={{ backgroundImage: `url(${img.src1})` }}
                onClick={() => {
                  router.push(`${path}/${img.navigate}`);
                }}
              >
                {path === "/en" ? <h1>{img.h1}</h1> : <h1>{img.h2}</h1>}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
