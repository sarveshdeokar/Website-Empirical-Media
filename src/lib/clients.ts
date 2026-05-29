import aachi from "@/assets/clients/aachi.jpg";
import amrithNoni from "@/assets/clients/amrith-noni.webp";
import ava from "@/assets/clients/ava.png";
import british from "@/assets/clients/british-biologocals.jpg";
import cothas from "@/assets/clients/cothas.jpg";
import idp from "@/assets/clients/idp.png";
import indus from "@/assets/clients/indus.png";
import jewelOne from "@/assets/clients/jewel-one-logo.png";
import minister from "@/assets/clients/minister-white.png";
import naga from "@/assets/clients/naga.png";
import otto from "@/assets/clients/otto.webp";
import pothys from "@/assets/clients/pothys.png";
import rkg from "@/assets/clients/rkg.webp";
import sathya from "@/assets/clients/sathya.png";
import savorit from "@/assets/clients/savorit.webp";
import sharechat from "@/assets/clients/sharechat.png";
import specsmakers from "@/assets/clients/specsmakers.png";
import sunpure from "@/assets/clients/sunpure.webp";
import thangamayil from "@/assets/clients/thangamayil.png";
import ullas from "@/assets/clients/ullas.jpg";
import walkmate from "@/assets/clients/walkmate.png";

export type Client = { name: string; logo: string; url: string };

export const clients: Client[] = [
  { name: "Aachi Masala", logo: aachi, url: "https://aachigroup.com/" },
  { name: "Amrit Noni", logo: amrithNoni, url: "https://amrithnoni.com/" },
  { name: "Ava Cholayil", logo: ava, url: "https://www.cholayil.com/" },
  { name: "British Biologicals", logo: british, url: "https://www.britishbiologicals.com/" },
  { name: "Cothas Coffee", logo: cothas, url: "https://cothas.com/" },
  { name: "IDP", logo: idp, url: "https://www.idp.com/india/" },
  { name: "Indus TMT", logo: indus, url: "https://industmt.com/" },
  { name: "Jewel One", logo: jewelOne, url: "https://jewelone.in/" },
  { name: "Minister White", logo: minister, url: "https://ministerwhite.com/" },
  { name: "Naga", logo: naga, url: "https://nagastore.in/" },
  { name: "Otto", logo: otto, url: "https://www.ottostore.com/" },
  { name: "Pothys", logo: pothys, url: "https://www.pothys.com/" },
  { name: "RKG Ghee", logo: rkg, url: "https://rkgghee.com/public/index.php" },
  { name: "Sathya", logo: sathya, url: "https://www.sathya.store/" },
  { name: "Savorit", logo: savorit, url: "https://savorit.com/" },
  { name: "Sharechat", logo: sharechat, url: "https://sharechat.com/" },
  { name: "Specsmakers", logo: specsmakers, url: "https://www.specsmakers.in/" },
  { name: "Sunpure", logo: sunpure, url: "https://sunpure.co.in/" },
  { name: "Thangamayil", logo: thangamayil, url: "https://www.thangamayil.com/" },
  { name: "Ullas Agarbathi", logo: ullas, url: "https://ullasagarbathi.co.in/" },
  { name: "Walkmate", logo: walkmate, url: "https://walkmate.co.in/" },
];
