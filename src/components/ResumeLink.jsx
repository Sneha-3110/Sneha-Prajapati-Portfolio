import { FiLink } from "react-icons/fi";

export default function ResumeLink() {
  return (
    <a
      href="https://drive.google.com/file/d/1Ro-AoW1pEsHq72ao2nByUiuu3cN2LCCa/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2 inline-flex items-center text-[16px] text-[#915eff] hover:text-white transition-all duration-200 cursor-pointer"
    >
      <FiLink className="text-[20px] transition-colors duration-200 hover:text-white" />
    </a>
  );
}
