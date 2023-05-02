import {
    FiHome,
    FiTrendingUp,
    FiCompass,

} from 'react-icons/fi';
import {
    AiOutlineMail, AiOutlineLogout
} from 'react-icons/ai';
import {
    BsPeople
} from 'react-icons/bs';
import {
    RiVipCrown2Line
} from 'react-icons/ri';
import { TbCategory } from "react-icons/tb";

export const data = [
    {
        name: 'Memberships',
        route: 'memberships',
        icon: RiVipCrown2Line
    },
    {
        name: 'Sccimembers',
        route: 'sccimembers',
        icon: BsPeople
    },

    {
        name: 'Dashboard',
        route: 'dashboard',
        icon: FiHome,
    },
    {
        name: 'Mail',
        route: 'mail',
        icon: AiOutlineMail,
    },
    {
        name: 'Category',
        route: 'category',
        icon: TbCategory,
    },
    {
        name: 'Log Out',
        route: 'logout',
        icon: AiOutlineLogout,
    },


]