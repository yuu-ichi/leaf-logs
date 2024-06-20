import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, json, MetaFunction } from "@remix-run/node";
import articles from "~/data/articles";

export async function loader({ params }: LoaderFunctionArgs) {
  const article = articles.find((article) => article.slug === params.slug);
  return json({
    article: article,
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = data
    ? data.article
      ? "Leaf Logs " + data.article.title
      : "Leaf Logs"
    : "Leaf Logs";

  return [{ title: title }];
};

export default function Articles() {
  const data = useLoaderData<typeof loader>();
  const article = data.article;

  if (!article) {
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return (
    <section className="container max-w-4xl mx-auto px-4">
      <div className="my-8 flex">
        <h2 className="font-bold text-xl leading-normal">{article.title}</h2>
      </div>
      <div className="my-8 flex">
        <p className="font-normal	text-sm md:text-base leading-8">
          {article.heading}
        </p>
      </div>
      <div className="mx-0.5">
        {article.contents.map((content, index) => (
          <div key={index}>
            <div className="my-8">
              <h3 className="font-bold text-base leading-8">
                {content.heading}
              </h3>
              <div className="my-4">
                <p className="font-normal	text-sm md:text-base leading-8">
                  {content.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        {article.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
}
