import api from "@/lib/axiosInstance";

const fetchClients = async() => api.get('/clients/client_name');

export   {
  fetchClients,
};