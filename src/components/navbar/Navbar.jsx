import "./navbar.scss"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <ManageSearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
             English
           </div>
            <div className="item">
            <DarkModeIcon className="icon"  />
             Theme
           </div>
            <div className="item">
            <FullscreenExitOutlinedIcon className="icon"  />
             Exit Screen
           </div>
            <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
             Notifications
            <div className="counter">1</div>
           </div>
            <div className="item">
            <ChatOutlinedIcon className="icon" />
            Conversation
             <div className="counter">2</div>
           </div>
            <div className="item">
            <ListOutlinedIcon className="icon"  />
             List
           </div>
            <div className="item">
            <img src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600" alt="doctor" className="avatar"/>
           </div>
        </div>

      </div>
    
    </div>
  )
}

export default Navbar