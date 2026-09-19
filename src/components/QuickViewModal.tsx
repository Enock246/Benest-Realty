"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/property";
import { formatPrice } from "@/lib/utils";
import styles from "./QuickViewModal.module.css";

interface QuickViewModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function QuickViewModal({ property, onClose }: QuickViewModalProps) {
  const [imgIndex, setImgIndex] = useState(0);

  // Lock body scroll when open
  useEffect(() => {
    if (property) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [property]);

  if (!property) return null;

  const images = [property.images.hero, ...property.images.gallery];

  const nextImg = () => setImgIndex((i) => (i + 1) % images.length);
  const prevImg = () => setImgIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.layout}>
          {/* Slider Left */}
          <div className={styles.slider}>
            <Image
              src={images[imgIndex]}
              alt={property.name}
              fill
              className={styles.slideImg}
            />
            <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevImg}>‹</button>
            <button className={`${styles.navBtn} ${styles.next}`} onClick={nextImg}>›</button>
            <div className={styles.counter}>{imgIndex + 1} / {images.length}</div>
          </div>

          {/* Info Right */}
          <div className={styles.info}>
            <div className={styles.infoScroll}>
              <span className="badge">{property.status}</span>
              <h2>{property.name}</h2>
              {property.address && <p className={styles.address}>{property.address}</p>}
              
              <h3 className={styles.price}>{formatPrice(property)}</h3>

              <div className={styles.specs}>
                {property.specs.beds !== null && <span>{property.specs.beds} Beds</span>}
                {property.specs.baths !== null && <span>{property.specs.baths} Baths</span>}
                {property.specs.sqft !== null && <span>{property.specs.sqft} Sqft</span>}
              </div>

              <div className={styles.desc}>
                <h4>About</h4>
                <p>{property.description}</p>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href={`/properties/${property.slug}`} className="btn btn-outline" style={{ width: '100%' }}>
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
