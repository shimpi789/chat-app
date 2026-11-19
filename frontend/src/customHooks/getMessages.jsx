import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { clearMessages, setMessages } from "../redux/messageSlice";

const useGetMessage = () => {
  const dispatch = useDispatch();
  const { userData, selectedUser } = useSelector((state) => state.user);
  const selectedUserId = selectedUser?._id;
  const currentUserId = userData?._id;

  useEffect(() => {
    const controller = new AbortController();

    // Never leave the previous conversation visible while a new one loads.
    dispatch(clearMessages());

    const fetchMessages = async () => {
      const token = localStorage.getItem("token");
      if (!token || !selectedUserId) return;

      try {
        const result = await axios.get(
          `${serverUrl}/api/message/get/${selectedUserId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
            signal: controller.signal,
          }
        );

        // The effect is cancelled when the selected conversation changes.
        if (!controller.signal.aborted) {
          dispatch(setMessages(result.data));
        }
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          console.error("GET MESSAGE ERROR:", error.response?.data || error.message);
        }
      }
    };

    fetchMessages();
    return () => controller.abort();
  }, [selectedUserId, currentUserId, dispatch]);
};

export default useGetMessage;
