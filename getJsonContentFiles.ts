import { Page, docsUrlToContentObjectArray } from "gdocs-database";

let allPages: Page[] = [];

const fileExtension = ".json"

const fiveWaysUrl = "https://docs.google.com/document/d/1KXAmis1n1FzduV6sNkzHhmWdInSfSBjIsH2wQXU0dn4/export?format=txt";
const fiveWaysPath = "./client/src/work/5_WAYS/";
const fiveWaysName = "FiveWays";
const FiveWaysPage = new Page(fiveWaysName, fiveWaysPath + fiveWaysName + fileExtension, fiveWaysUrl);
allPages.push(FiveWaysPage);

const actFourUrl = "https://docs.google.com/document/d/1Xz3HjL7dJ-ab3bQnfqEFXFlZYxVBa_1MXV7WyLQ_iMg/export?format=txt";
const actFourPath = "./client/src/work/Act-4/";
const actFourName = "ActFour";
const ActFourPage = new Page(actFourName, actFourPath + actFourName + fileExtension, actFourUrl);
allPages.push(ActFourPage);

const bangBangUrl = "https://docs.google.com/document/d/1T-0T_pG8pZNzoiZ_tvYcZ7GRbVz0j4xqYE-qZmXaWFA/export?format=txt";
const bangBangPath = "./client/src/work/Bang-Bang-Youre-Mine/";
const bangBangName = "BangBang";
const BangBangPage = new Page(bangBangName, bangBangPath + bangBangName + fileExtension, bangBangUrl)
allPages.push(BangBangPage);

const beigeUrl = "https://docs.google.com/document/d/1goVWAbsjLa6qZJf4-HL3awRkVmICOviU_HkooApcC-s/export?format=txt";
const beigePath = "./client/src/work/Beige/";
const beigeName = "Beige";
const BeigePage = new Page(beigeName, beigePath + beigeName + fileExtension, beigeUrl);
allPages.push(BeigePage);

const busterUrl = "https://docs.google.com/document/d/1qTS-htWT3tWx6OW7IvDQsLpbexAQ1Z5rVu4guGOO8kE/export?format=txt";
const busterPath = "./client/src/work/Buster/";
const busterName = "Buster";
const BusterPage = new Page(busterName, busterPath + busterName + fileExtension, busterUrl);
allPages.push(BusterPage);

const castingCouchUrl = "https://docs.google.com/document/d/16ebfubDDCwJxauYbAM3Q5t8I3ubDUXhDiK3ADCmgXkU/export?format=txt";
const castingCouchPath = "./client/src/work/Casting_Couch/";
const castingCouchName = "CastingCouch";
const CastingCouchPage = new Page(castingCouchName, castingCouchPath + castingCouchName + fileExtension, castingCouchUrl);
allPages.push(CastingCouchPage);

const iPhoneNotesUrl = "https://docs.google.com/document/d/1VMTv3T_lAlL1IlSAIGw5ClqomgA5i8y_jn5Ffxgo-Ds/export?format=txt";
const iPhoneNotesPath = "./client/src/work/iPhone-Notes/";
const iPhoneNotesName = "IPhoneNotes";
const IPhoneNotesPage = new Page(iPhoneNotesName, iPhoneNotesPath + iPhoneNotesName + fileExtension, iPhoneNotesUrl);
allPages.push(IPhoneNotesPage);

const loveFascismUrl = "https://docs.google.com/document/d/1b2EJOxCBdgW_vLZGKBC1dN6vV3g31EMcYwJVdOoesbg/export?format=txt";
const loveFascismPath = "./client/src/work/Love-and-Fascism-in-the-21st-Century/";
const loveFascismName = "LoveFascism";
const LoveFascismPage = new Page(loveFascismName, loveFascismPath + loveFascismName + fileExtension, loveFascismUrl);
allPages.push(LoveFascismPage);

const meowTVUrl = "https://docs.google.com/document/d/1mWCrjrrSbfPI3NMppz43WPdVEE4vxo9Vb4RWlUurcVE/export?format=txt";
const meowTVPath = "./client/src/work/meowTV/";
const meowTVName = "MeowTV";
const MeowTVPage = new Page(meowTVName, meowTVPath + meowTVName + fileExtension, meowTVUrl);
allPages.push(MeowTVPage);

const museUrl = "https://docs.google.com/document/d/1sMugh2-kpSmhoyHb7NikSvusYsRi60fbAgV9ureIMjg/export?format=txt";
const musePath = "./client/src/work/muse/";
const museName = "Muse";
const MusePage = new Page(museName, musePath + museName + fileExtension, museUrl);
allPages.push(MusePage);

const sexBriefUrl = "https://docs.google.com/document/d/1V0AjBzEjiMUWm0uudRHyo7y2-Wyw-pqepIbUUyhTXx4/export?format=txt";
const sexBriefPath = "./client/src/work/Sex-Brief/";
const sexBriefName = "SexBrief";
const SexBriefPage = new Page(sexBriefName, sexBriefPath + sexBriefName + fileExtension, sexBriefUrl);
allPages.push(SexBriefPage);


const somethingDrawings1Url = "https://docs.google.com/document/d/1yhALp5zXg2HOH49CQ2B5yAWjjUV6vAnPk1GOC1YH1PY/export?format=txt";
const somethingDrawings1Path = "./client/src/work/something-drawings-1/";
const somethingDrawings1Name = "SomethingDrawings1";
const SomethingDrawings1Page = new Page(somethingDrawings1Name, somethingDrawings1Path + somethingDrawings1Name + fileExtension, somethingDrawings1Url);
allPages.push(SomethingDrawings1Page);

const somethingDrawings2Url = "https://docs.google.com/document/d/1fAQ-Aw7Dnqutaa0aPk_lMvdCfod8mJU7RQYHq-dAafw/export?format=txt";
const somethingDrawings2Path = "./client/src/work/something-drawings-2/";
const somethingDrawings2Name = "SomethingDrawings2";
const SomethingDrawings2Page = new Page(somethingDrawings2Name, somethingDrawings2Path + somethingDrawings2Name + fileExtension, somethingDrawings2Url);
allPages.push(SomethingDrawings2Page);

const somethingDrawings3Url = "https://docs.google.com/document/d/12_4QiFsNJKzOmyHfkZ-t1fqCKkzWvBM7XB0gvBiY9NY/export?format=txt";
const somethingDrawings3Path = "./client/src/work/something-drawings-3/";
const somethingDrawings3Name = "SomethingDrawings3";
const SomethingDrawings3Page = new Page(somethingDrawings3Name, somethingDrawings3Path + somethingDrawings3Name + fileExtension, somethingDrawings3Url);
allPages.push(SomethingDrawings3Page);

const somethingFractionsUrl = "https://docs.google.com/document/d/16hO8GuEVqoQMmsgmFy3SR60cH7EmsQt4o4u6p7ckdGQ/export?format=txt";
const somethingFractionsPath = "./client/src/work/something-fractions/";
const somethingFractionsName = "SomethingFractions";
const SomethingFractionsPage = new Page(somethingFractionsName, somethingFractionsPath + somethingFractionsName + fileExtension, somethingFractionsUrl);
allPages.push(SomethingFractionsPage);

export default function getPagesArray(): Page[] {
    return allPages;
}

function run() {
    allPages.forEach(page => {
        docsUrlToContentObjectArray(page.docsUrl, page.path).then(
            response => console.log("\n" + page.name + "\n" + JSON.stringify(response) + "\n"));
    });
}

run();
