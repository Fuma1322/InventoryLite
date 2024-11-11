import { ErrorMessage, Field, Formik } from "formik"
import * as yup from "yup"
import { Button } from "primereact/button"
import { Link, useNavigate } from "react-router-dom"
import { useLoginUserMutation } from "../provider/queries/Auth.query"

function Login() {
    const [LoginUser, LoginUserResponse] = useLoginUserMutation()
    const navigate = useNavigate();
    type User = {
        email: string,
        password: string
    }

    const initialValues: User = {
        email: '',
        password: ''
    }

    const validationSchema = yup.object({
        email: yup.string().email("email must be valid").required("email is required"),
        password: yup.string().min(5, "Password must be greater than 5 characters").required("password is required"),
    })

    const OnSubmitHandler = async (e: User, {resetForm}: any) => {
        // console.log({e});
        try {
            const{ data, error}: any = await LoginUser(e)
            if (error) {
                console.log(error.data.message);
                return
            }

            // console.log(data,error)

            localStorage.setItem("token",data.token)

           resetForm()
           navigate("/")
        } catch (error:any) {
            console.log(error.message)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-[#eee]">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={OnSubmitHandler} >
            {({handleSubmit}) => (
                <>
                    <form onSubmit={handleSubmit} className="w-[96%] md:w-[70%] shadow-md lg:w-1/3 rounded-md pt-10 pb-3 px-4 bg-white">
                        <div className="mb-3 py-2">
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" className="w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg" placeholder="Enter Email Address" />
                            <ErrorMessage component={'p'} className="text-red-500 text-sm" name="email" />
                        </div>
                        <div className="mb-3 py-2">
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" className="w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded-lg" placeholder="*******" />
                            <ErrorMessage component={'p'} className="text-red-500 text-sm" name="password" />
                        </div>
                        <div className="mb-3 py-2">
                            <Button loading={LoginUserResponse.isLoading} type="submit" className="w-full bg-red-500 text-white py-3 px-2 flex items-center justify-center">
                                Submit
                            </Button>
                        </div>
                        <div className="mb-3 py-2">
                            <p className="inline-flex items-center gap-x-1">Dont have an account?
                                <Link className="font-semibold" to={"/register"}>Register</Link>
                            </p>
                        </div>
                        <div className="mb-3 py-2">
                            <p className="inline-flex items-center gap-x-1">Forgot
                                <Link className="font-semibold" to={"#"}>Password ?</Link>
                            </p>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    </div>
  )
}

export default Login