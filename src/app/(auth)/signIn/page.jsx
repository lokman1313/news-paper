"use client"
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SingInPage = () => {

  const [toggolpass,setToggolPass]=useState(false)

  const {register,handleSubmit,formState: { errors }}=useForm();
   
    const handelLoginForm =async (formData)=>{
    const {email,password}=formData;
     const { data, error } = await authClient.signIn.email({
    email: email, 
    password: password,
    rememberMe: true,  
    callbackURL: '/',
});
if(error){
    alert(error.message)
   }
   if(data){
    alert("Login Successfully")
    redirect('/')
   }
    }
    return (
         <div className="container mx-auto min-h-[80vh] flex justify-center items-center mt-8 bg-slate-100">
      <div className="p-4 rounded-xl bg-white mt-8">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handelLoginForm)} >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email",{ required: "Email is required" })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={toggolpass ? "text" : "password"}
              className="input"
              placeholder="Type here password"
              {...register("password",{ required:"Password is required" })}
            />
            <span className="absolute top-4.5 right-3" onClick={()=> setToggolPass(!toggolpass)}>
              {toggolpass? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}  
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white" >Login</button>
        </form>

        <p className="mt-4">
          Dont have an account?{" "}
          <Link href={"/signUp"} className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};

export default SingInPage;