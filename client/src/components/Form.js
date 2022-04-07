import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form(props) {
  const event = async (data) => {
   // data.date = Date.now();
    props.setBooks((prev) => [...prev, data])
    const response = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
    
    reset({ title: "", author: "" });
  };

  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(event)}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        <input
          type="text"
          placeholder="author"
          {...register("author", { required: true })}
        />
        <input
          type="datetime-local"
          placeholder="date"
          {...register("date", { required: true })}
        />
        <button>S</button>
      </form>
    </>
  );
}
