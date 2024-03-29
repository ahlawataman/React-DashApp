import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">9 Jan 2022</td>
                        <td className="widgetLgAmount">$760.00</td>
                        <td className="widgetLgStatus">
                            <Button type='Approved'/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Andrew Taylor</span>
                        </td>
                        <td className="widgetLgDate">2 Jan 2022</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type='Declined'/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Angel Neale</span>
                        </td>
                        <td className="widgetLgDate">24 Dec 2021</td>
                        <td className="widgetLgAmount">$402.00</td>
                        <td className="widgetLgStatus">
                            <Button type='Pending'/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                        </td>
                        <td className="widgetLgDate">22 Dec 2021</td>
                        <td className="widgetLgAmount">$540.00</td>
                        <td className="widgetLgStatus">
                            <Button type='Approved'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}