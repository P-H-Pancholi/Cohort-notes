import {atom, selector} from "recoil";

export const networkAtom = atom(
    {
        key: "networkAtom",
        default: 102
    }
)

export const jobsAtom = atom(
    {
        key: "jobsAtom",
        default: 0
    }
)

export const messagingAtom = atom(
    {
        key: "messagingAtom",
        default: 0
    }
)

export const notificationAtom = atom(
    {
        key: "notificationAtom",
        default: 12
    }
)

export const sumSelector = selector({
    key: "sumSelector",
    get: ({get}) => {
        const networkVar = get(networkAtom)
        const jobsVar = get(jobsAtom)
        const messagingVar = get(messagingAtom)
        const notificationVar = get(notificationAtom)

        return networkVar + jobsVar + messagingVar + notificationVar
    }
})