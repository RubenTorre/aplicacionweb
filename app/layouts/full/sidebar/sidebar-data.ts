import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Incio',
  },
  {
    displayName: 'Incio',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Asignacion',
  },
 
  {
    displayName: 'Agentes',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Asignar Libretines',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    navCap: 'Autenticacion',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Aplicacion Movil',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
];
