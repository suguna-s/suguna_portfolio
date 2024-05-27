import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit, reset] = useForm('xqkrjjkb');
  if (state.succeeded) {
    return (
      <div className=" py-24 px-16 mx-auto max-w-3xl text-center">
        <p className="text-2xl">
          Many Thanks for Getting in Touch! I will respond as soon as possible.
        </p>
        <button
          className="mt-8 h-10 text-2xl rounded-lg w-full bg-cyan-200"
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    );
  }

  return (
    <section className=" bg-slat-200 " id="contact">
      <div className="py-24 px-16 mx-auto max-w-3xl">
        <h3 className="py-6 text-3xl tracking-wide text-center font-semibold">
          Contact
        </h3>
        <p className="text-2xl py-16">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="name">
              Full Name
            </label>
            <input
              className="h-12 rounded-lg p-3"
              id="name"
              type="name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="email">
              Email Address
            </label>
            <input
              className="h-12 rounded-lg p-3"
              id="email"
              type="email"
              name="email"
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <div className="flex flex-col gap-2">
            <label className="text-xl" htmlFor="message">
              Message
            </label>
            <textarea
              className="h-32 rounded-lg p-3"
              id="message"
              name="message"
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className="mt-8 h-10 text-2xl rounded-lg bg-cyan-200"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Submitting' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
