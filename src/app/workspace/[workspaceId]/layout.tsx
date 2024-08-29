"use client";

import { Toolbar } from "./toolbar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkSpaceLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkSpaceLayout;
