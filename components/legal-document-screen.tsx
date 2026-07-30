export type LegalDocumentBlock =
  | { type: "text"; content: string }
  | { type: "list"; items: string[] };

export type LegalDocumentSection = {
  title: string;
  blocks: LegalDocumentBlock[];
};

type LegalDocumentScreenProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalDocumentSection[];
};

export function LegalDocumentScreen({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentScreenProps) {
  return (
    <div className="mx-auto max-w-(--breakpoint-md) px-4 py-16 sm:px-6">
      <div className="border-border border-b pb-8">
        <h1 className="font-medium text-3xl text-foreground tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2  text-sm">
          Dernière mise à jour : {lastUpdated}
        </p>
        <p className="mt-6 text-lg ">{intro}</p>
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-medium  text-xl tracking-tight">
              {section.title}
            </h2>
            <div className="mt-3 flex flex-col gap-3">
              {section.blocks.map((block, index) =>
                block.type === "text" ? (
                  <p key={index} className=" leading-relaxed">
                    {block.content}
                  </p>
                ) : (
                  <ul
                    key={index}
                    className="ml-5 list-disc space-y-2  leading-relaxed"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
