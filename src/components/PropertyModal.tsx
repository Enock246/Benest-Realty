"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Property } from "@/types/property";
import styles from "./PropertyModal.module.css";
import { formatPrice } from "@/lib/utils";

interface Props {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: Props) {
  const [imgIndex, setImgIndex] = useState(0);

  // Simple, reliable scroll lock
  useEffect(() => {
    if (property) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [property]);

  if (!property) return null;

  const images = [property.images.hero, ...property.images.gallery];

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % images.length);
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        {/* ── 01. FULL WIDTH CAROUSEL ── */}
        <div className={styles.carousel}>
          <Image
            src={images[imgIndex]}
            alt={property.name}
            fill
            className={styles.carouselImg}
            priority
            sizes="100vw"
          />
          <div className={styles.overlayBar}>
            <div className={styles.overlayContent}>
              <span className={styles.badge}>{property.status}</span>
              <h2 className={styles.modalTitle}>{property.name}</h2>
            </div>
          </div>
          
          <div className={styles.carouselControls}>
            <button className={styles.navBtn} onClick={prevImg}>‹</button>
            <button className={styles.navBtn} onClick={nextImg}>›</button>
          </div>
        </div>

        {/* ── 02. ARCHITECTURAL CONTENT ── */}
        <div className={styles.pageContent}>
          
          {/* Main Column */}
          <div className={styles.mainCol}>
            <div className={styles.header}>
              <h3 className={styles.subHead}>ABOUT THE PROPERTY</h3>
              <div className={styles.underlineYellow}></div>
            </div>

            <div className={styles.description}>
              {property.description.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Architectural gallery grid */}
            <div className={styles.galleryGrid}>
              {property.images.gallery.slice(1).map((src, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <Image src={src} alt="Property detail" fill className={styles.galleryImg} sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Side Column */}
          <div className={styles.sideCol}>
            
            <div className={styles.blueprintCard}>
              <h4 className={styles.cardTitle}>Specifications</h4>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.mValue}>{property.specs.beds}</span>
                  <span className={styles.mLabel}>Beds</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.mValue}>{property.specs.baths}</span>
                  <span className={styles.mLabel}>Baths</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.mValue}>{property.specs.sqft}</span>
                  <span className={styles.mLabel}>Sq.Ft.</span>
                </div>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.priceLabel}>Price:</span>
                <span 
                  className={styles.priceValue}
                  style={property.id === 'apartment-1' ? { filter: 'blur(5px)', userSelect: 'none', pointerEvents: 'none', opacity: 0.85 } : {}}
                >
                  {formatPrice(property)}
                </span>
              </div>
            </div>

            <div className={styles.amenities}>
              <h4 className={styles.cardTitle}>Highlights</h4>
              <ul>
                {property.amenities.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>

            <a 
              href={`https://wa.me/233240092384?text=${encodeURIComponent(`I would like to schedule a tour of ${property.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mustard"
              style={{ width: '100%', padding: '1.5rem' }}
            >
              Schedule Visit
            </a>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
