import { CircleEllipsis, ChevronDown } from "lucide-react"
import profile_photo from '../assets/images/profile/profile_logo.jpeg'

const Profile = () => {
  return (
    <div className='h-screen'>
      <div className="max-w-screen h-2/7 relative bg-[url('assets/images/profile/banner.jpeg')] bg-center">
        <div className='w-full px-3 absolute flex justify-between top-6'>
            <div className="flex gap-2">
                <p className="text-white!">John Doe</p>
                <ChevronDown color="white" />
            </div>
            <CircleEllipsis />
        </div>
      </div>
      <div className="relative">
        <div className="w-2/7 rounded-[50%] overflow-hidden border-2 border-blue-600 absolute translate-y-[-40%] left-2">
            <img src={profile_photo} alt="" />
        </div>
        <div className="flex justify-end pt-5 mr-4 gap-7 text-center profile-stats">
            <div>
                <h5>200</h5>
                <p>Post</p>
            </div>

            <div>
                <h5>100k</h5>
                <p>Followers</p>
            </div>

            <div>
                <h5>100</h5>
                <p>Following</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
