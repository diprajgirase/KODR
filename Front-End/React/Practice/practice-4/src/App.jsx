import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text" 
        placeholder="Name" 
        {...register("name", { required: true })}
      />
      {errors.name && <p>Name is required</p>}

      <input 
        type="email" 
        placeholder="Email" 
        {...register("email", { required: true })}
      />
      {errors.email && <p>Email is required</p>}

      <input 
        type="number" 
        placeholder="Mobile" 
        {...register("mobile", { required: true })}
      />
      {errors.mobile && <p>Mobile is required</p>}

      <input type="submit" />
    </form>
  );
}

export default App;
