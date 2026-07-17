import { featuredServiceLinks, siteMeta } from '$lib/data/site';

type BreadcrumbItem = {
	name: string;
	path: string;
};

type WebPageSchemaInput = {
	title: string;
	description: string;
	path: string;
};

type FaqItem = {
	question: string;
	answer: string;
};

export function toAbsoluteUrl(path = '/') {
	return new URL(path, siteMeta.siteUrl).toString();
}

export function getHardwareStoreSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'HardwareStore',
		'@id': `${siteMeta.siteUrl}/#store`,
		name: siteMeta.name,
		description: siteMeta.description,
		url: siteMeta.siteUrl,
		image: toAbsoluteUrl(siteMeta.socialImage),
		telephone: siteMeta.phoneDisplay,
		email: siteMeta.email,
		foundingDate: String(siteMeta.yearOpened),
		address: {
			'@type': 'PostalAddress',
			streetAddress: '99 N Main St',
			addressLocality: siteMeta.city,
			addressRegion: siteMeta.state,
			postalCode: siteMeta.postalCode,
			addressCountry: siteMeta.country
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: siteMeta.latitude,
			longitude: siteMeta.longitude
		},
		hasMap: siteMeta.mapUrl,
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: '08:00',
				closes: '18:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Sunday',
				opens: '09:00',
				closes: '15:00'
			}
		],
		areaServed: [
			{
				'@type': 'City',
				name: 'Franklinville'
			},
			{
				'@type': 'AdministrativeArea',
				name: 'Cattaraugus County'
			}
		],
		knowsAbout: [
			'Hardware store',
			'Key cutting',
			'Paint matching',
			'Pump propane tank refills',
			'Authorized Stihl dealer and service',
			'Screen and window repair',
			'Glass and plexiglass cutting',
			'Plumbing supplies',
			'Electrical supplies'
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'In-store hardware services',
			itemListElement: featuredServiceLinks.map((service) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: service.title,
					description: service.description,
					url: toAbsoluteUrl(service.href),
					provider: { '@id': `${siteMeta.siteUrl}/#store` }
				}
			}))
		}
	};
}

export function getWebSiteSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${siteMeta.siteUrl}/#website`,
		url: siteMeta.siteUrl,
		name: siteMeta.name,
		description: siteMeta.description,
		publisher: { '@id': `${siteMeta.siteUrl}/#store` },
		inLanguage: 'en-US'
	};
}

export function makeBreadcrumbSchema(items: BreadcrumbItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: toAbsoluteUrl(item.path)
		}))
	};
}

export function makeFaqSchema(faqs: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
}

export function makeWebPageSchema({ title, description, path }: WebPageSchemaInput) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url: toAbsoluteUrl(path),
		isPartOf: {
			'@id': `${siteMeta.siteUrl}/#website`
		},
		about: {
			'@id': `${siteMeta.siteUrl}/#store`
		}
	};
}
