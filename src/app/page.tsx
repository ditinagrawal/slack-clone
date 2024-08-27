"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

const Page = () => {
  const { signOut } = useAuthActions();
  return (
    <div className="h-full">
      Root Page
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default Page;
