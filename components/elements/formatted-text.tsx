import Trans from "next-translate/Trans";

function FormattedTextComponent(props) {
  return <div {...props} />;
}

export function FormattedText({ transKey }: { transKey: string }) {
  return (
    <Trans
      i18nKey={transKey}
      components={[<FormattedTextComponent />, <p className="mt-6" />]}
    />
  );
}
