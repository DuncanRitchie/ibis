const regexForDeletingFlickrEmbedCode = `(<a data-flickr-embed="true" href="[^"]+" title="[^"]+"><img src=")|(" width="[^"]+" height="[^"]+" alt="[^"]+"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>)`

export const birds = [
	{
		name: 'Buzzard',
		genus: 'Buteo',
		species: 'buteo',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53682768221_e06009793f_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/49502783418_e6c5a66d81_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Sparrowhawk',
		genus: 'Accipiter',
		species: 'nisus',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/50779931943_d0783f36e7_n.jpg',
				aspectRatio: '1/1',
			},
			{
				src: 'https://live.staticflickr.com/7293/27986809201_d223c60f0d_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Kestrel',
		genus: 'Falco',
		species: 'tinnunculus',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/4573/38380470184_ce075ac17b_n.jpg',
				aspectRatio: '3/4',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Osprey',
		genus: 'Pandion',
		species: 'haliaetus',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/51635102182_5b6f8757c7_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Golden Eagle',
		genus: 'Aquila',
		species: 'chrysaetos',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/1513/26326183010_25d509f19f_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Tawny Owl',
		genus: 'Stryx',
		species: 'aluco',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [],
		firstSighting: "before 2014",
	},
	{
		name: 'Barn Owl',
		genus: 'Tyto',
		species: 'alba',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/1458/26501394222_4d465a8ebd_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Hen Harrier',
		genus: 'Circus',
		species: 'cyaneus',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/8651/30493755781_0ded5d1872_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/5099/5465160010_5590198c38_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Red Kite',
		genus: 'Milvus',
		species: 'milvus',
		category: 'Birds of Prey',
		subCategory: 'Raptors',
		images: [
			{
				src: 'https://live.staticflickr.com/4523/38344607001_6e34b6ff83_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Carrion Crow',
		genus: 'Corvus',
		species: 'corone',
		category: 'Corvids',
		subCategory: 'Crows',
		images: [
			{
				src: 'https://live.staticflickr.com/8858/27647658294_4a02a01fe5_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Hooded Crow',
		genus: 'Corvus',
		species: 'cornix',
		category: 'Corvids',
		subCategory: 'Crows',
		images: [
			{
				src: 'https://live.staticflickr.com/1364/5165034340_4332106260_n.jpg',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Rook',
		genus: 'Corvus',
		species: 'frugilegus',
		category: 'Corvids',
		subCategory: 'Crows',
		images: [
			{
				src: 'https://live.staticflickr.com/5699/21276733173_ee2b11f233_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Jackdaw',
		genus: 'Corvus',
		species: 'monedula',
		category: 'Corvids',
		subCategory: 'Crows',
		images: [
			{
				src: 'https://live.staticflickr.com/7647/16760960710_856114fe42_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/4148/5062878502_59d7655211_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Magpie',
		genus: 'Pica',
		species: 'pica',
		category: 'Corvids',
		subCategory: 'Magpies & Jays',
		images: [
			{
				src: 'https://live.staticflickr.com/7178/27604277415_8ab3a522bc_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/49821075658_4fb067accc_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Jay',
		genus: 'Garrulus',
		species: 'glandarius',
		category: 'Corvids',
		subCategory: 'Magpies & Jays',
		images: [
			{
				src: 'https://live.staticflickr.com/7682/17324527343_58fd983ccd_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Rock Dove',
		genus: 'Columba',
		species: 'livia',
		category: 'Garden Birds',
		subCategory: 'Doves',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/51399884046_d33bf96c66_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/567/32479400386_e59ae66cf7_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/965/40103353510_b5950e121f_n.jpg',
				aspectRatio: '1/1',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Wood-pigeon',
		genus: 'Columba',
		species: 'palumbus',
		category: 'Garden Birds',
		subCategory: 'Doves',
		images: [
			{
				src: 'https://live.staticflickr.com/1787/29344864538_af45156a19_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Collared Dove',
		genus: 'Streptopelia',
		species: 'decaocto',
		category: 'Garden Birds',
		subCategory: 'Doves',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/49505771006_b803a5aecc_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Blackbird',
		genus: 'Turdus',
		species: 'merula',
		category: 'Garden Birds',
		subCategory: 'Tits & Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/1796/43265599034_ecb581c525_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/4098/4771314647_6349023e43_n.jpg',
				aspectRatio: '4/3',
			}
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Mistle-thrush',
		genus: 'Turdus',
		species: 'viscivorus',
		category: 'Garden Birds',
		subCategory: 'Tits & Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/49505988457_b9d0f1c0f8_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Redwing',
		genus: 'Turdus',
		species: 'iliacus',
		category: 'Garden Birds',
		subCategory: 'Tits & Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/51056140797_7ea496b19f_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Redstart',
		genus: 'Phoenicurus',
		species: 'phoenicurus',
		category: 'Garden Birds',
		subCategory: 'Tits & Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/5096/5395831511_bcf4835ea3_n.jpg',
				aspectRatio: '3/4',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Robin',
		genus: 'Erithacus',
		species: 'rubecula',
		category: 'Garden Birds',
		subCategory: 'Tits & Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/4885/46560843931_97c4e1f3e4_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/470/32007019411_debb50534c_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/53974565927_06c54edd60_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Chaffinch',
		genus: 'Fringilla',
		species: 'coelebs',
		category: 'Garden Birds',
		subCategory: 'Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/5712/21304767125_c9a8b32665_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/952/40063978230_eb5c50ae24_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Goldfinch',
		genus: 'Carduelis',
		species: 'carduelis',
		category: 'Garden Birds',
		subCategory: 'Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/5829/21312890091_c2a217db0f_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Greenfinch',
		genus: 'Carduelis',
		species: 'chloris',
		category: 'Garden Birds',
		subCategory: 'Finches',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Siskin',
		genus: 'Carduelis',
		species: 'spinus',
		category: 'Garden Birds',
		subCategory: 'Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/7204/6870985699_f1972b87d5_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/614/21116849268_b8e32eb32c_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Linnet',
		genus: 'Carduelis',
		species: 'cannabina',
		category: 'Garden Birds',
		subCategory: 'Finches',
		images: [
			{
				src: 'https://live.staticflickr.com/7434/27864091565_d45481ff7b_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Long-tailed Tit',
		genus: 'Aegithalos',
		species: 'caudatus',
		category: 'Garden Birds',
		subCategory: 'Tits',
		images: [
			{
				src: 'https://live.staticflickr.com/7839/33251947708_f623348660_n.jpg',
				aspectRatio: '1/1',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Blue Tit',
		genus: 'Cyanistes',
		species: 'caeruleus',
		category: 'Garden Birds',
		subCategory: 'Tits',
		images: [
			{
				src: 'https://live.staticflickr.com/5769/23460183750_bd9593ce22_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/597/20683676193_bfef998e12_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Great Tit',
		genus: 'Parus',
		species: 'major',
		category: 'Garden Birds',
		subCategory: 'Tits',
		images: [
			{
				src: 'https://live.staticflickr.com/1725/27584176417_fd2ba27532_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'House Sparrow',
		genus: 'Passer',
		species: 'domesticus',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53741805030_6c07d8cfd8_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/50259269022_8e99e65c77_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Wren',
		genus: 'Troglodytes',
		species: 'troglodytes',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/49872161987_11f8fba9fa_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/1475/26594122836_f9f5082a9a_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Dunnock',
		genus: 'Prunella',
		species: 'modularis',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53975770769_8473e78691_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Swallow',
		genus: 'Hirundo',
		species: 'rustica',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/50259269317_55180fc98d_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Great Spotted Woodpecker',
		genus: 'Dendrocopus',
		species: 'major',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/5663/30131227542_0d71813d65_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Starling',
		genus: 'Sturnus',
		species: 'vulgaris',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/51385529429_fd18624bd4_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Rock Pipit',
		genus: 'Anthus',
		species: 'petrosus',
		category: 'Garden Birds',
		subCategory: 'Garden Misc.',
		images: [
			{
				src: 'https://live.staticflickr.com/7680/17079207548_2244899d8b_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Corn Bunting',
		genus: 'Emberiza',
		species: 'calandra',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/1378/5165059136_68a02caec2_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Reed Bunting',
		genus: 'Emberiza',
		species: 'schoeniclus',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/48396010441_09abb4fdef_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/5257/29592679374_f3fa317fee_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/48396147372_367d2865c0_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Pied Wagtail',
		genus: 'Motacilla',
		species: 'alba',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/2923/14105063357_61001fff3e_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Grey Wagtail',
		genus: 'Motacilla',
		species: 'cinerea',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/49847018831_fd19ce5968_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/49847321957_12e168a95a_n.jpg',
				aspectRatio: '4/5',
			},
			{
				src: 'https://live.staticflickr.com/2881/34178944352_acd925abca_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Pheasant',
		genus: 'Phasianus',
		species: 'colchinus',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53730009415_d63521310c_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/4591/27339930169_5d1589a871_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Cuckoo',
		genus: 'Cuculus',
		species: 'canorus',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Waxwing',
		genus: 'Bombycilla',
		species: 'garrulus',
		category: 'Garden Birds',
		subCategory: 'Garden Misc',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Mallard',
		genus: 'Anas',
		species: 'platyrhynchos',
		category: 'River Birds',
		subCategory: 'Waterfowl',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53682998353_8ed9ce5af9_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/7309/11630896414_2e1bd1e0b4_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/2903/14278683708_cfee9d2b4f_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/51351084634_7c6f7e4ab6_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Goldeneye',
		genus: 'Bucephala',
		species: 'clangula',
		category: 'River Birds',
		subCategory: 'Waterfowl',
		images: [
			{
				src: 'https://live.staticflickr.com/5137/5450970691_72ec3248bf_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Tufted Duck',
		genus: 'Aythya',
		species: 'fuligula',
		category: 'River Birds',
		subCategory: 'Waterfowl',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/51271318072_4d39db7f4e_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Greylag Goose',
		genus: 'Anser',
		species: 'anser',
		category: 'River Birds',
		subCategory: 'Waterfowl',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/51351084364_6b1d5e8659_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/47981138718_fa90e4d825_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/49822220762_3c2ecf7d9c_n.jpg',
				aspectRatio: '4/3'
			},
			{
				src: 'https://live.staticflickr.com/65535/50025782593_f0ddcae235_n.jpg',
				aspectRatio: '1/1',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Pink-footed Goose',
		genus: 'Anser',
		species: 'brachyrhynchus',
		category: 'River Birds',
		subCategory: 'Waterfowl',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53061199327_8f55ded99b_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Canada Goose',
		genus: 'Branta',
		species: 'canadensis',
		category: 'River Birds',
		subCategory: 'Waterfowl',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/50225750268_6417f90406_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/50258420323_2601ee0bc7_n.jpg',
				aspectRatio: '4402/2935',
			},
			{
				src: 'https://live.staticflickr.com/4101/4786466620_e60cf41a06_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Mute Swan',
		genus: 'Cygnus',
		species: 'olor',
		category: 'River Birds',
		subCategory: 'Waterfowl',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/50412472523_63aa51bc31_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/2688/4431153173_af59c92461_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Coot',
		genus: 'Fulica',
		species: 'atra',
		category: 'River Birds',
		subCategory: 'Crakes',
		images: [
			{
				src: 'https://live.staticflickr.com/7331/12864263363_dc2ff9fe1d_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/7340/27448894643_a8c432e331_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Moorhen',
		genus: 'Gallinula',
		species: 'chloropus',
		category: 'River Birds',
		subCategory: 'Crakes',
		images: [
			{
				src: 'https://live.staticflickr.com/7901/32174561957_f94960be10_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/53514854273_45baf1cb17_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Kingfisher',
		genus: 'Alcedo',
		species: 'atthis',
		category: 'River Birds',
		subCategory: 'River Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/50804768426_8342176311_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/52785655984_baf53044a2_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Dipper',
		genus: 'Cincus',
		species: 'cincus',
		category: 'River Birds',
		subCategory: 'River Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/4679/25251837158_2c71e69f42_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/1732/42403869612_0e1da21ab1_n.jpg',
				aspectRatio: '1/1',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Little Grebe',
		genus: 'Tachybaptus',
		species: 'rufficolis',
		category: 'River Birds',
		subCategory: 'River Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53912405323_b400a6fd68_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Grey Heron',
		genus: 'Ardea',
		species: 'cinerea',
		category: 'River Birds',
		subCategory: 'River Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/7040/26820721770_c10c7b604b_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/4435/36015171110_e779672706_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/1741/41731248354_0af1e4b4cb_n.jpg',
				aspectRatio: '3/4',
			},
			{
				src: 'https://live.staticflickr.com/65535/48088160748_309709a09a_n.jpg',
				aspectRatio: '1/1',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Cormorant',
		genus: 'Phalacrocorax',
		species: 'carbo',
		category: 'River Birds',
		subCategory: 'River Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53975391573_9974bf0423_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/53978113476_c9eee1cc16_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/7906/45983985345_32deeb7a10_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Herring Gull',
		genus: 'Larus',
		species: 'argentatus',
		category: 'Sea Birds',
		subCategory: 'Gulls',
		images: [
			{
				src: 'https://live.staticflickr.com/1773/42951360131_4789ee222f_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/7858/39933745563_e7ab690200_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/865/40972450285_06c8fbc6ce_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Lesser Black-backed Gull',
		genus: 'Larus',
		species: 'fuscus',
		category: 'Sea Birds',
		subCategory: 'Gulls',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/51012717921_aa47d16893_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Black-headed Gull',
		genus: 'Chroirocephalus',
		species: 'ridibundus',
		category: 'Sea Birds',
		subCategory: 'Gulls',
		images: [
			{
				src: 'https://live.staticflickr.com/1825/43442078282_9e1922dc07_n.jpg',
				aspectRatio: '4896/3264',
			},
			{
				src: 'https://live.staticflickr.com/5765/23645887812_369139065b_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Eider',
		genus: 'Somateria',
		species: 'mollissima',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/8697/17188561422_ac4e1307d6_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/5348/17002684740_da73011488_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Gannet',
		genus: 'Morus',
		species: 'bassanus',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/842/41483265792_c7d81a635d_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Oystercatcher',
		genus: 'Haematopus',
		species: 'ostralegus',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/624/23387926589_f9c416c75a_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/4055/4696658224_e285d51c72_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Lapwing',
		genus: 'Vanellus',
		species: 'vanellus',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/682/23127715884_3b4de919ab_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Guillemot',
		genus: 'Uria',
		species: 'alga',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/1835/28081864857_13aeaba7c1_n.jpg',
				aspectRatio: '4337/2891',
			},
			{
				src: 'https://live.staticflickr.com/1824/28081855387_e9eeeec366_n.jpg',
				aspectRatio: '4337/2891',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Black Guillemot',
		genus: 'Cepphus',
		species: 'grylle',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/5052/5458612741_c745e3f5be_n.jpg',
				aspectRatio: '3/4',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Common Sandpiper',
		genus: 'Actitis',
		species: 'hypoleucos',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Curlew',
		genus: 'Numenius',
		species: 'arquata',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/1873/30852502458_0d7dab712a_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Redshank',
		genus: 'Tringa',
		species: 'totanus',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53611858042_d2788a3b49_n.jpg',
				aspectRatio: '4/3',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Knot',
		genus: 'Calidris',
		species: 'canuta',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Dotterel',
		genus: 'Charadrius',
		species: 'morinellus',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Wheatear',
		genus: 'Oenanthe',
		species: 'oenanthe',
		category: 'Sea Birds',
		subCategory: 'Sea Misc',
		images: [
			{
				src: 'https://live.staticflickr.com/4767/38868091175_1295ed27af_n.jpg',
				aspectRatio: '',
			},
		],
		firstSighting: "before 2014",
	},
	{
		name: 'Song Thrush',
		genus: 'Turdus',
		species: 'philomelos',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/49846666263_0dde3fec46_n.jpg',
				aspectRatio: '4/3',
			},
		],
	},
	{
		name: 'Raven',
		genus: 'Corvus',
		species: 'corax',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/53403550891_03f04c7bb4_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/4710/39404962925_bde89cf0db_n.jpg',
				aspectRatio: '4/3',
			},
		],
	},
	{
		name: 'Stonechat',
		genus: 'Saxicola',
		species: 'rubicola',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/50259272077_ec48a62d9d_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/50259272442_d3f7d4d8b2_n.jpg',
				aspectRatio: '4/3',
			},
		],
	},
	{
		name: 'Pochard',
		genus: 'Aythya',
		species: 'ferina',
		images: [
			{
				src: 'https://live.staticflickr.com/5176/5450943743_8237d82f8a_n.jpg',
				aspectRatio: '4/3',
			},
		],
	},
	{
		name: 'Shelduck',
		genus: 'Tadorna',
		species: 'tadorna',
		images: [
			{
				src: 'https://live.staticflickr.com/4150/5451561924_78e801b727_n.jpg',
				aspectRatio: '4/3',
			},
		],
	},
	{
		name: 'Mandarin',
		genus: 'Aix',
		species: 'galericulata',
		images: [
			{
				src: 'https://live.staticflickr.com/65535/49806392668_42e184e4b2_n.jpg',
				aspectRatio: '4687/3125',
			},
			{
				src: 'https://live.staticflickr.com/65535/49961234502_2cdbc0c67a_n.jpg',
				aspectRatio: '4/3',
			},
			{
				src: 'https://live.staticflickr.com/65535/49735249308_2fa9eed48d_n.jpg',
				aspectRatio: '4816/2890',
			},
		],
	},
	{
		name: 'Red-breasted Merganser',
		genus: 'Mergus',
		species: 'serrator',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Goosander',
		genus: 'Mergus',
		species: 'merganser',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Scottish Crossbill',
		genus: 'Loxia',
		species: 'scotica',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Great Crested Grebe',
		genus: 'Podiceps',
		species: 'cristatus',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Great Black-backed Gull',
		genus: 'Larus',
		species: 'marinus',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Kittiwake',
		genus: 'Rissa',
		species: 'tridactyla',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Fulmar',
		genus: 'Fulmarus',
		species: 'glacialis',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Shag',
		genus: 'Gulosus',
		species: 'aristotelis',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Ringed Plover',
		genus: 'Charadrius',
		species: 'hiaticula',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Meadow Pipit',
		genus: 'Anthus',
		species: 'pratensis',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Twite',
		genus: 'Linaris',
		species: 'flavirostris',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Snow Bunting',
		genus: 'Plectrophenax',
		species: 'nivalis',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Stock Dove',
		genus: 'Columba',
		species: 'oenas',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Willow Warbler',
		genus: 'Phylloscopus',
		species: 'trochilus',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Chiffchaff',
		genus: 'Phylloscopus',
		species: 'collybita',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Blackcap',
		genus: 'Sylvia',
		species: 'atricapilla',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Swift',
		genus: 'Apus',
		species: 'apus',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Goldcrest',
		genus: 'Regulus',
		species: 'regulus',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'House Martin',
		genus: 'Delichon',
		species: 'urbicum',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Sand Martin',
		genus: 'Riparia',
		species: 'riparia',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Little Egret',
		genus: 'Egretta',
		species: 'garzetta',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Coal Tit',
		genus: 'Periparus',
		species: 'ater',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Treecreeper',
		genus: 'Certhia',
		species: 'familiaris',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Nuthatch',
		genus: 'Sitta',
		species: 'europaea',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Dunlin',
		genus: 'Calidris',
		species: 'alpina',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Teal',
		genus: 'Anas',
		species: 'crecca',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Arctic Tern',
		genus: 'Sterna',
		species: 'paradisaea',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Sandwich Tern',
		genus: 'Thalasseus',
		species: 'sandvicensis',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Razorbill',
		genus: 'Alca',
		species: 'torda',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Puffin',
		genus: 'Fratercula',
		species: 'arctica',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Bullfinch',
		genus: 'Pyrrhula',
		species: 'pyrrhula',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Lesser Redpoll',
		genus: 'Acanthis',
		species: 'flammea',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Fieldfare',
		genus: 'Turdus',
		species: 'pilaris',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Great Skua',
		genus: 'Stercorarius',
		species: 'skua',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Green Woodpecker',
		genus: 'Picus',
		species: 'viridis',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Red-legged Partridge',
		genus: 'Alectoris',
		species: 'rufa',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Snipe',
		genus: 'Gallinago',
		species: 'gallinago',
		images: [
			{
				src: 'https://live.staticflickr.com/8338/29758967321_0f4b140b56_n.jpg',
				aspectRatio: '4/3'
			}
		]
	},
	{
		name: 'Peregrine Falcon',
		genus: 'Falco',
		species: 'peregrinus',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Red Grouse',
		genus: 'Lagopus',
		species: 'scotica',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Ring-necked Parakeet',
		genus: 'Psittacula',
		species: 'krameri',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Skylark',
		genus: 'Alauda',
		species: 'arvensis',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Turnstone',
		genus: 'Arenaria',
		species: 'interpres',
		images: [
			{
				src: '',
				aspectRatio: '',
			},
		],
	},
	{
		name: 'Barnacle Goose',
		genus: 'Branta',
		species: 'leucopsis',
		images: [
			{
				src: 'https://live.staticflickr.com/7340/10361567245_5bc29d2260_n.jpg',
				aspectRatio: '4/3'
			}
		]
	},
]