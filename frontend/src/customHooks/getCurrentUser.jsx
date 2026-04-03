import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../main";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

const useGetCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅

        if (!token) return; // safety

        const result = await axios.get(
          `${serverUrl}/api/user/current`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ FIX
            },
          }
        );

        dispatch(setUserData(result.data));
      } catch (error) {
        console.log(
          "CURRENT USER ERROR:",
          error.response?.data || error.message
        );
      }
    };

    fetchUser();
  }, [dispatch]);
};

export default useGetCurrentUser;