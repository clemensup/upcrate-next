import Trans from "next-translate/Trans";

function FormattedTextComponent(props) {
  return <div {...props} />;
}

export function FormattedText({
  transKey,
  delimiter = [<p className="mt-6" />],
}: {
  transKey: string;
  delimiter?: JSX.Element[];
}) {
  return (
    <Trans
      i18nKey={transKey}
      components={[<FormattedTextComponent />, ...delimiter]}
    />
  );
}
