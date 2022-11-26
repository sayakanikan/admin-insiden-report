import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post("http://127.0.0.1:8000/api/auth/login", {
        username: username,
        password: password,
      })
      .then((data) => {
        setIsLoading(false);
        // console.log(data);
        if (!data.data.role) {
          setError("Anda bukan admin!");
          navigate("/");
        } else {
          localStorage.setItem("jwt", data.data.access_token);
          if (data.data.status === 200) {
            navigate("/dashboard");
          }
        }
      })
      .catch(() => {
        setError("Username / Password salah");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="flex min-h-screen bg-blue-300">
      <div className="p-7 w-72 max-w-xl bg-white rounded-xl border border-gray-200 shadow-xl sm:p-6 md:p-8 md:w-1/3 lg:w-1/3 m-auto relative">
        <h5 className="mb-10 mt-4 text-center text-2xl font-bold tracking-tight text-gray-900">Login</h5>
        <ErrorMessage error={error} />
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block mb-2 text-xs md:text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Masukan Username"
              value={username}
              minLength="5"
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 :text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Masukan Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={password}
              minLength="5"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          {isLoading ? (
            <button
              disabled
              type="button"
              className="w-full text-white bg-slate-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 drk:bg-gray-800 drk:text-gray-400 drk:border-gray-600 drk:hover:text-white drk:hover:bg-gray-700"
            >
              <svg role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin drk:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 drk:bg-gray-800 drk:text-gray-400 drk:border-gray-600 drk:hover:text-white drk:hover:bg-gray-700"
              disabled={isLoading}
            >
              Login
            </button>
          )}
          {/* Akhir dari button */}
        </form>
      </div>

      {/* Gelombang */}
      <div className="custom-shape-divider-bottom-1667369245">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      {/* Akhir dari gelombang */}
    </div>
  );
};

export default Login;
