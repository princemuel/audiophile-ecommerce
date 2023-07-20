import styles from '@/assets/styles/layout.module.scss';
import { links } from '@/common';
import { cn } from '@/lib';
import { LogoIcon, NavLink, SocialIcon, Text } from '../atoms';

export function Footer() {
  return (
    <footer className='bg-neutral-950'>
      <div className='h-container'>
        <section className="relative py-32 text-white/75 before:absolute before:left-2/4 before:top-0 before:h-2 before:w-40 before:-translate-x-2/4 before:bg-brand-500 before:content-[''] before:md:left-0 before:md:translate-x-0">
          <div className='mb-12 flex flex-col items-center gap-12 text-center md:items-start md:text-left lg:flex-row lg:justify-between'>
            <LogoIcon className='text-white transition-all delay-0 duration-300  ease-in hover:text-brand-500 focus:text-brand-500 active:text-brand-500' />

            <nav aria-label='Secondary Navigation'>
              <ul className='flex flex-col items-center gap-8 md:flex-row md:gap-14'>
                {links?.routes?.map((route) => (
                  <li
                    key={`footer-${route.id}`}
                    className='text-200 uppercase leading-300 tracking-100 text-white transition-all delay-0 duration-300 ease-in hover:text-brand-500 focus:text-brand-500'
                  >
                    <NavLink href={route.url}>{route.text}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={cn(' mt-12', styles['footer-grid'])}>
            <Text
              as='p'
              size={'base'}
              weight={'medium'}
              className={cn('text-white/50', styles.info)}
            >
              Audiophile is an all-in-one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week{' '}
              <span className='text-white'>👋</span>
            </Text>
            <Text
              as='p'
              size={'base'}
              weight={'bold'}
              className={cn('text-white/50', styles.copyright)}
            >
              Copyright &copy; {new Date().getFullYear()} Audiophile Inc. All
              Rights Reserved
            </Text>

            <ul
              className={cn('flex items-center gap-6', styles.social)}
              aria-label='Social Links'
            >
              {links.social.map((social) => {
                return (
                  <li
                    key={`footer-${social.id}`}
                    className='text-white transition-all delay-0  duration-300 ease-in hover:text-brand-500 focus:text-brand-500'
                  >
                    <SocialIcon className={'fill-current'} {...social} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>{' '}
      </div>
    </footer>
  );
}
