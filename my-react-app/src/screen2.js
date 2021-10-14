import React, { Fragment,useState } from "react";
import "./login.css";
// import { Link } from "react-router-dom";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import {createUser,deleteUser,getAllUsers} from "./Actions/userActions";
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const UserDetails = () => {
  const dispatch = useDispatch();
  

  // const { error, loading} = useSelector(
  //   (state) => state.user
  // );

  const { userDetail,loading } = useSelector(state => state.allusers);



  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address:""
  });

  const { name, email,mobile,address} = user;

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({name,email,mobile,address}));
  };

  const registerDataChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    
  };


  
   
  return (
    <Fragment>
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="Create User">
          <form
                className="signUpForm"
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  {/* <FaceIcon /> */}
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  {/* <LockOpenIcon /> */}
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    required
                    name="mobile"
                    value={mobile}
                    onChange={registerDataChange}
                  />
                </div>

                <div id="signUpAddress">
                  <input
                    type="address"
                    name="address"
                    value={address}
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn"/>
            </form>
        </Tab>

        <Tab eventKey="second" title="All Users">
          <div>
            return <>
              console.log(userDetail)
            {
              userDetail.map((singleUser) => {
                    return <>
                      <div>
                        <p>{singleUser.name}</p>
                        <p>{singleUser.email}</p>
                        <p>{singleUser.mobile}</p>
                      </div>
                    </>
                })
              }
              </>
         </div>
          
        </Tab>

      </Tabs>
    </Fragment>
  );

 
};



export default UserDetails;