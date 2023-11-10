import Link from 'next/link'
import Image from 'next/image'

//import images
import AuthorImage from '@/images/authors/dominik-stein/dominik-stein-2023.jpeg'

export default function AuthorBio ({article}) {
 return (
    <div id="author" className="grid grid-cols-3 gap-5 items-center py-8 border-t border-b border-zinc-300 md:grid-cols-4 lg:grid-cols-3 lg:mt-10 lg:py-8 dark:bg-dark-purple dark:rounded-lg dark:px-4 dark:py-5 dark:md:py-4 dark:lg:py-6 dark:border-none">
        <Link rel="author" href="/ueber" id="author-image" className="col-span-3 order-1 relative w-full max-w-md hover:scale-95 transition-all ease-in-out md:col-span-2 md:order-2 lg:col-span-1 lg:order-2">
            <Image className="object-cover rounded-md" src={AuthorImage} alt="Autor: Dominik Stein, Web-Developer und SEO-Experte" width={400} height={400} />
        </Link>
        <div id="author-bio" className="order-2 col-span-3 lg:max-w-md md:col-span-2 md:order-1 lg:col-span-2 lg:order-1">
            <h5 className="font-primary text-sm mb-4">Verfasst von:<br/> <Link rel="author" href="/ueber" title="Über den Autoren" className="font-bold text-lg text-dark-purple underline underline-offset-4 decoration-light-purple dark:text-rosa hover:text-light-purple transition-colors ease-linear dark:hover:text-zinc-300" id="author-name">{article.author}</Link></h5>
            <p className="font-primary mb-7">Als SEO-Experte optimiere ich seit 2014 Webseiten für Suchmaschinen. Die Faszination, für die technischen Aspekte der Suchmaschinenoptimierung, haben dazu geführt, dass ich  mich 2022 als Web-Entwickler selbstständig gemacht habe.</p>
            <div className="flex flex-row flex-nowrap gap-5">
                <Link rel="author" href="/ueber" title="Über den Autoren" className="font-primary py-2 px-5 bg-dark-purple text-white rounded-sm transition-all ease-linear hover:scale-110 hover:bg-light-purple dark:bg-light-purple dark:hover:bg-light-purple">
                    Über mich
                </Link>
                <a title="Email an den Autoren senden" className="font-primary py-2 px-5 bg-dark-purple text-white rounded-sm transition-all ease-linear hover:scale-110 hover:bg-light-purple dark:bg-light-purple dark:hover:bg-light-purple " href={`mailto:hello@steindominik.de?subject=Frage%20zum%20Artikel%20${encodeURIComponent(article.title)}`}>
                    Kontaktiere mich!
                </a>
            </div>
        </div>
    </div>
 )
}