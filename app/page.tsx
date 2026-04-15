import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
      <main className="max-w-6xl mx-auto px-6 py-20">

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl font-bold tracking-tight">
            🍗 Welcome to Adobohan
          </h1>

          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Taste the authentic Filipino favorite — Adobo. Slow-cooked,
            flavorful, and made with love.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="/menu"
              className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
            >
              View Menu
            </a>

            <a
              href="/order"
              className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              Order Now
            </a>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="grid md:grid-cols-3 gap-8 mt-24">

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow text-center">
            <Image
              src="/Chicken Adobo.png"
              alt="Chicken Adobo"
              width={300}
              height={200}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Chicken Adobo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Classic Filipino adobo with tender chicken, soy sauce, vinegar,
              garlic, and bay leaves.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow text-center">
            <Image
              src="/Pork Adobo.png"
              alt="Pork Adobo"
              width={300}
              height={200}
              loading="eager"
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Pork Adobo</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Rich and savory pork simmered slowly in traditional adobo sauce.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-zinc-900 shadow text-center">
            <Image
              src="/Adobo Rice Bowl.png"
              alt="Adobo Rice Bowl"
              width={300}
              height={200}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Adobo Rice Bowl</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              A hearty bowl of adobo served over steaming white rice.
            </p>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 text-sm">
        © {new Date().getFullYear()} Adobohan. All rights reserved.
      </footer>
    </div>
  );
}