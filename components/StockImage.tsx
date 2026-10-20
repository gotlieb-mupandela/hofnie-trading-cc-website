import Image from "next/image";

export function StockImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 880px) calc(100vw - 2.5rem), 1120px",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className="stock">
      <div className="stock-frame">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
      </div>
      <figcaption>Stock photograph. Not a Hofnie Trading CC project.</figcaption>
    </figure>
  );
}
