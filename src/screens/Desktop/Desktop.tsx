import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Desktop = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    {
      id: "patientId",
      label: "Patient's ID No.:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "lastname",
      label: "Lastname:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "firstname",
      label: "Firstname:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "middlename",
      label: "Middlename:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "suffix",
      label: "Suffix: (Optional)",
      gridArea: "col-span-1",
      className: "w-full",
    },
    { id: "age", label: "Age:", gridArea: "col-span-1", className: "w-full" },
    { id: "sex", label: "Sex:", gridArea: "col-span-1", className: "w-full" },
    {
      id: "dob",
      label: "Date of Birth:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "civilStatus",
      label: "Civil Status:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "phicNo",
      label: "PHIC No.: (Optional)",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "contactNo",
      label: "Contact No.:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "address",
      label: "Address:",
      gridArea: "col-span-full",
      className: "w-full",
    },
    {
      id: "contactPerson",
      label: "Contact Person:",
      gridArea: "col-span-1",
      className: "w-full",
    },
    {
      id: "contactPersonNo",
      label: "Contact Person No.:",
      gridArea: "col-span-1",
      className: "w-full",
    },
  ];

  return (
    <div className="flex flex-row justify-center w-full min-h-screen relative">
      <div className="overflow-hidden w-full max-w-[1920px] relative">
        {/* Background image */}
        <img
          className="absolute w-full h-full top-0 left-0 object-cover opacity-80"
          alt="Hospital building"
          src="/20250709_084103.jpg"
        />

        {/* Header */}
        <header className="absolute w-full h-[188px] top-0 left-0 bg-white shadow-[0px_4px_4px_#00000040] opacity-70 flex items-center">
          <div className="flex items-center ml-10">
            <img
              className="w-[117px] h-[117px] object-cover"
             alt="Ph seal Imus"
             src="/Ph_seal_Imus copy.png"
            />
            <img
              className="w-[132px] h-[132px] ml-2 object-cover"
             alt="Imus logo"
             src="/20250625_092038 copy.jpg"
            />
            <img
              className="w-[117px] h-[117px] ml-2 object-cover"
             alt="Hospital logo"
             src="/20250625_092019 copy.jpg"
            />
          </div>

          <div className="ml-20">
            <h1 className="font-black text-[#0d07c0] text-[64px] font-['Inter',Helvetica]">
              OSPITAL NG IMUS
            </h1>
            <p className="font-normal italic text-[#006f07] text-[32px] font-['Libre_Bodoni',Helvetica] text-center">
              We serve, We Care
            </p>
          </div>
        </header>

        {/* Welcome text */}
        <div className="absolute w-[555px] top-[233px] left-1/2 -translate-x-1/2 text-center">
          <h2 className="font-medium text-white text-[64px] font-['Inter',Helvetica] text-shadow-[0px_4px_4px_#00000040]">
            Welcome to ONI!
          </h2>
        </div>

        {/* Main form card */}
        <Card className="absolute w-[1512px] h-[788px] top-[363px] left-1/2 -translate-x-1/2 bg-white rounded-[20px] shadow-[0px_4px_4px_#00000040] opacity-80">
          <CardContent className="p-8">
            <h3 className="font-medium text-[#858585] text-[32px] font-['Inter',Helvetica] mb-8">
              Enter your information to check your Patient ID:
            </h3>

            {/* Form layout */}
            <div className="grid grid-cols-4 gap-6">
              {/* Patient ID */}
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Patient's ID No."
                />
              </div>

              {/* Empty space for layout */}
              <div className="col-span-3"></div>

              {/* Name fields row */}
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Lastname"
                />
              </div>
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Firstname"
                />
              </div>
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Middlename"
                />
              </div>
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Suffix"
                />
              </div>

              {/* Personal details row */}
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Age"
                />
              </div>
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Sex"
                />
              </div>
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Date of Birth"
                />
              </div>
              <div className="col-span-1">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Civil Status"
                />
              </div>

              {/* Contact info row */}
              <div className="col-span-2">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="PHIC No."
                />
              </div>
              <div className="col-span-2">
                <Input
                  className="h-[73px] rounded-[10px] border border-solid border-black"
                  placeholder="Contact No."
                />
              </div>

              {/* Address row */}
              <div className="col-span-4">
                <Input
                  className="h-[71px] rounded-[10px] border border-solid border-black"
                  placeholder="Address"
                />
              </div>

              {/* Emergency contact row */}
              <div className="col-span-2">
                <Input
                  className="h-[71px] rounded-[10px] border border-solid border-black"
                  placeholder="Contact Person"
                />
              </div>
              <div className="col-span-2">
                <Input
                  className="h-[71px] rounded-[10px] border border-solid border-black"
                  placeholder="Contact Person No."
                />
              </div>

              {/* Action buttons */}
              <div className="col-span-1 mt-4">
                <Button className="w-full h-[68px] bg-[#0f1ca9] rounded-[20px] text-white text-[40px] font-['Konkhmer_Sleokchher',Helvetica]">
                  Search
                </Button>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-1 mt-4">
                <Button className="w-full h-[68px] bg-[#0f914a] rounded-[20px] text-white text-[40px] font-['Konkhmer_Sleokchher',Helvetica]">
                  Set Appointment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
