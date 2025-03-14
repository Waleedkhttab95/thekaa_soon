import { useRef } from "react";
import Header from "./molecules/Header.component";
import SectionTwoForm from "./path/to/SectionTwoForm"; // Adjust the import path

const ParentComponent = () => {
  const sectionTwoFormRef = useRef<HTMLElement>(null); // Create a ref

  return (
    <>
      <Header sectionTwoFormRef={sectionTwoFormRef} /> {/* Pass the ref to Header */}
      {/* ... other components ... */}
      <div ref={sectionTwoFormRef}>
        <SectionTwoForm /> {/* Attach the ref to SectionTwoForm */}
      </div>
    </>
  );
};

export default ParentComponent; 