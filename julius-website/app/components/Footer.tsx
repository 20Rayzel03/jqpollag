//Fußzeile
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-12">
      <p className="text-sm">&copy; 2025 Webseite von PJU. Alle Rechte werden sich vorbehalten.</p>
      <div className="space-x-4 mt-2">
        <Link href="/impressum" className="underline">Impressum</Link>
        <Link href="/datenschutz" className="underline">Datenschutz</Link>
      </div>
    </footer>
  );
}
