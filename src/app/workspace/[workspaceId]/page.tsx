"use client";

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkSpaceId = () => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workspaceId });
  return (
    <div>
      <h1>Workspace Id</h1>
      <p>{workspaceId}</p>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

export default WorkSpaceId;
