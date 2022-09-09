import windows95Sound from "../assets/Windows-95-startup-sound.wav";

const playSound = sound => new Audio(sound).play();

export const playWindowsStartSound = () => playSound(windows95Sound);
