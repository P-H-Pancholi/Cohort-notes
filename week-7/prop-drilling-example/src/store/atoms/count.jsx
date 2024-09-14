import { atom, selector } from "recoil"

export const countAtom = atom({
    key: "countAtom",
    default: 0
})

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => { // write derivation function
        const count = get(countAtom); // just like dependency array in useMemo
        return count % 2;
    }
})