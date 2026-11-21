
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

        if (!token) {
          dispatch(setOtherUsers(null));
          return;
        }

        const result = await axios.get(
          `${serverUrl}/api/user/others`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("BEFORE DISPATCH:", result.data);

        dispatch(setOtherUsers(result.data));

        console.log(
          "AFTER DISPATCH: USERS SENT",
          result.data.length
        );

      } catch (error) {
        console.log(
          "OTHER USERS ERROR:",
          error.response?.data || error.message
        );
      }
    };

    fetchUser();
  }, [userData, dispatch]);
};

export default getOtherUsers;
