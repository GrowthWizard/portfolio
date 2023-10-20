export function SimpleLayoutH2({ title, intro, children }) {
  return (
    <div className="pt-8 mt-8 sm:pt-16 sm:mt-16 border-t dark:border-t-2 border-zinc-100 dark:border-rosa">
      <header className="max-w-2xl">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </div>
  )
}
