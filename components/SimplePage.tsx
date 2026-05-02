type SimplePageProps = {
  eyebrow: string;
  title: string;
  text: string;
  sections?: {
    title: string;
    text: string;
    items?: string[];
  }[];
};

export function SimplePage({ eyebrow, title, text, sections = [] }: SimplePageProps) {
  return (
    <main className="bg-mist">
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-soft sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-navy sm:text-4xl">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{text}</p>
          {sections.length ? (
            <div className="mt-8 space-y-7 border-t border-sky-100 pt-7">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-black text-navy">{section.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{section.text}</p>
                  {section.items?.length ? (
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
