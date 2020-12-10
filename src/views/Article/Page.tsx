import * as React from "react";

import { usePreferences } from "@hooks";

import { RichTextContent } from "@components/atoms";
import { Breadcrumb, Breadcrumbs } from "../../components";

interface PageNavigationElement {
  active: boolean;
  label: string;
  url: string;
}

interface PageProps {
  breadcrumbs: Breadcrumb[];
  headerImage: string | null;
  navigation: PageNavigationElement[];
  page: {
    contentJson: any;
    title: string;
    translation: {
      contentJson: any;
      title: string;
    };
  };
}
export const Page: React.FC<PageProps> = ({
  breadcrumbs,
  headerImage,
  navigation,
  page,
}) => {
  const {
    preferences: { locale },
  } = usePreferences();
  return (
    <div className="article-page">
      <div
        className="article-page__header"
        style={headerImage ? { backgroundImage: `url(${headerImage})` } : null}
      >
        <span className="article-page__header__title">
          <h1>
            {locale === "it" && page.translation?.title
              ? page.translation.title
              : page.title}
          </h1>
        </span>
      </div>
      <div className="container">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="article-page__container">
          <div className="article-page__navigation" />
          <div className="article-page__content">
            <RichTextContent
              descriptionJson={
                locale === "it" && page.translation?.contentJson
                  ? page.translation.contentJson
                  : page.contentJson
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
