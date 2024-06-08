

// navlink.ts
export interface NavLink {
    id: number;
    text: string;
    url: string;
  }
  
  const navLinks: NavLink[] = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Try Our Services", url: "../sign-up" },
    { id: 4, text: "Our Projects", url: "../Projects" }
  ];
  
  export default navLinks;
  