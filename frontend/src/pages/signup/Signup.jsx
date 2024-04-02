import { Gendercheck } from "./Gendercheck";

const Signup = ()=>
{
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full p-6 bg-indigo-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
            <h1 className="text-3xl font-semibold text-center text-green-500 mb-2">SignUp
                    <span className="text-white"> Tweet</span>
                </h1>
                <form >
                    <div>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                            <span>Fullname</span>
                            <input type="text" className="grow" placeholder="Fullname" />
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                        <span>Username</span>
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                        <span>Password</span>
                           
                            <input type="password" className="grow" placeholder="password" />
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                        <span>Confirm</span>
                           
                            <input type="password" className="grow" placeholder="confirm password" />
                        </label>
                        <Gendercheck/>
                    </div>
                    <a href="#" className="text-sm  hover:underline hover:text-white mt-1 inline-block">
                        Already have an account? 
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">SignUP</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;