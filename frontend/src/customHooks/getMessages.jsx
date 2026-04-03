import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessage = () => {
  const dispatch = useDispatch();
  const { userData, selectedUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token"); // ✅

        if (!token || !selectedUser?._id) return; // ✅ safety

        const result = await axios.get(
          `${serverUrl}/api/message/get/${selectedUser._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ FIX
            },
          }
        );

        dispatch(setMessages(result.data));
      } catch (error) {
        console.log(
          "GET MESSAGE ERROR:",
          error.response?.data || error.message
        );
      }
    };

    fetchMessages();
  }, [selectedUser, userData, dispatch]);
};

export default useGetMessage;