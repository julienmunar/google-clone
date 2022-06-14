import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const HeaderLinks = () => {

    return (
        <div className='flex items-center justify-between  mt-4 max-w-lg 2xl:max-w-[740px] ml-48 '>
            <div className='flex space-x-6'>
                <Link Image={SearchIcon} title='All' selected />
                <Link Image={AddLocationAltIcon} title='Maps' />
                <Link Image={ImageIcon} title='Images' />
                <Link Image={OndemandVideoIcon} title='Videos' />
                <Link Image={NewspaperIcon} title='News' />
                <Link Image={MoreVertIcon} title='More' />
            </div>
            <div className='sm:hidden 2xl:block'>
                <Link title='Tools'/>
            </div>
        </div>

    )
}

export default HeaderLinks








const Link = ({ Image, title,selected }) => {
    return (
        <div className={`flex space-x-1 pb-3  items-center text-gray-700 cursor-pointer border-b-4 border-transparent ${selected && " text-blue-500 border-blue-500 "} hover:text-blue-500 hover:border-blue-500 `}>
            {Image ? (<Image className=' text-2xl' />) : (null)}
            <p className=' text-md '>{title}</p>
        </div>
    )
}