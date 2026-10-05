import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Utsarga Manandhar
            </p>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer · Nepal
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/hilubabz"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/utsargamanandhar"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </Link>
            <Link
              href="mailto:utsargam44@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Utsarga Manandhar
          </p>
        </div>
      </div>
    </footer>
  );
}
