import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/philosophy/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="w-full pt-20 bg-[#F0F1F4]">
      <div className="flex flex-col w-full">
        <div className="w-full py-space-xl md:py-margin-desktop">
          <div className="max-w-4xl mx-auto px-gutter-lg">
            <section className="flex flex-col mb-space-xl md:mb-margin-desktop pt-space-sm">
              <h1 className="text-display-sm md:text-display-lg font-headline-lg md:font-display-lg text-[#112446] tracking-tight leading-tight mb-space-lg">
                Philosophy
              </h1>
              <div className="bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm flex flex-col gap-space-lg">
                <p className="text-title-lg md:text-headline-sm font-title-lg text-primary leading-relaxed">
                  Sovereign is not an organization with a mission statement.
                  It's a set of public commitments before any of the
                  foundational web software those commitments describe has
                  shipped. Everything Sovereign builds is measured against three
                  values.
                </p>
                <div className="border-t border-[#D9DCE2] pt-space-md">
                  <p className="font-body-lg text-body-lg text-primary leading-relaxed">
                    <span className="text-[#112446] font-bold">Freedom</span> is
                    the point of the whole project — true ownership of your
                    website, not just possession of its files.{' '}
                    <span className="text-[#112446] font-bold">
                      Craftsmanship
                    </span>{' '}
                    and{' '}
                    <span className="text-[#112446] font-bold">Integrity</span>{' '}
                    exist to make that freedom real rather than theoretical:
                    freedom built badly isn't actually free, and freedom
                    marketed dishonestly isn't either.
                  </p>
                </div>
              </div>
            </section>
            <div className="flex flex-col gap-space-xl md:gap-margin-desktop">
              <section className="flex flex-col gap-space-lg">
                <div className="border-b border-[#D9DCE2] pb-space-sm">
                  <h2 className="font-headline-md text-headline-md text-[#112446]">
                    Freedom
                  </h2>
                  <p className="font-body-md text-body-md text-[#566079] mt-1">
                    The reason Sovereign exists at all.
                  </p>
                </div>
                <div className="flex flex-col gap-space-md">
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          01
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>
                              Ownership means understanding, not just possession
                            </span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            Having the files isn't the same as knowing what they
                            do.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          02
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Freedom doesn't require money or skill</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            The same foundation should work for a broke teenager
                            and a senior developer.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          03
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Free and premium are not opposites</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            You shouldn't have to choose between the two.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          04
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>
                              Licensing protects freedom in both directions
                            </span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            Open for developers to build with, closed to anyone
                            who'd re-paywall the finished product.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          05
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>
                              Extend & customize however you want. Deploy
                              anywhere.
                            </span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            No one should be able to gate what you do with your
                            own site.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="flex justify-end">
                  <a
                    className="inline-flex items-center gap-space-sm text-title-sm font-title-sm text-primary bg-surface-container-lowest border border-[#D9DCE2] hover:border-primary-container px-space-md py-space-sm rounded-lg shadow-sm transition-colors"
                    href="#"
                  >
                    Read the Freedom Principle →
                  </a>
                </div>
              </section>
              <section className="flex flex-col gap-space-lg">
                <div className="border-b border-[#D9DCE2] pb-space-sm">
                  <h2 className="font-headline-md text-headline-md text-[#112446]">
                    Craftsmanship
                  </h2>
                  <p className="font-body-md text-body-md text-[#566079] mt-1">
                    What makes Freedom real instead of theoretical.
                  </p>
                </div>
                <div className="flex flex-col gap-space-md">
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          01
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Built agnostic, on purpose</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            No database, frontend, or host you're forced into.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          02
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Progressive disclosure</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            Sensible defaults today, room to grow into real
                            skill tomorrow.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          03
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Real standards, no excuses</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            Free software with no excuse to skip security, SEO,
                            or performance.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          04
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>
                              Built for beginners and developers alike
                            </span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            The same product, genuinely good for both.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          05
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Good craftsmanship is invisible</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            You only ever notice the software that's built
                            badly.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="flex justify-end">
                  <a
                    className="inline-flex items-center gap-space-sm text-title-sm font-title-sm text-primary bg-surface-container-lowest border border-[#D9DCE2] hover:border-primary-container px-space-md py-space-sm rounded-lg shadow-sm transition-colors"
                    href="#"
                  >
                    Read about Craftsmanship →
                  </a>
                </div>
              </section>
              <section className="flex flex-col gap-space-lg">
                <div className="border-b border-[#D9DCE2] pb-space-sm">
                  <h2 className="font-headline-md text-headline-md text-[#112446]">
                    Integrity
                  </h2>
                  <p className="font-body-md text-body-md text-[#566079] mt-1">
                    What keeps Freedom and Craftsmanship honest.
                  </p>
                </div>
                <div className="flex flex-col gap-space-md">
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          01
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Honest about limits</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            Most things need no developer. We say so — and we
                            say when they do.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          02
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>
                              The license split is an integrity decision
                            </span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            It exists to close a loophole, not to look clever.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          03
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Philosophy lived, not marketed</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            This is the path Moses actually walked, not a slogan
                            written after the fact.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          04
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>
                              Honesty holds even when it costs the sale
                            </span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            Including against our own preferences.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="group relative bg-[#FAFAFC] border border-[#D9DCE2] rounded-lg p-space-lg md:p-space-xl shadow-sm hover:border-primary-container transition-all cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-start gap-space-md md:gap-space-lg flex-1">
                        <span className="font-display-sm text-display-sm text-primary-fixed-dim select-none shrink-0 w-12">
                          05
                        </span>
                        <div className="flex flex-col gap-space-xs pt-1">
                          <div className="font-headline-md text-headline-md text-[#112446] group-hover:text-primary-container transition-colors inline-flex items-center gap-space-sm">
                            <span>Visible boundaries</span>
                            <span className="material-symbols-outlined text-[#566079] text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-container">
                              arrow_forward
                            </span>
                          </div>
                          <p className="font-body-md text-body-md text-[#566079] leading-normal">
                            If something's free until it isn't, you'll know
                            before you invest your time, not after.
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center self-center pl-space-md">
                        <div className="w-8 h-8 rounded-full bg-[#F0F1F4] flex items-center justify-center text-[#112446] group-hover:bg-primary-container group-hover:text-surface-container-lowest transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            north_east
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="flex justify-end">
                  <a
                    className="inline-flex items-center gap-space-sm text-title-sm font-title-sm text-primary bg-surface-container-lowest border border-[#D9DCE2] hover:border-primary-container px-space-md py-space-sm rounded-lg shadow-sm transition-colors"
                    href="#"
                  >
                    Read about Integrity →
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
