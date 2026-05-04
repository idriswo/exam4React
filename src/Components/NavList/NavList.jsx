import { memo } from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
const NavList = memo(() => {

  // Menu1
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu2
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  }
  const handleClose2 = () => {
    setAnchorEl2(null);
  }

  // Menu3
  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  }
  const handleClose3 = () => {
    setAnchorEl3(null);
  }

  return (
    <>
      <div className='xl:block  hidden  xl:flex xl:flex-row xl:items-center xl:gap-[20px] xl:text-[18px] flex flex-col p-[20px] items-start gap-[10px] text-[16px]'>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              color: 'black'
            }}
          >
            Наши проекты ▼
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}

          >
            <div className='flex flex-col gap-2 p-[20px]'>

              <NavLink to='/IzumrudniVillage' onClick={handleClose}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                IzumrudniVillage
              </NavLink>

              <NavLink to='/Iqclub' onClick={handleClose}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                IQ CLUB
              </NavLink>

              <NavLink to='/Usadi' onClick={handleClose}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Усады
              </NavLink>

              <NavLink to='/ZimnayaGorka' onClick={handleClose}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Зимняя горка
              </NavLink>

              <NavLink to='/Konstantinovka' onClick={handleClose}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Константиновка
              </NavLink>
              <NavLink to='/NashiProekti' onClick={handleClose}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                НАША ПРОЕКТЫ
              </NavLink>
            </div>
          </Menu>
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls={open2 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? 'true' : undefined}
            onClick={handleClick2}
            sx={{
              color: 'black'
            }}
          >
            Дома ▼
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl2}
            open={open2}
            onClose={handleClose2}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}

          >
            <div className='flex flex-col gap-2 p-[20px]'>

              <NavLink to='/OdnoEtazniy' onClick={handleClose2}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Одноэтажный
              </NavLink>

              <NavLink to='/DvuxEtazhniy' onClick={handleClose2}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Двухэтажный
              </NavLink>

              <NavLink to='/TaunXaunsi' onClick={handleClose2}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Таунхаус
              </NavLink>

              <NavLink to='/VseDoma' onClick={handleClose2}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Все дома
              </NavLink>

            </div>
          </Menu>
        </div>
        <NavLink className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''} to='/Ipoteka'>Ипотека</NavLink>
        <div>
          <Button
            id="basic-button"
            aria-controls={open3 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open3 ? 'true' : undefined}
            onClick={handleClick3}
            sx={{
              color: 'black'
            }}
          >
            О компании ▼
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl3}
            open={open3}
            onClose={handleClose3}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}

          >
            <div className='flex flex-col gap-2 p-[20px]'>

              <NavLink to='/Komanda' onClick={handleClose3}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Команда
              </NavLink>

              <NavLink to='/SMIonas' onClick={handleClose3}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                СМИ о нас
              </NavLink>

              <NavLink to='/Novosti' onClick={handleClose3}
                className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''}>
                Новости
              </NavLink>

            </div>
          </Menu>
        </div>
        <NavLink className={({ isActive }) => isActive ? 'text-yellow-500 font-bold' : ''} to='/Kontakti'>Контакты</NavLink>
      </div>
    </>
  )
})

export default NavList