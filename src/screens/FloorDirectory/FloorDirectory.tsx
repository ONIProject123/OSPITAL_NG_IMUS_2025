import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowLeft, Building2 } from "lucide-react";

interface FloorDirectoryProps {
  floor: string;
  onBack: () => void;
}

export const FloorDirectory = ({ floor, onBack }: FloorDirectoryProps): JSX.Element => {
  const getFloorTitle = () => {
    switch (floor) {
      case 'ground':
        return 'Ground Floor Directory';
      case '2nd':
        return '2nd Floor Directory';
      case '3rd':
        return '3rd Floor Directory';
      default:
        return 'Floor Directory';
    }
  };

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
        <header className="absolute w-full h-[100px] top-0 left-0 bg-white shadow-[0px_4px_4px_#00000040] flex flex-row items-center px-8" style={{ width: '100vw' }}>
          <div className="flex flex-row items-center justify-start space-x-4 w-[180px] flex-shrink-0">
            <img
              className="w-[60px] h-[60px] object-cover"
              alt="Ph seal Imus"
              src="/Ph_seal_Imus copy.png"
            />
            <img
              className="w-[60px] h-[60px] object-cover"
              alt="Imus logo"
              src="/20250625_092038 copy.jpg"
            />
            <img
              className="w-[60px] h-[60px] object-cover"
              alt="Hospital logo"
              src="/20250625_092019 copy.jpg"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-auto">
            <h1 className="font-black text-[#0d07c0] text-[32px] font-['Inter',Helvetica] text-center">
              OSPITAL NG IMUS
            </h1>
            <p className="font-normal italic text-[#006f07] text-[16px] font-['Libre_Bodoni',Helvetica] text-center">
              We Serve, We Care
            </p>
          </div>
        </header>

        {/* Back Button */}
        <div className="absolute left-6 top-[120px] z-10">
          <Button 
            onClick={onBack}
            className="w-[220px] h-[50px] bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-[8px] flex items-center justify-start px-4 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-3" />
            <span className="text-[16px] font-medium">Back to Main</span>
          </Button>
        </div>

        {/* Floor Title */}
        <div className="absolute w-full top-[140px] left-0 right-0 flex justify-center px-4">
          <h2 className="font-medium text-white text-[48px] font-['Inter',Helvetica]" style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
          }}>
            {getFloorTitle()}
          </h2>
        </div>

        {/* Main content card */}
        <Card className="absolute top-[220px] left-1/2 -translate-x-1/2 bg-white/95 rounded-[20px] shadow-[0px_4px_4px_#00000040] backdrop-blur-sm" style={{ 
          width: '800px',
          minHeight: '400px',
          padding: '40px'
        }}>
          <CardContent className="p-0">
            <div className="flex items-center justify-center mb-8">
              <Building2 className="w-8 h-8 mr-4 text-[#1e40af]" />
              <h3 className="font-medium text-[#666666] text-[24px] font-['Inter',Helvetica] text-center">
                {getFloorTitle()}
              </h3>
            </div>

            {/* Floor content - currently blank as requested */}
            <div className="min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <Building2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500 text-lg">
                  Floor information will be displayed here
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Content coming soon...
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};