import { useForm } from "react-hook-form";
import { Form } from "../../components/Form.js";
import { Input } from "../../components/Input.js";
import { Button } from "../../components/Button.js";

import { useState } from "react";

export function UseMutatorUser({ handleUpdateData }) {
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState(null);

  const onSubmit = async (formData) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch("http://localhost:3000/categories", options);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      setStatus(response.status);

      await response.json();

      if (response.status === 200) {
        handleUpdateData({ name: formData.name });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", { required: true })}
          placeholder="Category Name..."
        />
        <Button type="submit">Guardar</Button>
      </Form>
      {status && <h1>Status: {status}</h1>}
    </section>
  );
}
