import { Mail, User, Lock } from 'lucide-react';
import { useForm} from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, type RegisterUser } from '../schemas';
import { useRegister } from '../api/useRegister'
import Spinner from '../../../components/Spinner';
import { notify } from '../../../utils/notify';
import { useNavigate, Link } from 'react-router';

const Register = () => {

  const { mutate, isPending } = useRegister();

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterUser>({
    resolver: zodResolver(RegisterSchema),

    defaultValues: {
      pseudo: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  })

  const onSubmit: SubmitHandler<RegisterUser> = async (data) => {
    mutate(data, {
      onSuccess: () => {
        notify({ type: "success", message: "Created user successfully"})
        navigate("/login")
      }
    })
    reset()

  }

  return (

    <div>
      <div className="bg-auth-primary h-screen w-screen flex">
        <div className="flex flex-col items-center my-auto w-full">
          <h1 className="text-2xl font-semibold">Welcome in the experience</h1>
          <p className="text-secondary mt-1 mb-6">Already have an account ? <Link to="/login" className="text-blue-400">Sign in</Link></p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] md:w-[450px]">

            <div className="mb-4">
              <label className="input-class bg-black" htmlFor='pseudo'>
                <User color="gray" />
                <input type="text" className="outline-none w-full" placeholder="Your pseudo" {...register('pseudo')} id='pseudo' />
              </label>
              {errors.pseudo?.message && (<span>{errors.pseudo.message}</span>)}
            </div>

            <div className="mb-4">
              <label className="input-class bg-black" htmlFor='email'>
                <Mail color="gray" />
                <input type="email" className="outline-none w-full" placeholder="Email Address" {...register('email')} id='email' />
              </label>
                {errors.email?.message && (<span>{errors.email.message}</span>)}
            </div>

            <div className="mb-4">
              <label className="input-class bg-black" htmlFor='password'>
                <Lock color="gray" />
                <input type="password" className="outline-none w-full" placeholder="Secret Password" {...register('password')} id='password' />
              </label>
                {errors.password?.message && (<span>{errors.password.message}</span>)}
            </div>

            <div className="mb-4">
              <label className="input-class bg-black" htmlFor='password_confirmation'>
                <Lock color="gray" />
                <input type="password" className="outline-none w-full" placeholder="Secret Password" {...register('password_confirmation')} id='password_confirmation' />
              </label>
                {errors.password_confirmation?.message && (<span>{errors.password_confirmation.message}</span>)}
            </div>

            <button className="button-class bg-blue-600 w-full mt-2 cursor-pointer flex items-center justify-center gap-4" type="submit">
              <span>S'inscrire</span>
              {isPending && <Spinner height='20' width='20' visible={true} />}
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Register
