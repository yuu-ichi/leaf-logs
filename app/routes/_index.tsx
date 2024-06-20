import type { MetaFunction } from "@remix-run/node";
import Article from "~/components/article";
import articles from "~/data/articles";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Leaf Logs" }];
};

export async function loader() {
  return json({
    articles: articles,
  });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const articles = data.articles;
  if (!articles) return null;
  return (
    <div className="container max-w-4xl mx-auto px-4">
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          heading={article.heading}
          slug={article.slug}
          tags={article.tags}
          createAt={article.createAt}
        />
      ))}
    </div>
  );
}
