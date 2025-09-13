import axios from "axios";

const API_BASE = "http://localhost:5000/api/appraiser";

// Stats
export const getAppraiserStats = async () => {
  const res = await axios.get(`${API_BASE}/stats`);
  return res.data;
};

// Requests
export const getAppraiserRequests = async () => {
  const res = await axios.get(`${API_BASE}/requests`);
  return res.data;
};

export const getRequestDetail = async (id) => {
  const res = await axios.get(`${API_BASE}/requests/${id}`);
  return res.data;
};

export const saveReport = async (requestId, notes, images) => {
  const formData = new FormData();
  formData.append("notes", notes);
  Array.from(images).forEach((file) => formData.append("images", file));
  const res = await axios.post(`${API_BASE}/requests/${requestId}/report`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

// Reports
export const getAppraiserReports = async () => {
  const res = await axios.get(`${API_BASE}/reports`);
  return res.data;
};
