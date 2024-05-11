

// navlink.ts
export interface NavLink {
    id: number;
    text: string;
    url: string;
  }
  
  const navLinks: NavLink[] = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Services", url: "../Services" },
    { id: 3, text: "Contact", url: "../Contact" },
    { id: 4, text: "Our Projects", url: "../Projects" }
  ];
  
  export default navLinks;
  