import Image from "next/image"
import Link from "next/link"
import nextJsLogo from "@/images/logos/nextjs.svg"
import wordpressLogo from "@/images/logos/wordpress-simple.svg"
import cloudLogo from "@/images/logos/cloud-solid.svg"

export default function WebdesignCards() {
    return (
        <div className="grid grid-cols-3 flex-wrap lg:justify-between lg:gap-4 lg:mb-16">

        <Link href="#wordpress" className="col-span-3 lg:col-span-1">
            <div className="bg-zinc-200 rounded-xl p-5 mb-16 lg:p-10 cursor-pointer transition-all ease-linear lg:hover:-mt-6 lg:mb-0 dark:bg-slate-800">
                <div className="flex flex-col left-0 right-0 -mt-16 mb-4">
                        <div className="bg-dark-purple max-w-[58px] w-full p-4 rounded-lg dark:bg-dark">
                            <Image
                                className="invert mx-auto"
                                src={wordpressLogo}
                                alt="WordPress Logo"
                                width={40}
                                height={40}
                            />
                        </div>
                </div>
                <h2 className="font-bold text-zinc-800 text-xl dark:text-white">WordPress</h2>
                <span className="text-light-purple text-sm before:content-['//'] before:pr-1 dark:text-rosa">Die Kontrolle behalten</span>
                <p className="text-zinc-800 dark:text-white pt-3 mb-3">Warum WordPress die beste Wahl für alle ist, die ihre Informationen selbst veröffentlichen wollen? Weil es so einfach ist, dass selbst ein Einsteiger damit umgehen kann! Dank zahlreicher Plugins kann WordPress mit einem Klick erweitert werden.</p>
                <p className="font-semibold text-light-purple dark:text-rosa">Mehr erfahren</p>
            </div>
            </Link>

            <Link href="#nextjs" className="col-span-3 lg:col-span-1">
            <div className="bg-zinc-200 rounded-xl p-5 mb-16 lg:p-10 cursor-pointer transition-all ease-linear lg:hover:-mt-6 lg:mb-0 dark:bg-slate-800">
                <div className="flex left-0 right-0 -mt-16 mb-4">
                        <div className="bg-dark-purple max-w-[58px] w-full p-4 rounded-lg dark:bg-dark">
                            <Image
                                className="invert mx-auto"
                                src={nextJsLogo}
                                alt="WordPress Logo"
                                width={40}
                                height={40}
                            />
                        </div>
                </div>
                <h2 className="text-zinc-800 font-bold dark:text-white text-xl">Next.js</h2>
                <span className="text-light-purple text-sm before:content-['//'] before:pr-1 dark:text-rosa">SEO-Friendly & blitzschnell</span>
                <p className="text-zinc-800 pt-3 mb-3 dark:text-white">next.js – das moderne Javascript Framework für alle, die schnell vorankommen wollen! Denn das Navigieren durch eine next.js Webseite fühlt sich an, als navigiert man durch eine App. Für Entwickler liefert es die wichtigsten Tools, um auch für Suchmaschinen optimiert zu sein!</p>
                <p className="text-light-purple dark:text-rosa">Mehr erfahren</p>
            </div>
            </Link>

            <Link href="#headless" className="col-span-3 lg:col-span-1">
            <div className="bg-zinc-200 rounded-xl p-5 mb-16 lg:p-10 cursor-pointer transition-all ease-linear lg:hover:-mt-6 lg:mb-0 dark:bg-slate-800">
                <div className="flex left-0 right-0 -mt-16 mb-4">
                        <div className="bg-dark-purple max-w-[58px] w-full p-4 rounded-lg dark:bg-dark">
                            <Image
                                className="invert mx-auto"
                                src={cloudLogo}
                                alt="WordPress Logo"
                                width={40}
                                height={40}
                            />
                        </div>
                </div>
                <h2 className="text-zinc-800 font-bold dark:text-white text-xl">Headless CMS</h2>
                <span className="text-light-purple text-sm before:content-['//'] before:pr-1 dark:text-rosa">Das Beste aus beiden! </span>
                <ul className="text-zinc-800 pt-3 list-none mb-3 dark:text-white">
                    <li className="before:content-['✓'] before:pr-2 before:text-green-700 dark:before:text-green-400">Content in WordPress verwalten</li>
                    <li className="before:content-['✓'] before:pr-2 before:text-green-700 dark:before:text-green-400">Von der Geschwindigkeit in next.js profitieren</li>
                    <li className="before:content-['✓'] before:pr-2 before:text-green-700 dark:before:text-green-400">Automatische Bildoptimierung</li>
                    <li className="before:content-['✓'] before:pr-2 before:text-green-700 dark:before:text-green-400">Hosting über weltweite Cloudserver, die stets die beste Verfügbarkeit garantieren</li>
                </ul>
                <p className="text-light-purple dark:text-rosa">Mehr erfahren</p>
            </div>
            </Link>


          </div>
    )
}