import "./sidebar.scss"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">T-HUB ADMIN</span>
            </div>
            <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardRoundedIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">DATA</p>
                 <li>
                    <PeopleRoundedIcon />
                    <span>Users</span>
                </li>
                 <li>
                    <MedicalServicesRoundedIcon  className="icon"/>
                    <span>Products</span>
                </li>
                 <li>
                    <PaymentRoundedIcon  className="icon"/>
                    <span>Orders</span>
                </li>
                   <li>
                    <LocalShippingRoundedIcon  className="icon"/>
                    <span>Delivery</span>
                </li>
                
                  <li>
                    <AnalyticsRoundedIcon  className="icon"/>
                    <span>Stats</span>
                </li>
                
                  <li>
                    <CircleNotificationsRoundedIcon  className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className="title">SYSTEM</p>
                  <li>
                    <SettingsSystemDaydreamRoundedIcon  className="icon"/>
                    <span>System health</span>
                </li>
                   <li>
                    <PsychologyRoundedIcon  className="icon"/>
                    <span>logs</span>
                </li>
                   <li>
                    <SettingsApplicationsRoundedIcon  className="icon"/>
                    <span>Settings</span>
                </li>
                 <p className="title">USER</p>
                   <li>
                    <AccountCircleRoundedIcon  className="icon"/>
                    <span>Profile</span>
                </li>
                   <li>
                    <ExitToAppRoundedIcon  className="icon"/>
                    <span>Log out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
             <div className="colorOptions"></div>
              
        </div>
    
    </div>
  )
}

export default Sidebar