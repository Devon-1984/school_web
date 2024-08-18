import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <form name="contact-form" netlify netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="email" name="email" />
          <input type="text" name="name" />
          <input type="tel" name="Mobile" />
          <textarea name="message"></textarea>
        </form>
      </body>
    </Html>
  );
}
