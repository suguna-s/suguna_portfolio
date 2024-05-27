import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectCard = ({ image, url, github, title, text, techstack }) => {
  console.log(image);
  return (
    <section className=" bg-white rounded-lg shadow-lg hover:shadow-2xl duration-300">
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-lg h-64"
      />
      <div className="p-8">
        <h3 className="text-2xl tracking-wide font-semibold">{title}</h3>
        <p className="mt-4 text-lg ">{text}</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className=" pl-8 mb-4 flex gap-x-4 ">
          {techstack.map((skill) => {
            const { id, icon } = skill;
            return (
              <div key={id}>
                <span>{icon}</span>
              </div>
            );
          })}
        </div>
        <div className=" pl-8 mb-4 flex gap-x-4 ">
          <a href={url} target="_blank">
            <TbWorldWww className="h-8 w-8 text-cyan-500 hover:text-cyan-900 duration-300" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare className="h-8 w-8 text-cyan-500 hover:text-cyan-900 duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
