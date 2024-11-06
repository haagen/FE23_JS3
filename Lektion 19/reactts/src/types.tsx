
export type Language =
    | "Swedish"
    | "Danish"
    | "Norwegian"
    | "Italian";

export interface LanguageContextObject {
    language: Language;
    setLanguage?: React.Dispatch<React.SetStateAction<Language>>
}