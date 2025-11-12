import "../../index.css";
import { Mail, User, Lock } from 'lucide-react'

const Register = () => {
  return (
    <div>
        <div className="bg-auth-primary h-screen w-screen flex">
          <div className="flex flex-col items-center my-auto w-full">
            <h1 className="text-2xl font-semibold">Welcome in the experience</h1>
            <p className="text-secondary mt-1 mb-6">Already have an account ? <a className="text-blue-400" href="">Sign in</a></p>
            <form className="w-[85%]">

              <div>
                <label className="input-class bg-black" htmlFor="pseudo">
                  <User color="gray" />
                  <input type="text" className="outline-none" placeholder="Your pseudo" id="pseudo" />
                </label>
              </div>

              <div>
                <label className="input-class bg-black" htmlFor="email">
                  <Mail color="gray" />
                  <input type="email" className="outline-none" placeholder="Email Address" id="email" />
                </label>
              </div>

              <div>
                <label className="input-class bg-black" htmlFor="pseudo">
                  <Lock color="gray" />
                  <input type="password" className="outline-none" placeholder="Secret Password" id="pseudo" />
                </label>
              </div>

              <div>
                <label className="input-class bg-black" htmlFor="pseudo">
                  <Lock color="gray" />
                  <input type="password" className="outline-none" placeholder="Secret Password" id="password_confirmation" />
                </label>
              </div>

              <button className="button-class bg-blue-600 w-full mt-2" type="submit">S'inscrire</button>
            </form>

          </div>
        </div>
    </div>
  )
}

export default Register
