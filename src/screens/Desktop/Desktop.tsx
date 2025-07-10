import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Desktop = (): JSX.Element => {
  return (
    <div className="w-screen h-screen overflow-hidden relative m-0 p-0" style={{ 
      width: '100vw', 
      height: '100vh',
      minWidth: '100vw',
      minHeight: '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh'
    }}>
      <div className="w-full h-full relative">
        {/* Background image */}
        <img
          className="absolute w-full h-full top-0 left-0 object-cover object-center"
          style={{ width: '100vw', height: '100vh' }}
          alt="Hospital building"
          src="/image copy.png"
        />

        {/* Header */}
        <header className="absolute w-full h-[120px] top-0 left-0 bg-white shadow-[0px_4px_4px_#00000040] flex flex-row items-center px-8" style={{ width: '100vw' }}>
          <div className="flex flex-row items-center justify-start space-x-6 w-[200px] flex-shrink-0">
            <img
              className="w-[70px] h-[70px] object-cover"
              alt="Ph seal Imus"
              src="/Ph_seal_Imus copy.png"
            />
            <img
              className="w-[70px] h-[70px] object-cover"
              alt="Imus logo"
              src="/20250625_092038 copy.jpg"
            />
            <img
              className="w-[70px] h-[70px] object-cover"
              alt="Hospital logo"
              src="/20250625_092019 copy.jpg"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-auto">
            <h1 className="font-black text-[#0d07c0] text-[36px] font-['Inter',Helvetica] text-center">
              OSPITAL NG IMUS
            </h1>
            <p className="font-normal italic text-[#006f07] text-[18px] font-['Libre_Bodoni',Helvetica] text-center">
              We serve, We Care
            </p>
          </div>
        </header>

        {/* Welcome text */}
        <div className="absolute w-full top-[140px] left-0 right-0 flex justify-center px-4">
          <h2 className="font-medium text-white text-[48px] font-['Inter',Helvetica]" style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
          }}>
            Welcome to Ospital ng Imus!
          </h2>
        </div>

        {/* Main form card */}
        <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 rounded-[20px] shadow-[0px_4px_4px_#00000040] backdrop-blur-sm" style={{ 
          width: '500px',
          padding: '40px'
        }}>
          <CardContent className="p-0">
            <h3 className="font-medium text-[#666666] text-[18px] font-['Inter',Helvetica] mb-8 text-center">
              Enter your information to check your Patient Record:
            </h3>

            {/* Form layout */}
            <div className="space-y-4">
              {/* Patient ID */}
              <div>
                <Input
                  className="h-[50px] rounded-[8px] border border-solid border-gray-300 text-base placeholder:text-gray-500"
                  placeholder="Patient's ID No.:"
                />
              </div>

              {/* Lastname */}
              <div>
                <Input
                  className="h-[50px] rounded-[8px] border border-solid border-gray-300 text-base placeholder:text-gray-500"
                  placeholder="Lastname:"
                />
              </div>

              {/* Firstname */}
              <div>
                <Input
                  className="h-[50px] rounded-[8px] border border-solid border-gray-300 text-base placeholder:text-gray-500"
                  placeholder="Firstname:"
                />
              </div>

              {/* Middlename and Suffix row */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  className="h-[50px] rounded-[8px] border border-solid border-gray-300 text-base placeholder:text-gray-500"
                  placeholder="Middlename:"
                />
                <Input
                  className="h-[50px] rounded-[8px] border border-solid border-gray-300 text-base placeholder:text-gray-500 placeholder:text-sm"
                  placeholder="Suffix: (Jr, III)"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <Input
                  className="h-[50px] rounded-[8px] border border-solid border-gray-300 text-base placeholder:text-gray-500"
                  placeholder="Date of Birth:"
                />
              </div>

              {/* Search button */}
              <div className="pt-4">
                <Button className="w-full h-[50px] bg-[#1e40af] hover:bg-[#1d4ed8] rounded-[8px] text-white text-[18px] font-medium">
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};