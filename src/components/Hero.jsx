import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="bg-sky-200 py-40 px-16" id="home">
      <div className=" text-center flex flex-col justify-center gap-y-6 tracking-widest">
        <p>
          <span className="text-5xl font-medium">Hello, </span>
          <span className="text-5xl font-medium">I'm Suguna Satyavolu</span>
        </p>
        <p className="text-3xl font-semibold">Full Stack Developer</p>
        <p className="text-2xl mx-auto max-w-3xl py-8">
          Welcome to my portfolio! Enter with curiosity, leave with inspiration.
          Explore my work, crafted with passion and purpose. Whether you're here
          to admire, collaborate, or find a spark of creativity, I'm thrilled to
          have you join me. Let's embark on this journey together!
        </p>
        <div className=" flex gap-x-4 justify-center ">
          <a href="https://github.com/suguna-s" target="_blank">
            <FaGithubSquare className="h-8 w-8 text-cyan-500 hover:text-cyan-900 duration-300" />
          </a>
          <a href="https://linkedin.com/in/suguna-satyavolu" target="_blank">
            <FaLinkedin className="h-8 w-8 text-cyan-500 hover:text-cyan-900 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
