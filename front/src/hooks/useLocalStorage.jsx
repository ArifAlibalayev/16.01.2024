import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
const [LocalData, setLocalData] = useState(
  localStorage.getItem(key)
  ? JSON.parse(localStorage.getItem(key))
  : initialValue
)

useEffect(() => {
  localStorage.setItem(key, JSON.stringify(LocalData))
}, [key])

return [LocalData, setLocalData]

}

export default useLocalStorage;