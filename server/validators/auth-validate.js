import {z} from "zod";

// creating an object schema

const signupSchema= z.object({

username : z
.string({required_error: "name is required"})
.trim()
.min(3,{message:"name must be at least 3 characters "})
.max(255,{message: "mane must not be more than 255 characters"}),

email: z
.string({required_error: "email is required"})
.trim()
.email({message: "Invalid email address"})
.min(3,{message:"email must be at least 3 characters "})
.max(255,{message: "email must not be more than 255 characters"}),

phone: z
.string({required_error: "phone number is required"})
.trim()
.min(10,{message:"phone number must be at least 10 characters "})
.max(20,{message: "phone number must not be more than 20 characters"}),

password: z
.string({required_error: "password is required"})
.trim()
.min(6,{message:"password must be at least 6 characters "})
.max(100,{message: "password must not be more than 100 characters"}),

})


let signinSchema = z.object({
    email: z
.string({required_error: "email is required"})
.trim()
.email({message: "Invalid email address"})
.min(3,{message:"email must be at least 3 characters "})
.max(255,{message: "email must not be more than 255 characters"}),

password: z
.string({required_error: "password is required"})
.trim()
.min(6,{message:"password must be at least 6 characters "})
.max(100,{message: "password must not be more than 100 characters"}),
})

export default signupSchema;

export {signinSchema};