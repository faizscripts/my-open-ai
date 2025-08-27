import { preconnect, preinit } from "react-dom";

export function ResourceHints() {
    preconnect("https://fonts.googleapis.com");
    preconnect("https://fonts.gstatic.com");

    preinit("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap", { as: "style" });

    return null;
}
