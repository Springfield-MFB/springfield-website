"use client";
import { useState } from "react";

import { CustomButton } from "@/components/custom-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import ProfileModal from "@/components/modals/profile-modal";
import { PageBoard } from "@/components/page-board";
import { DIRECTORS } from "@/config";
import { openProfileModal } from "@/hooks/useModals";
import Image from "next/image";
import { capitalizeWords } from "@/lib";

type Member = (typeof DIRECTORS)[number];

export const BoardOfDirectorPage = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const openModal = (member: Member) => {
    openProfileModal();
    setSelectedMember(member);
  };

  return (
    <div>
      <PageBoard
        backgroundImage="url('/images/director-bg.png')"
        heading="Board Of Directors"
        desc="Our Board of Directors brings together experienced leaders dedicated to guiding our 
        organization toward sustained growth and excellence. With their strategic vision and commitment,
         they ensure we remain true to our mission and values."
      />

      <MaxWidthWrapper className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {DIRECTORS.map((member, index) => (
            <div
              key={index}
              className="group w-full h-[380px] relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="w-full h-full hover:scale-[1.07] transition-all duration-500 object-cover"
              />
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-75  p-4">
                <div className="transition-transform duration-500 transform group-hover:-translate-x-[150%]">
                  <p className="text-white text-lg">
                    {capitalizeWords(member.name)}
                  </p>
                </div>

                {/* "View Profile" Button Sliding Right */}
                <div className="absolute bottom-0 left-0 right-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 p-4 ">
                  <CustomButton
                    onClick={() => openModal(member)}
                    className="bg-white text-black"
                    arrowClassName="text-black"
                  >
                    View Profile
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedMember && <ProfileModal member={selectedMember} />}
      </MaxWidthWrapper>
    </div>
  );
};
