import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "../components/ResumeCard";
import { resumes } from "constants/index";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

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
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your application and Resume Ratings</h1>
          <h2>Review your resume with AI powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
