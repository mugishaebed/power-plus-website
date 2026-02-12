import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.about,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  // Build gallery layout: first image is hero, rest fill the grid
  const heroImage = project.gallery[0];
  const sideImages = project.gallery.slice(1, 4);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Back link */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#F07C21] transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>

        {/* Project title */}
        <h1 className="text-[#F07C21] text-3xl md:text-4xl font-semibold mb-8">
          {project.name}
        </h1>

        {/* Image gallery */}
        {project.gallery.length >= 4 ? (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {/* Large hero image spanning left column, 2 rows */}
            <div className="col-span-1 row-span-2 relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={heroImage}
                alt={`${project.name} - Main`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            {/* Top right two images */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={sideImages[0]}
                alt={`${project.name} - Detail 1`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={sideImages[1]}
                alt={`${project.name} - Detail 2`}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
            {/* Bottom wide image spanning 2 columns */}
            <div className="col-span-2 relative aspect-[2/1] rounded-lg overflow-hidden">
              <Image
                src={sideImages[2]}
                alt={`${project.name} - Detail 3`}
                fill
                className="object-cover"
                sizes="66vw"
              />
            </div>
          </div>
        ) : (
          /* Single image fallback */
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={heroImage}
              alt={project.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#3A5A40] text-white text-sm px-5 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify mb-10">
          {project.description}
        </p>

        {/* End marker */}
        <p className="text-gray-700 text-base">End.</p>
      </div>
    </div>
  );
}
