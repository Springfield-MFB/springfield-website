import { useStore } from "@/store";
import Modal from ".";
import Image from "next/image";
import { TEAM_MEMEBERS } from "@/config";
import { capitalizeWords } from "@/lib";

type Member = (typeof TEAM_MEMEBERS)[number];

function Content({ member }: { member: Member }) {
  return (
    <div className="lg:px-8 pb-8">
      <div className="overflow-auto lg:overflow-hidden h-[65vh] lg:h-auto flex flex-col md:flex-row">
        {/* Left Section: Image */}
        <div className="md:w-1/3 px-4 flex flex-col items-center">
          <Image
            src={member.image} // Replace with your image path
            alt="photo Mr Fakayode Taiwo Olusola"
            width={1000}
            height={1000}
            className="rounded-lg h-[250px] w-[300px] object-cover"
          />
          <div className="text-center mt-4">
            <h2 className="text-base font-bold text-gray-800">
              {capitalizeWords(member.name)}
            </h2>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-2/3 p-6">
          <p className="text-[#2B2B2B] text-xs leading-7">{member.summary}</p>
        </div>
      </div>
    </div>
  );
}

const ProfileModal = ({ member }: { member: Member }) => {
  function Title() {
    return (
      <div className=" lg:px-8 py-4 border-b text-sm lg:text-2xl font-bold capitalize">
        {capitalizeWords(member.role)}
      </div>
    );
  }

  const { isOpen, closeModal } = useStore();

  if (!isOpen) return null;
  return (
    <Modal
      className="p-0 w-[95%] lg:max-w-6xl"
      isOpen={isOpen}
      closeModal={closeModal}
      title={Title()}
      content={<Content member={member} />}
    />
  );
};

export default ProfileModal;
