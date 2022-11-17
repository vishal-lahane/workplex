import Image from "next/image";
interface Props {
  img: any;
}

const PartnerLogo = ({ img }: Props) => {
  return (
    <>
      <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
        <div className="empl-thumb text-center px-3 py-4">
          <Image src={img} className="img-fluid mx-auto" alt="" />
        </div>
      </div>
    </>
  );
};

export default PartnerLogo;
