"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";

import { PageContainer } from "@/components/primitives/page-container";
import { PremiumButton } from "@/components/primitives/premium-button";
import {
  footerNavigationLinks,
  primaryNavigationLinks,
} from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

function BrandMark() {
  return (
    <Link href="/" className="flex items-center">
      <span className="relative flex h-10 w-10 items-center justify-center lg:h-[58px] lg:w-[58px]">
        <Image
          src="/TOJ.png"
          alt="TOJ Security Training"
          width={58}
          height={58}
          className="h-10 w-10 object-contain lg:h-[58px] lg:w-[58px]"
          priority
        />
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState({ open: false, path: pathname });
  const hasImmersiveHero =
    pathname === "/" ||
    pathname === "/courses" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname.startsWith("/courses/");
  const isImmersiveTop = hasImmersiveHero && !isScrolled;
  const isOpen = menuState.open && menuState.path === pathname;

  const primaryHrefs = primaryNavigationLinks.map((link) => link.href as string);
  const mobileSecondaryLinks = footerNavigationLinks.filter(
    (link) => !primaryHrefs.includes(link.href),
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState((state) => ({ ...state, open: false }));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openMenu = () => setMenuState({ open: true, path: pathname });
  const closeMenu = () => setMenuState((state) => ({ ...state, open: false }));

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50">
      <div
        className={cn(
          "pointer-events-auto border-b transition-all duration-premium ease-premium",
          isScrolled
            ? "-translate-y-full border-transparent opacity-0"
            : "translate-y-0 opacity-100",
          isImmersiveTop
            ? "border-transparent bg-transparent"
            : "border-line/80 bg-canvas/88 shadow-[0_16px_44px_-36px_hsl(var(--wc-shadow-color)/0.45)] backdrop-blur-md",
        )}
      >
        <PageContainer className="flex min-h-[88px] items-center justify-between gap-7 lg:gap-10">
          <BrandMark />

          <nav className="hidden items-center gap-9 lg:flex">
            {primaryNavigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-semibold transition-colors duration-premium ease-premium",
                  isImmersiveTop ? "text-white/82 hover:text-white" : "text-ink-muted hover:text-ink",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-premium ease-premium group-hover:scale-x-100",
                    isImmersiveTop ? "bg-white/80" : "bg-ink/85",
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <PremiumButton
              tone={isImmersiveTop ? "primary" : "secondary"}
              nativeButton={false}
              compact
              className={
                isImmersiveTop
                  ? "border border-white/16 bg-white/[0.085] text-white shadow-[0_14px_38px_-30px_hsl(var(--wc-shadow-color)/0.48)] backdrop-blur-md hover:bg-white/14"
                  : ""
              }
              render={<a href={`tel:${siteConfig.contact.phonePrimaryHref}`} />}
            >
              <PhoneCall className="size-4" />
              Call TOJ
            </PremiumButton>
            <PremiumButton
              nativeButton={false}
              className={cn(
                isImmersiveTop
                  ? "bg-white text-ink shadow-none hover:bg-brand-blue hover:text-white"
                  : "",
              )}
              render={<Link href="/contact" />}
            >
              Enquire Now
            </PremiumButton>
          </div>

          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-[0_14px_38px_-30px_hsl(var(--wc-shadow-color)/0.48)] backdrop-blur-md transition-colors duration-premium ease-premium lg:hidden",
              isImmersiveTop
                ? "border-white/16 bg-white/[0.085] text-white hover:bg-white/14"
                : "border-line/80 bg-canvas/86 text-ink hover:bg-canvas-subtle",
            )}
          >
            <Menu className="size-[18px]" />
          </button>
        </PageContainer>
      </div>

      <button
        type="button"
        onClick={openMenu}
        aria-label="Open menu"
        className={cn(
          "pointer-events-auto fixed right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/10 bg-[hsl(var(--ink)/0.9)] text-white shadow-[0_18px_50px_-34px_hsl(var(--wc-shadow-color)/0.82)] backdrop-blur-md transition-all duration-premium ease-premium hover:bg-[hsl(var(--ink)/0.98)]",
          isScrolled && !isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <Menu className="size-[18px]" />
      </button>

      {isOpen ? (
        <div className="pointer-events-auto fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full cursor-default bg-slate-950/68 backdrop-blur-sm"
          />

          <div className="absolute inset-y-0 right-0 flex w-full justify-end">
            <section className="relative flex h-full w-full flex-col overflow-hidden border-l border-white/10 bg-[hsl(var(--ink)/0.98)] text-white shadow-[0_34px_120px_-54px_hsl(var(--brand-blue)/0.38)] sm:w-[min(100%,24rem)] sm:rounded-l-[1.35rem]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <Link href="/" className="inline-flex items-center gap-3">
                  <span className="relative flex h-10 w-10 items-center justify-center">
                    <Image
                      src="/TOJ.png"
                      alt="TOJ Security Training"
                      width={40}
                      height={40}
                      sizes="40px"
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-white/88">
                    TOJ Security Training
                  </span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.045] text-white/80 transition-colors duration-premium ease-premium hover:bg-white/[0.09] hover:text-white"
                >
                  <X className="size-[18px]" />
                </button>
              </div>

              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue/82">
                  Navigation
                </p>

                <nav className="mt-5 flex flex-col">
                  {primaryNavigationLinks.map((link) => (
                    <Link
                      key={`primary-${link.href}`}
                      href={link.href}
                      className="group border-b border-white/10 py-3 text-[1.35rem] font-semibold leading-none tracking-[-0.045em] text-white transition-colors duration-premium ease-premium hover:text-white/90"
                    >
                      {link.label}
                      <span className="mt-2 block h-px w-full origin-left scale-x-50 bg-white/35 transition-transform duration-premium ease-premium group-hover:scale-x-100" />
                    </Link>
                  ))}
                </nav>

                <div className="mt-4 space-y-2">
                  {mobileSecondaryLinks.slice(0, 4).map((link) => (
                    <Link
                      key={`secondary-${link.href}`}
                      href={link.href}
                      className="block text-sm font-semibold text-white/58 transition-colors duration-premium ease-premium hover:text-white/84"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto grid gap-2.5 pt-7">
                  <PremiumButton
                    tone="secondary"
                    nativeButton={false}
                    className="w-full border-white/16 bg-white/[0.06] text-white hover:bg-white/[0.11]"
                    render={<a href={`tel:${siteConfig.contact.phonePrimaryHref}`} />}
                  >
                    Call TOJ
                  </PremiumButton>
                  <PremiumButton
                    nativeButton={false}
                    className="w-full bg-white text-ink hover:bg-brand-blue hover:text-white"
                    render={<Link href="/contact" />}
                  >
                    Enquire Now
                  </PremiumButton>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </header>
  );
}
