import React from 'react';
import arafathImg from '../../assets/image/arafath.jpeg';
import vithuImg from '../../assets/image/vithushan.jpeg';
import fareehaImg from '../../assets/image/Fareeha.jpeg';
import placeholderImg from '../../assets/image/supervisior.jpeg'; // Placeholder image
import { Link } from '@mui/material';

interface ProfileCardProps {
  image: string;
  name: string;
  id: string;
  email: string;
  phone: string;
  specialization: string;
}

const Members = () => {
  return (
    <section className="bg-blue-950 flex flex-col justify-center items-stretch mt-14 px-16 py-12 rounded-[50px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="max-w-4xl mx-auto">
        {/* Label for group members */}
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Group Members</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <ProfileCard
            image={arafathImg}
            name="ARAFATH"
            id="ICT/19/805"
            email="ict19805@fot.sjp.ac.lk"
            phone="0754123799"
            specialization="Software Technology"
          />
          <ProfileCard
            image={fareehaImg}
            name="A.L.F. FAREEHA"
            id="ICT/19/823"
            email="ict19823@fot.sjp.ac.lk"
            phone="0766951999"
            specialization="Software Technology"
          />
          <ProfileCard
            image={vithuImg}
            name="S. VITHUSHAN"
            id="ICT/19/868"
            email="ict19868@fot.sjp.ac.lk"
            phone="0772644218"
            specialization="Software Technology"
          />
        </div>
        <h2 className="text-3xl font-bold text-white mt-10 mb-10 text-center">Research Supervisor</h2>
        <div className="content-center">  {/* Added content-center */}
          {/* ProfileCard for the supervisor */}
          <ProfileCard
            image={placeholderImg} // Use placeholder for missing image
            name="Mr.Chamila Karunatileka"
            id="Faculty of Technology,University of Sri Jayewardenepura"
            email="chamilakarunatilake@sjp.ac.lk"
            phone="07644608026"
            specialization="Lecurer"
          />
        </div>
      </div>
    </section>
  );
};

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, id, email, phone, specialization }) => (
  <article className="bg-white flex flex-col items-center p-5 rounded-lg shadow-lg">
    <div className="bg-amber-400 rounded-full p-3 mb-5">
      <img
        loading="lazy"
        src={image}
        className="h-48 w-48 md:h-64 md:w-64 object-cover rounded-full"
        alt={name}
      />
    </div>
    <div className="text-black text-center">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p>{specialization}</p>
      <p>{id}</p>
      <p>{phone}</p>
      <Link>{email}</Link>
    </div>
  </article>
);

export default Members;
