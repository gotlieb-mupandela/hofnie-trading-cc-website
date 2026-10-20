import Image from "next/image";

import { stockImages } from "@/lib/media";
import type { ProjectSlot } from "@/lib/site";

export function ProjectCard({ slot, index }: { slot: ProjectSlot; index: number }) {
  const image = stockImages[index % stockImages.length];

  return (
    <article className="project-card">
      <div className="media">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 720px) 100vw, 40vw" />
      </div>
      <p className="placeholder-tag">Placeholder, not a Hofnie project</p>
      <p className="project-kind">
        {slot.town} · {slot.kind}
      </p>
      <h3>{slot.title}</h3>
      <dl>
        <div>
          <dt>Site</dt>
          <dd>{slot.location}</dd>
        </div>
        <div>
          <dt>Client</dt>
          <dd>{slot.client}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{slot.year}</dd>
        </div>
      </dl>
      <p>{slot.summary}</p>
    </article>
  );
}
