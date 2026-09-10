import React from "react";
import ContactDetails from "./contactDetails";
import ContactForm from "./contactform";

const Details = () => {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* Contact information */}
      <section className="w-full">
        <ContactDetails />
      </section>

      {/* Contact form */}
      <section className="w-full">
        <ContactForm />
      </section>
    </main>
  );
};

export default Details;