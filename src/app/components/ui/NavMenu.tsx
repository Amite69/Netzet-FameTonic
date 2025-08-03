import { NavItem } from '../../types';

// Define your navigation items in an array
  const navItems : NavItem[] = [
    { name: 'About Us', 
      href: '#about' 
    },
    { name: 'Contact', 
      href: '#contact' 
    },
    // Add more items as needed
  ];

export default function NavMenu() {
  

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="font-semibold md:text-[18px] text-[#A9A9A9] cursor-pointer"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
