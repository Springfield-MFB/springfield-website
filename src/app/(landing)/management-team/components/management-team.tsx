"use client";

import { CustomButton } from "@/components/custom-button";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import ProfileModal from "@/components/modals/profile-modal";
import { PageBoard } from "@/components/page-board";
import { TEAM_MEMEBERS } from "@/config";
import { openProfileModal } from "@/hooks/useModals";
import { set } from "date-fns";
import Image from "next/image";
import { useState } from "react";

type Member = (typeof TEAM_MEMEBERS)[number];

export const ManagementTeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const openModal = (member: Member) => {
    openProfileModal();
    setSelectedMember(member);
  };

  return (
    <div>
      <PageBoard
        backgroundImage="url('/images/director-bg.png')"
        heading="Managements Team"
        desc="Our Management Team comprises skilled professionals dedicated to executing our vision and 
        driving operational excellence. Their expertise and leadership ensure the seamless 
        delivery of our goals and commitment to innovation."
      />

      <MaxWidthWrapper className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          {TEAM_MEMEBERS.map((member, index) => (
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
                  <h3 className="text-white text-lg font-bold">
                    {member.role}
                  </h3>
                  <p className="text-white text-sm">{member.name}</p>
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
