import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full p-6 bg-indigo-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
                <h1 className="text-3xl font-semibold text-center text-green-500 m-auto">Login
                    <span className="text-white"> Tweet</span>
                </h1>
                <form >
                    <div>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                           
                            <input type="password" className="grow" placeholder="password" />
                        </label>
                    </div>
                    <Link  to="/Signup" className="text-sm  hover:underline hover:text-white mt-2 inline-block">
                        Don't have an account? 
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;