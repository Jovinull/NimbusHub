import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <h1 className="text-lg font-bold">NimbusHub</h1>
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="/" className="hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
