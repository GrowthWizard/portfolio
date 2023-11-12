import Image from "next/image";
import Link from "next/link";
import Typing from "@/components/Typing";

// import images from public folder 
import PreviewImage from '@/app/tools/helpful-content-gpt/images/helpful-content-gpt.gif';
import OpenAILogo from '@/app/tools/helpful-content-gpt/images/OpenAI_Logo.svg.png'
import ChatGPTLogo from '@/app/tools/helpful-content-gpt/images/ChatGPT_logo.svg.webp'

import { formatDate } from "@/lib/formatDate";

export default function Header({ page} ) {

    return (
        <header id="hero" className="md:mb-10 lg:pb-12 lg:border-b-2 border-zinc-300 dark:border-zinc-700">
        <div className="grid grid-cols-2 justify-between gap-5 items-center flex-wrap dark:bg-zinc-900">

          <div id="hero-col-one" className="flex flex-col col-span-2 order-1 lg:col-span-1">
            <div className="flex flex-row flex-nowrap items-center h-10 p-0.5 border bg-zinc-800 border-dark-purple rounded-full text-sm max-w-[280px] mb-4 gap-3 dark:bg-dark-purple">
              <div className="animate-pulse flex items-center bg-green-400 text-zinc-800 border rounded-full text-center py-1 px-3 dark:bg-light-purple dark:border-light-purple dark:text-white">
                Letztes Update:
              </div>
              <a href="#changelog" title="Changelog aufrufen" rel="noopener noreferrer">
                <time className="text-white hover:text-rosa transition-colors">{formatDate(page.date)}</time>
              </a>
            </div>
            <h1 className="text-zinc-900 text-3xl lg:text-5xl font-extrabold mb-5 dark:text-slate-200">{page.title}</h1>
            <p className="text-lg text-zinc-600 mb-4 lg:mb-12 lg:text-lg dark:text-slate-200">{page.description}</p>
            <div className="flex flex-row flex-nowrap gap-5">
                <a href="https://chat.openai.com/g/g-wZv6N4ovy-helpful-content-analyzer-v-1-0" title="Zum Helpful-Content-GPT Bot" className="font-primary py-2 px-5 bg-dark-purple text-white rounded-lg transition-all ease-linear hover:scale-110 hover:bg-light-purple dark:bg-light-purple dark:hover:bg-light-purple">
                    Zum Helpful Content Bot
                </a>
                <a title="Feedback senden" className="font-primary py-2 px-5 bg-dark-purple text-white rounded-lg transition-all ease-linear hover:scale-110 hover:bg-light-purple dark:bg-light-purple dark:hover:bg-light-purple " href={`mailto:hello@steindominik.de?subject=Frage%20zum%20Artikel%20${encodeURIComponent(page.title)}`}>
                    Feedback senden!
                </a>
            </div>

          </div>

          <div id="hero-col-two" className="flex flex-col justify-center order-2 col-span-2 pt-10 lg:mb-0 lg:col-span-1">
            <a href="https://chat.openai.com/g/g-wZv6N4ovy-helpful-content-analyzer-v-1-0" rel="noopener noreferrer" target="_blank" title="Zum Helpful Content Bot auf ChatGPT">
            <Image 
              src={PreviewImage} 
              alt="Chat-Preview des Helpful-Content-GPT Bots" 
              width={502}
              height={502}
              loading="eager"
              className="mb-7 border-4 border-zinc-700 rounded-xl shadow-xl dark:shadow-none transition-all dark:grayscale ease-in-out hover:scale-105"
               />
               </a>
              <div>
              <h3 className="text-lg text-zinc-600  font-semibold mb-4 dark:text-slate-200">Verwendete Technologien:</h3>
              <div id="technologies">
                <div className="flex flex-row flex-nowrap items-center gap-6">
                <a href="https://openai.com/" target="_blank" rel="noopener noreferrer nofollow">
                  <Image 
                    className="grayscale-0 text-white opacity-80 hover:opacity-100 transition delay-[50ms] duration-300 ease-in-out hover:animate-pulse dark:invert"
                    src={OpenAILogo} 
                    alt="OpenAI Logo"
                    width={100} height={36} 
                    loading="eager" />
                </a>
                <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer nofollow">
                    <Image
                    className="grayscale-0 opacity-80 hover:opacity-90 transition delay-[50ms] duration-300 ease-in-out hover:animate-pulse dark:grayscale"
                    src={ChatGPTLogo} 
                    alt="OpenAI ChatGPT Logo" 
                    width={30} height={30} 
                    loading="eager" />
                  </a>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    )
}