import Gleap from "gleap";
import { useCallback } from "react";

export function useCrisp() {
  const GLEAP_KEY = "abc123";

  const sendChat = useCallback(() => {
    if (GLEAP_KEY) {
      Gleap.open();
      return;
    }
  }, [GLEAP_KEY]);

  const showChat = useCallback(() => {
    if (GLEAP_KEY) {
      Gleap.open();
      return;
    }
  }, [GLEAP_KEY]);

  const openChat = useCallback(() => {
    if (GLEAP_KEY) {
      Gleap.open();
      return;
    }
  }, [GLEAP_KEY]);

  return { sendChat, showChat, openChat };
}
