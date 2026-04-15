const menuItems = [
  {
    category: "Chicken",
    items: [
      { name: "Chicken Adobo", price: 180, desc: "Classic soy-vinegar braised chicken" },
      { name: "Chicken Adobo sa Gata", price: 200, desc: "Creamy coconut milk adobo" },
      { name: "Chicken Adobo Flakes", price: 170, desc: "Crispy shredded adobo chicken" },
    ],
  },
  {
    category: "Pork",
    items: [
      { name: "Pork Adobo", price: 190, desc: "Slow-cooked pork in adobo sauce" },
      { name: "Pork Adobo sa Puti", price: 195, desc: "White adobo without soy sauce" },
      { name: "Crispy Pork Adobo", price: 210, desc: "Deep-fried adobo pork belly" },
    ],
  },
  {
    category: "Rice Bowls",
    items: [
      { name: "Adobo Rice Bowl", price: 160, desc: "Adobo over steaming white rice" },
      { name: "Garlic Adobo Bowl", price: 175, desc: "Topped with crispy garlic bits" },
    ],
  },
  {
    category: "Extras",
    items: [
      { name: "Steamed Rice", price: 30, desc: "Plain white rice" },
      { name: "Atchara", price: 40, desc: "Pickled papaya side" },
      { name: "Soft Drinks", price: 50, desc: "Coke, Sprite, or Royal" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold">🍽️ Our Menu</h1>
          <a href="/" className="text-sm text-zinc-500 hover:underline">← Back to Home</a>
        </div>

        <div className="space-y-12">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-semibold mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                {section.category}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start p-4 rounded-xl bg-white dark:bg-zinc-900 shadow"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                    <span className="font-semibold text-sm ml-4 whitespace-nowrap">₱{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/order"
            className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
          >
            Order Now
          </a>
        </div>
      </main>

      <footer className="text-center py-8 text-zinc-500 text-sm">
        © {new Date().getFullYear()} Adobohan. All rights reserved.
      </footer>
    </div>
  );
}
