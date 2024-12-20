import type { FC, ReactNode } from "react";

import ContentContainer from "@components/content-container";

import Image from "next/image";

interface Author {
  name: string;
  image: string;
  bio: string;
  achievements: {
    icon: ReactNode;
    text: string;
  }[];
}

type AuthorProps = Author;

const Author: FC<AuthorProps> = ({ name, image, bio, achievements }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl">
          <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-full" />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 text-center">{name}</h3>
      <p className="text-gray-600 leading-relaxed text-center">{bio}</p>
      <div className="grid grid-cols-1 gap-3">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center space-x-2">
            {achievement.icon}
            <span className="text-sm text-gray-700">{achievement.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface AuthorSectionProps {
  authors: Author[];
}

const AuthorSection: FC<AuthorSectionProps> = ({ authors }) => {
  return (
    <ContentContainer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet the Authors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {authors.map((author, index) => (
            <Author key={index} {...author} />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
};

export default AuthorSection;
