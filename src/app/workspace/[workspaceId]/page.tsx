interface WorkSpaceIdProps {
  params: {
    workspaceId: string;
  };
}

const WorkSpaceId = ({ params }: WorkSpaceIdProps) => {
  return (
    <div>
      <h1>Workspace Id</h1>
      <p>{params.workspaceId}</p>
    </div>
  );
};

export default WorkSpaceId;
