import HeadPage from "./HeadPage/HeadPage";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-[#0e0e0e] relative text-[#eceae5] pt-3 font-[Neue]">
        <Nav/>
        <h1 className="font-[Socilo] text-[6.5rem] leading-none pt-10 text-center">
         Club
        </h1>
      </div>

      {/*  removed the leader component (HeadPage.js) from home page */}

    </>
  );
}
