import Image from "next/image";
import chatgptIcon from "@/public/chatgpt.svg";

export default function AuthPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center h-screen py-2">
      <div className="auth-header pt-10">
        <Image
          src={chatgptIcon}
          alt="This is icon of ChatGPT"
          width="125"
          height="125"
          className="always-spin"
        />
      </div>
      <div className="flex-grow pt-2 max-w-3xl min-w-80">{children}</div>
      <div className="auth-footer flex flex-row gap-3 p-2">
        <p className="chatgpt-branch-green hover:cursor-pointer">Term of Use</p>
        <p>|</p>
        <p className="chatgpt-branch-green hover:cursor-pointer">
          Privacy Policy
        </p>
      </div>
    </div>
  );
}
