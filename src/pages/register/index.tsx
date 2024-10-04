import { Formik, Form, Field, FormikProps } from "formik";
import Schema from "../../schema/register.schema";
import axios from "axios";
import IUser from "../../interfaces/user.interface";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const postUser = async (params: IUser) => {
    try {
      await axios.post("https://66fd3c26c3a184a84d199414.mockapi.io/api/v1/users", {
        name: params.name,
        email: params.email,
        password: params.password,
      });
      toast.success("User registered successfully!", {
        onClose: () => {
          navigate("/");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          id: 0,
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={(values) => {
          console.log(values);
          postUser(values);
        }}
      >
        {(props: FormikProps<IUser>) => {
          const { values, errors, touched, handleChange } = props;

          return (
            <div>
              <div>
                <ToastContainer position="top-right" autoClose={2000} theme="dark" />
                <Form className="bg-sky-200">
                  <div className="mb-4">
                    <h1 className="text-[2em] font-light">Page Register</h1>
                  </div>

                  <div className="mb-4 m-8">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-left">
                      Name
                    </label>
                    <Field className="border rounded w-full bg-transparent h-[3em] p-2 bg-white" type="text" name="name" onChange={handleChange} value={values.name} />
                    {touched.name && errors.name ? <div className="text-left text-red-500 text-sm mt-1">{errors.name}</div> : null}
                  </div>

                  <div className="mb-4 m-8">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-left">
                      Email
                    </label>
                    <Field className="border rounded w-full bg-transparent h-[3em] p-2 bg-white" type="text" name="email" onChange={handleChange} value={values.email} />
                    {touched.email && errors.email ? <div className="text-left text-red-500 text-sm mt-1">{errors.email}</div> : null}
                  </div>

                  <div className="mb-4 m-8">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2 text-left">
                      Password
                    </label>
                    <Field className="border rounded w-full bg-transparent h-[3em] p-2 bg-white" type="password" name="password" onChange={handleChange} value={values.password} />
                    {touched.password && errors.password ? <div className="text-left text-red-500 text-sm mt-1">{errors.password}</div> : null}
                  </div>

                  <button type="submit" className="bg-teal-500 h-[3em] text-white w-3/12 m-8 p-2 hover:font-bold rounded-lg hover:bg-teal-600 transition">
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Register;