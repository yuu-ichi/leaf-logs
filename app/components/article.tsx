import LinkButton from "./parts/linkButton";
import { dateFormat } from "~/libs/dateFormat";
type Props = {
  title: string;
  heading: string;
  slug: string;
  tags: string[];
  createAt: string;
};

const Article = (props: Props) => {
  const to = "/articles/" + props.slug;
  return (
    <article className="rounded overflow-hidden shadow-lg my-3">
      <div className="px-6 py-4">
        <div className="mb-2">
          <h2 className="font-bold text-xl leading-normal">{props.title}</h2>
        </div>
        <div className="mb-2">
          <h3 className="text-gray-700 font-normal text-sm md:text-base leading-8 line-clamp-2">
            {props.heading}
          </h3>
        </div>
        <div className="text-right m-2">
          <LinkButton to={to}>もっと読む</LinkButton>
        </div>
        <div className="text-right m-2">
          <time className="font-normal text-xs">
            {dateFormat(props.createAt)}
          </time>
        </div>
        <div className="px-2">
          {props.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Article;
