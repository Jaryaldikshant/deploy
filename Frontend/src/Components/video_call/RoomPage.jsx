import React from 'react';
import { useParams } from 'react-router-dom'; // to get room id
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import {userModel} from '../../Backend/models/userModel';

// async function userInfo(name, _id) {
// try{
// const user=await userModel.findOne({
//     name:name,
//     _id:_id
// })
// // Check if user exists
// if (user) {
//     const { name, _id } = user;
//     return { name, _id };  // You can return more fields if needed
// } else {
//     return null;  // Handle case where user is not found
// }
// } catch (error) {
// console.error('Error fetching user:', error);
// throw error;  // Handle any error that occurs during the query
// }
// }
const RoomPage =()=>{
    const {roomId}=useParams();
    let myMeeting = async (element) => {

        // generate Kit Token
        const appID = 880011707;
        const serverSecret = "146d773800d037e8f388e4e1d7674869";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId,  
            // user._id,
            // user.name,
            Date.now().toString(),// userId
            "Vidur Sharma", // username
        );
       const sc=ZegoUIKitPrebuilt.create(kitToken)
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            sharedLinks:[
                {
                name:'Copy Link',
                url:`http://localhost:5173/room/${roomId}`
                }
            ],
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference,// which type of application it is
            },
            showScreenSharingButton: false,
        });
    };
    return(
    <div className='video-room-page'>
    <div ref={myMeeting}/>
    </div>
    );
};
export default RoomPage;