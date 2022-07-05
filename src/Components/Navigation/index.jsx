import "./styles.css";
import { useMediaQuery } from "@mui/material";
import logo from '../Login/logo_enmarcar.png';
import { useTheme } from '@mui/material/styles';
import { CHANGE_TAB } from '../../Store/TabsReducer';
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {

  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile =useMediaQuery(theme.breakpoints.down('sm'));

  const { activeTab } = useSelector(({ TabsReducer }) => ({
    activeTab: TabsReducer.activeTab
  }))

  const handleChangeTab = (index) => {
    dispatch({ type: CHANGE_TAB, payload: index })
  }

  return (
    <div className={`navbar-container ${ isMobile && 'navbar-mobile'}`}>
      <div>
        <img alt="appLogo" src={logo} />
      </div>

      <ul>
        <li
          onClick={() => handleChangeTab(0)}
          className={activeTab === 0 && 'active'}
        >
          enmarcación
        </li>
        <li
          onClick={() => handleChangeTab(1)}
          className={activeTab === 1 && 'active'}
        >
          retablo
        </li>
        <li
          onClick={() => handleChangeTab(2)}
          className={activeTab === 2 && 'active'}
        >
          bastidor
        </li>
        <li
          onClick={() => handleChangeTab(3)}
          className={activeTab === 3 && 'active'}
        >
          espejo
        </li>
      </ul>
    </div>
  )
}

export default Navigation;