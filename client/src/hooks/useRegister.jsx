import { useContext } from "react";
import registerContext from "../contexts/registerContext";
function useRegister (){
    const register = useContext(registerContext);
    return register;
}

export default useRegister;