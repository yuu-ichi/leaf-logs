import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Leaf Logs About" }];
};

export default function About() {
  return (
    <div className="container max-w-4xl mx-auto">
      <section className="m-4 text-base text-center">
        <div className="rounded border-2 border-gray-100 my-4 px-4">
          <div className="my-4 px-4">
            <h1 className="font-bold text-base">Yuuichi Nishioka</h1>
          </div>
          <div className="my-4 px-4">
            <h2 className="font-bold text-base">Engineer</h2>
          </div>
        </div>
        <div className="rounded border-2 border-gray-100 my-4 px-4">
          <div className="m-2">
            <h3 className="font-bold text-base">スキル</h3>
          </div>
          <div className="flex flex-wrap justify-items-center mb-4">
            <div className="rounded-full border-2 text-center bg-blue-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">PHP</label>
            </div>
            <div className="rounded-full border-2 text-center bg-blue-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">
                JavaScript
              </label>
            </div>
            <div className="rounded-full border-2 text-center bg-blue-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">HTML</label>
            </div>
            <div className="rounded-full border-2 text-center bg-blue-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">CSS</label>
            </div>
          </div>
        </div>

        <div className="rounded border-2 border-gray-100 my-4 px-4">
          <div className="m-2">
            <h3 className="font-bold text-base">趣味</h3>
          </div>
          <div className="flex flex-wrap justify-items-center mb-4">
            <div className="rounded-full border-2 text-center bg-green-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">散歩</label>
            </div>
            <div className="rounded-full border-2 text-center bg-green-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">アニメ</label>
            </div>
            <div className="rounded-full border-2 text-center bg-green-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">ゲーム</label>
            </div>
            <div className="rounded-full border-2 text-center bg-green-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">
                アウトドア
              </label>
            </div>
            <div className="rounded-full border-2 text-center bg-green-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">釣り</label>
            </div>
            <div className="rounded-full border-2 text-center bg-green-600 text-white w-1/3">
              <label className="text-sm	md:text-base font-normal">映画</label>
            </div>
          </div>
        </div>
        <div className="rounded border-2 border-gray-100 my-4 px-4">
          <div className="m-2">
            <h3 className="font-bold text-base">当サイトについて</h3>
          </div>
          <div className="m-2">
            <p className="text-sm">
              自分の活動や日々感じたことや学習したことなどをアウトプットするため、作成しています。
              ご興味がある方は、不定期ではありますが、更新しようと思いますので、よろしくお願いいたします。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
