# Franklinville Hardware website audit

Audit date: July 10, 2026

## Competitive position

The practical local advantage is strong: Franklinville Hardware combines a close-to-home Main Street location with services that larger competitors either do not provide or do not emphasize, including paint matching, screen and window repair, custom glass and plexiglass cutting, and authorized Stihl service.

The main digital competitors reviewed were:

- [The Home Depot, Olean](https://www.homedepot.com/l/Olean/NY/Olean/14760/6161), which leads with online shopping, pickup, delivery, hours, rentals, and store-specific services.
- [Tractor Supply, Olean](https://www.tractorsupply.com/tsc/store_olean-ny-14760_1344), which leads with store hours, directions, product categories, and propane refills.
- Independent hardware stores such as [Shelter Island Hardware](https://www.sihardware.com/) and [Franklin's Hardware](https://franklinshardware.com/services), which make their service breadth extremely visible and provide direct paths to high-intent offerings.

Franklinville Hardware should not try to match the chains on catalog depth. Its strongest search and conversion strategy is to own local service intent: “near me” searches for key cutting, paint matching, propane refills, Stihl service, screen repair, and glass cutting.

## Changes implemented

### Navigation and conversion

- Added a desktop services menu with direct links to all six high-intent service pages.
- Expanded the mobile menu with service links plus Call, Directions, and Inventory actions.
- Added a homepage quick-action bar immediately after the hero for Call, Directions, and Inventory.
- Added a keyboard-accessible skip link and Escape-key menu closing.

### Search optimization

- Expanded `HardwareStore` structured data with a stable entity ID, founding year, and a service offer catalog.
- Added a connected `WebSite` entity and linked page markup to both the website and store entities.
- Added a homepage FAQ section and matching FAQ structured data.
- Added explicit crawler guidance for large image previews.
- Added a purpose-built 1200×630 social sharing image with complete Open Graph dimensions and alt text.
- Kept service pages focused on distinct local-intent terms and canonical URLs.

### Speed and resilience

- Moved nearly all brand and service imagery from third-party hosts onto the site, reducing external DNS and availability dependencies.
- Preloaded and prioritized each page's hero image.
- Added asynchronous decoding and lazy loading to below-the-fold imagery.
- Added intrinsic dimensions to store photography to reduce layout movement.
- Changed reveal effects so content remains visible when JavaScript is unavailable.

## Recommended off-site follow-up

1. Keep the Google Business Profile categories, hours, service list, photos, and holiday hours synchronized with the website.
2. Ask satisfied customers for Google reviews that naturally mention the service they used. Do not script or incentivize review language.
3. Add fresh seasonal updates several times per year: propane, screen repair, lawn and garden, winter supplies, and holiday hours.
4. Connect Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and review local query impressions quarterly.
5. Track calls, direction clicks, inventory clicks, and service-page visits with a privacy-conscious analytics setup before making larger design changes.

## Validation

- Production build completed successfully.
- Svelte diagnostics completed with zero errors and zero warnings.
- Desktop and mobile navigation were verified in-browser.
- Homepage metadata, canonical URL, social image, one-H1 structure, and structured-data output were verified.
- Production dependency audit reported zero known vulnerabilities.
