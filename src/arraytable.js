import React, { useState } from "react";
import { Siderroute } from "./sider";
import { Badge } from 'antd';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';

export const Arraytable = () => {
    const [info, setInfo] = useState({
        fname: "",
        email: "",
        psw: "",
        add: "",
        state: [],
        id: ""
    });
    const [create, setCreate] = useState((JSON.parse(localStorage.getItem("create"))) || []);

    function checkchange(e) {
        if (e.target.checked) {
            setInfo({ ...info, state: [...info.state, e.target.value] })
        }
        else {
            setInfo({ ...info, state: [...info.state.filter(value => value !== e.target.state)] })
        }
        console.log(e.target.checked, e.target.value)
    }


    function handlechane(e) {
        console.log(e.target)
        let { name, value } = e.target;
        setInfo({ ...info, [name]: value, id: Date.now() })
    }
    function handlesubmit(e) {
        console.log(e.target)
        setCreate([...create, info])
        localStorage.setItem("create", JSON.stringify([...create, info]));
    }


    const Handledelete = (inx) => {
        console.log(inx.target);
        const deletedata = create.filter((item, index) => index !== inx);
        setCreate(deletedata);
        localStorage.setItem("create", JSON.stringify(deletedata));
    }


    const { fname, email, psw, add, state } = info
    return (
        <>
            <Siderroute />
            <div style={{ marginLeft: "12%", marginRight: "1%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>Arraytable</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#eee", padding: "3%", borderRadius: "15px", marginTop: "3%", marginLeft: "12%", marginRight: "2%" }}>
                <div style={{ backgroundColor: "#AB47BC", padding: "5px", marginTop: "-9 0px", borderRadius: "10px", color: "white" }}>
                    <h3>Simple Table</h3>
                    <p>Here is a subtitle for this table</p>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <label htmlFor="fname">Full Name:</label>
                    <input type="text" id="fname" name="fname" value={fname} onChange={handlechane} /><br /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={handlechane} /><br /><br />
                    <label htmlFor="psw">Password:</label>
                    <input type="password" id="psw" name="psw" value={psw} onChange={handlechane} /><br /><br />
                    <label htmlFor="add">Address:</label>
                    <input type="text" id="add" name="add" value={add} onChange={handlechane} /><br /><br />
                    <label htmlFor="state">State: </label>
                    <input type="checkbox" id="state" name="state" value="Gujarat" onChange={checkchange} />Gujarat,
                    <input type="checkbox" id="state" name="state" value="Rajasthan" onChange={checkchange} />Rajasthan,
                    <input type="checkbox" id="state" name="state" value="Haryana" onChange={checkchange} />Haryana<br /><br />
                    <button type="button" onClick={handlesubmit}>SUBMIT</button><br /><br />

                </div>

                <table className="table table-striped">
                    <thead>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>Del. Btn</th>

                    </thead>
                    <tbody>
                        {create.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.fname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.psw}</td>
                                    <td>{item.add}</td>
                                    <td><ol>{item?.state?.map((index) => {
                                        return (
                                            <li>{index}</li>
                                        )
                                    })}</ol></td>
                                    <td><button type="button" onClick={() => Handledelete(index)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}