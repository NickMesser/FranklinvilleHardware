export type NavLink = {
	label: string;
	href: string;
};

export type HoursRow = {
	days: string;
	shortLabel: string;
	hours: string;
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
	tagline: 'Your trusted hometown hardware store in Franklinville, NY.',
	description:
		'Franklinville Hardware is a full-service hometown hardware store offering trusted brands, project advice, paint matching, propane, repairs, and more.',
	address: '99 N Main St, Franklinville, NY 14737',
	phoneDisplay: '(716) 676-4164',
	phoneHref: 'tel:+17166764164',
	email: 'info@franklinvillehardware.com',
	emailHref: 'mailto:info@franklinvillehardware.com',
	inventoryUrl: 'https://franklinvilletruevaluehardwarellc-1987.paladinshop.com/Store',
	mapUrl: 'https://maps.google.com/?q=99+N+Main+St+Franklinville+NY+14737',
	mapEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5!2d-78.4593!3d42.3373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d37b1e3f9e3c0b%3A0x8f2c1e4d5a6b7c8d!2s99%20N%20Main%20St%2C%20Franklinville%2C%20NY%2014737!5e0!3m2!1sen!2sus!4v1700000000000',
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

export function getTodaysHours(now = new Date()) {
	return now.getDay() === 0 ? storeHours[1].hours : storeHours[0].hours;
}

export const homeFeatures: CopyCard[] = [
	{
		title: 'Quality Products',
		body: "We carry the brands pros and homeowners trust, from jobsite tools to everyday repair essentials.",
		icon: 'check'
	},
	{
		title: 'Full-Service Shop',
		body: 'Sharpening, glass cutting, screen repair, Stihl service, propane, and paint matching all under one roof.',
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
		src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/DeWalt_Logo.svg',
		alt: 'DeWalt logo'
	},
	{
		kind: 'image',
		name: 'Stanley',
		src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Stanley_Hand_Tools_logo.svg',
		alt: 'Stanley logo'
	},
	{
		kind: 'image',
		name: 'Milwaukee',
		src: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Milwaukee_Logo.svg',
		alt: 'Milwaukee logo'
	},
	{
		kind: 'image',
		name: 'SKIL',
		src: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Skil_logo_2019.svg',
		alt: 'SKIL logo'
	},
	{
		kind: 'image',
		name: 'SharkBite',
		src: 'https://www.sharkbite.com/themes/custom/sharkbite/logo.svg',
		alt: 'SharkBite logo',
		containerClass: 'bg-slate-100 ring-1 ring-slate-200',
		imageClass: 'brightness-0 contrast-200'
	},
	{
		kind: 'image',
		name: '3M',
		src: 'https://static.cdnlogo.com/logos/3/70/3m.svg',
		alt: '3M logo'
	},
	{
		kind: 'image',
		name: 'Stihl',
		src: 'https://static.cdnlogo.com/logos/s/66/stih.svg',
		alt: 'Stihl logo'
	},
	{
		kind: 'image',
		name: 'Happy Frog by FoxFarm',
		src: 'https://foxfarm.com/wp-content/themes/g5_helium/custom/images/logo-big.png',
		alt: 'Happy Frog by FoxFarm logo'
	}
];

export const paintBrands: BrandCard[] = [
	{
		kind: 'image',
		name: 'Valspar',
		src: 'https://www.valspar.com/content/experience-fragments/cbg-valspar/us/en/site/header/master/_jcr_content/root/image.coreimg.png/1639664934317/valspar-logo.png',
		alt: 'Valspar logo'
	},
	{
		kind: 'image',
		name: 'Flood',
		src: 'https://cdn.prod.website-files.com/68c227d44a699278f2b6512f/68e7ef4f554e0bf7d8adab88_Dulux%20Lockup%20Blue%20CMYK%203.png',
		alt: 'Flood paint and wood finishes logo with paintbrush graphic'
	},
	{
		kind: 'image',
		name: 'Cabot',
		src: 'https://www.cabotstain.com/content/dam/cbg-cabot/asset-clean-up/cabot-main-logo.png',
		alt: 'Cabot logo'
	},
	{
		kind: 'image',
		name: 'Minwax',
		src: 'https://static.cdnlogo.com/logos/m/15/minwax.svg',
		alt: 'Minwax logo',
		imageClass: 'max-h-20'
	},
	{
		kind: 'image',
		name: 'Rust-Oleum',
		src: 'https://cdn.worldvectorlogo.com/logos/rust-oleum-1.svg',
		alt: 'Rust-Oleum logo',
		imageClass: 'max-h-20'
	},
	{
		kind: 'image',
		name: 'Krylon',
		src: 'https://static.cdnlogo.com/logos/k/36/krylon.svg',
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
		body: 'Authorized service for your Stihl outdoor power equipment.',
		icon: 'check'
	},
	{
		title: 'Propane',
		body: 'Convenient propane pumping available on-site.',
		icon: 'check'
	}
];

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
		body: 'Need a spare key? We cut keys for homes, vehicles, and more while you wait.',
		image: {
			src: '/IMG_1967 Large.jpeg',
			alt: 'Key cutting station and key wall at Franklinville Hardware'
		}
	},
	{
		title: 'Paint Mixing',
		body: 'Find the right finish and color for your project with custom paint mixing.',
		image: { src: '/IMG_1966 Large.jpeg', alt: 'Valspar paint color gallery and mixing area' }
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
			src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
			alt: 'Stock image of packaged boxes ready for shipment'
		}
	},
	{
		title: 'Authorized UPS Dropoff',
		body: 'Drop off your prepaid UPS packages at the store and take care of shipping while you are already in town.',
		image: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/United_Parcel_Service_logo_2014.svg',
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
			src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
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
