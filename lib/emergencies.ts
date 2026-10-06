export type Emergency = {
  title: string;
  donts: string[];
  steps: string[];
};

export const emergencies: Record<string, Emergency> = {
  choking: {
    title: "Choking",
    donts: [
      "Don't blindly sweep the mouth with your fingers — you may push the object deeper.",
      "Don't pull on string or thread you see in the mouth or throat.",
      "Don't give food or water while the airway is blocked.",
    ],
    steps: [
      "Stay calm and restrain your pet gently so you don't get bitten.",
      "Open the mouth and look for a visible object. Remove it only if you can grasp it easily.",
      "For small pets, hold them with their head down and give 5 firm back blows between the shoulder blades.",
      "For larger dogs, perform abdominal thrusts: stand behind, place a fist just below the rib cage, and push up and forward 5 times.",
      "Recheck the mouth and remove the object if it is now visible.",
      "If your pet stops breathing, begin rescue breaths and head to the nearest emergency vet immediately.",
    ],
  },
  poisoning: {
    title: "Poisoning",
    donts: [
      "Don't induce vomiting unless a vet or poison control tells you to.",
      "Don't give milk, oil, salt, or home remedies.",
      "Don't wait for symptoms to appear before calling for help.",
    ],
    steps: [
      "Move your pet away from the substance and keep other animals away.",
      "Identify what was eaten, how much, and when. Keep the packaging or a sample.",
      "Call your vet or ASPCA Animal Poison Control at (888) 426-4435 right away.",
      "Follow the instructions you are given exactly.",
      "Watch for vomiting, drooling, tremors, or lethargy and report any changes.",
      "Bring the packaging or sample with you to the clinic.",
    ],
  },
  heatstroke: {
    title: "Heatstroke",
    donts: [
      "Don't use ice or ice-cold water — it can cause shock.",
      "Don't cover your pet with a wet towel; it traps heat.",
      "Don't force water into their mouth.",
    ],
    steps: [
      "Move your pet to a shaded or air-conditioned area immediately.",
      "Wet their body with cool (not cold) water, focusing on the belly, paws, and neck.",
      "Place them in front of a fan to increase evaporation.",
      "Offer small amounts of cool water if they are alert and can drink.",
      "Stop active cooling once they seem more comfortable to avoid overcooling.",
      "Get to a vet even if they seem better — organ damage can be delayed.",
    ],
  },
  bleeding: {
    title: "Severe Bleeding",
    donts: [
      "Don't remove soaked bandages — add new layers on top.",
      "Don't use a tourniquet unless bleeding is life-threatening and won't stop.",
      "Don't apply creams or powders to deep wounds.",
    ],
    steps: [
      "Muzzle your pet if needed — pain can make any animal bite.",
      "Apply firm, direct pressure to the wound with a clean cloth or gauze.",
      "Hold pressure for at least 3 minutes without lifting to check.",
      "If blood soaks through, add more layers and keep pressing.",
      "Elevate the limb above the heart if there is no suspected fracture.",
      "Keep your pet warm and still and transport to a vet immediately.",
    ],
  },
  seizure: {
    title: "Seizure",
    donts: [
      "Don't put your hands or anything in their mouth.",
      "Don't try to hold or restrain them during the seizure.",
      "Don't leave them unattended.",
    ],
    steps: [
      "Stay calm and note the time the seizure started.",
      "Move furniture and objects away so they can't injure themselves.",
      "Dim lights and reduce noise around them.",
      "Keep them away from stairs and water.",
      "After the seizure ends, keep them warm, quiet, and speak softly.",
      "Call your vet. Seek emergency care if it lasts over 5 minutes or repeats.",
    ],
  },
  bloat: {
    title: "Bloat (GDV)",
    donts: [
      "Don't wait to see if it passes — bloat can be fatal within hours.",
      "Don't give food, water, or medication.",
      "Don't let your dog exercise or walk around.",
    ],
    steps: [
      "Recognize signs: swollen belly, retching without vomiting, drooling, restlessness.",
      "Call the nearest emergency vet and tell them you suspect bloat.",
      "Keep your dog as calm and still as possible.",
      "Transport them immediately, lifting carefully to support the abdomen.",
    ],
  },
  "hit-by-car": {
    title: "Hit by Car",
    donts: [
      "Don't assume they're fine if they get up and walk — internal injuries are common.",
      "Don't give pain medication meant for humans.",
      "Don't move them more than necessary.",
    ],
    steps: [
      "Make sure you are safe from traffic before approaching.",
      "Approach slowly and muzzle them if possible to prevent bites.",
      "Slide them onto a flat board, blanket, or jacket to use as a stretcher.",
      "Keep their head and spine in line and minimize movement.",
      "Cover them with a blanket to keep them warm.",
      "Call ahead and drive to the nearest emergency vet.",
    ],
  },
  burns: {
    title: "Burns",
    donts: [
      "Don't apply ice, butter, or ointments.",
      "Don't pop any blisters.",
      "Don't use cotton wool that can stick to the wound.",
    ],
    steps: [
      "Remove your pet from the source of the burn safely.",
      "Flush the area with cool running water for 10–20 minutes.",
      "For chemical burns, wear gloves and rinse for at least 20 minutes.",
      "Cover loosely with a clean, damp, non-stick dressing.",
      "Keep them warm, as burned pets can lose body heat quickly.",
      "Take them to a vet for assessment and pain relief.",
    ],
  },
};

export function getEmergency(type: string) {
  return emergencies[type];
}
