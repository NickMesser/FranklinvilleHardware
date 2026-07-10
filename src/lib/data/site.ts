export type NavLink = {
	label: string;
	href: string;
};

export type HoursRow = {
	days: string;
	shortLabel: string;
	hours: string;
};

export type HoursOverride = {
	date: string;
	dateLabel: string;
	label: string;
	hours: string;
};

export type SiteAnnouncement = {
	id: string;
	title: string;
	message: string;
	startsOn: string;
	endsOn: string;
	linkHref?: string;
	linkLabel?: string;
	hoursOverrides?: HoursOverride[];
};

export type BrandCard =
	| {
			kind: 'image';
			name: string;
			src: string;
			alt: string;
			containerClass?: string;
			imageClass?: string;
	  }
	| {
			kind: 'text';
			name: string;
			text: string;
			containerClass?: string;
			textClass?: string;
	  };

export type ImageCard = {
	src: string;
	alt: string;
	containerClass?: string;
	imageClass?: string;
};

export type CopyCard = {
	title: string;
	body: string;
	icon: IconName;
};

export type ServiceCard = {
	title: string;
	body: string;
	icon?: IconName;
	image?: ImageCard;
	href?: string;
};

export type IconName =
	| 'bolt'
	| 'check'
	| 'clock'
	| 'community'
	| 'email'
	| 'external'
	| 'heart'
	| 'key'
	| 'location'
	| 'menu'
	| 'package'
	| 'paint'
	| 'phone'
	| 'spark'
	| 'star'
	| 'toolbox'
	| 'wrench'
	| 'close';

export const siteMeta = {
	name: 'Franklinville Hardware',
	siteUrl: 'https://franklinvillehardware.com',
	tagline: 'Your trusted hometown hardware store in Franklinville, NY.',
	description:
		'Franklinville Hardware is a full-service hardware store in Franklinville, NY offering key cutting, paint matching, pump propane tank refills, and authorized Stihl dealer and service support.',
	address: '99 N Main St, Franklinville, NY 14737',
	city: 'Franklinville',
	state: 'NY',
	postalCode: '14737',
	country: 'US',
	latitude: 42.3373,
	longitude: -78.4593,
	phoneDisplay: '(716) 676-4164',
	phoneHref: 'tel:+17166764164',
	email: 'info@franklinvillehardware.com',
	emailHref: 'mailto:info@franklinvillehardware.com',
	inventoryUrl: 'https://franklinvilletruevaluehardwarellc-1987.paladinshop.com/Store',
	mapUrl: 'https://maps.google.com/?q=99+N+Main+St+Franklinville+NY+14737',
	mapEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5!2d-78.4593!3d42.3373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d37b1e3f9e3c0b%3A0x8f2c1e4d5a6b7c8d!2s99%20N%20Main%20St%2C%20Franklinville%2C%20NY%2014737!5e0!3m2!1sen!2sus!4v1700000000000',
	socialImage: '/og.jpg',
	yearOpened: 2021
} as const;

export const navLinks: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Services', href: '/services' },
	{ label: 'Contact', href: '/contact' }
];

export const storeHours: HoursRow[] = [
	{
		days: 'Monday - Saturday',
		shortLabel: 'Mon-Sat',
		hours: '8:00 AM - 6:00 PM'
	},
	{
		days: 'Sunday',
		shortLabel: 'Sun',
		hours: '9:00 AM - 1:00 PM'
	}
];

// Add future seasonal closures or special notices here.
export const siteAnnouncements: SiteAnnouncement[] = [
	{
		id: 'easter-2026',
		title: 'Easter holiday hours',
		message: 'We will be closed Sunday, Apr 5 for Easter. Regular hours resume Monday, Apr 6.',
		startsOn: '2026-03-28',
		endsOn: '2026-04-05',
		linkHref: '/contact',
		linkLabel: 'View store hours',
		hoursOverrides: [
			{
				date: '2026-04-05',
				dateLabel: 'Sunday, Apr 5',
				label: 'Easter Sunday',
				hours: 'Closed'
			}
		]
	}
];

function toDateKey(date = new Date()) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

function isClosedHours(hours: string) {
	return hours.trim().toLowerCase() === 'closed';
}

function getHoursOverrideForDate(now = new Date()) {
	const dateKey = toDateKey(now);

	for (const announcement of siteAnnouncements) {
		const match = announcement.hoursOverrides?.find((override) => override.date === dateKey);

		if (match) {
			return match;
		}
	}

	return null;
}

export function getTodaysHours(now = new Date()) {
	const override = getHoursOverrideForDate(now);

	if (override) {
		return override.hours;
	}

	return now.getDay() === 0 ? storeHours[1].hours : storeHours[0].hours;
}

export function getTodaysHoursDisplay(now = new Date()) {
	const override = getHoursOverrideForDate(now);

	if (override) {
		if (isClosedHours(override.hours)) {
			return {
				summary: `Closed for ${override.label}`,
				headline: `Today: Closed for ${override.label}`
			};
		}

		return {
			summary: `${override.label}: ${override.hours}`,
			headline: `Special hours today: ${override.hours}`
		};
	}

	const todaysHours = getTodaysHours(now);

	return {
		summary: todaysHours,
		headline: `Open Today: ${todaysHours}`
	};
}

export function getActiveAnnouncements(now = new Date()) {
	const dateKey = toDateKey(now);

	return siteAnnouncements.filter((announcement) => dateKey >= announcement.startsOn && dateKey <= announcement.endsOn);
}

export function getActiveHoursOverrides(now = new Date()) {
	return getActiveAnnouncements(now).flatMap((announcement) => announcement.hoursOverrides ?? []);
}

export const homeFeatures: CopyCard[] = [
	{
		title: 'Quality Products',
		body: "We carry the brands pros and homeowners trust, from jobsite tools to everyday repair essentials.",
		icon: 'check'
	},
	{
		title: 'Full-Service Shop',
		body: 'Key cutting, paint matching, screen repair, glass cutting, pump propane refills, and authorized Stihl dealer and service support all under one roof.',
		icon: 'wrench'
	},
	{
		title: 'Community Focused',
		body: "We're proud to serve Franklinville with the kind of knowledgeable, neighborly service big-box stores can't match.",
		icon: 'community'
	}
];

export const hardwareBrands: BrandCard[] = [
	{
		kind: 'image',
		name: 'DeWalt',
		src: '/brands/dewalt.svg',
		alt: 'DeWalt logo'
	},
	{
		kind: 'image',
		name: 'Stanley',
		src: '/brands/stanley.svg',
		alt: 'Stanley logo'
	},
	{
		kind: 'image',
		name: 'Milwaukee',
		src: '/brands/milwaukee.svg',
		alt: 'Milwaukee logo'
	},
	{
		kind: 'image',
		name: 'SKIL',
		src: '/brands/skil.svg',
		alt: 'SKIL logo'
	},
	{
		kind: 'image',
		name: 'SharkBite',
		src: '/brands/sharkbite.jpg',
		alt: 'SharkBite logo',
		containerClass: 'bg-white ring-1 ring-slate-200',
		imageClass: 'max-h-20'
	},
	{
		kind: 'image',
		name: '3M',
		src: '/brands/3m.svg',
		alt: '3M logo'
	},
	{
		kind: 'image',
		name: 'Stihl',
		src: '/brands/stihl.svg',
		alt: 'Stihl logo'
	},
	{
		kind: 'image',
		name: 'Happy Frog by FoxFarm',
		src: '/brands/foxfarm.png',
		alt: 'Happy Frog by FoxFarm logo'
	}
];

export const paintBrands: BrandCard[] = [
	{
		kind: 'image',
		name: 'Valspar',
		src: '/brands/valspar.png',
		alt: 'Valspar logo'
	},
	{
		kind: 'image',
		name: 'Flood',
		src: '/brands/flood.png',
		alt: 'Flood paint and wood finishes logo with paintbrush graphic'
	},
	{
		kind: 'image',
		name: 'Cabot',
		src: '/brands/cabot.png',
		alt: 'Cabot logo'
	},
	{
		kind: 'image',
		name: 'Minwax',
		src: '/brands/minwax.svg',
		alt: 'Minwax logo',
		imageClass: 'max-h-20'
	},
	{
		kind: 'image',
		name: 'Rust-Oleum',
		src: '/brands/rust-oleum.svg',
		alt: 'Rust-Oleum logo',
		imageClass: 'max-h-20'
	},
	{
		kind: 'image',
		name: 'Krylon',
		src: '/brands/krylon.svg',
		alt: 'Krylon logo'
	}
];

export const homeGallery: ImageCard[] = [
	{ src: '/IMG_1972 Large.jpeg', alt: 'Fasteners and hardware aisle inside Franklinville Hardware' },
	{ src: '/IMG_1969 Large.jpeg', alt: 'Stihl outdoor power equipment display inside the store' },
	{ src: '/IMG_1975 Large.jpeg', alt: 'Traeger grilling accessories and supplies on display' },
	{ src: '/IMG_1966 Large.jpeg', alt: 'Valspar color gallery inside Franklinville Hardware' },
	{ src: '/IMG_1973 Large.jpeg', alt: 'PVC plumbing fittings and repair parts aisle' },
	{ src: '/IMG_1974 Large.jpeg', alt: 'Electrical boxes, covers, and conduit parts on display' }
];

export const aboutStoryImages = {
	story: { src: '/IMG_1968 Large.jpeg', alt: 'Stihl outdoor power equipment section at Franklinville Hardware' },
	service: { src: '/IMG_1967 Large.jpeg', alt: 'Key cutting station and key wall at Franklinville Hardware' },
	paintOne: { src: '/IMG_1966 Large.jpeg', alt: 'Valspar paint color wall and sample display' },
	paintTwo: { src: '/IMG_1970 Large.jpeg', alt: 'Paint counter and service area inside the store' }
} as const;

export const serviceDepartmentHighlights: CopyCard[] = [
	{
		title: 'Sharpening',
		body: 'Blades, knives, and tools sharpened right in-store.',
		icon: 'check'
	},
	{
		title: 'Screen and Window Repair',
		body: 'Repair and custom-build screens and windows.',
		icon: 'check'
	},
	{
		title: 'Glass and Plexi-Glass Cutting',
		body: 'Custom glass and plexiglass cutting to your specifications.',
		icon: 'check'
	},
	{
		title: 'Stihl Service',
		body: 'Authorized Stihl dealer and service support for outdoor power equipment, parts, and repairs.',
		icon: 'check'
	},
	{
		title: 'Pump Propane Refills',
		body: 'On-site pump propane for small tank and grill tank refills.',
		icon: 'check'
	}
];

export const featuredServiceLinks = [
	{
		title: 'Key Cutting',
		href: '/services/key-cutting',
		description: 'Fast spare key cutting for homes, padlocks, and everyday needs.'
	},
	{
		title: 'Paint Matching',
		href: '/services/paint-matching',
		description: 'Bring in a sample and get local paint matching help in Franklinville.'
	},
	{
		title: 'Pump Propane Refills',
		href: '/services/propane-tank-refill',
		description: 'Refill grill tanks and other portable propane cylinders on-site.'
	},
	{
		title: 'Authorized Stihl Dealer and Service',
		href: '/services/stihl-service',
		description: 'Shop Stihl equipment and get local service support from our team.'
	},
	{
		title: 'Screen and Window Repair',
		href: '/services/screen-window-repair',
		description: 'Get help with torn screens, worn frames, and seasonal window fixes.'
	},
	{
		title: 'Glass and Plexiglass Cutting',
		href: '/services/glass-plexiglass-cutting',
		description: 'Custom cuts for repairs, storm windows, and everyday projects.'
	}
] as const;

export const missionValues: CopyCard[] = [
	{
		title: 'Integrity',
		body: 'Honest pricing and honest advice every time you walk through our doors.',
		icon: 'star'
	},
	{
		title: 'Community',
		body: "We're more than a store. We're your neighbors, and we care about Franklinville.",
		icon: 'heart'
	},
	{
		title: 'Knowledge',
		body: 'Our team brings real experience to help you tackle every project with confidence.',
		icon: 'bolt'
	},
	{
		title: 'Quality',
		body: 'We stock products we believe in from brands we trust, so you can shop with confidence.',
		icon: 'spark'
	}
];

export const servicesList: ServiceCard[] = [
	{
		title: 'Key Cutting',
		body: 'Need a spare key? We cut keys for homes, padlocks, and many everyday needs while you shop.',
		image: {
			src: '/IMG_1967 Large.jpeg',
			alt: 'Key cutting station and key wall at Franklinville Hardware'
		},
		href: '/services/key-cutting'
	},
	{
		title: 'Paint Matching',
		body: 'Find the right finish and color for your project with custom paint matching and in-store guidance.',
		image: { src: '/IMG_1966 Large.jpeg', alt: 'Valspar paint color gallery and mixing area' },
		href: '/services/paint-matching'
	},
	{
		title: 'Pump Propane Refills',
		body: 'Bring in your grill tank or other portable cylinder for an on-site propane refill in Franklinville.',
		image: {
			src: '/IMG_1975 Large.jpeg',
			alt: 'Outdoor grilling supplies and accessories inside Franklinville Hardware'
		},
		href: '/services/propane-tank-refill'
	},
	{
		title: 'Authorized Stihl Dealer and Service',
		body: 'Shop Stihl equipment and get authorized local service support for outdoor power equipment.',
		image: {
			src: '/IMG_1968 Large.jpeg',
			alt: 'Stihl outdoor power equipment section at Franklinville Hardware'
		},
		href: '/services/stihl-service'
	},
	{
		title: 'Screen and Window Repair',
		body: 'Bring in worn or damaged screens and windows for practical repair help close to home.',
		image: {
			src: '/IMG_1972 Large.jpeg',
			alt: 'Hardware aisle with home repair supplies at Franklinville Hardware'
		},
		href: '/services/screen-window-repair'
	},
	{
		title: 'Glass and Plexiglass Cutting',
		body: 'Get custom glass and plexiglass cuts for repairs, storm windows, and project work.',
		image: {
			src: '/IMG_1972 Large.jpeg',
			alt: 'Fasteners and repair materials inside Franklinville Hardware'
		},
		href: '/services/glass-plexiglass-cutting'
	},
	{
		title: 'Plumbing Supplies',
		body: 'From fittings and valves to faucets and fixtures, we stock the essentials for plumbing repairs.',
		image: { src: '/IMG_1973 Large.jpeg', alt: 'PVC plumbing fittings and parts' }
	},
	{
		title: 'Electrical Supplies',
		body: 'Wiring, outlets, breakers, bulbs, and the basics for residential and light commercial work.',
		image: { src: '/IMG_1974 Large.jpeg', alt: 'Electrical boxes and conduit hardware' }
	},
	{
		title: 'Seasonal Products',
		body: 'Garden tools, snow essentials, pool supplies, and practical products for every season.',
		image: { src: '/IMG_1975 Large.jpeg', alt: 'Traeger grilling supplies and outdoor cooking accessories' }
	},
	{
		title: 'Special Orders',
		body: "If it's not on the shelf, we'll help track it down and place a special order.",
		image: {
			src: '/special-orders.jpg',
			alt: 'Stock image of packaged boxes ready for shipment'
		}
	},
	{
		title: 'Authorized UPS Dropoff',
		body: 'Drop off your prepaid UPS packages at the store and take care of shipping while you are already in town.',
		image: {
			src: '/brands/ups.svg',
			alt: 'UPS logo',
			containerClass: 'bg-white p-8',
			imageClass: 'object-contain'
		}
	},
	{
		title: 'Lawn and Garden',
		body: 'Keep your yard looking great with lawn care products, gardening tools, and outdoor supplies.',
		image: { src: '/IMG_1971 Large.jpeg', alt: 'Lawn and garden products on store shelves' }
	},
	{
		title: 'Expert Guidance',
		body: 'Our experienced team is always ready to help you find the right materials and next step.',
		image: {
			src: '/customer-service.jpg',
			alt: 'Stock image of a store associate helping a customer'
		}
	}
];

export const contactHighlights: CopyCard[] = [
	{
		title: 'Visit the Store',
		body: siteMeta.address,
		icon: 'location'
	},
	{
		title: 'Call Us',
		body: siteMeta.phoneDisplay,
		icon: 'phone'
	},
	{
		title: 'Email Us',
		body: siteMeta.email,
		icon: 'email'
	}
];
