export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ParkingFacility",
    "name": "Parcheggio MareVela",
    "image": "https://www.sorima.it/images/hero-bg.png",
    "@id": "https://www.sorima.it",
    "url": "https://www.sorima.it",
    "telephone": "+393318820826",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Pozzillo (Discesa del Waikiki)",
      "addressLocality": "San Marco di Castellabate",
      "addressRegion": "SA",
      "postalCode": "84048",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.285885,
      "longitude": 14.939115
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "provider": {
      "@type": "Organization",
      "name": "SORIMA S.r.l.",
      "vatID": "01963290653"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
