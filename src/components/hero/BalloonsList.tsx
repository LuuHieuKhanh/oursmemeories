"use client";

import { useState } from "react";
import { Balloon } from "./Balloon";
import { useData } from "@/lib/DataProvider";
import { ProfileFormModal } from "../forms/ProfileFormModal";

const FRIENDS = [
  { name: "Khánh", accentColor: "var(--baby-blue)", textColor: "#5A9DB5", namePos: { bottom: "-40px", left: "50%", transform: "translateX(-50%)" }, mt: "mt-0" },
  { name: "Nguyên", accentColor: "var(--lavender)", textColor: "#8670A8", namePos: { top: "-45px", left: "50%", transform: "translateX(-50%)" }, mt: "mt-8 lg:mt-16" },
  { name: "Ngân", accentColor: "var(--peach)", textColor: "#C77A5C", namePos: { bottom: "-40px", left: "50%", transform: "translateX(-50%)" }, mt: "mt-0 lg:mt-32" },
  { name: "Linh", accentColor: "var(--mint)", textColor: "#73AB85", namePos: { top: "-45px", left: "50%", transform: "translateX(-50%)" }, mt: "mt-8 lg:mt-12" },
  { name: "Châu", accentColor: "var(--coral)", textColor: "#C77353", namePos: { bottom: "-40px", left: "50%", transform: "translateX(-50%)" }, mt: "mt-0" },
];

export function BalloonsList() {
  const { friends } = useData();
  const [editingFriendId, setEditingFriendId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[1100px] mx-auto mt-12 z-20 px-2 md:px-8">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-y-0 lg:gap-x-4">
        
        {/* Row 1 (Mobile) / Left Side (Desktop) */}
        <div className="flex flex-row justify-center items-start gap-x-2 sm:gap-x-6 lg:gap-x-4">
          {FRIENDS.slice(0, 3).map((f, idx) => {
            const dbFriend = friends.find(db => db.name === f.name);
            return (
              <div key={f.name} className={`flex justify-center ${f.mt}`}>
                <Balloon 
                  name={f.name}
                  imageSrc={dbFriend?.imageSrc}
                  accentColor={f.accentColor}
                  textColor={f.textColor}
                  delay={idx * 0.4}
                  namePos={f.namePos}
                  onEdit={() => dbFriend && setEditingFriendId(dbFriend.id)}
                />
              </div>
            )
          })}
        </div>

        {/* Row 2 (Mobile) / Right Side (Desktop) */}
        <div className="flex flex-row justify-center items-start gap-x-2 sm:gap-x-6 lg:gap-x-4 -mt-8 lg:mt-0">
          {FRIENDS.slice(3, 5).map((f, idx) => {
            const dbFriend = friends.find(db => db.name === f.name);
            return (
              <div key={f.name} className={`flex justify-center ${f.mt}`}>
                <Balloon 
                  name={f.name}
                  imageSrc={dbFriend?.imageSrc}
                  accentColor={f.accentColor}
                  textColor={f.textColor}
                  delay={(idx + 3) * 0.4}
                  namePos={f.namePos}
                  onEdit={() => dbFriend && setEditingFriendId(dbFriend.id)}
                />
              </div>
            )
          })}
        </div>
        
      </div>

      <ProfileFormModal 
        friendId={editingFriendId}
        isOpen={!!editingFriendId}
        onClose={() => setEditingFriendId(null)}
        context="profile"
      />
    </div>
  );
}
