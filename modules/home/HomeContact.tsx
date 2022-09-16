import { FormGroup } from "components/form";
import { Input } from "components/input";
import { Label } from "components/label";
import { Heading } from "components/text";
import Image from "next/image";
import emailjs from "emailjs-com";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import classNames from "utils/className";
import { contacts } from "constants/data";

const HomeContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setDone(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current || "",
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      );
    } catch (error) {
      console.log(error);
    } finally {
      formRef.current.reset();
      setDone(false);
    }
  };
  return (
    <div className="layout-container">
      <div className="mt-20 text-center">
        <Heading className="mb-3">Get in touch</Heading>
        <p>We look forward to hearing from you!</p>
      </div>
      <div className="grid gap-6 mt-10 lg:grid-cols-2">
        <form ref={formRef} onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Your name</Label>
            <Input placeholder="John" name="user_name" required />
          </FormGroup>
          <FormGroup>
            <Label>Your email</Label>
            <Input type="email" placeholder="John@gmail.com" name="user_email" required />
          </FormGroup>
          <FormGroup>
            <Label>Messager</Label>
            <Input placeholder="I love you" name="message" required />
          </FormGroup>
          <button
            type="submit"
            className={classNames(
              "w-full text-center rounded h-11 bg-purple9c",
              done && "cursor-not-allowed"
            )}
          >
            {done ? "Sending..." : "Send"}
          </button>
        </form>
        <div>
          <h3>Other places</h3>
          <ul className="mt-4">
            {contacts.map((contact) => (
              <li key={contact.type} className="mb-5">
                <Link href={contact.path}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3"
                  >
                    <Image
                      width={30}
                      height={30}
                      alt={contact.type}
                      src={contact.image}
                      className="rounded-full"
                    />
                    <span>{contact.display}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
