import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
interface IProps {
  onSubmitMy: (data: any) => void;
}

const Form = ({ onSubmitMy }: IProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => onSubmitMy(data);

  //   console.log(watch("example")); // watch input value by passing the name of it
  //   console.log("< >", register("My"));
  //   console.log("< >", { ...register("My2") });

  const atr = (idValue: string) => ({
    id: idValue,
    defaultValue: "test4",
    "data-attr": "123",
  });

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <p>
        <label htmlFor="example">example</label>
      </p>
      <p>
        <input {...atr("xxx")} {...register("name", { required: true })} />
      </p>
      {/* include validation with required or other standard HTML validation rules */}
      <p>
        <label htmlFor="exampleRequired">label 1</label>
      </p>
      <p>
        <input {...register("checkbox")} type="checkbox" />
      </p>
      {/* errors will return when field validation fails  */}
      {errors.name && <span>Name field is required</span>}
      <p>
        <input type="submit" />
      </p>
    </form>
  );
};

export default Form;
