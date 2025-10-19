import { skills } from './data';

const About = () => {
  return (
    <section className="bg-slat-200" id="about">
      <div className="py-24 px-16 mx-auto max-w-7xl grid md:grid-cols-2 items-start gap-24">
        <article className="flex flex-col justify-center">
          <h3 className="py-6 text-3xl text-center tracking-wide font-semibold">
            About Me
          </h3>
          <p className="text-2xl py-16">
            I’m a Full Stack Web Developer with a strong foundation in front-end
            technologies like HTML, CSS, JavaScript and React, complemented by
            back-end expertise from Nucamp’s Full Stack Web and Mobile
            Development Bootcamp. I’m passionate about creating dynamic,
            responsive and user-friendly applications, combining clean design
            with efficient server-side logic. Driven by curiosity and a
            commitment to growth, I continuously explore new technologies to
            deliver modern, impactful web solutions across the full development
            stack.
          </p>
        </article>
        <article>
          <h3 className="py-6 text-3xl text-center tracking-wide font-semibold">
            My Skills
          </h3>
          <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              return (
                <article
                  key={skill.id}
                  className="flex flex-col items-center md:flex-col"
                >
                  <span className="mr-2">{skill.icon}</span>
                  <h4 className="mt-2 font-bold">{skill.title}</h4>
                </article>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
