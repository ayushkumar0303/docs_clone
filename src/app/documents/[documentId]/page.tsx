import { log } from "console";
import React from "react";

interface DocumentIdProps {
  params: Promise<{ documentId: string }>;
}

async function DocumentIdPage({ params }: DocumentIdProps) {
  // console.log(params);

  const awaitedParams = await params;
  const documentId = awaitedParams.documentId;
  // console.log(documentId);

  return <div>DocumentIdPage:{documentId}</div>;
}

export default DocumentIdPage;
