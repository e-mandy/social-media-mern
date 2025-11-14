import { Mail, User, Lock } from 'lucide-react';
import { useForm} from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, type RegisterUser } from '../schemas';

const Register = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterUser>({
    resolver: zodResolver(RegisterSchema)
  })

  const onSubmit: SubmitHandler<RegisterUser> = (data) => {
    console.log(data)

    reset()
  }

  return (
    <div>
        <div className="bg-auth-primary h-screen w-screen flex">
          <div className="flex flex-col items-center my-auto w-full">
            <h1 className="text-2xl font-semibold">Welcome in the experience</h1>
            <p className="text-secondary mt-1 mb-6">Already have an account ? <a className="text-blue-400">Sign in</a></p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] md:w-[450px]">

              <div className="mb-4">
                <label className="input-class bg-black">
                  <User color="gray" />
                  <input type="text" className="outline-none w-full" placeholder="Your pseudo" {...register('pseudo')} />
                </label>
                {errors.pseudo?.message && (<span>{errors.pseudo.message}</span>)}
              </div>

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

              <div className="mb-4">
                <label className="input-class bg-black">
                  <Lock color="gray" />
                  <input type="password" className="outline-none w-full" placeholder="Secret Password" {...register('password_confirmation')} />
                  {errors.password_confirmation?.message && (<span>{errors.password_confirmation.message}</span>)}
                </label>
              </div>

              <button className="button-class bg-blue-600 w-full mt-2 cursor-pointer" type="submit">S'inscrire</button>
            </form>

          </div>
        </div>
    </div>
  )
}

export default Register
