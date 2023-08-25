import { Link, useParams } from "react-router-dom";

const Submit = () => {
  const params = useParams();

  return (
    <section className="container bg-white rounded-md p-4 flex flex-col gap-4">
      <span className="w-12 h-12 text-white bg-tomato rounded-full grid place-items-center mr-auto">
        &#10003;
      </span>
      <h1 className="font-bold text-5xl mb-2">Thank for subscribing!</h1>
      <p className="mb-8">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{params.email}</span>. Please click on the
        confirmation link to confirm your subscription.
      </p>
      <Link
        className="w-full p-4 text-white font-bold bg-darkSlateGrey rounded-md hover:bg-charcoalGrey text-center"
        to="/"
      >
        Dismiss Message
      </Link>
    </section>
  );
};

export default Submit;
