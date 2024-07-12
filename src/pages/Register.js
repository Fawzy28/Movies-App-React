import { useRef, useState } from "react"




export default function () {

    const [formControl, setFormControl] = useState(
        {
            name: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: ""

        }
    )

    const [formErrorsControl, setFormErrorsControl] = useState(
        {
            name: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: ""

        }
    )


    //   for more dynamic
    const handleInputChanging = (e) => {
        for (const key in formControl) {
            if (e.target.name == key)
                 { setFormControl({ ...formControl, [e.target.name]: e.target.value }) }
        }  
        handleError(e.target.name, e.target.value)

        
        console.log(formControl)
        console.log(formErrorsControl)
    }

    const handleError = (key, value) => {
        switch (key) {
            case 'name':
                setFormErrorsControl({ ...formErrorsControl, name: value.length == 0 ? 'required' : "" })
                break;
            case 'email':
                setFormErrorsControl({ ...formErrorsControl, email: value.length == 0 ? 'required' : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ? "" : "please enter avalid email" })
                break;
            case 'userName':
                setFormErrorsControl({ ...formErrorsControl, userName: value.length == 0 ? 'required' : value.includes(" ") ? "Invalid Username" : "" })
                break;
            case 'password':
                setFormErrorsControl({ ...formErrorsControl, password: value.length == 0 ? 'required' : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/g.test(value) ? "" : "please enter avalid password" })
                break;
            case 'confirmPassword':
                setFormErrorsControl({ ...formErrorsControl, confirmPassword: (value === formControl.password) ? "" : "please try to enter your password again" })
                break;
            default:
                break;


        }
    }

//or 

    // const handleNameChanging = (e) => {
    //     setFormControl({ ...formControl, name: e.target.value })             //object can't have two properties of the same name
    //     setFormErrorsControl({ ...formErrorsControl, name: e.target.value.length == 0 ? 'required' : "" })
    // }

    // const handleEmailChanging = (e) => {
    //     setFormControl({ ...formControl, email: e.target.value })
    //     setFormErrorsControl({ ...formErrorsControl, email: e.target.value.length == 0 ? 'required' : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value) ? "" : "please enter avalid email" })
    // }

    // const handleUserNameChanging = (e) => {
    //     setFormControl({ ...formControl, userName: e.target.value })
    //     setFormErrorsControl({ ...formErrorsControl, userName: e.target.value.length == 0 ? 'required' : e.target.value.includes(" ") ? "Invalid Username" : "" })
    // }

    // const handlePasswordChanging = (e) => {
    //     setFormControl({ ...formControl, password: e.target.value })
    //     console.log(formControl)
    //     setFormErrorsControl({ ...formErrorsControl, password: e.target.value.length == 0 ? 'required' : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/g.test(e.target.value) ? "" : "please enter avalid password" })
    // }

    // const handleConfirmPasswordChanging = (e) => {
    //     setFormControl({ ...formControl, confirmPassword: e.target.value })
    //     setFormErrorsControl({ ...formErrorsControl, confirmPassword: e.target.value === formControl.password ? "" : "please try to enter your password again" })
    // }





    const nullValuesArr = Object.values(formControl).filter(element => { return (element == "") })
    const errorsArr = Object.values(formErrorsControl).filter(element => { return (element.length > 0) })











    return (
        <>
            <form className="container my-4" onSubmit={(e) => e.preventDefault()}  >
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="name"  onChange={(e)=>handleInputChanging(e)} />
                    {formErrorsControl.name && <p className="text-danger" >{formErrorsControl.name}</p>}
                </div>

                <div className="mb-3 my-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email"  onChange={(e)=>handleInputChanging(e)} />
                    {formErrorsControl.email && <p className="text-danger" >{formErrorsControl.email}</p>}
                </div>

                <div className="my-3">
                    <label for="inputUsername" className="form-label ">User Name</label>
                    <input type="text" id="inputUsername" className="form-control " name="userName"  onChange={(e)=>handleInputChanging(e)} />
                    {formErrorsControl.userName && <p className="text-danger" >{formErrorsControl.userName}</p>}
                    <div id="usernameHelpBlock" className="form-text">
                        it musn't contains any spaces
                    </div>
                </div>


                <div className="my-3">
                    <label for="inputPassword5" className="form-label ">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name="password"  onChange={(e)=>handleInputChanging(e)} />
                    {formErrorsControl.password && <p className="text-danger" >{formErrorsControl.password}</p>}
                    <div id="passwordHelpBlock" className="form-text ">
                        password length not less than 8
                        characters, contains at least one lowercase, one
                        uppercase, at least one digit and special character
                    </div>
                </div>


                <div className="my-3">
                    <label for="confirmPassword5" className="form-label ">Confirm Password</label>
                    <input type="password" id="confirmPassword" className="form-control" name="confirmPassword"  onChange={(e)=>handleInputChanging(e)} ></input>
                    {formErrorsControl.confirmPassword && <p className="text-danger" >{formErrorsControl.confirmPassword}</p>}
                    <div id="passwordHelpBlock" className="form-text ">
                        the two passwords must be identical
                    </div>
                </div>


                {(nullValuesArr.length > 0 || errorsArr.length > 0) ? <button disabled type="submit" className="btn btn-primary my-3">Submit</button> : <button type="submit" className="btn btn-primary my-3">Submit</button>}

            </form>
        </>

    )

}












