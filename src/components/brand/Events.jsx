import BrandCSS from "./Brand.module.css";

const MiniBuyEvents = ({ year }) => {
  let events = [];

  if (year === 2018) {
    events = [
      "January 10;MINIBUY reached comprehensive cooperation agreement with Poland.",
      "January 15;MINIBUY reached cooperation with SAP and IBM.",
      "January 30;MINIBUY reached comprehensive cooperation agreement with Greece.",
      "January 30;MINIBUY reached comprehensive cooperation agreement with Colombia.",
      "February 9;MINIBUY Attended the Ambiente Frankfurt Once Again.",
      "March 28 - March 30;MINIBUY Appeared in the “Shop & Store Vietnam 2018” Exhibition.",
      "April 13 - 14;MINIBUY Held Investment Conference in India.",
      "April 17;MINIBUY Held Investment Conference in Brazil.",
      "May 31;MINIBUY reached comprehensive cooperation agreement with Bulgaria.",
      "August;MINIBUY has opened over 1,000 stores.",
      "August 17;MINIBUY Reached Cooperation Agreements with Ecological Suppliers, Advocating “Elaborate Manufacture”.",
      "September;The first Romania MINIBUY store set up in Veranada Mall in September 2018, and it opened the second store in Iris Mall in the same month.",
      "October 23;2018 Autumn Canton Fair Held Successfully, MINIBUY Appeared with New Image.",
      "November;MINIBUY Collaborates with PANTONE to Create Hot-sale Products.",
      "November 21;The 2019 MINIBUY Global New Products Ordering Fair was successfully held in the Intercontinental Guangzhou Exhibition Center.",
      "November 26;MINIBUY reached comprehensive cooperation agreement with Macedonia.",
    ];
  } else if (year === 2019) {
    events = [
      "January 9;MINIBUY established a comprehensive partnership with El Salvador.",
      "March 6;MINIBUY's Original Design Team MOD Appeared at the Design Shanghai Exhibition.",
      "March 13;MINIBUY Cooperates with Marvel Studios, Releasing 2000 Superheroes Peripheral Products.",
      "March 13;MINIBUY signed cooperation agreements with companies from four countries, developing in 86 countries and regions.",
      "April 24;MINIBUY x PDC Design Forum Was Grandly Held.",
      "April 23-27;MINIBUY x Marvel products were displayed for the first time in the 125th China Import and Export Fair.",
      "June 12;MINIBUY Global Agents Summit Forum was held in Mexico. MINIBUY reached cooperation with at the forum and develops in five countries in South America.",
      "July 3;MINIBUY cooperated with Forbidden City Culture to hold the new product release conference.",
      "July 12;MINIBUY x Marvel IP store was opened in Shenzhen.",
      "August 13;MINIBUY reached comprehensive cooperation agreement with French and British Companies.",
      "Semtember 7;MINIBUY Makes Its First Appearance at 2020 New York Fashion Week With Its Go Girl Series Products.",
      "Semtember 24-25;MINIBUY Appeared at India Retail Forum and Won India Most Admired Speciality Retailer of the Year.",
      "October 16;MINIBUY Attended 2019 China Licensing Expo with Licensing Products Collaborating with Hot IP.",
      "October 18-20;MINIBUY Marvel Series Highlights the Shanghai Fashion Weekend",
    ];
  } else if (year === 2020) {
    events = [
      "January 25;MINIBUY donated 3 million yuan of masks and other protective materials to Wuhan.",
      "May;FLEXO lamp of  Miniso contracted Spanish design studio won the German Red Dot Design award for 2020.",
      "July;MINIBUY co-branded with Tencent's popular mobile game 'Honor of Kings' to develop hundreds of fashionable products.",
      "July 29;MINIBUY opened its first store in the European country Malta.",
      "September 17;MINIBUY signed the cooperation agreement with representatives of Italian partners.",
      "October 14;MINIBUY signed the cooperation agreement with representatives of Icelandic partners.",
      "October 15;MINIBUY officially listed at NYSE.",
      "October 20;The first store of MINIBUY opened in Paris.",
      "October 27;MINIBUY founder Ye Guofu personally invested in the establishment of 'MINIBUY Quality Assurance Fund of RMB 100 Million'",
    ];
  } else if (year === 2021) {
    events = [
      "April;MINIBUY opened three stores in Italy.",
      "December 12;MINIBUY Penpen announces cooperation with ECOAN charity organization to raise funds for planting trees around the Andes.",
      "December 18;MINIBUY opened the 5000th store worldwide in Houston TX.",
    ];
  } else if (year === 2022) {
    events = [
      "January;Minibuy opened its first stores in Libya and Andorra.",
      "March 12;MINIBUY opened New York flagship store in SoHo, Manhattan.",
      "March 22;MINIBUY celebrated the end of its MINI bus world tour and #love2gether campaign by lighting up in Dubai, the world's largest and tallest observation wheel.",
      "April;MINIBUY opened its first store in Qatar.",
      "June;Minibuy opened first Malaysia flagship store.",
      "July 1;MINIBUY opened first UK flagship store in London.",
      "July 13;MINIBUY officially listed at HKEX (HKEX: 9896).",
      "August;MINIBUY celebrated its fifth anniversary of entering Indian Market.",
      "October 1;MINIBUY Opened its 2000th overseas store in Lyon, France.",
      "October 1;MINIBUY unveiled a new “$2 Plus” concept in Canada.",
      "December;MINIBUY started its #Lifeisforfun! world tour with MINI Family, traveling from Thailand, Italy, to Mexico, MINIBUY spreads holiday cheer and kindness during this holiday season.",
    ];
  } else {
    events = ["No events found for the specified year."];
  }

  return (
    <ul className={BrandCSS.info}>
      {events.map((event, index) => {
        const date = event.split(";")[0];
        const desc = event.split(";")[1];
        return (
          <p key={index}>
            <div>{date}</div>
            <div>{desc}</div>
          </p>
        );
      })}
    </ul>
  );
};

export default MiniBuyEvents;
