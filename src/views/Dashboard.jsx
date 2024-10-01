import Announcements from "../components/Announcements";
import UserDetails from "../components/UserDetails";

export default function Dashboard(){
    return(
        <> 
            <UserDetails /> 
            <Announcements />
        </>
    );
}