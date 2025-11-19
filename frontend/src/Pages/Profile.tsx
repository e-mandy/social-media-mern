import { CircleEllipsis, ChevronLeft, Pencil, Share2 } from "lucide-react"
import profile_photo from '../assets/images/profile/profile_logo.jpeg'
import ProfileStats from "../features/Profile/Stats/ProfileStats"

const Profile = () => {
  return (
    <div className='h-screen'>
      <div className="max-w-screen h-2/7 relative bg-[url('assets/images/profile/profile_banner.jpeg')] bg-center">
        <div className='w-full pl-1 pr-2 absolute flex justify-between top-6'>
            <div className="flex px-4 rounded-xl">
                <ChevronLeft color="white" />
            </div>
            <div className="flex px-4 rounded-xl">
                <CircleEllipsis color="white" />
            </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-2/7 rounded-[50%] overflow-hidden border-2 border-blue-600 absolute translate-y-[-40%] left-2">
            <img src={profile_photo} alt="" />
        </div>
        <ProfileStats />

        <div className="text-white flex w-full justify-between px-3">
          <button className="flex gap-2 profile-action">
            <Pencil />
            Edit the profile
          </button>
          <button className="flex gap-2 profile-action">
            <Share2 />
            Partager le profil
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
