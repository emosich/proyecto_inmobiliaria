import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login2 = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const data1 = {
            email: data.email,
          password: data.password
        }
          console.log(data1)
          axios
        .post("http://localhost:3001/api/user/login", data1, {withCredentials:true})
        .then(({ data }) => {
          if (!data.error) {
            console.log("success");
  
          } else {
            console.log("error");
          }
        })
        .catch(() => console.log("/404"));

    }
  

  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            name="email"
            className="input"
            type="email"
            placeholder="e.g. alex@example.com"
            {...register("email")}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="********" name="password"
          {...register("password", { required: true })}/>
        </div>
      </div>

      <button className="button is-primary">Sign in</button>
    </form>
  );
};

export default Login2;
