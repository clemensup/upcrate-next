interface TwoColumnSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  copyright: string;
}

export function TwoColumnSection({
  image,
  imageAlt = "",
  title,
  text,
  copyright,
}: TwoColumnSectionProps): JSX.Element {
  return (
    <section>
      <div>
        <img src={image} alt={imageAlt} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <small>{copyright}</small>
      </div>
    </section>
  );
}
