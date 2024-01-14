import { useState } from "react";

export function useMutator(url, method, mutatorData) {
  
  const [status, setStatus] = useState();
  const onSubmit = async () => {
    try {
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mutatorData),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      setStatus(response.status);

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return { onSubmit, status };
}
