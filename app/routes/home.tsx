import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "../components/ResumeCard";
import { resumes } from "constants/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMIND" },
    {
      name: "description",
      content: "Resume Analyzer to get you that dream job!",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your application and Resume Ratings</h1>
          <h2>Review your resume with AI powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resume-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
