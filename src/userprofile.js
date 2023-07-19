import React from "react";
import { Badge } from 'antd';
import { Siderroute } from './sider';
import { AppstoreOutlined, UserOutlined, SearchOutlined, BellOutlined, } from '@ant-design/icons';
export const Userprofile = () => {
    return (
        <>
            <Siderroute />
            <div style={{ marginLeft: "15%", marginTop: '25px' }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ color: "gray", fontSize: "30px" }}>User Profile</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Search" style={{ borderWidth: "0 0 1px 0", fontSize: "20px", background: 'transparent' }} /><SearchOutlined style={{ fontSize: "20px" }} /><AppstoreOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        <Badge count={5}><BellOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                        </Badge><UserOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">

                        <div style={{ backgroundColor: "#eee", padding: "2%", borderRadius: "10px", marginTop: "10%" }}>
                            <div style={{ backgroundColor: "#b22bc9", marginTop: "-70px", borderRadius: "10px", color: "white", paddingLeft: "10px" }}>
                                <h1>Edit Profile</h1>
                                <p>Complete your Profile</p>
                            </div>
                            <div style={{ height: "90px", marginTop: "50px" }}>
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "400px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder="Company (Disabled)" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "200px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder="Username" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "310px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder=" Email address" />
                            </div>
                            <div style={{ height: "90px" }}>
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "475px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder="First Name" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "475px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder="Last Name" />
                            </div>
                            <div style={{ height: "90px" }}>
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "300px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder="City" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "300px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder="Country" />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "300px", marginRight: "4%" }} type="text" id="com" name="com" disabled placeholder="Postal Code" />
                                <p style={{ color: "gray" }}>About me</p>
                            </div>
                            <div style={{ height: "90px" }}>
                                <p style={{ color: "gray" }}>Lamborghini Mercy,Your chick she so thirsty,I'm in that two seat Lambo.</p><br />
                                <input style={{ borderWidth: "0 0 2px 0", background: "transparent", width: "1000px", marginRight: "4%" }} type="text" id="com" name="com" disabled />
                            </div>
                            <div style={{ marginTop: "5%" }}>
                                <button style={{ backgroundColor: "#b22bc9", color: "white", border: "none", padding: "10px", borderRadius: "5px" }} type="button">UPDATE PROFILE</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div style={{ backgroundColor: "#eee", marginTop: "20%", borderRadius: "10px", textAlign: "center", width: "500px", padding: "25px" }}>
                            <div style={{ paddingLeft: "10px" }}>
                                <img src="https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1605336150286-Q65JI6G3DURK6W88WCRA/DCP_0017.jpg"
                                    style={{ height: "150px", width: "150px", borderRadius: "50%", marginTop: "-70px" }} alt="image" />

                            </div>
                            <p style={{ fontSize: "15px", marginTop: "7%" }}>CEO / CO-FOUNDER</p>
                            <p style={{ fontSize: "20px", marginTop: "6%" }}>Alec Thompson</p>
                            <p style={{ marginTop: "6%" }}>Don't be scared of the truth because we need to restart the human foundation
                                in truth And I love you like Kanye loves Kanye I love Rick Owens' bed design
                                but the back is...
                            </p>
                            <button style={{ borderRadius: "20px", backgroundColor: "#b22bc9", border: "none", padding: "10px", color: "white" }} type="button">FOLLOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}