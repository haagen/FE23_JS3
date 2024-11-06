import { LanguageContextObject } from "../types";
import { createContext } from "react";


const defaultValue:LanguageContextObject = {
    language: 'Swedish'
}
const LanguageContext = createContext<LanguageContextObject>(defaultValue);

export default LanguageContext;
