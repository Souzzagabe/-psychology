import Image from "next/image";
import Header from "./_components/Header";
import Content from "./_components/Content";
import Separator from "./_components/Separator";
import Main from "./_components/Main";
import WhatsAppButton from "./_components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <Content />

      <Separator />

      <Main />
      <WhatsAppButton />
    </>
  );
}
