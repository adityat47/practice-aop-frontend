import api from "@/lib/axiosInstance";

export type ClientRef = {
  id: string | number;
  client_name: string;
};

export type Project = {
  id: string | number;
  project_name: string;
  // add other fields if your API returns them
};

// ✅ Fetch all clients
export const fetchClients = async (): Promise<ClientRef[]> => {
  const res = await api.get("/clients/client_name");

  // Adjust depending on API response shape
  return res.data?.data ?? res.data ?? [];
};

// ✅ Fetch All Projects
export const fetchProjects = async (
  clientId: string | number
): Promise<Project[]> => {
  if (!clientId) throw new Error("clientId is required");

  const res = await api.get("/clients/", {
    params: { client_id: clientId },
  });
  return res
};

//to fetch projects by client id
export const fetchProjectsByClient = async (
  clientId: string | number
): Promise<Project[]> => {
  if (!clientId) throw new Error("clientId is required");

  const res = await api.get("/clients/project", {
    params: { client_id: clientId },
  });
console.log(`🔹 Projects API Response for client ${clientId}:`, res.data);
  // Adjust depending on API response shape
  return res.data?.data ?? res.data ?? [];
};
