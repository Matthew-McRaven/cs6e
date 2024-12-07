import { getChineseEdition } from "./editions/chinese";
import { getFifthEdition } from "./editions/fifth";
import { getFourthEdition } from "./editions/fourth";
import tableOfContent from "./table-of-contents.json";

export const getTableOfContents = () => {
  return tableOfContent;
};

export const getPastEditions = () => {
  return Promise.all([getFifthEdition(), getFourthEdition(), getChineseEdition()]).then((editions) =>
    editions.map(nameToSlug)
  );
};

export const getEdition = async (slug: string) => {
  const editions = await getPastEditions();

  const edition = editions.find((ed) => ed.slug === slug);

  if (!edition) {
    throw new Error("Could not find edition with slug " + slug);
  }

  return edition;
};

function toKebabCase(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, "-");
}

const nameToSlug = <TEdition extends { editionName: string }>(input: TEdition): TEdition & { slug: string } => {
  return {
    slug: toKebabCase(input.editionName),
    ...input,
  };
};
