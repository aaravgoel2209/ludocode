import { CommonHeader } from "../components/Header/CommonHeader";

type DesktopHeaderProps = {
};

export function DesktopHeader({}: DesktopHeaderProps) {
  return (
    <CommonHeader device="Desktop">
      <div className="col-span-full flex items-center justify-center">
        <h1 className="text-lg font-bold text-white">Desktop</h1>
      </div>
    </CommonHeader>
  );
}
