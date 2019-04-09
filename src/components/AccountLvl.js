import React, { useEffect } from 'react'
import { useStore } from "../store/store";

const AccountLvl = () => {
    const [state, setState] = useStore();
    useEffect(() => {
      console.log(state);
    }, []);

    const newName = () => {
        setState(old => ({
            ...old,
            firstName: "James"
          }));
    }

  return (
    <div>
      <p>This is your account level: {}</p>
    </div>
  );
}

export default AccountLvl;
