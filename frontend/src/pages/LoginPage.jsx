import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Link } from 'react-router-dom';
import {  EyeOff, Mail, MessageSquare, Lock, Eye, Loader } from 'lucide-react';
import AuthImagePattern from '../components/AuthImagePattern ';


const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };


  return (

    <div className="h-screen grid lg: grid-cols-2">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">

          {/* LOGO */}

          <div className="text-center mb-8">


            </div>
          

          <form onSubmit={handleSubmit} className="space-y-6">


            <div className="form-control">

              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>

              <div className="relative">


                <div className="absolute inset-y-0 left-3 pl-1 flex items-center pointer-events-none z-1">
                  <Mail className="size-5 text-base-content/40  " />
                </div>

                <input type="email"
                  className="input input-bordered w-full pl-10"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setformData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>


            <div className="form-control">

              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <div className="relative">


                <div className="absolute inset-y-0 left-3 pl-1 flex items-center pointer-events-none z-1">
                  <Lock className="size-5 text-base-content/40  " />
                </div>

                <input type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) => setformData({ ...formData, password: e.target.value })}
                />
                <button type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}

                </button>
              </div>
            </div>

            <button type="submit"
              className="btn btn-primary w-full"
              disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Login"
              )}

            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE OF THE PAGE */}

      <AuthImagePattern
        title="Join our Community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />



    </div>
  )
};

export default LoginPage
