"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { properties } from "@/data";
import { Property } from "@/types/property";
import PropertyModal from "@/components/PropertyModal";
import styles from "./page.module.css";
import { formatPrice } from "@/lib/utils";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  
  // Animation container ref
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // We use ScrollTrigger.batch to automatically group elements that enter the viewport 
    // at the same time (like grid cards) so we can stagger them!
    ScrollTrigger.batch('.reveal-up', {
      start: "top 85%",
      onEnter: (elements, triggers) => {
        gsap.fromTo(elements,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out", // Classic, standard, ultra-smooth fade
            overwrite: true
          }
        );
      }
    });

    // Parallax Pan for the About Us masked image
    const parallaxImg = document.querySelector(`.${styles.pillMaskImage}`);
    const parallaxWrapper = document.querySelector(`.${styles.pillMaskWrapper}`);
    if (parallaxImg && parallaxWrapper) {
      gsap.fromTo(parallaxImg,
        { scale: 1.1, yPercent: -5 },
        {
          scale: 1.1,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxWrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }
  }, { scope: containerRef });

  const prop1 = properties[0]; // Luxurious 2-Bedroom
  const prop2 = properties[1]; // Luxury Short-Stay

  const heroImgSrc = "/assets/apartment-1/area-19.jpeg";
  const maskImgSrc = "/assets/apartment-2/place-12.jpeg"; // specifically requested

  return (
    <div className={styles.page} ref={containerRef}>
      
      {/* ── 01. MASSIVE HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={heroImgSrc}
            alt="Beautiful Bedroom Hero"
            fill
            className={styles.heroImg}
            priority
            sizes="100vw"
          />
        </div>
        
        <div className={styles.heroSidebar}>
          <div className={styles.sidebarContent}>
            <div className={`reveal-up ${styles.logoWrap}`}>
              <Image 
                src="/assets/logo-transparent.png" 
                alt="Benest Realty" 
                width={300} 
                height={150} 
                className={styles.heroLogo} 
                priority
              />
              <p className={styles.tagline}>Premium Real Estate Portfolio</p>
            </div>
            
            <div className={`reveal-up ${styles.heroInfo}`}>
              <p>Experience unmatched comfort and architectural excellence in prime locations.</p>
            </div>
            
            <a href="#portfolio" className={`btn-dark reveal-up ${styles.exploreBtn}`}>
              EXPLORE 
              <span className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 02. STICKY NAVBAR ── */}
      <div className={styles.navbarWrapper}>
        <header className={styles.navbar}>
          <div className={`container ${styles.navInner}`}>
            <a href="#" className={styles.navLogoWrap}>
              <Image 
                src="/assets/logo-transparent.png" 
                alt="Benest Realty Logo" 
                width={240} 
                height={120} 
                className={styles.navLogoImg} 
                priority
              />
            </a>
            <nav className={styles.navLinks}>
              <a href="#about">About Us</a>
              <a href="#portfolio">Our Properties</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
      </div>

      {/* ── 03. REDESIGNED ABOUT US ── */}
      <section id="about" className={styles.sectionAboutEditorial}>
        
        {/* Floating Accents */}
        <div className={styles.floatingDot1}></div>
        <div className={styles.floatingDot2}></div>
        <div className={styles.floatingDot3}></div>

        <div className={`container ${styles.editorialGrid}`}>
          
          <div className={styles.editorialTextCol}>
            <h2 className={`reveal-up ${styles.editorialTitle}`}>
              About<br/>Us
            </h2>
            <div className={`reveal-up ${styles.editorialDivider}`}></div>
            <p className={`reveal-up ${styles.editorialBody}`}>
              Benest Realty is a premier real estate agency specializing in fully furnished apartment rentals. Whether you are seeking a permanent residence, a luxurious lodge, or an exceptional rental home, we provide curated properties designed for absolute comfort and elegance.
            </p>
          </div>

          <div className={`reveal-up ${styles.editorialImgCol}`}>
            <div className={styles.pillMaskWrapper}>
              <Image 
                src={maskImgSrc} 
                alt="Architecture Fragment"
                fill
                className={styles.pillMaskImage}
              />
            </div>
          </div>

        </div>

        {/* The 4 Minimalist Services Cards underneath */}
        <div className={`container ${styles.servicesRow4}`}>
          
          {/* Card 1 */}
          <div className={`reveal-up ${styles.serviceCard} ${styles.cardWhite}`}>
            <div className={styles.serviceIconYellow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h4 className={styles.serviceTitleDark}>Prime Locations</h4>
            <p className={styles.serviceDescDark}>Handpicked residences in the most sought-after neighborhoods.</p>
          </div>
          {/* Card 2 */}
          <div className={`reveal-up ${styles.serviceCard} ${styles.cardWhite}`}>
            <div className={styles.serviceIconYellow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            </div>
            <h4 className={styles.serviceTitleDark}>Short-Term Lodging</h4>
            <p className={styles.serviceDescDark}>Fully furnished luxury apartments and lodges perfectly suited for temporary visits.</p>
          </div>
          {/* Card 3 */}
          <div className={`reveal-up ${styles.serviceCard} ${styles.cardWhite}`}>
            <div className={styles.serviceIconYellow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4 className={styles.serviceTitleDark}>24/7 Security</h4>
            <p className={styles.serviceDescDark}>Complete peace of mind in fully secured modern buildings.</p>
          </div>
          {/* Card 4 */}
          <div className={`reveal-up ${styles.serviceCard} ${styles.cardWhite}`}>
            <div className={styles.serviceIconYellow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h4 className={styles.serviceTitleDark}>Long-Term Rentals</h4>
            <p className={styles.serviceDescDark}>Exceptional rental homes designed for permanent living and extended stays.</p>
          </div>

        </div>
      </section>

      <div id="portfolio"></div>

      {/* ── 04. FEATURED RESIDENCES (Airbnb Elevated Cards) ── */}
      <section className={styles.sectionWhite}>
        <div className="container">
          
          <div className={`reveal-up ${styles.airbnbSectionHeader}`}>
            <h2 className={styles.airbnbSectionTitle}>Discover Our Properties</h2>
          </div>

          <div className={styles.airbnbGrid2Col}>
          
          {/* Card 1 */}
          <div className={`reveal-up ${styles.airbnbCard}`} onClick={() => setSelectedProperty(prop1)}>
            <div className={styles.airbnbCardImgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/apartment-1/Apartment.jpeg" alt={prop1.name} className={styles.airbnbCardImg} />
              <div className={styles.airbnbCardPill}>View Details</div>
            </div>
            
            <div className={styles.airbnbCardBody}>
              <div className={styles.airbnbTitleRow}>
                <h3 className={styles.airbnbTitle}>{prop1.name}</h3>
                <span className={styles.airbnbRating}>★ 4.96</span>
              </div>
              <p className={styles.airbnbSubText}>{prop1.specs.beds} Beds · {prop1.specs.baths} Baths</p>
              <p className={styles.airbnbSubText}>Exclusive high-rise</p>
              <div className={styles.airbnbPriceRow}>
                <span className={styles.airbnbPriceBold}>{formatPrice(prop1)}</span>
                <span className={styles.airbnbPriceUnit}> / {prop1.priceUnit.replace('per ', '')}</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`reveal-up ${styles.airbnbCard}`} onClick={() => setSelectedProperty(prop2)}>
            <div className={styles.airbnbCardImgWrap}>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/assets/apartment-2/Apartment Front.jpeg" alt={prop2.name} className={styles.airbnbCardImg} />
               <div className={styles.airbnbCardPill}>View Details</div>
            </div>
            
            <div className={styles.airbnbCardBody}>
              <div className={styles.airbnbTitleRow}>
                <h3 className={styles.airbnbTitle}>{prop2.name}</h3>
                <span className={styles.airbnbRating}>★ 4.99</span>
              </div>
              <p className={styles.airbnbSubText}>{prop2.specs.beds} Beds · {prop2.specs.baths} Baths</p>
              <p className={styles.airbnbSubText}>Boundary Road, East Legon</p>
              <div className={styles.airbnbPriceRow}>
                <span className={styles.airbnbPriceBold}>{formatPrice(prop2)}</span>
                <span className={styles.airbnbPriceUnit}> / {prop2.priceUnit.replace('per ', '')}</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── 06. FOOTER / CONTACT (Navy) ── */}
      <footer id="contact" className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          
          <div className={styles.footerBrandBlock}>
            <Image 
              src="/assets/logo-transparent.png" 
              alt="Benest Realty Logo" 
              width={180} 
              height={90} 
              className={styles.footerLogo} 
            />
            <p>Accra, Ghana</p>
          </div>
          
          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <div className={styles.footerLinkList}>
              <a href="tel:+233240092384">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +233 24 009 2384
              </a>
              <a href="https://wa.me/233240092384" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <h4>Follow Us</h4>
            <div className={styles.footerLinkList}>
              <a href="https://instagram.com/tsivorbernard" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                @tsivorbernard
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <div className="container">
            <p>© {new Date().getFullYear()} Benest Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ── NATIVE BOTTOM APP BAR (MOBILE) ── */}
      <nav className={styles.mobileTabBar}>
        <a href="#" className={`${styles.tabItem} ${styles.tabActive}`}>
          <svg className={styles.tabIcon} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </a>
        
        <a href="#portfolio" className={styles.tabItem}>
          <svg className={styles.tabIcon} viewBox="0 0 24 24">
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 22v-4h6v4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
          </svg>
          <span>Properties</span>
        </a>
        
        <a href="#contact" className={styles.tabItem}>
          <svg className={styles.tabIcon} viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>Contact</span>
        </a>
      </nav>

      {/* ── GLOBAL WHATSAPP FLOAT ── */}
      <a href="https://wa.me/233240092384" target="_blank" rel="noopener noreferrer" className={styles.whatsappFloat} aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── 07. FULL-SCREEN ARCHITECTURAL MODAL ── */}
      <PropertyModal 
        property={selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
      />

    </div>
  );
}
