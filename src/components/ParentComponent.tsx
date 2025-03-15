import { useRef, useEffect } from "react";
import Header from "./molecules/Header.component";
import SectionTwoForm from "./organisms/SectionTwoForm.component";

const ParentComponent = () => {
  const sectionTwoFormRef = useRef<HTMLDivElement>(null); // Changed to HTMLDivElement

  // Make the ref available globally for the Header component
  useEffect(() => {
    if (sectionTwoFormRef.current) {
      window.sectionTwoFormRef = sectionTwoFormRef.current;
    }
  }, []);

  return (
    <>
      <Header /> {/* Removed the prop as Header doesn't accept it */}
      {/* ... other components ... */}
      <div ref={sectionTwoFormRef}>
        <SectionTwoForm />
      </div>
    </>
  );
};

export default ParentComponent; 