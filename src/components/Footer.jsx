import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <section className="bg-sky-200 py-16 px-16">
      <div className="flex flex-col gap-y-4 items-center">
        <div className=" flex gap-x-4 justify-center">
          <a href="https://github.com/suguna-s" target="_blank">
            <FaGithubSquare className="h-8 w-8 text-cyan-500 hover:text-cyan-900 duration-300" />
          </a>
          <a href="https://linkedin.com/in/suguna-satyavolu" target="_blank">
            <FaLinkedin className="h-8 w-8 text-cyan-500 hover:text-cyan-900 duration-300" />
          </a>
        </div>
        <p className="text-lg text-center">
          &copy; Copyrigt {new Date().getFullYear()}. Made by Suguna Satyavolu.
        </p>
      </div>
    </section>
  );
};

export default Footer;
