import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";


export const BUTTONS={
    OPTIONS:{
        PROFILE:{title:"profile",icon:<FaUser  />},
        CALLING:{title:"calling",icon:<IoCall size={25} />},
        ROOMS:{title:"rooms",icon:<FaUsers size={25} />},
        MESSAGES:{title:"messages",icon:<FaFacebookMessenger size={25} />},
        FEED:{title:"feed",icon:<MdRssFeed  size={25} />},
        SETTING:{title:"setting",icon:<IoSettings />},
        LOGOUT:{title:"log out",icon:<IoMdLogOut />},
    }
}

