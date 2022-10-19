import { useEffect, useState } from "react";
import SideBar from "../sidebar";
import axios from "axios";
import { showLoading, hideLoading } from "../universal/loading";

// export const showLoading = () => {
//     var mainLoader = document.getElementById("mainLoaderElement");
//     if (mainLoader != null) {
//         mainLoader.classList.remove("d-none");
//     }
// }

// export const hideLoading = () => {
//     var mainLoader = document.getElementById("mainLoaderElement");
//     if (mainLoader != null) {
//         mainLoader.classList.add("d-none");
//     }
// }




const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [change , setChange] = useState('')

    useEffect(() => {
        const id = localStorage.getItem("details")
        if (id) {
            axios.post('http://localhost:5000/theme/details', { id })
                .then((data) => {
                    setName(data.data.name)
                    setEmail(data.data.email)
                    setPassword(data.data.password)
                })

                .catch((err) => { console.log(err) })
        }

    },[change])



    const handleName = ((e) => {
        setName(e.target.value)
    })

    const handleEmail = ((e) => {
        setEmail(e.target.value)
    })

    const handlePassword = ((e) => {
        setPassword(e.target.value)
    })

    const submit = ((e) => {
        e.preventDefault()
        showLoading()
        const id = localStorage.getItem("details")
        console.log('wed');
        axios.post('http://localhost:5000/theme/update', { 
            name,
            email,
            password,
            id
         })
            .then((data) => { setChange(data.data) })
            .catch((err)=> {console.log(err)})
            hideLoading()
    })


    return (<>
        {/* {
        SideBar()
    } */}
        {/* <nav id="sidebarMenu" classNameName="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
  <div classNameName="sidebar-inner px-4 pt-3">
    <div classNameName="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        </div>
        </div>
        </nav> */}

        {/* <main classNameName="content">
<nav>
        <div>
            
            <h2>Profile page</h2>
            <form>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input id="Name" type="text" defaultValue="Gagan"></input>
                </div>
                <div>
                    <label htmlFor="Name">Gender</label>
                    <input id="Name" type="text" defaultValue="Male"></input>
                </div>
                <div>
                    <button type="submit" >submit</button>
                </div>

            </form>
        </div>
        </nav>
        </main> */}


        <main className="content">
            {/* <div className="row">
                <div className="col-12 col-xl-8"> */}

            <div className="row">
                <div className="col-1 col-xl-12">
                    <div className="card card-body border-0 shadow mb-4">
                        <h2 className="h5 mb-4">General information</h2>
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div>
                                        <label htmlFor="first_name">Name</label>
                                        <input className="form-control" defaultValue={name} id="first_name" type="text" onChange={(e) => handleName(e)} placeholder="Enter your  name" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input className="form-control" id="email" defaultValue={email} onChange={(e) => handleEmail(e)} type="email" placeholder="name@company.com" required />
                                    </div>
                                </div>
                            </div>
                            <h2 className="h5 my-4"></h2>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <label fohtmlforr="address">password</label>
                                        <input className="form-control" id="address" defaultValue={password} onChange={(e) => handlePassword(e)} type="text" placeholder="Enter your password" required />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit">Save all</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* </div>
            </div> */}
        </main>
    </>)
}

export default Profile