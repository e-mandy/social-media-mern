import "../../index.css";
import { Mail, User, Lock } from 'lucide-react'

const Register = () => {
  return (
    <div>
        <div className="bg-auth-primary h-screen w-screen">
          <div className="flex flex-col items-center">
            <h1>Welcome in the experience</h1>
            <p>Already have an account ?<a href="">Sign in</a></p>
            <form>
              <div>
                <label htmlFor="pseudo">
                    <User />
                  <input type="text" placeholder="Your pseudo" id="pseudo" />
                </label>
              </div>
              <div>
                <label htmlFor="email">
                    <Mail />
                  <input type="email" placeholder="Email adress" id="email" />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <Lock />
                  <input type="password" id="password" placeholder="Your secret password" />
                </label>
              </div>

              <button type="submit">S'inscrire</button>
            </form>

          </div>
        </div>
    </div>
  )
}

export default Register
