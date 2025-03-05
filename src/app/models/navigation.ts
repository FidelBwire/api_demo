export interface NavItem{
  label: string;
  icon: string;
  route: string;
}

export interface FooterItem {
  label: string;
  icon: string;
  route: string;
}

export interface FooterNavigation {
  section1: FooterItem[];
  section2: FooterItem[];
  section3: FooterItem[];
}
