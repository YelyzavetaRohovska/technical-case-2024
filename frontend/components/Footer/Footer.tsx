import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 fixed bottom-0 w-full p-4">
      <div className="container mx-auto text-center text-white">
        <Link href="https://github.com/YelyzavetaRohovska/technical-case-2024" className="text-white font-semibold bg-zinc-700 border-gray-400 p-2 rounded-md text-lg hover:bg-zinc-600 active:bg-zinc-500">
          GitHub source
        </Link>
      </div>
    </footer>
  );
};