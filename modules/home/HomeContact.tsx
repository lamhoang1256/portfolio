import { FormGroup } from "components/form";
import { Input } from "components/input";
import { Label } from "components/label";
import { Heading } from "components/text";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    type: "github",
    path: "https://github.com/lamhoang1256",
    image: "/github.png",
    display: "Github: lamhoang1256",
  },
  {
    type: "facebook",
    path: "https://www.facebook.com/profile.php?id=100023642404837",
    image: "/facebook.png",
    display: "Facebook",
  },
  {
    type: "microsoft",
    path: "https://marketplace.visualstudio.com/publishers/NguyenHoangLam",
    image: "/microsoft.png",
    display: "Marketplace",
  },
  {
    type: "gmail",
    path: "gmail.com",
    image: "/gmail.png",
    display: "Gmail: hoanglam1309a@gmail.com",
  },
  {
    type: "youtube",
    path: "https://www.youtube.com/channel/UCuEJII_bAl1h3ovns8O5azg",
    image: "/youtube.png",
    display: "Youtube",
  },
];

const HomeContact = () => {
  return (
    <div className="layout-container">
      <div className="mt-20 text-center">
        <Heading className="mb-3">Get in touch</Heading>
        <p>We look forward to hearing from you!</p>
      </div>
      <div className="grid gap-6 mt-10 lg:grid-cols-2">
        <form action="#">
          <FormGroup>
            <Label>Your name</Label>
            <Input placeholder="John" />
          </FormGroup>
          <FormGroup>
            <Label>Your email</Label>
            <Input placeholder="John@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label>Messager</Label>
            <Input placeholder="I love you" />
          </FormGroup>
          <button className="w-full rounded h-11 bg-purple9c">Send</button>
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
