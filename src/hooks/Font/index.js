import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator } from "react-native";

const FontContext = createContext({});

export function FontProvider({children}){
    const [loaded, error] = useFonts({
        LoraRegular: require("../../assets/fonts/Lora-Regular.ttf"),
    });

    if (!loaded && !error) {
      return <ActivityIndicator/>;
      }

    return <FontContext.Provider value={{}}>
        {children}
    </FontContext.Provider>
}

export function useFont(){
    const context = useContext(FontContext)
    if(!context) {
        throw new Error("useFont must be used within a FontProvider")
    }
    return context;
} 