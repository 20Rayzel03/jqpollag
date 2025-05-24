import Link from "next/link";
import Navbar from "./components/Navbar";
import { NavbarItems } from "./components/NavbarItems";

export default function Home() {
  return (
    <>
    <main>
        <h1>Willkommen auf meiner Webseite!</h1>
        <p>Dies ist ein Beispieltext f  r den Hauptbereich.</p>
    </main>

    <footer>
        <p>&copy; 2025 Meine Webseite. Alle Rechte vorbehalten.</p>
    </footer>
      
    </>
  );
}
