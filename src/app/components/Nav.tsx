import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Nav() {
  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-transparent">
      <nav className="max-w-4xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-medium text-2xl md:text-[2rem] leading-tight text-wf-plum">Flynn Reiter</Link>
          <a 
          href="https://www.linkedin.com/in/flynnreiter" 
          target="_blank" rel="noopener noreferrer" 
          aria-label="Flynn Reiter on LinkedIn" 
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-wf-plum text-white hover:opacity-90 transition">
            <SiLinkedin className="w-4 h-4" />
          </a>
          <a
          href="https://github.com/flynnnigan8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Flynn Reiter on GitHub"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-wf-plum text-white hover:opacity-90 transition">
            <SiGithub className="w-4 h-4" />
          </a>
          <a
          href="mailto:flynnreiter@gmail.com"
          aria-label="Email Flynn Reiter"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-wf-plum text-white hover:opacity-90 transition">
            <HiOutlineMail className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/resume" className="font-medium text-base md:text-lg text-wf-foreground hover:underline">Resume</Link>
          <Link href="/projects" className="font-medium text-base md:text-lg text-wf-foreground hover:underline">Projects</Link>
          {/* <Link href="/travels" className="font-medium text-base md:text-lg text-wf-foreground hover:underline">Travels</Link> */}
        </div>
      </nav>
    </header>
  );
}
