import "../../index.css";
import Input from '../Components/Input'

const Register = () => {
  return (
    <div>
        <div className="bg-auth-primary h-screen w-screen">
          <div className="flex flex-col items-center">
            <h1>Welcome in the experience</h1>
            <p>Already have an account ?<a href="">Sign in</a></p>
            <Input />
          </div>
        </div>
    </div>
  )
}

export default Register
