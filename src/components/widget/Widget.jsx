import './widget.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const widget = ({type}) => {
  let data;

  switch(type){
    case "user":
      data ={
        title: "USERS",
        isMoney:false,
        link: "see all users",
        icon: <PersonOutlinedIcon className='icon'/>
      };
      break;
         case "order":
      data ={
        title: "USERS",
        isMoney:false,
        link: "see all users",
        icon: <PersonOutlinedIcon className='icon'/>
      };
      break;

         case "user":
      data ={
        title: "USERS",
        isMoney:false,
        link: "see all users",
        icon: <PersonOutlinedIcon className='icon'/>
      };
      break;
    
      


  }
  return (
    <div className='widget'>
        <div className="left">
          <span className='title'>USERS</span>
          <span className='counter'>2132</span>
          <span className='link'>See all users</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <ArrowDropUpIcon />
            20%
          </div>
          <PersonOutlinedIcon  className='icon'/>
        </div>
       
        </div>
  )
}

export default widget