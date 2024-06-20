"use client";
import useFetch from "@/app/hooks/useFetch";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataForm from "../components/DataForm";
import DataTable from "../components/DataTable";
import { SERVICES_API_URL } from "@/app/config/apiConstants";

const Services = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    secid: 1, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SERVICES_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      const data = await response.json();
      toast.success(data.message);
      setFormData({
        name: "",
        secid: 1 ,
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Please Try One more time")
    }
  };

  const { data: services } = useFetch(SERVICES_API_URL);
  return (
    <>
      <ToastContainer />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-3">
        <div className="h-[200px]">
          <DataForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <DataTable data={services} path={`${SERVICES_API_URL}`} />
      </div>
    </>
  );
};

export default Services;
