import { ContactForm } from '../contact-form';
import { ContactInfo } from '../contact-info';

export const ContactSection = () => (
  <section className="flex flex-col gap-5 @bp-1000/main:gap-[74px] mt-20 mb-space-2xl @bp-800/main:flex-row">
    <ContactInfo />
    <ContactForm />
  </section>
);
