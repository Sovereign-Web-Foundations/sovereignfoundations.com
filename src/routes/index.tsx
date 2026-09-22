import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="w-full pt-20 bg-surface-container-low min-h-screen">
      <div className="flex flex-col w-full">
        <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl lg:py-24">
          <div className="max-w-7xl mx-auto px-gutter-lg relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
              <div className="lg:col-span-7 flex flex-col items-start w-3/4">
                <h1 className="font-display-lg text-display-lg text-primary tracking-tight mb-space-lg">
                  The web should belong to the people.
                </h1>
                <p className="font-body-lg text-body-lg text-secondary mb-space-xl max-w-2xl leading-relaxed">
                  Sovereign Web Foundations is a free, open, and independent
                  alternative to the subscriptions and lock-in that most small
                  business websites are quietly built on. No product to buy. No
                  account required to start. Just the philosophy, the tools, and
                  the honest assessment you need to build something you actually
                  own.
                </p>
                <div className="flex flex-wrap items-center gap-space-md">
                  <a
                    className="inline-flex items-center justify-center px-space-xl py-4 rounded-lg bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary transition-all duration-200 shadow-md group"
                    data-path="assessment"
                    href="#"
                  >
                    <span>Get the Digital Risk Self-Assessment →</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative mt-space-xl lg:mt-0">
                <div className="relative w-full rounded-xl p-space-lg">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/sovereign-web-foundations-logo.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-space-xl lg:py-24 bg-surface-bright">
          <div className="max-w-7xl mx-auto px-gutter-lg">
            <div className="text-center max-w-3xl mx-auto mb-space-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                The Choice You've Been Given
              </h2>
              <p className="font-title-lg text-title-lg text-primary font-semibold mb-space-sm">
                Right now, building a website means picking one of two paths.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
              <div className="flex flex-row justify-between gap-8 p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-48 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-lg">
                  <span className="material-symbols-outlined text-[28px]">
                    credit_card_off
                  </span>
                </div>
                <div>
                  <p className="font-title-lg text-title-lg text-primary font-semibold mb-space-sm">
                    Pay a platform
                  </p>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    Squarespace, Wix, or Shopify a monthly fee forever, and
                    you'll get something polished — as long as you never want to
                    leave, negotiate your price, or fully understand how it
                    works.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-8 p-space-xl rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                <div className="w-48 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-lg">
                  <span className="material-symbols-outlined text-[28px]">
                    account_tree
                  </span>
                </div>
                <div>
                  <p className="font-title-lg text-title-lg text-primary font-semibold mb-space-sm">
                    Be buried by choice
                  </p>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    Going free and open will give you real ownership but it's
                    buried under plugin decisions, hosting questions, and no way
                    to know if you've done it right.
                  </p>
                </div>
              </div>
            </div>
            <p className="font-headline-sm text-headline-sm text-primary font-semibold text-center pt-16">
              Sovereign Web Foundations exist to close that gap.
            </p>
          </div>
        </section>
        <section className="w-full py-space-xl lg:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-gutter-lg">
            <div className="max-w-2xl mb-space-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Who This Is For
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
              <div className="flex flex-col h-full bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-lg">
                  <span className="material-symbols-outlined text-[24px]">
                    storefront
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-semibold mb-space-sm">
                  Building it yourself.
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed grow">
                  You don't have the budget for an agency, or the time to figure
                  out which platform is a trap and which one is a foundation.
                </p>
              </div>
              <div className="flex flex-col h-full bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-lg">
                  <span className="material-symbols-outlined text-[24px]">
                    design_services
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-semibold mb-space-sm">
                  Building it for clients.
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed grow">
                  You believe your clients deserve real ownership, even when a
                  subscription-locked platform would be the easier sale.
                </p>
              </div>
              <div className="flex flex-col h-full bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-space-lg">
                  <span className="material-symbols-outlined text-[24px]">
                    terminal
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-semibold mb-space-sm">
                  Building the software itself.
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed grow">
                  Sovereign Stoa is in active development, with Plinth starting
                  soon. Come build the alternative with us.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-space-xl lg:py-24 bg-surface-bright">
          <div className="max-w-7xl mx-auto px-gutter-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
              <div className="lg:col-span-5">
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-md">
                  What Sovereign Believes
                </h2>
                <p className="font-title-md text-title-md text-secondary mb-space-xl">
                  Our three public commitments come from our philosophy that
                  ownership should be the default assumption of the web.
                </p>
                <a
                  className="inline-flex items-center gap-space-xs text-primary font-title-sm text-title-sm hover:text-primary-container font-semibold transition-colors group"
                  data-path="philosophy"
                  href="#"
                >
                  <span>Read the Freedom Principle →</span>
                </a>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest flex items-center gap-space-md shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="font-title-md text-title-lg text-primary font-semibold">
                      Sovereign software will not be sold as a subscription.
                    </p>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest flex items-center gap-space-md shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="font-title-md text-title-lg text-primary font-semibold">
                      Sovereign software will not require vendor lock-in.
                    </p>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest flex items-center gap-space-md shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                  </div>
                  <div>
                    <p className="font-title-md text-title-lg text-primary font-semibold">
                      Sovereign products will not require one another.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-space-xl lg:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-gutter-lg">
            <div className="max-w-3xl mb-space-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-space-md">
                Where Things Stand
              </h2>
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                Sovereign Stoa (next-generation community software) is in active
                development. Sovereign Plinth (next-generation CMS) begins
                development soon. The Pillars and Capstone are earlier in the
                roadmap.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                      Active
                    </span>
                  </div>
                  <h4 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">
                    Sovereign Stoa
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Next-generation community software.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm">
                  <span className="font-label-md text-label-md text-primary font-medium">
                    In active development
                  </span>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                      Queued
                    </span>
                  </div>
                  <h4 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">
                    Sovereign Plinth
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Next-generation publishing CMS.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm">
                  <span className="font-label-md text-label-md text-secondary font-medium">
                    Development starting soon
                  </span>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest opacity-90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                      Planned
                    </span>
                  </div>
                  <h4 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">
                    Sovereign Pillars
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Decentralized identity &amp; records.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm">
                  <span className="font-label-md text-label-md text-secondary font-medium">
                    Early roadmap
                  </span>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest opacity-90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold">
                      Planned
                    </span>
                  </div>
                  <h4 className="font-title-lg text-title-lg text-primary font-bold mb-space-xs">
                    Sovereign Capstone
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Autonomous deployment fabric.
                  </p>
                </div>
                <div className="mt-space-lg pt-space-sm">
                  <span className="font-label-md text-label-md text-secondary font-medium">
                    Early roadmap
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <a
                className="inline-flex items-center gap-space-xs text-primary font-title-sm text-title-sm hover:text-primary-container font-semibold transition-colors"
                data-path="products"
                href="#"
              >
                <span>View the Product Roadmap →</span>
              </a>
            </div>
          </div>
        </section>
        <section className="w-full py-space-xl lg:py-24 bg-surface-bright">
          <div className="max-w-7xl mx-auto px-gutter-lg">
            <div className="rounded-2xl bg-surface-container-lowest p-space-xl lg:p-16 shadow-xl shadow-primary/5 flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center text-primary mb-space-lg">
                <span className="material-symbols-outlined text-[32px]">
                  policy
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-sm max-w-xl">
                Not sure how exposed your current website already is?
              </h3>
              <p className="font-body-lg text-body-lg text-secondary mb-space-xl max-w-lg leading-relaxed">
                The same risk framework we use in Texan Web Pro's paid
                stewardship service, adapted into a free, DIY self-assessment.
              </p>
              <a
                className="inline-flex items-center justify-center px-space-xl py-4 rounded-lg bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary transition-all duration-200 shadow-md"
                data-path="assessment"
                href="#"
              >
                <span>Get the Assessment →</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
