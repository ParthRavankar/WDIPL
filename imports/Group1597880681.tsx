import imgPasteYourConten from "figma:asset/9898561df4d8c85a788f9d86469ba72a302f7a00.png";
import imgPasteYourConten1 from "figma:asset/1aafe09ea00ac34aac72c81b2231c06bf3a9d9b4.png";
import imgBody from "figma:asset/1a413cd80898ffd623e2d00cdc75f9c53f9c1159.png";
import imgPasteYourConten2 from "figma:asset/4ac23b5b7e7a2b21ee720cd8c9f2c43a02f5e9ea.png";
import imgPasteYourConten3 from "figma:asset/0df4295887eb4cb5dd10398bf3fb6998fce3652c.png";
import imgBody1 from "figma:asset/c96be744310242154aa56036fa5ace0649f3fb9b.png";
import imgPasteYourConten4 from "figma:asset/e0771c0eb8e4da143fd03c78b7db8ed3a603ccf6.png";
import imgPasteYourConten5 from "figma:asset/919207b939350521e8c1749eb3284ac1b1827e7d.png";
import imgBody2 from "figma:asset/f1a46031843a67a7c012ccaa5531dccfa1dca335.png";

function Screen() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Screen">
      <div
        className="absolute h-[453.508px] left-[166.75px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-166.75px_-22.3721px] mask-size-[499px_499px] top-[22.372px] w-[171.323px]"
        data-name="Paste Your Conten"
        style={{ maskImage: `url('${imgPasteYourConten}')` }}
      >
        <img
          alt="Mobile app screen content"
          className="block max-w-none size-full"
          height="453.5078430175781"
          src={imgPasteYourConten1}
          width="171.32333374023438"
        />
      </div>
    </div>
  );
}

function IPhoneSpaceSilverLeft() {
  return (
    <div
      className="absolute left-0 overflow-clip size-[499px] top-0"
      data-name="iPhone Space Silver Left"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat left-0 size-[499px] top-0"
        data-name="Body"
        style={{ backgroundImage: `url('${imgBody}')` }}
      />
      <Screen />
    </div>
  );
}

function Screen1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Screen">
      <div
        className="absolute h-[453.092px] left-[159.182px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-159.182px_-22.7871px] mask-size-[499px_499px] top-[22.787px] w-[171.407px]"
        data-name="Paste Your Conten"
        style={{ maskImage: `url('${imgPasteYourConten2}')` }}
      >
        <img
          alt="Mobile app screen content"
          className="block max-w-none size-full"
          height="453.0920104980469"
          src={imgPasteYourConten3}
          width="171.40650939941406"
        />
      </div>
    </div>
  );
}

function IPhoneSpaceSilverRight() {
  return (
    <div
      className="absolute left-[353px] overflow-clip size-[499px] top-0"
      data-name="iPhone Space Silver Right"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat left-0 size-[499px] top-0"
        data-name="Body"
        style={{ backgroundImage: `url('${imgBody1}')` }}
      />
      <Screen1 />
    </div>
  );
}

function Screen2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Screen">
      <div
        className="absolute h-[481px] left-[145px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-145px_-28px] mask-size-[499px_499px] top-7 w-[207px]"
        data-name="Paste Your Conten"
        style={{ maskImage: `url('${imgPasteYourConten4}')` }}
      >
        <img
          alt="Mobile app screen content"
          className="block max-w-none size-full"
          height="480.9999694824219"
          src={imgPasteYourConten5}
          width="207"
        />
      </div>
    </div>
  );
}

function IPhoneSpaceSilverFront() {
  return (
    <div
      className="absolute left-[173px] overflow-clip size-[499px] top-0"
      data-name="iPhone Space Silver Front"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat left-0 size-[499px] top-0"
        data-name="Body"
        style={{ backgroundImage: `url('${imgBody2}')` }}
      />
      <Screen2 />
    </div>
  );
}

export default function Group1597880681() {
  return (
    <div className="relative size-full">
      <IPhoneSpaceSilverLeft />
      <IPhoneSpaceSilverRight />
      <IPhoneSpaceSilverFront />
    </div>
  );
}