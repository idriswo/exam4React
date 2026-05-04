import { BiX } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { Fragment, memo, useState } from 'react'
import img1 from '../../assets/Header.images/Layer_x0020_1.png'
import { NavLink } from 'react-router-dom';
import NavList from '../NavList/NavList';
import Typography from "@mui/material/Typography";

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import NavListHeader from "../NavlistHeader/NavListHeader";
import img2 from '../../assets/Header.images/Vector (6).png'
import img3 from '../../assets/Header.images/Vector (7).png'
import img4 from '../../assets/Header.images/Vector (8).png'
import img5 from '../../assets/Header.images/Group (5).png'




const Header = memo(() => {


  const [state, setState] = useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(prev => ({ ...prev, [anchor]: open }));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400 , padding: '30px', display: 'flex', flexDirection: 'column', gap: '30px' }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex items-center justify-between">
        <NavLink to='/'>
          <img src={img1} alt="Header Image" />
        </NavLink>
        <BiX onClick={toggleDrawer(anchor, false)} className="text-[60px] cursor-pointer" />
      </div>

      <NavListHeader />
      <div className="xl:flex xl:flex-row xl:items-center xl:gap-[110px] xl:block flex flex-col items-start gap-[20px]">
            <div className="flex items-center gap-2 text-[33px]">
              <BiPhone className="text-[#EFA35A]" />
              <Typography>+7 (962) 555-25-25</Typography>
            </div>
            <div className="flex items-center gap-2 xl:hidden">
              <div className="p-[5px] w-[30px] h-[30px] flex items-center justify-center border-[1px]  border-[#414753]">
                <img className="w-[25px]" src={img2} alt="" />
              </div>
              <div className="p-[5px] w-[30px] h-[30px]  flex items-center justify-center border-[1px] border-[#414753]">
                <img className="w-[25px]" src={img3} alt="" />
              </div>
              <div className="p-[5px] w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#414753]">
                <img className="w-[25px]" src={img4} alt="" />
              </div>
              <div className="p-[5px] w-[30px] h-[30px] flex items-center justify-center border-[1px] border-[#414753]">
                <img className="w-[25px]" src={img5} alt="" />
              </div>
            </div>
            <button className="text-[black] border-[2px] border-[#EFA35A]  px-[30px] py-[7px] text-[20px]">
              Заказать звонок
            </button>
          </div>
    </Box>
  );


  return (
    <>
      <div className=' xl:max-w-[1560px] xl:m-auto bg-[#D0D6EC] relative z-20 opacity-80 sticky   top-0 left-0 w-full '>
        <div className='max-w-[90%] m-auto flex justify-between items-center py-[10px]'>
          <div className="flex items-center gap-[100px]">
            <NavLink to='/'>
              <img src={img1} alt="Header Image" />
            </NavLink>

            <NavList />
          </div>
          <div className="xl:flex xl:items-center xl:gap-[110px] xl:block hidden ">
            <div className="flex items-center gap-2 text-[33px]">
              <BiPhone className="text-[#EFA35A]" />
              <Typography>+7 (962) 555-25-25</Typography>
            </div>
            <button className="text-[black] border-[2px] border-[#EFA35A]  px-[30px] py-[7px] text-[20px]">
              Заказать звонок
            </button>
          </div>
          <div className="xl:hidden block flex items-center gap-2 text-[33px]">
            <BiPhone />
            {['right',].map((anchor) => (
              <Fragment key={anchor}>
                <AiOutlineMenu onClick={toggleDrawer(anchor, true)} />
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </Fragment>
            ))}
          </div>
        </div>

      </div>
    </>
  )
})

export default Header