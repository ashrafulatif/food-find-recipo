import RecipeCategory from "@/components/RecipeCategory/RecipeCategory";
import Hero from "../components/Hero/Hero";
import RecipesList from "../components/Recipes/RecipesList";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecipeCategory />
      <RecipesList />
      <Testimonial />
    </div>
  );
}
export const metadata = {
  title: "Tailus Feedus || Home",
  description: "Welcome to our recipe app, where culinary adventures begin!",
};
