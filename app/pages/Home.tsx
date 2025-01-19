export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        수업용 프로젝트
      </h1>
      <div className="grid gap-y-2 mb-4">
        <div>
          <p>Navbar</p>
          <p>- react-router</p>
        </div>
        <div>
          <p>News</p>
          <p>- tailwindcss, temporal-polyfill</p>
          <p>- hnpwa api</p>
        </div>
        <div>
          <p>Movies</p>
          <p>- sass-module</p>
          <p>- yts.ms api</p>
        </div>
        <div>
          <p>Todo</p>
          <p>- tailwindcss, recoil</p>
          <p>- jsonplaceholder-todos api</p>
        </div>
      </div>
    </section>
  )
}
