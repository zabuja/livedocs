"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Header from "./Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Editor } from "./editor/Editor";
import ActiveCollaborator from "./ActiveCollaborator";
import { useRef, useState } from "react";

//* adding the liveblocks room to the page -> each page will have collaborative feature thus required in each page

const CollaborativeRoom = ({roomId, roomMetadata}: CollaborativeRoomProps) => {
const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
const [editing, setEditing] = useState(false);
const [loading, setLoadin] = useState(false);
const containerRef = useRef<HTMLDivElement>(null)
const inputRef = useRef<HTMLDivElement>(null)

  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">share</p>
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborator />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
