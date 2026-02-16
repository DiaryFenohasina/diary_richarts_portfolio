import { FaEnvelope, FaPaperPlane, FaDownload } from "react-icons/fa";
import { useState } from "react";
import type { FormEvent } from "react";
import CV from "../assets/files/CV_Diary_RICHARTS.pdf";

type ContactPageProps = {
  language: "fr" | "en";
};

function ContactPage({ language }: ContactPageProps) {
  const gmailAddress = "richartsdiaryfenohasina@gmail.com";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const buildPayload = () => {
    const safeSubject = encodeURIComponent(
      subject || (language === "fr" ? "Nouveau message depuis le portfolio" : "New message from portfolio")
    );
    const safeBody = encodeURIComponent(
      `${language === "fr" ? "Nom" : "Name"}: ${name || "-"}\n` +
      `${language === "fr" ? "Email visiteur" : "Visitor email"}: ${email}\n\n` +
      `${language === "fr" ? "Message" : "Message"}:\n${message || "-"}`
    );
    return { safeSubject, safeBody };
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { safeSubject, safeBody } = buildPayload();
    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailAddress}&su=${safeSubject}&body=${safeBody}`;
    window.open(gmailCompose, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20">
      <h2 className="text-3xl font-bold sm:text-4xl">
        {language === "fr" ? "Contact" : "Contact"}
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        {language === "fr"
          ? "Remplissez le formulaire et envoyez directement vers mon Gmail."
          : "Fill out the form and send directly to my Gmail."}
      </p>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 text-left">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={language === "fr" ? "Votre nom" : "Your name"}
          className="app-card w-full rounded-xl px-4 py-3 text-sm outline-none"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={language === "fr" ? "Votre email (obligatoire)" : "Your email (required)"}
          className="app-card w-full rounded-xl px-4 py-3 text-sm outline-none"
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={language === "fr" ? "Sujet" : "Subject"}
          className="app-card w-full rounded-xl px-4 py-3 text-sm outline-none"
        />
        <textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={language === "fr" ? "Votre message" : "Your message"}
          className="app-card w-full rounded-xl px-4 py-3 text-sm outline-none"
        />
        <button
          type="submit"
          className="app-card inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-[1px]"
        >
          <FaPaperPlane />
          {language === "fr" ? "Envoyer via Gmail" : "Send via Gmail"}
        </button>
      </form>

      <div className="mt-4">
        <a
          href={CV}
          download
          className="app-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-[1px]"
        >
          <FaDownload />
          {language === "fr" ? "Telecharger mon CV" : "Download my CV"}
        </a>
      </div>

      <p className="mt-6 inline-flex items-center gap-2 text-sm">
        <FaEnvelope />
        {gmailAddress}
      </p>
    </div>
  );
}

export default ContactPage;
