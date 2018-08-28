import {getLanguage} from 'utils';

const strings = {
	fr: {
		SIDEMENU_PROJECTS: 'Projets',
		SIDEMENU_ABOUT: 'À propos',
		SIDEMENU_CONTACT: 'Contact',

		ABOUT_DESCRIPTION:
			'Depuis 2013, Constance Oulès enchaîne les projets de rénovation et décoration d’intérieur, aussi bien pour les particuliers que pour les professionnels, en France et à l’étranger.\n\nSa première vie dans la finance et son diplôme de l’Essec lui ont inculqué une rigueur indispensable à l’exercice de son nouveau métier et des compétences en gestion essentielles à la mise en œuvre de projets divers.Ses passions pour l’art et le design ont fait le reste : celles-ci l’ont poussée à évoluer dans ces domaines riches que sont l’architecture et la décoration, dans lesquels elle peut nourrir sa quête permanente d’esthétique.\n\nLa dualité entre son côté cartésien et sa sensibilité artistique guide ainsi sa démarche: dans chacun de ses projets, elle cherche à associer le fonctionnel et l’esthétique, la rigueur des lignes et la chaleur des matériaux, l’épure et le caractère, le masculin et le féminin, la simplicité et la sophistication.Cette recherche du parfait équilibre s’accompagne d’une volonté constante de respecter l’esprit des lieux qu’elle remodèle : s’inspirer de leur histoire, s’adapter à leur singularité, trouver le style juste, en dehors des tendances, chercher l’intemporalité, tels sont ses leitmotivs.Elle tend à échapper à la tentation des modes pour créer des lieux qui ressemblent à leurs occupants, des lieux vivants et non figés, fluides et sensibles, et attache alors une grande importance à la lumière, à la nature et au végétal.\n\nSes quelques années d’exercice l’ont amenée à travailler sur une diversité de lieux(de l’appartement haussmannien à la villa contemporaine, de la maison victorienne au magasin parisien) et d’échelles (rénovations complètes, scénographies d’espaces, design de mobilier, conception de vitrines) et lui ont ainsi apporté toute l’expérience et le carnet d’adresses nécessaires à la réalisation de projets variés.'
	},
	en: {
		SIDEMENU_PROJECTS: 'Projects',
		SIDEMENU_ABOUT: 'About',
		SIDEMENU_CONTACT: 'Contact',

		ABOUT_DESCRIPTION:
			'Since 2013, Constance Oulès has been carrying out renovation and interior decoration projects, both for individuals and for professionals, in France and abroad.\n\nHer first life in finance and her degree in Essec instilled in her a rigor essential to the exercise of her new profession and the management skills essential to the implementation of various projects. Her passion for art and design have done the rest: they have pushed her to evolve in these rich areas that are architecture and decoration, in which she can feed her permanent quest for aesthetics.\n\nThe duality between her Cartesian side and her artistic sensibility guides her approach: in each of her projects, she seeks to combine the functional and the aesthetic, the rigor of the lines and the warmth of the materials, the purity and the character, the masculine and feminine, simplicity and sophistication. This search for the perfect balance is accompanied by a constant desire to respect the spirit of the places she remodels: take inspiration from their history, adapt to their singularity, find the right style, outside the tendencies, look for the timelessness, such are her leitmotifs. She tends to escape the temptation of the trends to create places which resemble their occupants, places alive and not fixed, fluid and sensitive, and attaches great importance to light, nature and vegetation.\n\nHer few years of practice led her to work on a variety of places (from the Haussmann apartment to the contemporary villa, from the Victorian house to the Parisian store) and ladders (complete renovations, scenography of spaces, design furniture, shop window design) and thus provided her with all the experience and the address book necessary for the realization of various projects.'
	}
};

export default strings[getLanguage()];