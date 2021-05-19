// Import once, use often
import { TypedUseSelectorHook, useSelector, RootStateOrAny } from "react-redux";
export const useAppSelector: TypedUseSelectorHook<RootStateOrAny> = useSelector;
