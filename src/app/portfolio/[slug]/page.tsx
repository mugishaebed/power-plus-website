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
          <>
            {/* Mobile: stacked layout */}
            <div className="flex flex-col gap-2 mb-8 rounded-2xl overflow-hidden md:hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.gallery[0]}
                  alt={`${project.name} - 1`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.slice(1, 4).map((img, i) => (
                  <div key={i} className="relative aspect-square">
                    <Image
                      src={img}
                      alt={`${project.name} - ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: bento grid */}
            <div className="hidden md:grid grid-cols-2 gap-2 mb-8 rounded-2xl overflow-hidden">
              <div className="row-span-2 relative h-[520px]">
                <Image
                  src={project.gallery[0]}
                  alt={`${project.name} - 1`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="relative h-[256px]">
                <Image
                  src={project.gallery[1]}
                  alt={`${project.name} - 2`}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 h-[256px]">
                <div className="relative">
                  <Image
                    src={project.gallery[2]}
                    alt={`${project.name} - 3`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative">
                  <Image
                    src={project.gallery[3]}
                    alt={`${project.name} - 4`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
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
