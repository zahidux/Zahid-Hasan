import { useQuery } from "@tanstack/react-query";

const useProjectData = () => {
  const {
    data: projectData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["projectData"],
    queryFn: async () => {
      const res = await fetch("/projects.json");
      const data = await res.json();
      return data;
    },
  });

  return [projectData, loading, refetch];
};

export default useProjectData;
