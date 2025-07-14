import { ContactForm } from '../contact-form';
import { ContactInfo } from '../contact-info';

export const ContactSection = () => (
  <section className="flex flex-col gap-5 min-[1000px]:gap-[74px] mt-20 mb-space-2xl min-[800px]:flex-row">
    <ContactInfo />
    <ContactForm />
  </section>
);
