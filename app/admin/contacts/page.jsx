import React from "react";
import DeleteBlock from "@/app/components/DeleteBlock";
import { CONTACTS_API_URL } from "@/app/config/constants";

const getData = async () => {
  const API_URL = process.env.API_URL;
  try {
    const res = await fetch(`${API_URL}${CONTACTS_API_URL}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const ContactsPage = async () => {
  const data = await getData();
  if (!data.data) {
    return <p>No data send.</p>;
  }

  const contactData = data.data;

  return (
    <div className="p-5">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>message</th>
                <th>delete</th>
              </tr>
            </thead>
            {contactData.map((data) => (
              <tbody key={data.id}>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                  <td>
                    <DeleteBlock path="Contacts" id={data._id} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;