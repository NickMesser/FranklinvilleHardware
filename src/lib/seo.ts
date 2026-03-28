import { siteMeta } from '$lib/data/site';

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
		name: siteMeta.name,
		description: siteMeta.description,
		url: siteMeta.siteUrl,
		image: toAbsoluteUrl(siteMeta.socialImage),
		telephone: siteMeta.phoneDisplay,
		email: siteMeta.email,
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
				closes: '13:00'
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
		]
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
			'@type': 'WebSite',
			name: siteMeta.name,
			url: siteMeta.siteUrl
		},
		about: {
			'@type': 'HardwareStore',
			name: siteMeta.name
		}
	};
}
