import { ContentBand } from "@/components/primitives/content-band";
import { PageContainer } from "@/components/primitives/page-container";
import { SectionContainer } from "@/components/primitives/section-container";
import { SectionHeading } from "@/components/primitives/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage?: string;
  variant?: "default" | "immersive";
};

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  variant = "default",
}: PageHeroProps) {
  if (variant === "immersive") {
    return (
      <section className="relative -mt-[var(--header-height)] min-h-[100svh] overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-[position:74%_center] md:bg-[position:70%_center] lg:bg-[position:66%_center]"
          style={{ backgroundImage: `url('${backgroundImage ?? ""}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,8,7,0.28),rgba(5,9,8,0.34),rgba(7,10,9,0.5))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,7,0.76)_0%,rgba(4,9,7,0.64)_42%,rgba(4,9,8,0.3)_68%,rgba(4,8,8,0.14)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent" />

        <div className="relative z-10 flex min-h-[100svh] items-start px-5 pt-[calc(var(--header-height)+4.2rem)] pb-20 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-[860px] section-rhythm">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              titleAs="h1"
              titleClassName="max-w-[850px] text-balance text-[clamp(3rem,6.4vw,6.6rem)] leading-[0.92] tracking-[-0.07em] font-semibold text-white"
              descriptionClassName="max-w-[680px] text-[1.05rem] leading-7 text-white/80"
              className="section-rhythm"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <SectionContainer className="relative -mt-[var(--header-height)] min-h-[100svh] pb-14 pt-[var(--header-height)] sm:pt-[calc(var(--header-height)+1rem)] lg:pt-[calc(var(--header-height)+1.25rem)]">
      <PageContainer className="flex min-h-[calc(100svh-var(--header-height))] items-center">
        <ContentBand
          className={
            backgroundImage
              ? "relative overflow-hidden border-white/12 bg-ink p-7 shadow-[0_34px_120px_-72px_hsl(var(--wc-shadow-color)/0.66)] sm:p-10"
              : "p-7 sm:p-10"
          }
        >
          {backgroundImage ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(102deg,hsl(var(--ink)/0.88)_0%,hsl(var(--ink)/0.78)_46%,hsl(var(--ink)/0.56)_100%)]" />
              <div className="absolute inset-y-0 left-0 w-[62%] bg-[radial-gradient(circle_at_18%_26%,hsl(var(--brand-blue)/0.28),transparent_68%)]" />
            </>
          ) : null}

          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            titleAs="h1"
            titleClassName={
              backgroundImage
                ? "display-title max-w-4xl text-white"
                : "display-title max-w-4xl"
            }
            descriptionClassName={
              backgroundImage
                ? "text-[1.02rem] copy-rhythm text-white/78"
                : "text-[1.02rem] copy-rhythm"
            }
            className={backgroundImage ? "relative z-10 section-rhythm" : "section-rhythm"}
          />
        </ContentBand>
      </PageContainer>
    </SectionContainer>
  );
}
