import { Auth } from "aws-amplify";
import { getProjectNameState } from '../states';
import { DataStore } from "aws-amplify";
import { Ticket } from "../models";
import React,{ useState } from "react";
import { UserContext } from "../contexts/UserContext";

export function ToolbarSelectClass() {
    const {
        currentUser,
        userIDName,
        navigate,
    } = React.useContext(UserContext);
    
    const [assignedToMe,setAssignedToMe] = useState(["","assigned to me","boards"]);
    const [allUsers,setAllUsers] = useState(["","all users"]);

    const handleProjectsSelectChange = (event) => {
        switch(event.target.value){
            case "switch project":
                if (window.confirm("Are you sure you want to switch to different project"
                +"we will redirect you to different page?")) 
                    navigate('/'); 
            break;
            default: 
                console.log("default");
            break;}};

    const handleYourWorkSelectChange = async (event) => {
        switch(event.target.value){
            case "assigned to me":
                setAssignedToMe(["","<- back"]);
                await DataStore.query(Ticket)
                .then(data => {
                    data.filter(item => {
                        if (item.Asignee === currentUser.sub ) 
                            setAssignedToMe(prevList => [...prevList,`KAI-${item.TicketID} : ${item.Title}`]);
                            return item;
                    })});break;
            case "boards":
                navigate('/board',{ state: { project: getProjectNameState() }});
            break;
            case "<- back":
                setAssignedToMe(["","assigned to me","boards"]);
            break;
            default:
                if (event.target.value.startsWith('KAI')) {
                    const regex = /KAI-(\d+)/;
                    const match = event.target.value.match(regex);
                    const getTicketID = match ? match[1] : null;
                    await DataStore.query(Ticket)
                    .then(data => {
                        data.filter(item => {
                        if( item.TicketID ===  parseInt(getTicketID))
                            navigate("/edit-ticket",
                            {state:{selectedTicket:item,project: getProjectNameState()}});
                            return item;
                        })});}
                else console.log("default");
            break;}};

    const handleIssueTemplateSelectChange = (event) => {
        switch(event.target.value){
            case "create one":
                navigate("/board",{state:{create_it:true,project: getProjectNameState()}})
                break;
            case "project templates":
                navigate("/board",{state:{edited_it:true,project: getProjectNameState()}})
                break;
            default:
                console.log("default");
                break;
        }
    };

    const handleTeamsSelectChange = (event) => {
        switch(event.target.value){
            case "all users":
                setAllUsers(["","<- back"]);
                userIDName.map(item =>{
                if (item.name)
                    setAllUsers(prevList => [...prevList,item.name]);});
            break;
            case "<- back":
                setAllUsers(["","all users"]);
                break;
            default:
            if (event.target.value.includes('@')) {
                const selectedUserID = userIDName[event.target.selectedIndex-2].id;
                navigate('/profile', { 
                    state: { selectedUserID: selectedUserID ,
                             selectedUserName: event.target.value }});}
            break;}};

    const handleProfileSelectChange = (event) => {
        switch(event.target.value){
            case "Manage account":
                navigate('/profile'); 
            break;
            case "Log out":
                if (window.confirm("Are you sure you want to sign out ?")) 
                Auth.signOut().then(() => {
                    navigate('/');})
            break;
            default: 
            console.log("default");
            break;}};

    return {
        allUsers,
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        handleIssueTemplateSelectChange,
        assignedToMe}}