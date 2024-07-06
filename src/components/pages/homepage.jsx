import Footer from "../footer";
import NavBar from "../navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[100px] items-center">
      <NavBar />
      <Footer />
    </div>
  );
}

export default HomePage;