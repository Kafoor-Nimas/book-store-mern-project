import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getBaseUrl from "../../utils/baseURL";

const DashboardLayout = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${getBaseUrl()}/api/admin`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
  }, []);
  if (loading) return
  return <div>DashboardLayout</div>;
};

export default DashboardLayout;
