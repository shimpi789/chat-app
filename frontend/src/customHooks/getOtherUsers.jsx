import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const getOtherUsers = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); 

        if (!token) return; 

        const result = await axios.get(
          `${serverUrl}/api/user/others`,
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );

        dispatch(setOtherUsers(result.data));
      } catch (error) {
        console.log("OTHER USERS ERROR:", error.response?.data || error.message);
      }
    };

    fetchUser();
  }, [userData, dispatch]);
};

export default getOtherUsers;