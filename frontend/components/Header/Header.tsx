import Link from "next/link";

export const Header = () => {
  const navItemClass = 'text-white font-semibold bg-zinc-700 border-gray-400 text-lg mr-6 p-2 rounded-md hover:bg-zinc-600 hover:border-slate-500  active:bg-zinc-500 active:border-slate-400';

  return (
    <header className="bg-zinc-900 w-full p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className={navItemClass}>
            Home
          </Link>
          <Link href="/dashboard" className={navItemClass}>
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  );
};