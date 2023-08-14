import Image from "next/image";
import Typing from "./Typing";
import ActiveForWork from './ActiveForWork';

// import images from public folder 
import nextjsLogo from '@/images/old/nextjs-logo.png';
import reactLogo from '@/images/old/react-logo.png';
import wordpressLogo from '@/images/old/wordpress-logo.png';
import tailwindLogo from '@/images/old/tailwindcss-logo.png';
import profilePicture from '@/images/old/dominik-stein.png';

export default function HomepageHero() {

    return (
        <section id="hero" className="pt-4 mb-10">
        <div className="grid grid-cols-2 justify-between gap-5 items-center flex-wrap dark:bg-zinc-900">

          <div id="hero-col-one" className="flex flex-col col-span-2 order-2 lg:order-1 lg:col-span-1">
            <div className="flex flex-row flex-nowrap h-10 p-2 border bg-zinc-800 border-dark-purple rounded-full text-sm max-w-[270px] mb-4 gap-3 dark:bg-dark-purple">
              <div className="animate-pulse flex items-center bg-zinc-300/70 text-white border rounded-full text-center py-1 px-3 dark:bg-light-purple dark:border-light-purple">
                <ActiveForWork />
              </div>
              <a className="p-[1px]" href="https://bookme.name/dominik/lite/beratung" title="Beratungsgespräch buchen" rel="noopener norefferer">
                <div className="text-white hover:text-rosa transition-colors">Termin buchen <span className="text-slate-300">&#62;</span></div>
              </a>
            </div>
            <h1 className="text-zinc-900 text-3xl lg:text-5xl font-extrabold mb-5 dark:text-slate-200"><Typing /><br/> vom SEO-Experten.</h1>
            <p className="text-lg text-zinc-600 mb-4 lg:mb-12 lg:text-lg dark:text-slate-200">Das einzige was schwer an der Suchmaschinenoptimierung ist, ist die Komplexität der Materie. Bei all den Regeln und Best-Practices, kann es schwer sein zu entscheiden, welche Optimierungsmöglichkeiten den größten Effekt erzielen.</p>
            <div>
              <h3 className="text-lg text-zinc-600  font-semibold mb-4 dark:text-slate-200">Verwendete Technologien:</h3>
              <div id="technologies">
                <div className="flex flex-row flex-nowrap items-center gap-6" id="technologies">
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer nofollow">
                  <Image 
                    className="invert opacity-90 hover:opacity-100 transition delay-[50ms] duration-300 ease-in-out hover:animate-pulse dark:invert-0"
                    src={nextjsLogo} 
                    alt="nextjs-logo" 
                    width={60} height={36} 
                    loading="eager" />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer nofollow">
                    <Image
                    className="invert opacity-80 hover:opacity-90 transition delay-[50ms] duration-300 ease-in-out hover:animate-pulse dark:invert-0"
                    src={reactLogo} 
                    alt="react-logo" 
                    width={107} height={36} 
                    loading="eager" />
                  </a>
                  <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer nofollow">
                    <Image
                    className="invert opacity-80 hover:opacity-90 transition delay-[50ms] duration-300 ease-in-out hover:animate-pulse dark:invert-0"
                    src={wordpressLogo}
                    alt="wordpress-logo" 
                    width={176} height={36} 
                    loading="eager" />
                  </a>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer nofollow">
                    <Image
                    className="invert opacity-70 hover:opacity-80 transition delay-[50ms] duration-300 ease-in-out hover:animate-pulse dark:invert-0"
                    src={tailwindLogo}
                    alt="tailwind-css-logo" 
                    width={219} height={28} 
                    loading="eager" />
                  </a>
                  </div>
              </div>
            </div>
          </div>

          <div id="hero-col-two" className="flex justify-center items-center order-1 col-span-2 lg:mb-0 lg:order-2 lg:col-span-1">
            <Image 
              src={profilePicture} 
              alt="Portrait von Dominik Stein, Web Developer und SEO-Experte" 
              width={450}
              height={450}
              loading="eager"
              className="dark:grayscale" />
          </div>

        </div>
      </section>
    )
}