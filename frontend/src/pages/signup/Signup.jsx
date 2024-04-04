import { Link } from "react-router-dom";
import { Gendercheck } from "./Gendercheck";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";


const Signup = () => {
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        password: "",
        confirm: "",
        gender: "",
    });
    const {loading, signup} = useSignup();
    const handlecheckbox = (gender) => {
        setInputs({ ...inputs, gender });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);

    };
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full w-full p-6 bg-indigo-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
                <h1 className="text-3xl font-semibold text-center text-green-500 mb-2">SignUp
                    <span className="text-white"> Tweet</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                            <span >Fullname</span>
                            <input type="text" className="grow" placeholder="fullname"
                                value={inputs.fullname}
                                onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                            <span>Username</span>
                            <input type="text" className="grow" placeholder="username" value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                            <span>Password</span>

                            <input type="password" className="grow" placeholder="password" value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                        </label>
                        <label className="input input-bordered flex items-center gap-1.5 m-1 ">
                            <span>Confirm</span>

                            <input type="password" className="grow" placeholder="confirm password" value={inputs.confirm}
                                onChange={(e) => setInputs({ ...inputs, confirm: e.target.value })} />
                        </label>
                        <Gendercheck onChackBoxChange= {handlecheckbox} selectedGender={inputs.gender}/>
                    </div>
                    <Link to="/Login" className="text-sm  hover:underline hover:text-white mt-1 inline-block">
                        Already have an account?
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span>: "Signup"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;