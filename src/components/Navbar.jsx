import { links } from './data';

const Navbar = () => {
  return (
    <nav className="fixed z-100 w-full bg-sky-200">
      <div className="  py-8 px-16 font-semibold flex flex-row gap-x-8 justify-end ">
        {links.map((link) => {
          return (
            <a
              href={link.href}
              key={link.id}
              className="capitalize tracking-widest text-xl hover:underline decoration-solid duration-300"
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
