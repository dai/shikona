export default function Page() {
  const files = [
    {
      label: 'Google Japanese Input',
      fileName: 'rikishi_20260703.txt',
      href: 'https://github.com/dai/shikona/releases/latest/download/rikishi_20260703.txt',
      description: 'Google Japanese Input dictionary text file',
    },
    {
      label: 'Microsoft IME',
      fileName: 'rikishi_20260703.dic',
      href: 'https://github.com/dai/shikona/releases/latest/download/rikishi_20260703.dic',
      description: 'Microsoft IME system dictionary file',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-12 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_400px]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">Parent project: dai/o-sumo</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-6xl">Shikona Dictionary</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Sumo wrestler shikona dictionaries for Google Japanese Input and Microsoft IME.
            </p>
          </div>
          <img
            src="eyecatch.png"
            alt="Shikona Dictionary eyecatch"
            className="aspect-[4/3] w-full max-w-[400px] rounded-lg border object-cover shadow-sm"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {files.map((file) => (
            <a
              key={file.fileName}
              href={file.href}
              className="rounded-lg border bg-card p-5 text-card-foreground transition hover:border-foreground"
            >
              <span className="text-sm font-medium text-muted-foreground">{file.label}</span>
              <strong className="mt-3 block text-xl">{file.fileName}</strong>
              <span className="mt-3 block text-sm leading-6 text-muted-foreground">{file.description}</span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a className="underline underline-offset-4" href="https://github.com/dai/shikona/releases/latest">
            Latest release
          </a>
          <a className="underline underline-offset-4" href="https://github.com/dai/o-sumo">
            dai/o-sumo
          </a>
        </div>
      </section>
    </main>
  )
}
