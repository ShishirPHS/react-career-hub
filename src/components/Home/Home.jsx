import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#9873ff0d]">
        <div className="container mx-auto">
          <Banner></Banner>
        </div>
      </div>
      <CategoryList></CategoryList>
      <div className="container mx-auto">
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
