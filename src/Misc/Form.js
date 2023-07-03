import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
function Form(){
     const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is empty"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null],"Passwords don't match").required(),
     });

     const { register, handleSubmit, formState:{errors} } = useForm({
        
        resolver: yupResolver(schema),
     });
     const onSubmit = (data)=>{
        console.log(data);
     };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/><br/>
            <input type="text" placeholder="Email..." {...register("email")}/><br/>
            <input type="number" placeholder="Age..." {...register("age")}/><br/>
            <input type="password" placeholder="Password..." {...register("password")}/><br/>
            <input type="password" placeholder="Confirm Password..." {...register("confirmpassword")}/><br/>     
            <input type="submit"/>
        </form>
    );
};

export default Form;