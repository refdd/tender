import { NavigationContainer } from "@react-navigation/native";
import StackNaNavigator from "./StackNaNavigator";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNaNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
