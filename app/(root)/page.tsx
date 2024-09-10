import AddDocumentButton from "@/components/AddDocumentButton";
import Header from "@/components/Header";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Home = () => {
  const documents = [];

  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notifications
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {documents.length > 0 ? (
        <div>zx</div>
      ) : (
        <div className="document-list-empty">
          <Image src="/assets/icons/doc.svg" alt="Document" height={40} width={40} className="mx-auto"/>
          <AddDocumentButton/>
        </div>
      )}
    </main>
  );
};

export default Home;
