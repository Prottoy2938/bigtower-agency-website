import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoEasyMoney from '@/images/clients/easymoney-university/easyunilogo.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['EasyMoney University', logoEasyMoney],
  // ['Phobia', logoPhobiaLight],
  // ['Family Fund', logoFamilyFund],
  // ['Unseal', logoUnseal],
  // ['Mail Smirk', logoMailSmirk],
  // ['Home Work', logoHomeWork],
  // ['Green Life', logoGreenLife],
  // ['Bright Path', logoBrightPath],
]

{/* <Script
src="https://www.googletagmanager.com/gtag/js?id=G-NKMY0PML7E"
strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NKMY0PML7E');
`}
</Script> */}

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
Our most recent Clients
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Want More Students Enrolling in Your Course?"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        You&apos;re not alone! Many course creators struggle with attracting website visitors. In fact, most get fewer than 500 a month. Not nearly enough to make even ONE enrollment... But with Us, you&apos;ll see results within 1 month, Guaranteed.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Yo"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
         Some text here
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="No more lead Generation Challenges">
            	Building lasting relationships is at the core of coaching success. Our expertise extends beyond creating websites – we create experiences that keep your clients engaged and committed. Say goodbye to high dropout rates and hello to long-term partnerships.
            </ListItem>
            <ListItem title="Stop Client Dropout Rates">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="Get your Client to Trust">
            •	In a sea of online coaches, standing out requires a trustworthy image. Our web solutions websites are meticulously crafted to build and showcase your credibility. Let&apos;s eliminate skepticism and reinforce your expertise in the digital world.
            </ListItem>
            <ListItem title="Keep your Client Engaged">
            •	Educating potential clients about the transformative power of coaching is key. Our websites are not just informative but interactive, delivering your message with impact. Let&gitapos;s turn curious visitors into clients who truly understand and value your coaching services.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We Help Online Couches Get More Leads Close Sales and Keep Clients',
}

export default async function Home() {
  // EDITED HERE
  let caseStudies = (await loadCaseStudies()).slice(0, 1)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          {/* We Help Online Couches Get More Leads Close Sales and Keep Clients */}
          Get more Repeatable and Profitable Results

          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          We help Online Courses and Coaching Programs stay in front of their best-fit buyers till they are ready to engage and convert.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoEasyMoney }}
      >
      The team at BigTower Studio went above & beyong with our marketing campaign. On tight marketing budget, they managed to make our university known all over Algerian Social Media & Grew our students by over 40% in the span of two weeks.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
