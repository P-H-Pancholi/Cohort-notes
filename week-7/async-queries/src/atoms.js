import {atom, selector} from "recoil";
import axios from "axios";

// Asynchronous data queries
export const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 5000)) // sleeps for 5s
            const res = await axios.get("http://localhost:3000/notifications")
            return res.data
        }
    })
    // default: {
    //     network: 4, 
    //     jobs: 6, 
    //     messaging: 3, 
    //     notifications: 3
    // }
})

export const sumSelector = selector({
    key: "sumSelector",
    get: ({get}) => {
        const notificationCount = get(notificationAtom)
        return notificationCount.jobs + notificationCount.messaging + notificationCount.notifications + notificationCount.network
    }
})