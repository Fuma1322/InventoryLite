import { ErrorMessage, Field, Formik } from 'formik';
import { Calendar } from 'primereact/calendar';
import { Dialog } from 'primereact/dialog';
import { toast } from 'sonner';
import * as yup from "yup"

const Model = ({visible, setVisible}: any) => {

    const validationSchema = yup.object({
        name: yup.string().required("Name must be valid"),
        email: yup.string().email("Email must be valid").required("Email is required"),
        mobile: yup.string().required("Mobile is required"),
        address: yup.string().required("Address is required"),
        dob: yup.string().required("Date Of Birth is required"),
    })

    const initialValues = {
        name: '',
        email: '',
        mobile: '',
        address: '',
        dob: new Date() 
    }

    const OnSubmitHandler = async (e:any, {resetForm}: any) => {
        try {
            console.log(e)
            toast.success("Consumer Added Successfully")
            resetForm()
            setVisible(false)
        } catch (error) {
            toast.error(e.message)
        }
    }

  return (
    <>
            <Dialog header="Add User" className='w-full md:w-[70%] lg:w-1/2' visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={OnSubmitHandler}>
                    {({values, setFieldValue, handleSubmit}) => (
                        <>
                            <form onSubmit={handleSubmit} className='w-full'>
                                <div className="mb-3">
                                    <label htmlFor='name'>
                                        Name <span className='text-red-500 text-sm'>*</span>
                                    </label>
                                    <Field id="name" name="name" type="text" className="w-full outline-none my-2 border py-3 px-4 " placeholder="Enter Consumer Name" />
                                    <ErrorMessage component={'p'} className="text-red-500 text-sm" name="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='email'>
                                        Email <span className='text-red-500 text-sm'>*</span>
                                    </label>
                                    <Field id="email" name="email" type="text" className="w-full outline-none my-2 border py-3 px-4 " placeholder="Enter Consumer Email" />
                                    <ErrorMessage component={'p'} className="text-red-500 text-sm" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='mobile'>
                                        Mobile Number <span className='text-red-500 text-sm'>*</span>
                                    </label>
                                    <Field id="mobile" name="mobile" type="text" className="w-full outline-none my-2 border py-3 px-4 " placeholder="Enter Consumer Mobile" />
                                    <ErrorMessage component={'p'} className="text-red-500 text-sm" name="mobile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='dob'>
                                        Date Of Birth <span className='text-red-500 text-sm'>*</span>
                                    </label>
                                    <Calendar maxDate={new Date()} value={values.dob} dateFormat='dd/mm/yy' onChange={(e) => {setFieldValue('dob', e.value)}} inputClassName='outline-none ring-0' className="w-full outline-none my-2 border py-3 px-4 ring-0 " placeholder="Enter Consumer DOB" />
                                    <ErrorMessage component={'p'} className="text-red-500 text-sm" name="dob" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor='address'>
                                        Address <span className='text-red-500 text-sm'>*</span>
                                    </label>
                                    <Field as="textarea" rows={3} id="address" type="text" name="address" className="w-full outline-none my-2 border py-3 px-4 " placeholder="Enter Consumer Address" />
                                    <ErrorMessage component={'p'} className="text-red-500 text-sm" name="address" />
                                </div>
                                <div className="flex justify-end">
                                    <button className='text-white px-5 rounded-sm bg-teal-500 py-3 text-center'>
                                        Add Consumer
                                    </button>
                                </div>   
                            </form>
                        </>
                    )}

                </Formik>
            </Dialog> 
    </>
  )
}

export default Model