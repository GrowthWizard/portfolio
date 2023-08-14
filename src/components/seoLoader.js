import {Container} from '@/components/Container';

const SEO_QUOTES = [
    "Content is King.",
    "Write for humans, not for search engines.",
    "SEO is a marathon, not a sprint.",
    "Mobile-first is no longer optional.",
    "Good SEO is paying attention to all the details that most bloggers ignore.",
    "The best place to hide a dead body is the second page of Google search.",
    "It’s not about getting any visitors to your site, but about getting the right ones.",
    "Google only loves you when everyone else loves you first.",
    "The objective is not to make your links appear natural; the objective is that your links are natural.",
    "Why did the SEO expert cross the road? To improve the site's ranking!",
    "Why did the marketer get off the trampoline? He was worried about his bounce rate!",
    "If an SEO expert was a gardener, they’d be great at growing organic results.",
    "What's an SEO expert's favorite drink? Organic search tea!",
    "Why did the SEO break up with the PPC? She had too many issues with his commitment!",
    "How do SEO experts celebrate improved rankings? SERP-rise parties!",
    "Why don’t SEO experts go fishing? They can’t stand the idea of the net working without them.",
    "Why did the SEO expert stay calm during the stock market crash? He knew how to maintain his ranking.",
    "Why was the SEO expert bad at relationships? He had too many internal issues.",
    "If content is king, then backlinks are the queen. And we all know who runs the house!"
];

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * SEO_QUOTES.length);
    return SEO_QUOTES[randomIndex];
};

const SEOLoader = () => {
    return (
        <Container>
            <div id="seo-loader" className="max-w-5xl mx-auto mt-12 py-20 rounded shadow-lg bg-white dark:bg-gray-800">
                <h2 className="text-2xl mb-4 font-bold text-center text-zinc-800 dark:text-zinc-100">
                    Berühmte SEO-Zitate, während Ihre Webseite lädt.
                </h2>
                <p className="text-xl font-semibold text-center text-zinc-900 italic dark:text-zinc-100">
                    {getRandomQuote()}
                </p>
            </div>
        </Container>
    );
};



export default SEOLoader;
