"use client";

import Image from "next/image";
import { useState } from "react";

import { compareImages } from "@/lib/media";

export function BeforeAfter() {
  const [position, setPosition] = useState(56);

  return (
    <section className="section" aria-labelledby="before-after-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Before and after</p>
          <h2 id="before-after-title">A slider, ready for real site photographs.</h2>
          <p className="lede">
            Drag the control to compare two frames. The pictures below are Unsplash stock, used only to show the slider. They are not a Hofnie Trading CC job.
          </p>
        </div>
        <div className="compare-slider">
          <div className="compare-frame">
            <Image
              src={compareImages.after.src}
              alt={compareImages.after.alt}
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
            />
            <div className="compare-before" style={{ width: `${position}%` }}>
              <div className="compare-before-sizer">
                <Image
                  src={compareImages.before.src}
                  alt={compareImages.before.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 1100px"
                />
              </div>
            </div>
            <span className="compare-label compare-label-before">Stock before</span>
            <span className="compare-label compare-label-after">Stock after</span>
            <span className="compare-handle" style={{ left: `${position}%` }} aria-hidden="true" />
          </div>
          <label className="compare-range">
            <span className="sr-only">Compare the stock before and after frames</span>
            <input
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
            />
          </label>
          <p className="compare-note">
            Replace these two files with Hofnie photographs when the company supplies a real before and after. Until then, treat both frames as stock.
          </p>
        </div>
      </div>
    </section>
  );
}
