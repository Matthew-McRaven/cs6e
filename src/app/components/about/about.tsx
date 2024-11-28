import type { FC } from "react";

import Link from "next/link";

import ContentContainer from "@components/content-container";
import { Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { List, ListItem } from "@/components/list";

const About: FC = () => {
  return (
    <ContentContainer>
      <div className="container grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:py-32">
        <div className="flex flex-col items-center">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            className="rounded w-40"
            src="https://seaver.pepperdine.edu/academics/faculty/images/stan-warford-209639.jpg"
            alt="Picture of J. Stanley Warford, author of the book"
          />
          <Text variant="large">J. Stanley Warford</Text>
          <Link className="pt-2 text-center" href="https://seaver.pepperdine.edu/academics/faculty/stan-warford/">
            <Text variant="muted">Professor of Computer Science</Text>
            <Text variant="muted">Pepperdine University</Text>
          </Link>
        </div>
        <div>
          <p>
            Two courses, <span className="font-bold">Computer Systems</span> and{" "}
            <span className="font-bold">Computer Organization</span> are available on YouTube, or within the Resources
            section of this site.
          </p>
          <List>
            <ListItem>Video-recorded lectures</ListItem>
            <ListItem>Lecture slides</ListItem>
            <ListItem>Other resources</ListItem>
          </List>
          <Button asChild>
            <Link href="#">Visit the Resources page</Link>
          </Button>
        </div>
      </div>
    </ContentContainer>
  );
};

export default About;
