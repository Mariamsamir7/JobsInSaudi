import HeroSection from '../components/HeroSection';
import Jobs from "../components/JobCategories";
import CompaniesSlider from "../components/CompaniesSlider";
import JobCategorySlider from "../components/JobCategorySlider";
function Home() {
  return (
    <main >
      <div className="d-none d-md-block">
        <HeroSection />
      </div>
      <Jobs />
      <CompaniesSlider />
      <JobCategorySlider />
    </main>
  );
}

export default Home;
