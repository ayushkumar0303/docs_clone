import { log } from "console";
import React from "react";
import Editor from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}

async function DocumentIdPage({ params }: DocumentIdProps) {
  // console.log(params);

  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;
  // console.log(documentId);

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      DocumentIdPage:{documentId}
      <Toolbar />
      <Editor />
    </div>
  );
}

export default DocumentIdPage;
