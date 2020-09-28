import { Page } from "./contentobjecttypes";

const fiveWaysUrl = "https://docs.google.com/document/d/1KXAmis1n1FzduV6sNkzHhmWdInSfSBjIsH2wQXU0dn4/export?format=txt"
const fiveWaysPath = "../client/src/work/5_WAYS/FiveWays.json";
export const FiveWaysPage = new Page("FiveWays", fiveWaysPath, fiveWaysUrl);

const actFourUrl = "https://docs.google.com/document/d/1Xz3HjL7dJ-ab3bQnfqEFXFlZYxVBa_1MXV7WyLQ_iMg/export?format=txt"
const actFourPath = "../client/src/work/Act-4/ActFour.txt";
export const ActFourPage = new Page("ActFour", actFourPath, actFourUrl);