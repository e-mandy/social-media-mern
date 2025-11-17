import { Mail, Lock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import type { LoginUser } from '../schemas/index'
import { Link } from 'react-router'

const Login = () => {

    const { register, formState: { errors } } = useForm<LoginUser>()

  return (
    <div>
        <div className="bg-auth-primary h-screen w-screen flex">
          <div className="flex flex-col items-center my-auto w-full">
            <h1 className="text-2xl font-semibold">Welcome in the experience</h1>
            <p className="text-secondary mt-1 mb-6">Already have an account ? <Link to="/register" className="text-blue-400">Sign up</Link></p>
            <form className="w-[85%] md:w-[450px]">

              <div className="mb-4">
                <label className="input-class bg-black">
                  <Mail color="gray" />
                  <input type="email" className="outline-none w-full" placeholder="Email Address" {...register('email')} />
                </label>
                  {errors.email?.message && (<span>{errors.email.message}</span>)}
              </div>

              <div className="mb-4">
                <label className="input-class bg-black">
                  <Lock color="gray" />
                  <input type="password" className="outline-none w-full" placeholder="Secret Password" {...register('password')} />
                </label>
                  {errors.password?.message && (<span>{errors.password.message}</span>)}
              </div>

              <button className="button-class bg-blue-600 w-full mt-2 cursor-pointer flex items-center justify-center gap-4" type="submit">
                <span>S'inscrire</span>
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login
