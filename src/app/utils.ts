import { Project } from "./interfaces/project.model";

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

export const PROJECTS: Project[] = [
  {
    image: 'assets/about.jpg',
    title: 'F-Spot Society',
    description: 'F-Spot Society este o asociație culturală care își propune să sprijine și să promoveze tinerii artiști din România, oferindu-le oportunități de expunere și dezvoltare a carierei lor artistice. Organizăm evenimente, expoziții și ateliere pentru a crea o platformă de dialog și colaborare între artiști și publicul larg. Ne dedicăm să aducem arta contemporană mai aproape de comunitate și să susținem creativitatea tinerilor talentați. la Festivalul Național de Artă Contemporană 2024, F-Spot Society a fost premiat pentru cel mai bun proiect cultural la Gala Tineretului 2023. asdasdasdasdasdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdaasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadsasdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdaasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadsasdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdaasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadsa',
    awards: ['Premiul pentru cel mai bun proiect cultural la Gala Tineretului 2023', 'Mențiune specială la Festivalul Național de Artă Contemporană 2024'],
    subject: 'Cultură și artă',
    instagram: 'https://www.google.com',
    facebook: 'https://www.google.com',
    isExpanded: false,
  },
  {
    image: 'assets/about.jpg',
    title: 'F-Spot Society',
    description: 'F-Spot Society este o asociație culturală care creează filme care contează, pentru copii și adolescenții, oferindu-le oportunităților de descoperire vocea. asdasdasdasdasdasdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdaasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadsasdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdasdasdasd asdaasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadasdsadsa',
    awards: ['Premiul pentru cel mai bun proiect cultural la Gala Tineretului 2023', 'Mențiune specială la Festivalul Național de Artă Contemporană 2024'],
    subject: 'Cultură',
    instagram: 'https://www.instagram.com/f.spot.society',
    facebook: 'https://www.facebook.com/f.spot.society',
    isExpanded: false,
}];

export const ABOUT_SECTION = 'about-section';
export const INFO_SECTION = 'info-section';
export const PROJECTS_SECTION = 'projects-section';
export const MEMBERS_SECTION = 'members-section';
export const FOOTER_SECTION = 'footer-section';
