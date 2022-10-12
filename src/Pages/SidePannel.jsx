import React from 'react';
import "../Style/SidePannel.css";
const SidePannel = ({changeProvider}) => {
  return (
    <>
    <div className="main_side_container">
        <div className="providers">
            <h2>Providers</h2>
        </div>
        <div className="provider_lists">
            <li onClick={()=>{changeProvider("asura")}}>Asura Scans</li>
            <li onClick={()=>{changeProvider("alpha")}}>Alpha Acans</li>
            <li onClick={()=>{changeProvider("flame")}}>Flame Scans</li>
            <li onClick={()=>{changeProvider("omega")}}>Omega Scans</li>
            <li onClick={()=>{changeProvider("luminous")}}>Luminous Scans</li>
            <li onClick={()=>{changeProvider("realm")}}>Realm Scans</li>
        </div>
    </div>
    </>
  )
}

export default SidePannel
