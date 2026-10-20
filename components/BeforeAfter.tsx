"use client";

import { useState } from "react";

import { StudyDrawing } from "@/components/Drawings";

export function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="section" aria-labelledby="before-after-title">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">Before and after</p>
          <h2 id="before-after-title">Illustrated studies, until site photographs exist.</h2>
          <p className="lede">
            The pair below is drawn for this website. It is not a before and after of a Hofnie Trading CC job, and neither frame is a photograph.
          </p>
        </div>
        <div className="compare">
          <figure>
            <StudyDrawing variant={showAfter ? "house" : "section"} />
            <figcaption>
              <span className="placeholder-tag">{showAfter ? "After study" : "Before study"}</span>
              <span>{showAfter ? "A cleaner finished volume." : "An earlier, plainer building study."}</span>
            </figcaption>
          </figure>
          <div className="compare-actions">
            <button
              type="button"
              className="button button-secondary"
              aria-pressed={showAfter}
              onClick={() => setShowAfter((value) => !value)}
            >
              {showAfter ? "Show the before study" : "Show the after study"}
            </button>
            <p>Use the button to switch studies. Real project photographs will replace this block when they are supplied.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
