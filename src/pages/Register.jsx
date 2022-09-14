import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const data1 = {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
          password: data.password
        }
          console.log(data1)
          axios
        .post("http://localhost:3001/api/user/register", data1, {withCredentials:true})
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
      <div className="columns">
        <div className="column">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" name="name" {...register("name")}/>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" name="lastname" {...register("lastname")}/>
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="e.g. alex@example.com"
            name="email"
            {...register("email")}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" placeholder="********" name="password" {...register("password")}/>
        </div>
      </div>

      <button className="button is-primary">Sign up</button>
    </form>
  );
};

export default Register;
