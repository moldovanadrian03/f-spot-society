export function openLink(url: string): void {
  window.open(url, '_blank');
}

export function scrollToElementById(element: string): void {
	const el = document.getElementById(element);
	if (!el) return;

	const offsetPush = window.innerWidth <= 700 ? 78 : 110;		// substracted value from offset -> should be the height of the navbar

	const rect = el.getBoundingClientRect();
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const offset = rect.top + scrollTop - offsetPush;

	window.scrollTo({ top: offset, behavior: 'smooth' });
}

export const FORMULAR_PERSOANE_FIZICE = 'https://formular230.ro/asociatia-culturala-f-spot-society';
export const CONTRACT_PERSOANE_JURIDICE = 'https://sites.google.com/view/fspotsociety/FSpot_companii?authuser=0';

export const INSTAGRAM = 'https://www.instagram.com/f.spot.society/';
export const FACEBOOK = 'https://www.facebook.com/f.spot.society';

export const TEAM_MEMBERS = [
  {
    image: 'assets/about.jpg',
    title: 'Irina Enea',
  },
  {
    image: 'assets/about.jpg',
    title: 'Răzvan Marinescu',
  },
  {
    image: 'assets/about.jpg',
    title: 'Alexia Gatea',
  }];

export const ABOUT_SECTION = 'about-section';
export const INFO_SECTION = 'info-section';
export const CARDS_SECTION = 'members-section';
export const FOOTER_SECTION = 'footer-section';
