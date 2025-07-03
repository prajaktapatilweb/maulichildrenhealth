import React from 'react';
import Image from 'next/image';

const Drgalleryitem = ({ item }) => {
  // Define an array of alt texts for each image
const altTexts = [
  "Abbad Dental Clinic - Exterior View",
  "Abbad Dental Clinic - Reception Area",
  "Abbad Dental Clinic - Waiting Room",
  "Abbad Dental Clinic - Treatment Room",
  "Abbad Dental Clinic - Implant Surgery Setup",
  "Abbad Dental Clinic - Pediatric Dentistry Section",
  "Abbad Dental Clinic - Consultation Room",
  "Abbad Dental Clinic - X-Ray Room",
  "Abbad Dental Clinic - Surgery Equipment Setup",
  "Abbad Dental Clinic - Orthodontics Room",
  "Abbad Dental Clinic - Lab Area",
 
];
    return (

        <div
  style={{
    position: 'relative',
    display: 'inline-block',
    borderRadius: '12px',
    padding: '2px',
    backgroundImage: 'linear-gradient(135deg, #fcb950, #520000)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    
  }}
>
  <div
    style={{
      background: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
    }}
  >
    <Image
      alt={altTexts}
      src={`/images/nashikclinic/clinics${item}.webp`}
      width={100}
      height={100}
      layout="responsive"
      className="item"
    />
  </div>
</div>


    );
};
export default Drgalleryitem;
