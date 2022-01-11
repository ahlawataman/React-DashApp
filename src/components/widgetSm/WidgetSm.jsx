import React from 'react'
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/thumb/men/98.jpg" alt="" className="widgetSmImg" />
                    <div className="wdigetSmUser">
                        <span className="widgetSmUsername">Raymond Graham</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" className="widgetSmImg" />
                    <div className="wdigetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/thumb/men/36.jpg" alt="" className="widgetSmImg" />
                    <div className="wdigetSmUser">
                        <span className="widgetSmUsername">Phoenix Williams</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/thumb/men/22.jpg" alt="" className="widgetSmImg" />
                    <div className="wdigetSmUser">
                        <span className="widgetSmUsername">Mikkel Thomsen</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/thumb/men/11.jpg" alt="" className="widgetSmImg" />
                    <div className="wdigetSmUser">
                        <span className="widgetSmUsername">Loïc Moreau</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <VisibilityIcon className='widgetSmIcon'/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}