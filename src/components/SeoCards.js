import Image from "next/image"
import Link from "next/link"
import nextJsLogo from "@/images/logos/nextjs.svg"
import wordpressLogo from "@/images/logos/wordpress-simple.svg"
import cloudLogo from "@/images/logos/cloud-solid.svg"

export default function SeoCards() {
    return (
        <div className="grid grid-cols-3 flex-wrap lg:justify-between lg:gap-4 lg:mb-16">

        <Link href="#wordpress" className="col-span-3 mb-16 lg:col-span-1 lg:mb-0">
            <div className="bg-zinc-200 rounded-xl p-5 lg:p-10 cursor-pointer transition-all ease-linear lg:hover:-mt-6 dark:bg-slate-800">
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
                <h2 className="font-bold text-zinc-800 text-xl dark:text-white">SEO-Audit</h2>
                <span className="text-light-purple text-sm before:content-['//'] before:pr-1 dark:text-rosa">Unterstützt SEO dein Ziel?</span>
                <p className="text-zinc-800 dark:text-white pt-3 mb-3">Zweifelst du, ob SEO das richtige Marketing-Instrument für dein Unternehmen ist? Oder arbeitest du bereits mit einer SEO-Agentur zusammen und möchtest die Ergebnisse und Leistungen unabhängig prüfen lassen? In beiden Fällen ist ein SEO-Audit genau das Richtige für dich.</p>
            </div>
            </Link>

            <Link href="#nextjs" className="col-span-3 mb-16 lg:col-span-1 lg:mb-0">
            <div className="bg-zinc-200 rounded-xl p-5 lg:p-10 cursor-pointer transition-all ease-linear lg:hover:-mt-6 dark:bg-slate-800">
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
                <h2 className="text-zinc-800 font-bold dark:text-white text-xl">SEO-Betreuung</h2>
                <span className="text-light-purple text-sm before:content-['//'] before:pr-1 dark:text-rosa">SEO-Friendly & blitzschnell</span>
                <p className="text-zinc-800 pt-3 mb-3 dark:text-white">Eine fortlaufende SEO-Betreuung ist immer dann nötig, wenn deine Webseite es nicht aus eigenen Mitteln schafft, Top-Platzierungen in den organischen Suchergebnissen zu erzielen. Mit der richtigen Strategie finden wir gemeinsam, die richtigen Keywords, um deine Webseite auf Erfolgskurs zu bringen.</p>
            </div>
            </Link>

            <Link href="#headless" className="col-span-3 mb-16 lg:col-span-1 lg:mb-0">
            <div className="bg-zinc-200 rounded-xl p-5 lg:p-10 cursor-pointer transition-all ease-linear lg:hover:-mt-6 dark:bg-slate-800">
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
                <h2 className="text-zinc-800 font-bold dark:text-white text-xl">SEO-Beratung</h2>
                <span className="text-light-purple text-sm before:content-['//'] before:pr-1 dark:text-rosa">SEO selbst umsetzen!</span>
                <p className="text-zinc-800 pt-3 list-none mb-3 dark:text-white">
                Eine SEO Beratung hingegen ist immer dann zielführend, wenn du in der Lage bist Optimierungsempfehlungen in deinem eigenen Unternehmen umzusetzen. Du erhältst monatlich oder quartalsweise einen Katalog mit Empfehlungen, die von deinen Autoren, Designern oder Entwicklern umgesetzt werden können.
                </p>
            </div>
            </Link>


          </div>
    )
}