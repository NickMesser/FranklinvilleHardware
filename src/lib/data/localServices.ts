export type FaqItem = {
	question: string;
	answer: string;
};

export type LocalServicePage = {
	title: string;
	metaTitle: string;
	metaDescription: string;
	path: string;
	kicker: string;
	heroTitle: string;
	heroIntro: string;
	image: string;
	imageAlt: string;
	overviewTitle: string;
	overviewIntro: string;
	highlights: string[];
	detailsTitle: string;
	details: string[];
	faqs: FaqItem[];
};

export const localServicePages = {
	keyCutting: {
		title: 'Key Cutting',
		metaTitle: 'Key Cutting in Franklinville, NY | Franklinville Hardware',
		metaDescription:
			'Need key cutting in Franklinville, NY? Franklinville Hardware offers convenient spare key cutting for homes, padlocks, and everyday needs.',
		path: '/services/key-cutting',
		kicker: 'Key cutting in Franklinville',
		heroTitle: 'Convenient key cutting close to home.',
		heroIntro:
			'Franklinville Hardware offers in-store key cutting for common household and everyday keys so you can make a spare while you are already in town.',
		image: '/IMG_1967 Large.jpeg',
		imageAlt: 'Key cutting station and key wall at Franklinville Hardware',
		overviewTitle: 'Local key duplication without the extra stop.',
		overviewIntro:
			'When you need a spare key for the house, garage, shed, or padlock, our team can help you get it cut quickly right here in Franklinville.',
		highlights: [
			'Convenient in-store service on Main Street in Franklinville.',
			'Helpful staff if you want to compare a worn key before cutting a spare.',
			'Easy to pair with other errands like paint, hardware, or repair supplies.',
			'Call ahead if you want to confirm a specific key type before visiting.'
		],
		detailsTitle: 'What to expect',
		details: [
			'Bring the original key with you whenever possible so we can make the most accurate duplicate we can.',
			'If your original key is badly worn, ask us about the best next step before cutting multiple copies.',
			'You can stop in during normal store hours and take care of key cutting while you shop for the rest of your project.'
		],
		faqs: [
			{
				question: 'Do you cut spare house keys?',
				answer: 'Yes. Franklinville Hardware offers spare key cutting for common household and everyday keys.'
			},
			{
				question: 'Should I call ahead about my key type?',
				answer: 'If you have a specialty key or you are unsure about the blank you need, calling ahead is the best way to confirm availability.'
			},
			{
				question: 'Where can I get a key made near Franklinville, NY?',
				answer: 'You can visit Franklinville Hardware at 99 N Main St in Franklinville for local in-store key cutting.'
			}
		]
	},
	paintMatching: {
		title: 'Paint Matching',
		metaTitle: 'Paint Matching in Franklinville, NY | Franklinville Hardware',
		metaDescription:
			'Bring a sample to Franklinville Hardware for paint matching in Franklinville, NY. Compare finishes, colors, and trusted paint products in-store.',
		path: '/services/paint-matching',
		kicker: 'Paint matching in Franklinville',
		heroTitle: 'Paint matching and local project help in Franklinville.',
		heroIntro:
			'Bring in a sample, compare finishes, and get practical in-store help choosing the right paint for touch-ups, room refreshes, and larger home projects.',
		image: '/IMG_1966 Large.jpeg',
		imageAlt: 'Valspar paint color gallery and mixing area at Franklinville Hardware',
		overviewTitle: 'Match the color before you start the job.',
		overviewIntro:
			'Our paint department helps homeowners, landlords, and DIYers find a close color match and the right finish without making the trip to a big-box store.',
		highlights: [
			'Bring in a paint sample, chip, or reference piece for color matching help.',
			'Compare finishes and product options in-store.',
			'Get local advice for touch-ups, repainting, and everyday paint questions.',
			'Shop paint and hardware in one stop on Main Street.'
		],
		detailsTitle: 'How to get the best match',
		details: [
			'Bring the cleanest, flattest sample you can so we have the best chance of getting close on color.',
			'Ask about sheen, coverage, and product type so the finish works as well as the color.',
			'If you are matching an older painted surface, expect some variation from age, sun exposure, and wear.'
		],
		faqs: [
			{
				question: 'Do you offer paint matching in Franklinville, NY?',
				answer: 'Yes. Franklinville Hardware offers local paint matching help and a full in-store paint department.'
			},
			{
				question: 'What should I bring for paint matching?',
				answer: 'Bring a sample piece, paint chip, or other clean reference item that represents the color you want to match.'
			},
			{
				question: 'Can you help me choose the right finish too?',
				answer: 'Yes. We can help you compare paint finishes and talk through what makes sense for your project.'
			}
		]
	},
	propaneTankRefill: {
		title: 'Pump Propane Tank Refills',
		metaTitle: 'Propane Tank Refill in Franklinville, NY | Franklinville Hardware',
		metaDescription:
			'Need a propane tank refill in Franklinville, NY? Franklinville Hardware offers on-site pump propane for grill tanks and other portable cylinders.',
		path: '/services/propane-tank-refill',
		kicker: 'Propane tank refill in Franklinville',
		heroTitle: 'On-site pump propane for grill tanks and portable cylinders.',
		heroIntro:
			'Franklinville Hardware offers pump propane refills in Franklinville for small tanks, grill tanks, and other portable cylinders so you can get back to cooking or outdoor work faster.',
		image: '/IMG_1975 Large.jpeg',
		imageAlt: 'Outdoor grilling supplies and accessories inside Franklinville Hardware',
		overviewTitle: 'Local propane refills without the long detour.',
		overviewIntro:
			'If you need to refill a portable propane cylinder, stop by Franklinville Hardware for on-site pump propane service while you are already shopping in town.',
		highlights: [
			'On-site pump propane for portable cylinders.',
			'Great for grill tanks and other small propane tank refills.',
			'Convenient Main Street location in Franklinville, NY.',
			'Easy stop for fuel, grilling supplies, and other hardware needs.'
		],
		detailsTitle: 'Important propane visit notes',
		details: [
			'This page is focused on small tank and portable cylinder refills, not large residential propane delivery.',
			'Bring your cylinder in good condition and ask our team if you have questions before the refill starts.',
			'If you are not sure whether your tank qualifies for refill service, give us a quick call before you come over.'
		],
		faqs: [
			{
				question: 'Do you refill grill tanks in Franklinville, NY?',
				answer: 'Yes. Franklinville Hardware offers on-site pump propane for grill tanks and other portable cylinders.'
			},
			{
				question: 'Do you offer large residential propane delivery?',
				answer: 'No. This service is for small tank and portable cylinder refills at the store.'
			},
			{
				question: 'Where can I get a propane tank refill near Franklinville?',
				answer: 'You can visit Franklinville Hardware on Main Street for local pump propane tank refills.'
			}
		]
	},
	stihlService: {
		title: 'Authorized Stihl Dealer and Service',
		metaTitle: 'Authorized Stihl Dealer and Service in Franklinville, NY | Franklinville Hardware',
		metaDescription:
			'Looking for an authorized Stihl dealer and service in Franklinville, NY? Franklinville Hardware offers local Stihl equipment support and service help.',
		path: '/services/stihl-service',
		kicker: 'Authorized Stihl dealer and service',
		heroTitle: 'Local Stihl support from an authorized dealer and service location.',
		heroIntro:
			'Franklinville Hardware is your local place to shop Stihl equipment and get authorized Stihl dealer and service support close to home.',
		image: '/IMG_1968 Large.jpeg',
		imageAlt: 'Stihl outdoor power equipment section at Franklinville Hardware',
		overviewTitle: 'Stihl equipment, parts, and local support in one stop.',
		overviewIntro:
			'When you need trusted outdoor power equipment help in Franklinville, our team can assist with Stihl product questions, local service support, and the next step for repairs or maintenance.',
		highlights: [
			'Authorized Stihl dealer and service messaging across the site and in-store.',
			'Local support for outdoor power equipment owners in Franklinville and nearby communities.',
			'Convenient option for service questions while shopping for parts, tools, and seasonal supplies.',
			'Call ahead if you want to check on a specific model, accessory, or service need.'
		],
		detailsTitle: 'How we help Stihl customers',
		details: [
			'Stop in to talk with our team about the Stihl equipment and support options that fit your property or workload.',
			'If you already own Stihl equipment, we can help point you toward authorized local service support and the next steps for maintenance or repair.',
			'Pair your Stihl visit with fuel, safety gear, hand tools, and the everyday supplies you need for outdoor work.'
		],
		faqs: [
			{
				question: 'Are you an authorized Stihl dealer in Franklinville, NY?',
				answer: 'Yes. Franklinville Hardware uses the approved wording Authorized Stihl dealer and service.'
			},
			{
				question: 'Can I visit for local Stihl service support?',
				answer: 'Yes. Stop in or call Franklinville Hardware for local Stihl dealer and service support questions.'
			},
			{
				question: 'Where can I find a Stihl dealer near me in Franklinville?',
				answer: 'Franklinville Hardware is located at 99 N Main St and serves customers looking for an authorized Stihl dealer and service location nearby.'
			}
		]
	},
	screenWindowRepair: {
		title: 'Screen and Window Repair',
		metaTitle: 'Screen and Window Repair in Franklinville, NY | Franklinville Hardware',
		metaDescription:
			'Need screen and window repair in Franklinville, NY? Franklinville Hardware offers practical local help for torn screens, worn frames, and common repairs.',
		path: '/services/screen-window-repair',
		kicker: 'Screen and window repair in Franklinville',
		heroTitle: 'Practical screen and window repair help close to home.',
		heroIntro:
			'Franklinville Hardware helps with common screen and window repair needs so you can fix worn frames, damaged screens, and seasonal problem spots without leaving town.',
		image: '/IMG_1972 Large.jpeg',
		imageAlt: 'Hardware aisle with repair supplies inside Franklinville Hardware',
		overviewTitle: 'A local option for everyday screen and window fixes.',
		overviewIntro:
			'If you have torn mesh, worn hardware, or a window screen that needs attention, our team can help you sort out the repair and get the right materials or service support.',
		highlights: [
			'Helpful option for seasonal screen repairs in Franklinville.',
			'Get repair advice and hardware in one visit.',
			'Great for homeowners handling porch, storm window, and everyday repair jobs.',
			'Call ahead if you want to describe the repair before visiting.'
		],
		detailsTitle: 'Before you stop in',
		details: [
			'If possible, bring the screen, sash, or measurements with you so we can better understand the repair.',
			'Ask about the best material or hardware choice for your repair and how quickly you need it done.',
			'Screen and window repairs are often easiest when paired with the matching fasteners, tools, and weatherproofing supplies.'
		],
		faqs: [
			{
				question: 'Do you offer screen repair in Franklinville, NY?',
				answer: 'Yes. Franklinville Hardware offers local screen and window repair support for common household needs.'
			},
			{
				question: 'Can I bring in my damaged screen?',
				answer: 'Yes. Bringing the screen or accurate measurements can make the visit easier and more productive.'
			},
			{
				question: 'Where can I get window screen repair near Franklinville?',
				answer: 'Franklinville Hardware on Main Street is a local stop for screen and window repair help.'
			}
		]
	},
	glassPlexiglassCutting: {
		title: 'Glass and Plexiglass Cutting',
		metaTitle: 'Glass and Plexiglass Cutting in Franklinville, NY | Franklinville Hardware',
		metaDescription:
			'Need glass or plexiglass cutting in Franklinville, NY? Franklinville Hardware offers practical local help for custom cuts and common repair projects.',
		path: '/services/glass-plexiglass-cutting',
		kicker: 'Glass and plexiglass cutting in Franklinville',
		heroTitle: 'Custom glass and plexiglass cutting for repair projects and everyday fixes.',
		heroIntro:
			'Franklinville Hardware offers local glass and plexiglass cutting support for storm windows, shop fixes, home projects, and practical repair work.',
		image: '/IMG_1972 Large.jpeg',
		imageAlt: 'Fasteners and repair materials inside Franklinville Hardware',
		overviewTitle: 'Get the right cut without leaving Franklinville.',
		overviewIntro:
			'When you need a replacement piece for a repair or project, we can help with custom glass and plexiglass cutting and the rest of the supplies that go with the job.',
		highlights: [
			'Convenient local option for custom cut glass or plexiglass.',
			'Useful for storm windows, repairs, and workshop projects.',
			'Pair your visit with sealants, hardware, and installation supplies.',
			'Call ahead if you want to confirm dimensions or material questions.'
		],
		detailsTitle: 'Getting ready for your visit',
		details: [
			'Bring exact measurements and ask about fit if your repair needs a little extra tolerance.',
			'Explain where the cut piece will be used so we can help you think through material choice and related supplies.',
			'If you are handling a repair in the same trip, pick up fasteners, caulk, weatherproofing, or hand tools while you are here.'
		],
		faqs: [
			{
				question: 'Do you cut glass and plexiglass in Franklinville, NY?',
				answer: 'Yes. Franklinville Hardware offers local help with custom glass and plexiglass cutting.'
			},
			{
				question: 'What should I bring for a custom cut?',
				answer: 'Bring accurate measurements and any details that explain where the piece will be used.'
			},
			{
				question: 'Where can I get plexiglass cut near Franklinville?',
				answer: 'Franklinville Hardware is a local option for plexiglass and glass cutting in Franklinville, NY.'
			}
		]
	}
} as const satisfies Record<string, LocalServicePage>;
