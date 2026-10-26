export const events = [
  {
    date: "DD Mon",
    year: "2026",
    title: "Lecture by an NDA recommended candidate",
    text: "How I prepared, my SSB experience and mistakes to avoid. Venue and time to be added.",
  },
  {
    date: "DD Mon",
    year: "2026",
    title: "Talk by a serving Army officer",
    text: "Life in uniform and what the forces look for in an officer.",
  },
  {
    date: "DD Mon",
    year: "2026",
    title: "Mock SSB day",
    text: "Group tasks, interviews and feedback, all in one day.",
  },
];

export const ssbSteps = [
  {
    title: "Screening",
    text: "We run mock OIR (verbal and non-verbal reasoning) tests and picture perception and discussion (PP&DT) practice.",
  },
  {
    title: "Psychology tests",
    text: "Weekly practice of TAT, WAT, SRT and Self Description to build quick, natural and positive thinking.",
  },
  {
    title: "Group Testing Officer tasks",
    text: "Group discussions, group planning exercise, progressive group tasks and command tasks in the field.",
  },
  {
    title: "Personal interview",
    text: "Mock interviews with serving and retired officers, with feedback on confidence and honesty.",
  },
  {
    title: "Conference",
    text: "Sessions on communication, current affairs, physical fitness and good daily habits.",
  },
];

// Put photos in public/assets/images/gallery/ and set src. Leave src empty for a placeholder.
export const gallery = [
  { src: "", alt: "Morning PT and drill", caption: "Morning PT and drill" },
  { src: "", alt: "Guest lecture", caption: "Guest lecture" },
  { src: "", alt: "Mock GTO", caption: "Mock GTO" },
  { src: "", alt: "NDA visit", caption: "NDA visit" },
  { src: "", alt: "Mock SSB interview", caption: "Mock SSB interview" },
];

// Contact Links go here
export const socials = [
  {
    name: "Email",
    label: "Email DAC",
    href: "mailto:defenceaspirantclub@gmail.com?subject=Enquiry%20about%20DAC",
    external: false,
    icon: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>`,
  },
  {
    name: "Instagram",
    label: "DAC on Instagram",
    href: "https://www.instagram.com/aissms_defence_aspirant_club/",
    external: true,
    icon: `<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>`,
  },
  {
    name: "Telegram",
    label: "DAC Telegram channel",
    href: "https://t.me/YOUR_CHANNEL", // TODO: real channel link
    external: true,
    icon: `<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>`,
  },
  {
    name: "WhatsApp",
    label: "DAC WhatsApp community",
    href: "https://chat.whatsapp.com/IsoszNQGffcJShOew4qRK5", // TODO: real community link
    external: true,
    filled: true,
    icon: `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>`,
  },
];
